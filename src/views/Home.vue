<template>
	<el-container class="Content">
	  <el-aside class="content-nav" :width="asideWidth">
	    <div class="content-logo">
	      <img src="../assets/images/logo1.png" alt="logo" >
	      <h2 v-show="!isCollapse">宁波申菱</h2>
	    </div>
	<!--   <Menu :collapse="isCollapse"/> -->
		<el-menu  :collapse="isCollapse" background-color="#f8f8f8" text-color="#292929" active-text-color="#2dbe60" class="el-menu-vertical" @select="go" :active-name="active">
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                           <img id="myimg" :src="item.icon" alt=""><span slot="title">{{$t(isCollapsed?'':item.title.toString())}}</span>
						   <div class="imgcircle" style="background-color: #f8f8f8;height: 40px; width: 40px; border-radius: 100%;margin-top: -47px; margin-left: -8px;"></div>
                        </template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.name">
                            {{$t(isCollapsed?'':subItem.title.toString())}}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                      <img id="myimg" :src="item.icon" alt=""><span slot="title">{{$t(isCollapsed?'':item.title.toString())}}</span>
					  <div class="imgcircle" style="background-color: #f8f8f8;height: 40px; width: 40px; border-radius: 100%;margin-top: -47px; margin-left: -8px;"></div>
                    </el-menu-item>
                </template>
            </template>
		</el-menu>
		<div style="border-top: #ececec 3px solid;">
		<el-menu background-color="#f8f8f8" text-color="#292929" active-text-color="#2dbe60" class="el-menu-vertical" style="padding-top: 10px;" :collapse="isCollapse" @select="changelang">
			<el-submenu index="1">
				<template slot="title">
					<div>
						<img id="myimg" class="img-language" src="../assets/icons/language.png">
						<div class="imgcircle" style="background-color: #f8f8f8;height: 40px; width: 40px; border-radius: 100%;margin-top: -47px; margin-left: -8px;"></div>
					</div>
				</template>
				<el-menu-item index="1">中文</el-menu-item>
				<el-menu-item index="2">English</el-menu-item>
			</el-submenu>
		</el-menu>
		</div>
		<div class="myacount">
			<el-tooltip class="item" effect="dark" content="account" placement="left">
			<el-popover
				placement="right"
				width="300"
				trigger="click">
				<div class="pophead">
					<img :src="portrait" class="img-circle2">
					<p style="margin-top: 10px;">{{info.nickname}}</p>
				</div>
				<hr>
				<div class="popmain">
					<el-menu
						class="mymenu"
						@select="logout">
						<el-menu-item index="4" class="menu-item">
							<img src="../assets/icons/personal.png">
							<span>{{$t("Personal Information")}}</span>
						</el-menu-item>
						<el-menu-item index="6" class="menu-item">
							<img src="../assets/icons/lock.png">
							<span slot="title">{{$t("Change Password")}}</span>
						</el-menu-item>
						<el-menu-item index="5" class="menu-item">
							<img src="../assets/icons/config.png">
							<span slot="title">{{$t("WeChat Follow")}}</span>
						</el-menu-item>
						<el-menu-item index="3" class="menu-item">
							<img src="../assets/icons/logout.png">
							<span slot="title">{{$t("Logout")}}</span>
						</el-menu-item>
					</el-menu>
				</div>
				<img slot="reference" :src="portrait" class="img-circle">
			</el-popover>
			</el-tooltip>
		 </div>
	  </el-aside>
	  <el-container>
