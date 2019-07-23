<template>
		<div id="line" :style="{width:'100%',height:'100%'}"></div>
</template>

<script>
	export default{
		data(){
			return{
				topdevice:[]
			}
		},
		mounted(){
			
			
		},
		created(){
			this.getlinechart()
		},
		methods:{
			refresh(){
				this.draw()
				setTimeout(() => {
					this.refresh();
				},1000)
			},
			async getlinechart(){
				let res = await this.$api.activedoor()
				this.topdevice=res.data.list
				if (res.data.code == 0){
					this.topdevice=res.data.list
				}
				this.refresh();
			},
			draw(){
				let line=this.$echarts.init(document.getElementById('line'))
				var option={
					title : {
						text: '设备使用次数',
					},
					color:['#a3dd3b'],
					tooltip : {
						trigger: 'axis'
					},
					legend: {
						data:['使用次数']
					},
					toolbox: {
						show : true,
						feature : {
							saveAsImage : {show: true},
							dataView : {show: false, readOnly: false},
							magicType : {show: false, type: ['line', 'bar']},
							restore : {show: false}
							
						}
					},
					calculable : true,
					xAxis : [
						{
							type : 'category',
							data : [this.topdevice[0].device_name, 
								this.topdevice[1].device_name, 
								this.topdevice[2].device_name, 
								this.topdevice[3].device_name, 
								this.topdevice[4].device_name, 
								this.topdevice[5].device_name,
								this.topdevice[6].device_name,
								// this.topdevice[7].device_name,
								// this.topdevice[8].device_name,
								// this.topdevice[9].device_name,
								]
						}
					],
					yAxis : [
						{
							type : 'value'
						}
					],
					series : [
						{
							name:'使用次数',
							type:'bar',
							data:[this.topdevice[0].counter,
									this.topdevice[1].counter,
									this.topdevice[2].counter,
									this.topdevice[3].counter,
									this.topdevice[4].counter,
									this.topdevice[5].counter,
									this.topdevice[6].counter,
									// this.topdevice[7].counter,
									// this.topdevice[8].counter,
									// this.topdevice[9].counter,
									],
							markPoint : {
								data : [
									{name : '年最高', value : this.topdevice[0].counter, xAxis: 0, yAxis: this.topdevice[0].counter},
									{name : '年最低', value : this.topdevice[6].counter, xAxis: 6, yAxis: this.topdevice[6].counter}
								]
							},
							markLine : {
								data : [
									{type : 'average', name : '平均值'}
								]
							}
						}
					]
				}
				line.setOption(option);
				window.addEventListener("resize",function(){
					line.resize();
				});
			}
		}
	}
</script>

<style>
</style>
