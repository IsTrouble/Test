<template>
<el-container class="dashboard">
  <el-header class="dashboard-header">
    <router-link :to="{name: 'dashboard'}" tag="h2" class="pointer">
      <i class="el-icon-menu"></i>
		<span :style="{'font-size': '20px'}">{{$t('宁波申菱电梯管理平台')}}</span>
    </router-link>
    <div class="dashboard-header-pic">
      <img style="margin-right: -12px;" src="../assets/images/dashboard-top-l.jpg" alt="logo-l">
      <span class="center">
        <img src="../assets/images/logo.png" alt="logo">
      </span>
      <img style="margin-left: -12px;" src="../assets/images/dashboard-top-r.jpg" alt="logo-r">
    </div>
    <p class="dashboard-header-clock"><i class="el-icon-time"></i> <b v-text="clock"></b></p>
  </el-header>
	<el-main class="dashboard-content">
			<el-row :gutter="12">
				<el-col :lg="6" :xl="6" :span="6">
					<el-row :gutter="12">
						<el-col :lg="24" :xl="24">
							<section class="dashboard-card">
								 <p class="dashboard-card-title">
									 全区储能收益
								 </p>
							</section>
						</el-col>
						<el-col :lg="24" :xl="24">
							<section class="dashboard-card">
								<p class="dashboard-card-title">
									系统收益趋势
								</p>
							</section>
						</el-col>
						<el-col :lg="24" :xl="24">
							<section class="dashboard-card">
								<p class="dashboard-card-title">
									设备数量
								</p>
							</section>
						</el-col>
					</el-row>	
				</el-col>
				<el-col :lg="12" :xl="12" :span="12">
					<el-row :gutter="12">
						<el-col :lg="24" :xl="24">
							<section class="dashboard-card" :style="'height:400px'">
								<p class="dashboard-card-title">
									设备定位
								</p>
								<Map style="margin-top:0px;margin:0"></Map>
							</section>
						</el-col>
						<el-col :lg="24" :xl="24">
							<section class="dashboard-card">
								<i class="fa fa-th"></i>
								<span class="dashboard-card-title">
									故障数量对比
								</span>
							</section>
						</el-col>
					</el-row>
				</el-col>
				<el-col :lg="6" :xl="6" :span="6">
					<el-row :gutter="12">
						<el-col :lg="24" :xl="24">
							<section class="dashboard-card">
								<p class="dashboard-card-title">
									设备运行状态
								</p>
							</section>
						</el-col>
						<el-col :lg="24" :xl="24">
							<section class="dashboard-card">
								<p class="dashboard-card-title">
									系统事件
								</p>
							</section>
						</el-col>
					</el-row>
				</el-col>
			</el-row>
  </el-main>
</el-container>
</template>
<style lang="scss" scoped>
.dashboard {
  min-height: 100%;
  background: #162238;
}
.dashboard-header {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  background-color: #1d2c47;
  & > * {
    width: 300px;
  }
  .dashboard-header-pic {
    padding-top: 8px;
    width: 600px;
    text-align: center;
    img {
      width: auto;
      height: 40px;
      z-index: 1;
    }
    .center {
      position: relative;
      display: inline-block;
      border-radius: 50%;
      top: 6px;
      border: 1px solid #1d2c47;
      height: 70px;
      width: 70px;
      text-align: center;
      padding-top: 12px; 
      background: #1d2c47;
      box-shadow: 0 1px 0 rgba(29, 44, 71, .7), 0 2px 6px rgba(0, 0, 0, .3);
    }
  }
  h2 {
    color: #b3c7d3;
    letter-spacing: 2px;
  }
  
  p.dashboard-header-clock {
    text-align: right;
    color: #a6c2d2;
    font-size: 16px;
    i {
      vertical-align: middle;
      font-size: 18px;
      margin-right: 12px;
    }
    b {
      vertical-align: middle;
      display: inline-block;
      width: 204px;
      letter-spacing: 1px;
      text-align: left;
    }
  }
}
.dashboard-header-time {
  text-align: right;
}
.dashboard-card {
  border-radius: 2px;
  background: #1d2c47;
  padding: 16px;
  margin-bottom: 12px;

  span.dashboard-card-title {
    margin-bottom: 16px;
      vertical-align: middle;
      color: #a6c2d2;
      font-size: 16px;
      margin-left: 8px;
  }
}
</style>
<script>
	import Map from '@/views/Dashboard/Map'
	export default {
		components: {
			'Map': Map,
		},
		data(){
			return{
				clock: new Date().toLocaleString(),
			}
		},
		
		methods:{
			
		},
		created() {
		  setInterval(()=> {
		    this.clock = new Date().toLocaleString()
		  }, 1000)
		},
	}
</script>