<!-- 	    <el-header class="content-header">
	      <h2 v-show="isCollapse">{{$t('宁波申菱')}}</h2>
	      <el-button size="mini" type="text">
	        <i :class="['iconfont', menuIcon]"></i>
	      </el-button>
	      <el-dropdown @command="logout">
	        <span class="el-dropdown-link">
				<img :src="portrait" class="img-circle" alt="User Image" onerror="src='../../static/admin.jpg'">
	          <el-button type="text">{{info.nickname}}</el-button>
	          <i class="el-icon-arrow-down el-icon--right"></i>
	        </span>
	        <el-dropdown-menu slot="dropdown">
	          <el-dropdown-item command="4">{{$t("Personal Information")}}</el-dropdown-item>
	          <el-dropdown-item command="6">{{$t("Change Password")}}</el-dropdown-item>
			  <el-dropdown-item command="5">{{$t("WeChat Follow")}}</el-dropdown-item>
	          <el-dropdown-item command="3">{{$t("Logout")}}</el-dropdown-item>
	        </el-dropdown-menu>
	      </el-dropdown>
	    </el-header> -->
	    <el-main :style="{padding: '0 4px 4px',position:'relative',minHeight: '91vh',background:bgColor}">
	    <div class="layout-content-main">
	    	<transition name="fade">
	    		<router-view></router-view>
	    	</transition>
	    </div>
	    </el-main>
	  </el-container>
	</el-container>
</template>

