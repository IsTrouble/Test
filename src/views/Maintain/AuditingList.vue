<!-- <template lang="jade">
	div.layout-content-main
		div
			Form(ref='form', label-position='left', :label-width='100' @keydown.enter.native.prevent="search()")
				Row(:gutter=5)
					Col(span="2")
						Select.smr(v-model='show.type', style='width:100%;', :placeholder='$t("maintenance type")', @on-change='search()')
							Option(key='1', :label="$t('all')", value='all')
							Option(key='2', :label="$t('fault')", value='1')
							Option(key='3', :label="$t('maintain')", value='2')
							Option(key='4', :label="$t('check')", value='3')
					Col(span="2")
						Select.smr(v-model='show.device_type', style='width:100%;', :placeholder='$t("device type")', @on-change='search()')
							Option(key='1', :label="$t('all')", value='all')
							Option(key='2', :label="$t('door')", value='door')
							Option(key='3', :label="$t('ctrl')", value='ctrl')
					Col(span="2")
						Select.smr(v-model='show.list_type', style='width:100%;', :placeholder='$t("type")', @on-change='getList()')
							Option(key='2', :label="$t('order auditing')", value='order')
							Option(key='3', :label="$t('dispatch auditing')", value='dispatch')
					Col(span="4")
						Input(v-model="options.search_info" ,:data="menu" ,:placeholder='$t("device name")+"、"+$t("install address")' max=15)
					Col(span="5")
						Button.mr-10(type='primary', icon='ios-search', @click='search()')|{{$t('search')}}
						Button(type='default', icon='', @click='code()')|{{$t('fault code')}}
		el-dialog(:title='$t("tip")', :visible.sync='ctrl', width='30%')
			img#c(width='100%', src='')
			span.dialog-footer(slot='footer')
				Button(type='primary', @click='ctrl = false') {{$t('OK')}}
		el-dialog(:title='$t("tip")', :visible.sync='door', width='30%')
			img#d(width='100%', src='')
			span.dialog-footer(slot='footer')
				Button(type='primary', @click='door = false') {{$t('OK')}}
		div(style='min-height: 450px; margin-top: 20px;')
			Table.mb-10(:columns='columns', :data='list' stripe, size='small')
		Col(span="24" style="text-align:center;")
			page.fonts(show-elevator='', :total='totalNumber', :page-size='options.num', :current='options.page', @on-change='pageChange', show-total='')
</template> -->
<template lang="jade">
	div.layout-content-main(style='background:#f5f3f0')
		div.panel
			section.panel-title
				img(:src="icon")
				b(v-text="title")
			section.panel-content
				slot(name='content')
			div(slot='content')
				section.list-search
					el-form(:inline="true",:ref="form",@keydown.enter.native.prevent="search()")
						el-form-item
							el-select(v-model="show.type",:placeholder="$t('maintenance type')",@change="search()")
								el-option(key="1",:label="$t('all')",value="all")
								el-option(key="2",:label="$t('fault')",value="1")
								el-option(key="3",:label="$t('maintain')",value="2")
								el-option(key="4",:label="$t('check')",value="3")
						el-form-item
							el-select(v-model="show.device_type",:placeholder="$t('device type')",@change="search()")
								el-option(key="1",:label="$t('all')",value="all")
								el-option(key="2",:label="$t('door')",value="door")
								el-option(key="3",:label="$t('ctrl')",value="ctrl")
						el-form-item
							el-select(v-model="show.list_type",:placeholder="$t('type')",@change="getList()")
								el-option(key="2",:label="$t('order auditing')",value="order")
								el-option(key="3",:label="$t('dispatch auditing')",value="dispatch")
						el-form-item
							el-input(v-model="options.search_info",:data="menu",:placeholder="$t('device name')+'、'+$t('install address')",max=15)
						el-form-item
							el-button(type="primary",icon="el-icon-search",@click="search()")|{{$t('search')}}
							el-button(icon="el-icon-refresh-right",@click="code()")|{{$t('fault code')}}
			section.list-content.clearfix
				el-dialog(:title="$t('tip')",:visible.sync="ctrl",width="30%")
					img#c(scr="",width="100%")
					span.dialog-footer(slot="footer")
						el-button(type="primary",@click="ctrl=false")|{{$t('OK')}}
				el-dialog(:title="$t('tip')",:visible.sync="door",width="30%")
					img#d(src="",width="100%")
					span.dialog-footer(slot="footer")
						el-button(type="primary",@click="door=false")|{{$t('OK')}}
				el-table(:data="list",border,stripe,:header-cell-style="{'background-color': '#e4e4e4','color': '#4d4d4d'}",empty-text="暂无数据",style="width:100%")
					el-table-column(prop="device_name",:label="$t('device name')")
					el-table-column(prop="IMEI",:label="$t('IMEI')",:sortable="true")
					el-table-column(prop="device_type",:label="$t('device type')")
						template(slot-scope="scope")
							div|{{$t(scope.row.device_type)}}
					el-table-column(prop="type",:label="$t('maintenance type')")
						template(slot-scope="scope")
							el-tag(size="medium",:type="scope.row.mystatus.class")|{{scope.row.mystatus.text}}
					el-table-column(prop="producer",:label="$t('creator')",:sortable="true")
					el-table-column(prop="type",:label="$t('fault code')")
						template(slot-scope="scope")
							el-button(@click="codeclick(scope)")|{{scope.row.Ecode}}
					el-table-column(width="300",prop="install_addr",:label="$t('install address')")
					el-table-column(prop="remarks",:label="$t('remarks')")
					el-table-column(prop="createTime",:label="$t('create time')")
						template(slot-scope="scope")
							div|{{scope.row.mycreateTime}}
					el-table-column(fixed="right",:label="$t('handle')",width="100")
						template(slot-scope="scope")
							el-button(type="info",icon="el-icon-edit",circle size="small",@click='handleclick(scope)')
				el-pagination(class="pageclass",background,layout="prev, pager, next",:total="totalNumber",@current-change='pageChange')		
