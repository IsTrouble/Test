<template lang="jade">
	div(class="layout-content-main" style="padding:0;overflow-y: scroll;")
		div(style="text-align:center;font-weight:'';font-size:25px" )|{{$route.params.device_name}}{{$t('Menu')}}
		div(style="margin: 0 auto;width: 90%" v-for="showlist in all")
			Card(style="margin-top:10px; width:100%; font-size:20px; color:#878787;height:40px;cursor: pointer;border-radius:0;" v-bind:padding='5' @click.native="showlist.show=!showlist.show")
				Col(span='23')|{{showlist.title}}
				Col(span='1' style="font-size:15px")
					i(class="fa fa-angle-down fa-2x" v-if='!showlist.show')
					i(class="fa fa-angle-up fa-2x" v-if='showlist.show')
			Card(style="width:100%; font-size:15px;height:30px;border-radius:0;" v-bind:padding='5' v-for="item in showlist.list" key="item" v-if="showlist.show")
				Col(span='10')|{{item.label}}
				Col(span='14' style="text-align:right;color:#878787;")|{{item.value}}
</template>

<script>
	export default{
		data(){
			return{
				all:[{
				show:false,
				title:'4.01'+this.$t('Menu'),
				list:[
				{label:this.$t('Motor rated power'),value:''},
				{label:this.$t('Motor rated voltage'),value:''},
				{label:this.$t('Motor rated current'),value:''},
				{label:this.$t('Motor rated torque'),value:''},
				{label:this.$t('Motor rated rev'),value:''},
				{label:this.$t('Motor pole logarithm'),value:''},
				{label:this.$t('Motor rated BEMF'),value:''},
				{label:this.$t('Motor phase sequence'),value:''},
				{label:this.$t('Encoder feedback direction'),value:''},
				{label:this.$t('Electrical angle at initial power-on'),value:''},
				{label:this.$t('Offset electrical angle at zero'),value:''}]
				},{
				show:false,
				title:'4.02'+this.$t('Menu'),
				list:[
				{label:this.$t('Speed loop lead amp-lification factor f'),value:''},
				{label:this.$t('Speed loop lag ampli-fication factor b'),value:''},
				{label:this.$t('Integral gain coeffici-ent of speed loop'),value:''},
				{label:this.$t('Damping gain coeffi-cient of speed loop'),value:''},
				{label:this.$t('Differential gain coefficient of speed loop'),value:''},
				{label:this.$t('Proportional gain of current loop'),value:''},
				{label:this.$t('Integral gain of current loop'),value:''},
				{label:this.$t('Output current limit'),value:''},
				{label:this.$t('Carrier frequency'),value:''},
				{label:this.$t('Dead zone time setting'),value:''},
				{label:this.$t('Exciting current setting'),value:''},
				{label:this.$t('Integral coefficient of starting brake distance'),value:''}],
				},{
				show:false,
				title:'7.01'+this.$t('Menu'),
				list:[
				{label:this.$t('X1 Function selection'),value:''},
				{label:this.$t('X2 Function selection'),value:''},
				{label:this.$t('X3 Function selection'),value:''},
				{label:this.$t('X4 Function selection'),value:''},
				{label:this.$t('X5 Function selection'),value:''},
				{label:this.$t('X6 Function selection'),value:''},
				{label:this.$t('X7 Function selection'),value:''},
				{label:this.$t('X8 Function selection'),value:''},
				{label:this.$t('X9 Function selection'),value:''},
				{label:this.$t('X10 Function selection'),value:''},
				{label:this.$t('X11 Function selection'),value:''},
				{label:this.$t('X12 Function selection'),value:''},
				{label:this.$t('X13 Function selection'),value:''},
				{label:this.$t('X14 Function selection'),value:''},
				{label:this.$t('X15 Function selection'),value:''},
				{label:this.$t('X16 Function selection'),value:''},
				{label:this.$t('X17 Function selection'),value:''},
				{label:this.$t('X18 Function selection'),value:''},
				{label:this.$t('X19 Function selection'),value:''},
				{label:this.$t('X20 Function selection'),value:''},
				{label:this.$t('X21 Function selection'),value:''},
				{label:this.$t('X22 Function selection'),value:''},
				{label:this.$t('X23 Function selection'),value:''},
				{label:this.$t('X24 Function selection'),value:''},
				{label:this.$t('X25 Function selection'),value:''}],
				},{
				show:false,
				title:'7.02'+this.$t('Menu'),
				list:[
				{label:this.$t('Polarity selection of front light curtain switch'),value:''},
				{label:this.$t('Polarity selection of back light curtain switch'),value:''},
				{label:this.$t('Polarity selection of front door safety edge switch'),value:''},
				{label:this.$t('Polarity selection of back door safety edge switch'),value:''},
				{label:this.$t("Polarity selection of 'front door open in place' switch"),value:''},
				{label:this.$t("Polarity selection of 'bear door open in place' switch"),value:''},
				{label:this.$t("Polarity selection of 'front door close in place' switch"),value:''},
				{label:this.$t("Polarity selection of 'back door close in place' switch"),value:''},
				{label:this.$t('Full load input selection'),value:''},
				{label:this.$t('Overload input selection'),value:''}],
				},{
				show:false,
				title:'7.03'+this.$t('Menu'),
				list:[
				{label:this.$t('PB1 Function selection'),value:''},
				{label:this.$t('PB2 Function selection'),value:''},
				{label:this.$t('PB3 Function selection'),value:''},
				{label:this.$t('PB4 Function selection'),value:''},
				{label:this.$t('PB5 Function selection'),value:''},
				{label:this.$t('PB6 Function selection'),value:''},
				{label:this.$t('PB7 Function selection'),value:''},
				{label:this.$t('PB8 Function selection'),value:''}],
				},{
				show:false,
				title:'7.04'+this.$t('Menu'),
				list:[
				{label:this.$t('Y1 Function selection'),value:''},
				{label:this.$t('Y2 Function selection'),value:''},
				{label:this.$t('Y3 Function selection'),value:''},
				{label:this.$t('Y4 Function selection'),value:''},
				{label:this.$t('Y5 Function selection'),value:''},
				{label:this.$t('Y6 Function selection'),value:''},
				{label:this.$t('Y7 Function selection'),value:''},
				{label:this.$t('Y8 Function selection'),value:''}],
				},{
				show:false,
				title:'7.05'+this.$t('Menu'),
				list:[
				{label:this.$t('CP3‐Y1 Function selection'),value:''},
				{label:this.$t('CP3‐Y2 Function selection'),value:''},
				{label:this.$t('CP3‐Y3 Function selection'),value:''},
				{label:this.$t('CP8'),value:''}],
				},{
				show:false,
				title:'9.01'+this.$t('Menu'),
				list:[
				{label:this.$t('Parallel/group control selection'),value:''},
				{label:this.$t('Parallel main/auxiliary elevators'),value:''},
				{label:this.$t('Removal of landing call adhesion'),value:''},
				{label:this.$t('Deletion of mistaken car command'),value:''},
				{label:this.$t('Control box configuration'),value:''},
				{label:this.$t('Landing call configuration'),value:''},
				{label:this.$t('Selection of analog weighing channels'),value:''},
				{label:this.$t('Anti-nuisance function selection'),value:''},
				{label:this.$t('Selection of arrival gong output'),value:''},
				{label:this.$t('Delay of arrival gong output'),value:''},
				{label:this.$t('VIP service'),value:''},
				{label:this.$t('Security floor service at night'),value:''}],
				},{
				show:false,
				title:'9.02'+this.$t('Menu'),
				list:[
				{label:this.$t('Input options of fire elevator switch'),value:''},
				{label:this.$t('Options of fire switch configuration'),value:''},
				{label:this.$t('Firefighting mode'),value:''},
				{label:this.$t('Brake switch detection'),value:''},
				{label:this.$t('Start running with door closed limit detected'),value:''}],
				},{
				show:false,
				title:'9.03'+this.$t('Menu'),
				list:[
				{label:this.$t('Re-leveling'),value:''},
				{label:this.$t('Blackout emergency rescue'),value:''},
				{label:this.$t('Backup power running'),value:''},
				{label:this.$t('Earthquake control'),value:''},
				{label:this.$t('Voice station report'),value:''},
				{label:this.$t('Forced closing'),value:''},
				{label:this.$t('Remote monitor'),value:''},
				{label:this.$t('Cell monitorg'),value:''},
				{label:this.$t('Landing arrival gong'),value:''},
				{label:this.$t('Landing forecasting lamp'),value:''},
				{label:this.$t('IC card service'),value:''},
				{label:this.$t('IC card service floor 1'),value:''},
				{label:this.$t('IC card service floor 2'),value:''},
				{label:this.$t('IC card service floor 3'),value:''},
				{label:this.$t('IC card service floor 4'),value:''},
				{label:this.$t('IC card service floor 00‐FF call switch'),value:''}],
				},{
				show:false,
				title:this.$t('Software version'),
				list:[
				{label:this.$t('Elevator control software version'),value:''},
				{label:this.$t('Motor control software version'),value:''},
				{label:this.$t('Serial communication software version'),value:''},
				{label:this.$t('Car control software version'),value:''},
				{label:this.$t('Parallel communication software version'),value:''}],
				}
				]
			}
		},
		computed: {
		},
		created(){
			this.getData();
		},

		methods:{
			async getData(){
				var buffer
				let res =await this.$api.runtime({page:1,num:20,device_id:this.$route.params.id})
				if (res.data.code == 0){
					res.data.data.list.forEach(item=>{
						if (item.data != null) {buffer = base64url.toBuffer(item.data)}
						
						if (item.type == 8196){
							for (var i=0;i<11;i++){
								this.all[0].list[i].value=256*(buffer[2*i])+(buffer[2*i+1])
								if ((i==0)||(i==5)) {
									this.all[0].list[i].value=(this.all[0].list[i].value/10).toFixed(1)
								}
							}
						}
						if (item.type == 8197){
							for (var i=0;i<11;i++){
								this.all[1].list[i].value=(buffer[i])
							}
							this.all[1].list[11].value=(256*(buffer[11])+(buffer[12]))
						}
						if (item.type == 8198){
							for (var i=0;i<25;i++){
								this.all[2].list[i].value=((buffer[i]&0x7f)<<1)+(buffer[i]&0x80)/128
							}
						}
						if (item.type == 8199){
							for (var i=0;i<10;i++){
								this.all[3].list[i].value=(buffer[i])
								if (this.all[3].list[i].value == 0) {this.all[3].list[i].value=this.$t('Normally Open')}
								if (this.all[3].list[i].value == 1) {this.all[3].list[i].value=this.$t('Normally Closed')}
								if (typeof(this.all[3].list[i].value) == 'number') {this.all[3].list[i].value=this.$t('Other')}
							}
						}
						if (item.type == 8200){
							for (var i=0;i<8;i++){
								this.all[4].list[i].value=(buffer[i])
								if (this.all[4].list[i].value == 0) {this.all[4].list[i].value=this.$t('Unused')}
								if (this.all[4].list[i].value == 1) {this.all[4].list[i].value=this.$t('Door 1 Open Button')}
								if (this.all[4].list[i].value == 2) {this.all[4].list[i].value=this.$t('Door 1 Close Button')}
								if (this.all[4].list[i].value == 3) {this.all[4].list[i].value=this.$t('Driver Opens and Closes the Door')}
								if (this.all[4].list[i].value == 4) {this.all[4].list[i].value=this.$t('Independent Button')}
								if (this.all[4].list[i].value == 5) {this.all[4].list[i].value=this.$t('Direct Drive Button')}
								if (this.all[4].list[i].value == 6) {this.all[4].list[i].value=this.$t("Driver's Switch Button")}
								if (this.all[4].list[i].value == 7) {this.all[4].list[i].value=this.$t('Fire Key Switch')}
								if (this.all[4].list[i].value == 8) {this.all[4].list[i].value=this.$t('Door Turn Switch')}
								if (this.all[4].list[i].value == 9) {this.all[4].list[i].value=this.$t('Delayed Close')}
								if (this.all[4].list[i].value == 10) {this.all[4].list[i].value=this.$t('Door 2 Open Button')}
								if (this.all[4].list[i].value == 11) {this.all[4].list[i].value=this.$t('Door 2 Close Button')}
								if (this.all[4].list[i].value == 12) {this.all[4].list[i].value=this.$t('Medical Ladder Switch')}
								if (this.all[4].list[i].value == 13) {this.all[4].list[i].value=this.$t('Service Layer Switching 1')}
								if (this.all[4].list[i].value == 14) {this.all[4].list[i].value=this.$t('Service Layer Switching 2')}
								if (this.all[4].list[i].value == 15) {this.all[4].list[i].value=this.$t('Service Layer Switching 3')}
								if (typeof(this.all[4].list[i].value) == 'number') {this.all[4].list[i].value=this.$t('Other')}
							}
						}
						if (item.type == 8201){
							for (var i=0;i<8;i++){
								this.all[5].list[i].value=(buffer[i])
								if (this.all[5].list[i].value == 0) {this.all[5].list[i].value=this.$t('Unused')}
								if (this.all[5].list[i].value == 1) {this.all[5].list[i].value=this.$t('Operating Contactor')}
								if (this.all[5].list[i].value == 2) {this.all[5].list[i].value=this.$t('Sealing Star Contactor')}
								if (this.all[5].list[i].value == 3) {this.all[5].list[i].value=this.$t('Brake Contactor')}
								if (this.all[5].list[i].value == 4) {this.all[5].list[i].value=this.$t('Brake Holding Contactor')}
								if (this.all[5].list[i].value == 5) {this.all[5].list[i].value=this.$t('Fire Lighting Relay')}
								if (this.all[5].list[i].value == 6) {this.all[5].list[i].value=this.$t('Fireway Base Station')}
								if (this.all[5].list[i].value == 7) {this.all[5].list[i].value=this.$t('Door-Closing Relay')}
								if (this.all[5].list[i].value == 8) {this.all[5].list[i].value=this.$t('Outage Emergency Rescue Operation')}
								if (this.all[5].list[i].value == 9) {this.all[5].list[i].value=this.$t('Door 1 Open Output')}
								if (this.all[5].list[i].value == 10) {this.all[5].list[i].value=this.$t('Door 1 Close Output')}
								if (this.all[5].list[i].value == 11) {this.all[5].list[i].value=this.$t('Door 2 Open Output')}
								if (this.all[5].list[i].value == 12) {this.all[5].list[i].value=this.$t('Door 2 Close Output')}
								if (this.all[5].list[i].value == 13) {this.all[5].list[i].value=this.$t('Rescue Buzz Output')}
								if (typeof(this.all[5].list[i].value) == 'number') {this.all[5].list[i].value=this.$t('Other')}
							}
						}
						if (item.type == 8202){
							for (var i=0;i<3;i++){
								this.all[6].list[i].value=(buffer[i])
								if (this.all[6].list[i].value == 0) {this.all[6].list[i].value=this.$t('No Signal Output')}
								if (this.all[6].list[i].value == 1) {this.all[6].list[i].value=this.$t('Output Up-to-Station Clock')}
								if (this.all[6].list[i].value == 2) {this.all[6].list[i].value=this.$t('Output Down-to-Station Clock')}
								if (this.all[6].list[i].value == 3) {this.all[6].list[i].value=this.$t('Up and Down Clock Combining Output')}
								if (this.all[6].list[i].value == 4) {this.all[6].list[i].value=this.$t('Overload Buzzing')}
								if (this.all[6].list[i].value == 5) {this.all[6].list[i].value=this.$t('Fire Alarm Bell')}
								if (typeof(this.all[6].list[i].value) == 'number') {this.all[6].list[i].value=this.$t('Other')}
							}
								this.all[6].list[3].value=(buffer[3])
								if (this.all[6].list[3].value == 0) {this.all[6].list[3].value=this.$t('No Signal Output')}
								if (this.all[6].list[3].value == 1) {this.all[6].list[3].value=this.$t('LCD Output')}
								if (this.all[6].list[3].value == 2) {this.all[6].list[3].value=this.$t('Rio Billiton IC Card')}
								if (this.all[6].list[3].value == 3) {this.all[6].list[3].value=this.$t('Kimber IC Card')}
								if (typeof(this.all[6].list[3].value) == 'number') {this.all[6].list[3].value=this.$t('Other')}
						}
						if (item.type == 8203){
							for (var i=0;i<12;i++){
								this.all[7].list[i].value=(buffer[i])
							}
								if (this.all[7].list[0].value == 0) {this.all[7].list[0].value=this.$t('Single Ladder')}
								if (this.all[7].list[0].value == 1) {this.all[7].list[0].value=this.$t('Parallel Connection')}
								if (this.all[7].list[0].value == 2) {this.all[7].list[0].value=this.$t('Group Control')}
								if (this.all[7].list[1].value == 0) {this.all[7].list[1].value=this.$t('Auxiliary Ladder')}
								if (this.all[7].list[1].value == 255) {this.all[7].list[1].value=this.$t('Main Ladder')}
								if (this.all[7].list[2].value == 0) {this.all[7].list[2].value=this.$t('Close')}
								if (this.all[7].list[2].value == 1) {this.all[7].list[2].value=this.$t('Open')}
								if (this.all[7].list[3].value == 0) {this.all[7].list[3].value=this.$t('Close')}
								if (this.all[7].list[3].value == 1) {this.all[7].list[3].value=this.$t('Open')}
								if (this.all[7].list[4].value == 0) {this.all[7].list[4].value=this.$t('Single Control Box')}
								if (this.all[7].list[4].value == 1) {this.all[7].list[4].value=this.$t('Second Control Box as Disabled Control Box')}
								if (this.all[7].list[4].value == 2) {this.all[7].list[4].value=this.$t('Second Control Box as Backdoor Control Box')}
								if (this.all[7].list[5].value == 0) {this.all[7].list[5].value=this.$t('Single Level Station Call')}
								if (this.all[7].list[5].value == 1) {this.all[7].list[5].value=this.$t('The Disabled Level Station Calls Open')}
								if (this.all[7].list[5].value == 2) {this.all[7].list[5].value=this.$t('Backdoor Level Station Calls Open')}
								if (this.all[7].list[6].value == 0) {this.all[7].list[6].value=this.$t('Invalid')}
								if (this.all[7].list[6].value == 1) {this.all[7].list[6].value=this.$t('Car Roof')}
								if (this.all[7].list[6].value == 2) {this.all[7].list[6].value=this.$t('Main Board')}
								if (this.all[7].list[7].value == 0) {this.all[7].list[7].value=this.$t('Invalid')}
								if (this.all[7].list[7].value == 1) {this.all[7].list[7].value=this.$t('Weighing Judgment')}
								if (this.all[7].list[7].value == 2) {this.all[7].list[7].value=this.$t('Light Screen Judgement')}
								if (this.all[7].list[7].value == 2) {this.all[7].list[7].value=this.$t('Judgment of Lightload Switch')}
								if (this.all[7].list[8].value == 1) {this.all[7].list[8].value=this.$t('Arrival Clock Open All the Way')}
								if (this.all[7].list[8].value == 2) {this.all[7].list[8].value=this.$t('Arrival Clock Open in the Set Time')}
								if (this.all[7].list[8].value == 2) {this.all[7].list[8].value=this.$t('Arrival Clock close All the Way')}
								if (this.all[7].list[10].value == 1) {this.all[7].list[10].value=this.$t('Not Open')}
								if (this.all[7].list[10].value == 2) {this.all[7].list[10].value=this.$t('Enabling Landing Call Button Open')}
								if (this.all[7].list[10].value == 2) {this.all[7].list[10].value=this.$t('Enabling Landing Call Port Open')}
								if (this.all[7].list[10].value == 2) {this.all[7].list[10].value=this.$t('Enabling IO Board Port Open')}
								if (this.all[7].list[11].value == 2) {this.all[7].list[11].value=this.$t('Close')}
								if (this.all[7].list[11].value == 2) {this.all[7].list[11].value=this.$t('Open')}
							for (var i=0;i<9;i++){
								if (typeof(this.all[7].list[i].value) == 'number') {this.all[7].list[i].value=this.$t('Other')}
							}
							for (var i=10;i<12;i++){
								if (typeof(this.all[7].list[i].value) == 'number') {this.all[7].list[i].value=this.$t('Other')}
							}
						}
						if (item.type == 8204){
							for (var i=0;i<5;i++){
								this.all[8].list[i].value=(buffer[i])
							}
								if (this.all[8].list[0].value == 0) {this.all[8].list[0].value=this.$t('Invalid')}
								if (this.all[8].list[0].value == 1) {this.all[8].list[0].value=this.$t('Landing Call Board Port Input')}
								if (this.all[8].list[0].value == 2) {this.all[8].list[0].value=this.$t('IO Board Port Input')}
								if (this.all[8].list[1].value == 0) {this.all[8].list[1].value=this.$t('Fire elevator switch enabled, fireman key switch and fire link switch invalid input')}
								if (this.all[8].list[1].value == 1) {this.all[8].list[1].value=this.$t('Enable fire elevator switch and fire linkage switch, the input of fireman key switch is invalid')}
								if (this.all[8].list[1].value == 2) {this.all[8].list[1].value=this.$t('Fire elevator switch and fireman key switch are activated, fire linkage switch is invalid')}
								if (this.all[8].list[1].value == 3) {this.all[8].list[1].value=this.$t('Enable fire elevator switch, fireman key switch, fire linkage switch')}
								if (this.all[8].list[2].value == 0) {this.all[8].list[2].value=this.$t('System Standard Fire Fighting Mode')}
								if (this.all[8].list[2].value == 1) {this.all[8].list[2].value=this.$t('Hong Kong Fire Fighting Mode')}
								if (this.all[8].list[3].value == 0) {this.all[8].list[3].value=this.$t('No Detection of Brake Holding Travel Switch')}
								if (this.all[8].list[3].value == 1) {this.all[8].list[3].value=this.$t('Detection of Left and Right Brake Trip Switch')}
								if (this.all[8].list[3].value == 2) {this.all[8].list[3].value=this.$t('Detection of Left Brake Trip Switch')}
								if (this.all[8].list[3].value == 3) {this.all[8].list[3].value=this.$t('Detection of Right Brake Trip Switch')}
								if (this.all[8].list[4].value == 0) {this.all[8].list[4].value=this.$t('Not Detect if Closing Arrival When Start Operation')}
								if (this.all[8].list[4].value == 1) {this.all[8].list[4].value=this.$t('Detect if Closing Arrival When Start Operation,Forbid Operation Unless Closing Arrival')}
								for (var i=0;i<5;i++){
									if (typeof(this.all[8].list[i].value) == 'number') {this.all[8].list[i].value=this.$t('Other')}
								}
						}
						if (item.type == 8205){
							for (var i=0;i<16;i++){
								this.all[9].list[i].value=(buffer[i])
							}
							for (var i=0;i<10;i++){
								if (this.all[9].list[i].value == 0) {this.all[9].list[i].value=this.$t('Close')}
								if (this.all[9].list[i].value == 1) {this.all[9].list[i].value=this.$t('Open')}
								if (typeof(this.all[9].list[i].value) == 'number') {this.all[9].list[i].value=this.$t('Other')}
							}
								if (this.all[9].list[10].value == 0) {this.all[9].list[10].value=this.$t('Close')}
								if (this.all[9].list[10].value == 255) {this.all[9].list[10].value=this.$t('Open')}
								if (typeof(this.all[9].list[10].value) == 'number') {this.all[9].list[10].value=this.$t('Other')}
						}
						if (item.type == 8206){
							for (var i=0;i<5;i++){
								var val1=(buffer[i*3]).toString(16)
								var val2=(buffer[i*3+1]).toString(16)
								var val3=(buffer[i*3+2]).toString(16)
								if (val1.length == 1) {val1='0'+val1}
								if (val2.length == 1) {val2='0'+val2}
								if (val3.length == 1) {val3='0'+val3}
								this.all[10].list[i].value=val1+val2+val3
							}
							
						}
					})
				}
			},
		}
	}	
</script>

<style lang="scss" scoped>
	.inline{
		display: inline-block;
	}
	.username{
		font-size: 30px;
		color: #222;
		display: inline-block;
	}
	.role{
		font-size: 14px;
		color: #999;
		display: inline-block;
	}
	
</style>