<script>
	import bus from './bus';
	import Vue from "vue";
	export default {
		data() {
			const validateOldPassCheck = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请再次输入密码'));
				} else if (value !== this.password.password) {
					callback(new Error('两次输入密码不一致!'));
				} else {
					callback();
				}
			};
			return {
				bgColor: '#ececec',
				isCollapse:true,
				bg1:'#367fa9',
				bg2:'#3c8dbc',
				bg3:"dark",
				bottomcolor:"#1e282c",
				fontcolor:"#ffffff",
				full:false,
				quit:false,
				tagsList: [],
				portrait:'../../static/admin.jpg',
				isCollapsed: false,
				modal: false,
				logo:'../assets/logo-menu.png',
				modalType: 0,
				username:this.global.username,
				info: {
					nickname: '',
					phone: ''
				},
				password: {
					oldPassword: '',
					password: ''
				},
				passwordRules: {
					oldPassword: [{
						required: true,
						message: '旧密码不能为空',
						trigger: 'blur'
					},{
						min: 5,
						message: '密码不能少于6个字符',
						trigger: 'blur'
					}],
					password: [{
						required: true,
						message: '新密码不能为空',
						trigger: 'blur'
					},{
						min: 5,
						message: '密码不能少于6个字符',
						trigger: 'blur'
					}],
					confirm: [{
						validator: validateOldPassCheck,
						required: true,
						trigger: 'blur'
					}],
				},
				role: {
					0: '管理员',
				},
				count: null,
				screenwidth:'',
				active: this.$route.path.split('/')[1],
				menu: [{
					name: 'dashboard',
					icon: 'fa fa-dashboard',
					label: 'Dashboard',
					key:false,
				},{
					name: 'menu',
					icon: 'fa fa-map-o',
					label: 'Operation Monitor',
					key:false,
					sub:[{
						name:'map',
						label:'Operation State',
						key:false,
					},{
						name:'laddermap',
						label:'Devices State',
						key:false,
					},]
				},{
					name: 'maintain',
					icon: 'fa fa-cogs',
					label: 'Work Flow',
					key:false,
					sub: [{
						name: 'auditinglist',
						label: 'Examine List',
						key:false,
					},{
						name: 'maintain',
						label: 'Order List',
						key:false,
					},{
						name: 'maintainList',
						label: 'Dispatch List',
						key:false,
					}],
				},{
					name: 'event',
					icon: 'fa fa-list-alt',
					label: 'Basic Information',
					key:false,
					sub: [{
						name: 'alList',
						label: 'Devices Information',
						key:false,
					},{
						name:'evolution',
						label:'Firmware Update',
						key:false,
					},{
						name:'ladder',
						label:'Elevator Information',
						key:false,
					}],
				},{
					name: 'group',
					icon: 'fa fa-group',
					label: 'Group',
					key:true,
					sub: [{
						name:'elevator',
						label:'Elevator Group',
						key:true,
					},{
						name: 'organize',
						label: 'Member Group',
						key:true,
					}],
				},{
					name: 'system',
					icon: 'fa fa-address-card-o',
					label: 'System',
					key:true,
					sub:[{
						name: 'userManage',
						label: 'User Management',
						key:false,
					},{
						name: 'inform',
						label: 'Notification Record',
						key:false,
					},{
						name: 'instructions',
						label: 'Instructions',
						key:true,
					},{
						name: 'authority',
						label: 'Permission Assignment',
						key:false,
					}]
				},{
					name: 'setting',
					icon: 'fa fa-cog',
					label: 'Default Setting',
					key:false,
					sub:[{
						name:'print',
						key:false,
						label:'Print QR Code'
					}],
				},{
					name: 'dashboard2',
					icon: 'fa fa-dashboard',
					label: 'Dashboard2',
					key:true,
				}],
				items: [
				    {
				        icon: require('../assets/icons/dashboard.png'),
				        index: 'dashboard',
				        title: 'Dashboard'
				    },
				    {
				        icon: require('../assets/icons/map.png'),
				        index: 'menu',
				        title: 'Operation Monitor',
						subs:[{
							name:'map',
							title:'Operation State',
						},{
							name:'laddermap',
							title:'Devices State',
						},]
				    },
				    {
				        icon: require('../assets/icons/cogs.png'),
				        index: 'maintain',
				        title: 'Work Flow',
						subs: [{
							name: 'auditinglist',
							title: 'Examine List',
						},{
							name: 'maintain',
							title: 'Order List',
						},{
							name: 'maintainList',
							title: 'Dispatch List',
						}],
				    },
				    {
				        icon: require('../assets/icons/list.png'),
				        index: 'event',
				        title: 'Basic Information',
				        subs: [{
							name: 'alList',
							title: 'Devices Information',
						},{
							name:'evolution',
							title:'Firmware Update',
						},{
							name:'ladder',
							title:'Elevator Information',
						}],
				    },
				    {
				        icon: require('../assets/icons/group.png'),
				        index: 'group',
				        title: 'Group',
						subs: [{
							name:'elevator',
							title:'Elevator Group',
						},{
							name: 'organize',
							title: 'Member Group',
						}],
				    },
				    {
				        icon: require('../assets/icons/card.png'),
				        index: 'system',
				        title: 'System',
						subs:[{
							name: 'userManage',
							title: 'User Management',
						},{
							name: 'inform',
							title: 'Notification Record',
						},{
							name: 'instructions',
							title: 'Instructions',
						},{
							name: 'authority',
							title: 'Permission Assignment',
						}]
				    },
				    {
				        icon: require('../assets/icons/cog.png'),
				        index: 'setting',
				        title: 'Default Setting',
						subs:[{
							name:'print',
							title:'Print QR Code'
						}],
				    },
				    {
				        icon: require('../assets/icons/dashboard.png'),
				        index: 'dashboard2',
				        title: 'Dashboard2'
				    }
				],
				menus:{},
				roles:0,
				lang:'',
			}
		},
		computed: {
			asideWidth: function() { return this.isCollapse ? '70px':'201px'},
			menuIcon: function() { return this.isCollapse ? 'icon-unfold':'icon-fold'},
			menuitemClasses: function() {
				return [
					'menu-item',
					this.isCollapsed ? 'collapsed-menu' : ''
				]
			},
		},
		mounted(){
			window.onresize = () =>{
				document.getElementById('layout').style.width=document.documentElement.clientWidth+'px'
			}
			// window.addEventListener('beforeunload', e => {
			// 	window.localStorage.removeItem('username')
			// });
		},
		async beforeCreate(){
			const val = await this.$api.people({
				id:window.localStorage.getItem('id'),
				num:1,
				page:1,
			})
			this.roles = val.data.data.list[0].role
			window.localStorage.setItem("role",this.roles)
		},
		created(){
			this.getMenu()
			this.screenwidth=document.documentElement.clientWidth*1
			this.getportrait()
			this.getFunction()
		},
		methods: {
			handleOpen(index) {
				alert(index);
			},
			getMenu(){
				this.menus = JSON.parse(window.localStorage.getItem('menu'))
				if(this.menus.dashboard == true){
					this.menu[0].key = true
				}
				if(this.menus.menu == true){
					this.menu[1].key = true
				}
				if(this.menus.map == true){
					this.menu[1].sub[0].key = true
				}
				if(this.menus.laddermap == true){
					this.menu[1].sub[1].key = true
				}
				if(this.menus.auditinglist== true){
					this.menu[2].sub[0].key = true
				}
				if(this.menus.maintain== true){
					this.menu[2].sub[1].key = true
				}
				if(this.menus.maintainlist == true){
					this.menu[2].sub[2].key = true
				}
				if(this.menus.maintainlist == true||this.menus.auditinglist == true||this.menus.maintain == true){
					this.menu[2].key = true
				}
				if(this.menus.allist == true||this.menus.evolution == true||this.menus.ladder == true){
					this.menu[3].key = true
				}
				if(this.menus.allist == true){
					this.menu[3].sub[0].key = true
				}
				if(this.menus.evolution == true){
					this.menu[3].sub[1].key = true
				}
				if(this.menus.ladder == true){
					this.menu[3].sub[2].key = true
				}
				// if(this.menus.user_manage == true){
				// 	this.menu[4].sub[0].key = true
				// }
				// if(this.menus.inform == true){
				// 	this.menu[4].sub[1].key = true
				// }
				// if(this.menus.authority == true){
				// 	this.menu[4].sub[2].key = true
				// }
				if(this.menus.user_manage == true){
					this.menu[5].sub[0].key = true
				}
				if(this.menus.inform == true){
					this.menu[5].sub[1].key = true
				}
				if(this.menus.authority == true){
					this.menu[5].sub[3].key = true
				}
				if(this.menus.print == true){
					this.menu[6].key = true
					this.menu[6].sub[0].key = true
				}
				this.$forceUpdate()
			},
			async getFunction(){
				const res = await this.$api.getFunction({
					page:1,
					num:1,
					id:this.global.roles,
				})
				if(res.data.code == 0){
					this.global.functions = res.data.data.list[0]
				}
			},
			fullscreen(){
				this.full=true
				var el = document.documentElement;
				var rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen;      
                if(typeof rfs != "undefined" && rfs) {
                    rfs.call(el);
                };
			},
			quitfull(){
				this.full=false
				if (document.exitFullscreen) {  
					document.exitFullscreen();  
				}  
				else if (document.mozCancelFullScreen) {  
					document.mozCancelFullScreen();  
				}  
				else if (document.webkitCancelFullScreen) {  
					document.webkitCancelFullScreen();  
				}  
				else if (document.msExitFullscreen) {  
					document.msExitFullscreen();  
				} 
				if(typeof cfs != "undefined" && cfs) {
					cfs.call(el);
				}
			},
			gethome(){
				this.$router.push({
					name:'index'
				})
			},
			show(val){
				if (val == 1){this.quit=true}
				if (val == 2){this.quit=false}
			},
			async changelang(index) {
				this.modalType = parseInt(index)
				switch (parseInt(index)) {
					case 1:
						this.$i18n.locale = 'zh-CN';
						localStorage.setItem('language',this.$i18n.locale)
						this.$router.push(0)
						// Vue.config.lang = 'zh-CN'
						break;
					case 2:
						this.$i18n.locale = 'en-US';
						localStorage.setItem('language',this.$i18n.locale)
						this.$router.push(0)
						// Vue.config.lang = 'en-US'
				}
			},
			async logout(index) {
				this.modalType = parseInt(index)
				switch (parseInt(index)) {
					case 1:
						let user = await this.$api.user(this.$cookie.get('id'))
						this.info = user.data.account.data
						this.modal = true
						break;
					case 2:
						this.modal = true
						break;
						break;
					case 3:
						let res = await this.$api.logout({})
						window.$cookie.delete('id')
						window.$cookie.delete('role')
						window.localStorage.removeItem('id');
						window.localStorage.removeItem('menu');
						// window.localStorage.removeItem('username');
						this.global.username = ''
						this.$router.replace({
							name: 'login'
						})
						break;
					case 4:
						let resp = await this.$api.user({})
						this.$router.push({
							name: 'person'
						})
						break;
					case 6:
						this.$router.push({
							name: 'newpassword'
						})
						break;
					case 5:
						let http = await this.$api.getcode()
						window.location.href= http.data.qrcode.url
				}
			},
			go(name) {
				if (typeof name === 'string')
					this.$router.push({
						name: name
					});
			},
			goHome() {
				this.$router.push({
					name: 'index'
				});
			},	
			isActive(path) {
                return path === this.$route.fullPath;
            },
            handleTags(command){
                command === 'other' ? this.closeOther() : this.closeAll();
            },
			collapsedSider () {
				this.$refs.side1.toggleCollapse();
			},
			emil(){
				this.$router.push({
					name:'inform'
				})
			},
			async getportrait(){
				let res = await this.$api.people({id:window.localStorage.getItem('id'),num:1,page:1})
				if (0 === res.data.code) {
					if (res.data.data.list[0].portrait != null) {
						this.portrait='http://server.asynciot.com/getfile?filePath='+res.data.data.list[0].portrait
						}

					if (res.data.data.list[0].nickname != null) {
						this.info.nickname=res.data.data.list[0].nickname
					}else {
						this.info.nickname=res.data.data.list[0].username
					}
					
					res = await this.$api.readOrganize({
						id:res.data.data.list[0].organization_id,
						nums:1,
						page:1,
					})
					if (res.data.data.list.length>0){
					this.bg1=res.data.data.list[0].bg1
					this.bg2=res.data.data.list[0].bg2
					console.log(res.data.data.list[0].bg3)
					if (res.data.data.list[0].bg3!=null){
						this.bg3=res.data.data.list[0].bg3
						if (this.bg3=="dark"){this.bottomcolor="#1e282c";this.fontcolor="#ffffff"}
						if (this.bg3=="light"){this.bottomcolor="#ffffff";this.fontcolor="#1e282c"}
						if (this.bg3=="primary"){this.bottomcolor="#2d8cf0";this.fontcolor="#ffff22"}
						}
					this.logo='http://server.asynciot.com/getfile?filePath='+res.data.data.list[0].logo
					}
					
				}
			},
		},
	}