</template>
<!-- <template>
	<div class="layout-content-main" style="background:#f5f3f0">
		<div class="panel border">
		  <section class="panel-title">
		    <img :src="icon" alt="">
		    <b v-text="title"></b>
		  </section>
		  <section class="panel-content">
		    <slot name="content">
				<div slot="content">
					<section class="list-search">
						<el-form :inline="true" :model="searchForm" ref="form" @keydown.enter.native.prevent="search()">
							<el-form-item label="维保类型：">
								<el-select v-model="show.type" :placeholder='$t("maintenance type")' @change='search()'>
									<el-option key='1' :label="$t('all')" value='all'></el-option>
									<el-option key='2' :label="$t('fault')" value='1'></el-option>
									<el-option key='3' :label="$t('maintain')" value='2'></el-option>
									<el-option key='4' :label="$t('check')" value='3'></el-option>
								</el-select>
							</el-form-item>
							<el-form-item label="设备类型：">
								<el-select v-model="show.device_type" :placeholder='$t("device type")' @change='search()'>
									<el-option key='1' :label="$t('all')" value='all'></el-option>
									<el-option key='2' :label="$t('door')" value='door'></el-option>
									<el-option key='3' :label="$t('ctrl')" value='ctrl'></el-option>
								</el-select>
							</el-form-item>
							<el-form-item label="审核方式：">
								<el-select v-model="show.list_type" :placeholder='$t("type")' @change='getList()'>
									<el-option key='2' :label="$t('order auditing')" value='order'></el-option>
									<el-option key='3' :label="$t('dispatch auditing')" value='dispatch'></el-option>
								</el-select>
							</el-form-item>
							<el-form-item>
								<el-input v-model="options.search_info" :data="menu" :placeholder='$t("device name")+"、"+$t("install address")' max=15></el-input>
							</el-form-item>
							<el-form-item>
								<el-button type="primary" icon="el-icon-search" @click='search()'>{{$t('search')}}</el-button>
								<el-button icon="el-icon-refresh-right" @click='code()'>{{$t('fault code')}}</el-button>
							</el-form-item>
						</el-form>
					</section>
				</div>
			</slot>
		  </section>
		  <section class="list-content clearfix">
		<el-dialog :title='$t("tip")' :visible.sync='ctrl' width='30%'>
			<img id="c" src="" width='100%'>
			<span class="dialog-footer" slot='footer'>
				<el-button type='primary' @click='ctrl = false'>{{$t('OK')}}</el-button>
			</span>
		</el-dialog>
		<el-dialog :title='$t("tip")' :visible.sync='door' width='30%'>
			<img id="d" src="" width='100%'>
			<span class="dialog-footer" slot='footer'>
				<el-button type='primary' @click='door = false'>{{$t('OK')}}</el-button>
			</span>
		</el-dialog>
		  <el-table
		  :data="list"
		  border
		  stripe
		  :header-cell-style="{
			'background-color': '#e4e4e4',
			'color': '#4d4d4d',
			'border-bottom': '1px #4d4d4d solid'
		  }"
		  empty-text="暂无数据"
		  style="width: 100%">
		  <el-table-column
		    prop="device_name"
		    :label="$t('device name')">
		  </el-table-column>
		  <el-table-column
		    prop="IMEI"
		    :label="$t('IMEI')"
			:sortable="true">
		  </el-table-column>
		  <el-table-column
		    prop="device_type"
		    :label="$t('device type')">
			<template slot-scope="scope">
				  <div>{{$t(scope.row.device_type)}}</div>
			</template>
		  </el-table-column>
		  <el-table-column
		    prop="type"
		    :label="$t('maintenance type')">
			<template slot-scope="scope">
				  <el-tag size="medium" :type="scope.row.mystatus.class">{{scope.row.mystatus.text}}</el-tag>
			</template>
		  </el-table-column>
		  <el-table-column
		    prop="producer"
		    :label="$t('creator')"
			:sortable="true">
		  </el-table-column>
		   <el-table-column
		    prop="type"
		    :label="$t('fault code')">
			<template slot-scope="scope">
				  <el-button @click='codeclick(scope)'>{{scope.row.Ecode}}</el-button>
			</template>
		  </el-table-column>
		  <el-table-column
			width="300"
		    prop="install_addr"
		    :label="$t('install address')">
		  </el-table-column>
		  <el-table-column
		    prop="remarks"
		    :label="$t('remarks')">
		  </el-table-column>
		  <el-table-column
		    prop="createTime"
		    :label="$t('create time')">
			<template slot-scope="scope">
				<div>{{scope.row.mycreateTime}}</div>
			</template>
		  </el-table-column>
		  <el-table-column
		    fixed="right"
		    label="$t('handle')"
		    width="100">
		    <template slot-scope="scope">
		      <el-button type="info" icon="el-icon-edit" circle size="small" @click='handleclick(scope)'></el-button>
		    </template>
		  </el-table-column>
		</el-table>
		<el-pagination
		  class="pageclass"
		  background
		  layout="prev, pager, next"
		  :total="totalNumber"
		  @current-change='pageChange'>
		</el-pagination>
		  </section>
		</div>
	</div>
