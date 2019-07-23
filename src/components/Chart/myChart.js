export default{
	tooltip: {
		trigger: 'item',
		formatter: "{a} <br/>{b}: {c} ({d}%)"
		},
	legend: {
		orient: 'horizontal',
		x: 'left',
		y:'bottom',
		data:['其他','运行中门锁断开','下限位信号异常','层站召唤通讯故障','上限位信号异常','编码器故障']
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
				{value:335, name:'其他'},
				{value:310, name:'运行中门锁断开'},
				{value:234, name:'下限位信号异常'},
				{value:135, name:'层站召唤通讯故障'},
				{value:1548, name:'上限位信号异常'},
				{value:335, name:'编码器故障'}
			]
		}
	]
}