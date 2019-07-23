<template>
	<div id="myChart" :style="{width:'100%',height:'100%'}"></div>
</template>

<script>
	export default{
		data(){
			return{
				topcode:[],
				codelist:['维护','过流','母线过压','母线欠压','输入缺相',
						'输出缺相','输出过力矩','编码器故障','模块过热','运行接触器故障',
						'抱闸接触器故障','封星继电器故障','抱闸开关故障','运行中安全回路断开','运行中门锁断开',
						'门锁短接故障','层站召唤通讯故障','轿厢通讯故障','并联通讯故障','开门故障',
						'关门故障','开关门到位故障','平层信号异常','终端减速开关故障','下限位信号异常',
						'上限位信号异常','打滑故障','电梯速度异常','电机反转故障','磁极位置学习故障',
						'E30','停车速度检测','井道自学习故障','马达过热故障','制动力严重不足',
						  '制动力不足警告',]
			}
		},
		created(){
			this.getpiechart();
		},
		methods:{
			refresh(){
				this.draw();
				setTimeout(() => {
					this.refresh();
				},1000)
			},
			draw(){
				let myChart=this.$echarts.init(document.getElementById('myChart'))
				var option={
				tooltip: {
					trigger: 'item',
					formatter: "{a} <br/>{b}: {c} ({d}%)"
					},
				color:["#37a2da","#32c5e9","#9fe6b8","#ffdb5c","#ff9f7f","#fb7293"],
				legend: {
					orient: 'horizontal',
					x: 'left',
					y:'bottom',
					data:[this.codelist[parseInt(this.topcode[0].code.toString(16))], 
								this.codelist[parseInt(this.topcode[1].code.toString(16))], 
								this.codelist[parseInt(this.topcode[2].code.toString(16))], 
								this.codelist[parseInt(this.topcode[3].code.toString(16))], 
								this.codelist[parseInt(this.topcode[4].code.toString(16))],
								'其它']
				},
				series: [
					{
						name:'常见故障',
						type:'pie',
						radius: ['30%', '70%'],
						avoidLabelOverlap: false,
						label: {
							normal: {
								show: true,
								position: ''
							},
							emphasis: {
								show: true,
								textStyle: {
									fontSize: '30',
									fontWeight: 'bold'
								}
							}
						},
						labelLine: {
							normal: {
								show: false
							}
						},
						data:[
							{value:this.topcode[0].counter, name: this.codelist[parseInt(this.topcode[0].code.toString(16))]},
							{value:this.topcode[1].counter, name: this.codelist[parseInt(this.topcode[1].code.toString(16))]},
							{value:this.topcode[2].counter, name: this.codelist[parseInt(this.topcode[2].code.toString(16))]},
							{value:this.topcode[3].counter, name: this.codelist[parseInt(this.topcode[3].code.toString(16))]},
							{value:this.topcode[4].counter, name: this.codelist[parseInt(this.topcode[4].code.toString(16))]},
							{value:this.topcode[5].counter, name: '其它'},
						]
					}
				]
				}
				myChart.setOption(option);
				window.addEventListener("resize",function(){
					myChart.resize();
				});
			},
			async getpiechart(){
				// var time=Date.parse(this.$format(new Date(), 'yyyy-MM-DD'))
				let res = await this.$api.faultfreq()
				if (res.data.code == 0){
					this.topcode=res.data.list
					for (var i=6;i<this.topcode.length;i++){
						this.topcode[5].counter=this.topcode[5].counter+this.topcode[i].counter
					}
				}
				// this.refresh()
				this.refresh();
			},
		}
	}
</script>

<style>
</style>