</template> -->
<script>
	const STATUS={
		1: { text: '故障', class: 'danger' },
		2: { text: '保养', class: 'success' },
		3: { text: '校检', class: 'info' },
	}
	export default {
		  props: {
		  title: {
		    type: String,
		    default: '审核列表'
		  }
		},
		data() {
			return {
				icon: require("../../assets/icons/audit.png"),
				ctrl: false,
				door: false,
				last: true,
				color: [false, false, false, false, false, false],
				col: ['green', 'red', 'yellow', 'blue', 'gray', 'black'],
				menu: [],
				list:[],
				totalNumber:0,
				show: {
					state: 'untreated',
					type: 'all',
					device_type: 'all',
					list_type:'order',
				},
				options:{
					search_info: '',
					page: 1,
					num: 10,
					isreg: "True",
					state:'examined',
					type: '',
					device_type: '',
					device_id: '',
					islast: 1,
				},
				columns: [{
						title: this.$t('device name'),
						width: 110,
						key: 'device_name'
					}, {
						title: this.$t('IMEI'),
						width: 150,
						key: 'IMEI',
						sortable: true
					}, {
						title: this.$t('device type'),
						width: 110,
						key: 'device_type',
						render: (h, params) => {
							var type = ''
							if (params.row.device_type == "ctrl") type = this.$t('ctrl')
							if (params.row.device_type == "door") type = this.$t('door')
							return h('div', type)
						},
					}, {
						title: this.$t('maintenance type'),
						width: 140,
						key: 'type',
						render: (h, params) => {
							var type = ''
							if (params.row.type == "1") type = this.$t('fault')
							if (params.row.type == "2") type = this.$t('maintain')
							if (params.row.type == "3") type = this.$t('check')
							return h('div', type)
						}
					}, {
						title: this.$t('creator'),
						width: 95,
						key: 'producer',
						sortable: true
					}, {
						title: this.$t('fault code'),
						width: 100,
						key: 'type',
						render: (h, params) => {
							var type = ''
							var e = ''
							if ((params.row.type == '1') && (params.row.code != null)) {
								type = params.row.code.toString(16)
								if (type.length == 1) {
									type = '0' + type
								}
								e = 'E' + type
							}
							return h('div', [
								h('Button', {
									props: {
										type: 'text',
										size: "small",
									},
									style: {
										paddingRight: '4px',
										paddingLeft: '4px',
									},
									on: {
										click: () => {
											if (params.row.device_type == "ctrl") {
												setTimeout(() => {
													document.getElementById('c').src = '../../../static/c' + type + '.png'
												}, 200)
												this.ctrl = true
											}
											if (params.row.device_type == "door") {
												setTimeout(() => {
													document.getElementById('d').src = '../../../static/d' + type + '.png'
												}, 200)
												this.door = true
											}
										}
									}
								},e)
							],)
						}
					},
					{
						title: this.$t('install address'),
						key: 'install_addr'
					},{
						title: this.$t('remarks'),
						key: 'remarks'
					},
					{
						title: this.$t('create time'),
						key: 'createTime',
						render: (h, params) => {
							return h('p', this.$format(parseInt(params.row.createTime), 'YYYY-MM-DD HH:mm:ss'))
						}
					},
					{
						title: this.$t('handle'),
						width: 100,
						render: (h, params) => {
							return h('div', [
								h('Button', {
									props: {
										type: 'primary',
										size: "small",
									},
									style: {
										marginRight: '10px',
									},
									on: {
										click: () => {
											if(this.show.list_type=="dispatch"){
												this.$router.push({
													name: 'dispatchadopt',
													params: {
														id: params.row.id
													}
												})
											}else{
												this.$router.push({
													name: 'orderadopt',
													params: {
														id: params.row.id
													}
												})
											}
										},
									}
								},this.$t('watch')),
							])
						}
					}
				],
			}

		},
		created() {
			this.getData()
		},
		methods: {
			getList(){
				if(this.show.list_type=='order'){
					this.getData()
				}else{
					this.getDipatch()
				}
			},
			async getData(){
				if(this.show.type == "all"){
					this.options.type = ""
				}else{
					this.options.type = this.show.type
				}
				if(this.show.device_type == "all"){
					this.options.device_type = ""
				}else{
					this.options.device_type = this.show.device_type
				}
				let res = await this.$api.fault(this.options)
				if(res.data.code==0){
					for (var i = 0; i < res.data.data.list.length; i++) {
						var ech = await this.$api.devices({
							device_id: res.data.data.list[i].device_id,
							num: 10,
							page: 1
						})
						if (ech.data.data.list.length == 1) {
							res.data.data.list[i].device_name = ech.data.data.list[0].device_name
							res.data.data.list[i].IMEI = ech.data.data.list[0].IMEI
							res.data.data.list[i].cell_address = ech.data.data.list[0].cell_address
							res.data.data.list[i].ipaddr = ech.data.data.list[0].ip_country + ech.data.data.list[0].ip_region + ech.data.data
								.list[0].ip_city
							res.data.data.list[i].install_addr = ech.data.data.list[0].install_addr
						}
						ech = await this.$api.runtime({
							page: 1,
							num: 20,
							type: 8195,
							device_id: res.data.data.list[i].device_id
						})
					}
					this.list = res.data.data.list
					this.list.forEach(item=>{
						item.mystatus = STATUS[item.type]
						
					})
					this.list.forEach(item=>{
						if((item.type=="1")&&(item.code!=null)){
							item.mycode=item.code.toString(16)
							if(item.mycode.length==1){
								item.mycode='0'+item.mycode
							}
							item.Ecode='E'+item.mycode
						}
					})
					this.list.forEach(item=>{
						item.mycreateTime=this.$format(parseInt(item.createTime), 'YYYY-MM-DD HH:mm:ss')
					})
					 this.options.total = res.data.data.totalNumber
					this.totalNumber = res.data.data.totalNumber
				}
			},
			async getDipatch(){
				if (this.show.type == "all") {
					this.options.type = ""
				}else{
					this.options.type = this.show.type
				}
				if(this.show.device_type == "all"){
					this.options.device_type = ""
				}else{
					this.options.device_type = this.show.device_type
				}
				let res = await this.$api.getRepair(this.options)
				if(res.data.code==0){
					for (var i = 0; i < res.data.data.list.length; i++) {
						var ech = await this.$api.devices({
							device_id: res.data.data.list[i].device_id,
							num: 10,
							page: 1
						})
						if (ech.data.data.list.length == 1) {
							res.data.data.list[i].device_name = ech.data.data.list[0].device_name
							res.data.data.list[i].IMEI = ech.data.data.list[0].IMEI
							res.data.data.list[i].cell_address = ech.data.data.list[0].cell_address
							res.data.data.list[i].ipaddr = ech.data.data.list[0].ip_country + ech.data.data.list[0].ip_region + ech.data.data
								.list[0].ip_city
							res.data.data.list[i].install_addr = ech.data.data.list[0].install_addr
						}
						ech = await this.$api.runtime({
							page: 1,
							num: 20,
							type: 8195,
							device_id: res.data.data.list[i].device_id
						})
					}
					this.list = res.data.data.list

					this.totalNumber = res.data.data.totalNumber
				}
			},
			pageChange(val) {
				this.options.page = val
				if(this.show.list_type=='order'){
					this.getData()
				}else{
					this.getDipatch()
				}
			},
			async search() {
				this.options.page = 1
				if(this.show.list_type=='order'){
					this.getData()
				}else{
					this.getDipatch()
				}
			},
			async codeclick(scope){
				if(scope.row.device_type=="ctrl"){
					setTimeout(() => {
						document.getElementById('c').src = '../../../static/c' + scope.row.mycode + '.png'
					}, 200)
					this.ctrl = true
				}
				if(scope.row.device_type=="door"){
					setTimeout(() => {
						document.getElementById('d').src = '../../../static/d' + scope.row.mycode + '.png'
					}, 200)
					this.door = true
				}
			},
			async handleclick(scope){
				if(this.show.list_type=="dispatch"){
					this.$router.push({
						name: 'dispatchadopt',
						params: {
						id: scope.row.id
						}
					})
				}else{
					this.$router.push({
						name: 'orderadopt',
						params: {
						id: scope.row.id
						}
					})
				}
			},
			code() {
				this.$router.push({
					name: 'ctrlcode',
					params: {}
				})
			},
		}

	}