</script>

<style lang="scss" scoped>
	.layout {
		border: 1px solid #d7dde4;
		background: #f5f7f9;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	.layout-breadcrumb {
		padding: 10px 15px 0;
	}

	.laycontent {
		position: relative;
	}

	.layout-content {
		// position: relative;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 10px;
		margin: 15px;
		overflow: hidden;
		background: #fff;
		border-radius: 4px;
		// min-height: 500px;
		// min-height: 100%;
	}
	.m-header{
		background: #3c8dbc;
		boxShadow: 0 2px 3px 2px rgba(0,0,0,.1);
		min-height:64px;
	}
	.layout-copy {
		position: absolute;
		left: 0;
		right: 0;
		text-align: center;
		padding: 0 0 15px;
		color: #9ea7b4;
		bottom: 0;
	}

	.ivu-row-flex {
		height: 100%;
	}

	.layout-menu-left {
		background: #464c5b;
		// overflow-y: scroll;
	}

	.layout-menu-ul {
		padding-top: 1px;
	}

	.layout-header {
		padding: 0px;
		height: 60px;
		background: #3c8dbc;
	}

	.layout-header-user {
		height: 40px;
		float: left;
	}

	.layout-logo-left {
		width: 90%;
		height: 130px;
		line-height: 30px;
		background: #5b6270;
		border-radius: 3px;
		margin: 15px auto 36px;
		color: #fff;
		font-size: 18px;
		font-weight: bold;
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
	}

	.ivu-menu-dark.ivu-menu-vertical .ivu-menu-item {
		color: #FDFEFC;
	}

	.ivu-menu-dark.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu) {
		// color: #39f;
	}
	.submenu {
		padding: 8px 24px;
	}

	.header-titles {
		line-height: 60px;
		padding-left: 20px;
		margin-top: -1%;
	}

	.info {
		display: flex;
		flex-flow: row;
		justify-content: center;
		align-items: center;
	}
	
	.tags {
        position: relative;
        height: 30px;
        overflow: hidden;
        background: #fff;
        padding-right: 120px;
    }

    .tags ul {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
    }

    .tags-li {
        float: left;
        margin: 3px 5px 2px 3px;
        border-radius: 3px;
        font-size: 12px;
        overflow: hidden;
        cursor: pointer;
        height: 23px;
        line-height: 23px;
        border: 1px solid #e9eaec;
        background: #fff;
        padding: 0 5px 0 12px;
        vertical-align: middle;
        color: #666;
        -webkit-transition: all .3s ease-in;
        -moz-transition: all .3s ease-in;
        transition: all .3s ease-in;
    }

    .tags-li:not(.active):hover {
        background: #f8f8f8;
    }

    .tags-li.active {
        color: #fff;
        background: #59f;
    }

    .tags-li-title {
        float: left;
        max-width: 80px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-right: 5px;
        color: #666;
    }

    .tags-li.active .tags-li-title {
        color: #fff;
    }

    .tags-close-box {
 		position: absolute;
        right: 0;
        top: 0;
        box-sizing: border-box;
        padding-top: 1px;
        text-align: center;
        width: 110px;
        height: 30px;
        background: #0ff;
    }
	.w-button{
		min-width: 150px;
		border: #fff;
		height: 64px;
		background-color: #3c8dbc;
	}
	.w-button:hover{
		background-color: #0B93D5;
	}
	.img-circle{
		width: 45px;
		// max-width: 45px;
		height: 45px;
		margin-top: 10px;
		border-radius: 100%;
	}
	.img-circle2{
		width: 65px;
		// max-width: 45px;
		height: 65px;
		display:block;
		margin: 0 auto;
		border-radius: 100%;
	}
	.img-language{
		width: 24px;
		height: 24px;
	}
	.user-panel{
		padding-left: 20%;
	}
	.layout-content-main{
		width:100%;
		background-color: white;
		overflow-y: hidden;
	}
	.test{
		margin-top: -1px;
		margin-left: -1px;
	}
	.box-username{
		display: table-cell;
		vertical-align: middle;
		text-align: center;
		width: 100%;
	}
	Dropdown:hover Button{
		background-color: white;
	}
  .Content {
    min-height: 100%;
    background: #f7f7f7;
  }
  .content-nav {
	border-right: #ececec 3px solid;
	width: 100%;
    background-color: #f8f8f8;
    min-height: 100%;

    transition: width .3s ease;
  }
  .content-logo {
    height: 60px;
    background-color: #f8f8f8;
    border: 0;
    text-align: center;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    img {
      width: auto;
      height: 44px;
      // margin-top: 5%;
    }
    h2 {
      display: inline-block;
      height: 50px;
      line-height: 50px;
      margin-left: 8px;
      transform: all .3s ease;
    }
  }
  .content-header {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
    background-color: #f8f8f8;
    h2 {
      color: #ffffff;
      letter-spacing: 1px;
    }
    .iconfont {
      font-weight: bold;
      color: #202123;
      transform: all .3s ease;
    }
    .el-dropdown-link * {
      color: #ffffff;
    }
  }
  .el-menu-vertical {
    border-right: 0;
  }
  .el-menu-vertical:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-submenu :hover{
	  .imgcircle{background: #2dbe60 !important};
	  #myimg{filter:  brightness(1000%);};
  }
  .el-menu-item :hover{
  	  .imgcircle{background: #2dbe60 !important};
  	  #myimg{filter:  brightness(1000%);};
  }
  // .el-menu-item :hover{
	 //  background-color: #0ff !important;
  // }
  // .el-menu-item.is-active{
	 //  background-color: #0B93D5 !important;
  // }
  .iconfont {
    margin-right: 5px;
    width: 24px;
    color: #fff;
    text-align: center;
    font-size: 18px;
    vertical-align: middle;
  }
  .myacount{
	  width: 100%;
	  position: absolute;
	  margin-left: 10px;
	  bottom: 10px;
	  height: 70px;
	  border-top: #ececec 3px solid;
  }
  .mylanguage{

  }
  .pophead{
	  text-align: center;
	  height: 100px;
	  width: 100%;
  }
  .mymenu{
	  border-right: 0px;
  }
.menu-item{
	height: 40px;
	font-size: 12px;
}
</style>