</script>

<style lang="scss" scoped>
	.box-header {
		font-size: 20px;
	}

	.el-row {
		margin-bottom: 20px;
	}

	.grid-content {
		display: flex;
		align-items: center;
		height: 100px;
	}

	.grid-cont-right {
		flex: 1;
		text-align: center;
		font-size: 14px;
		color: #999;
	}

	.grid-num {
		font-size: 30px;
		font-weight: bold;
	}

	.grid-con-icon {
		font-size: 50px;
		width: 100px;
		height: 100px;
		text-align: center;
		line-height: 100px;
		color: #fff;
	}

	.click {
		cursor: pointer;
	}

	.grid-con-1 .grid-con-icon {
		background: rgb(45, 140, 240);
	}

	.grid-con-1 .grid-num {
		color: rgb(45, 140, 240);
	}

	.grid-con-2 .grid-con-icon {
		background: rgb(100, 213, 114);
	}

	.grid-con-2 .grid-num {
		color: rgb(145, 40, 240);
	}

	.grid-con-3 .grid-con-icon {
		background: rgb(242, 94, 67);
	}

	.grid-con-3 .grid-num {
		color: rgb(242, 94, 67);
	}

	.user-info {
		display: flex;
		align-items: center;
		padding-bottom: 20px;
		border-bottom: 2px solid #ccc;
		margin-bottom: 20px;
	}

	.user-avator {
		width: 120px;
		height: 120px;
		border-radius: 50%;
	}

	.user-info-cont {
		padding-left: 50px;
		flex: 1;
		font-size: 14px;
		color: #999;
	}

	.user-info-cont div:first-child {
		font-size: 30px;
		color: #222;
	}

	.user-info-list {
		font-size: 14px;
		color: #999;
		line-height: 25px;
	}

	.user-info-list span {
		margin-left: 70px;
	}

	.mgb20 {
		margin-bottom: 20px;
	}

	.todo-item {
		font-size: 14px;
	}

	.todo-item-del {
		text-decoration: line-through;
		color: #999;
	}

	.schart {
		width: 95%;
		height: 300px;
	}

	.pagination {
		position: absolute;
		margin-left: 30%;
		margin-top: 3%;
	}
	.fonts{
		font-size: 12px;
	}
.panel {
  background: #ffffff;
  padding: 18px 30px 18px 18px;
  box-shadow: 0 0 4px rgba(232, 237, 250, .6);
}
.panel-title {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;
  padding-bottom: 20px;
  .iconfont {
    color: #1296db;
    font-size: 24px;
    font-weight: bold;
    margin-right: 12px;
  }
  b {
	margin-left:12px;
    font-size: 16px;
    color: #333333;
  }
}
.panel-content {
  margin-left: 36px;;
}
.pageclass{
	margin-top:20px; 
	float: right
}
</style>
