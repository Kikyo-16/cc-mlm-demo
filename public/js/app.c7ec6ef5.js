(function(){"use strict";var a={5701:function(a,m,i){var e=i(9242),s=i(3396);const t={id:"app",style:{"background-color":"#ffffff"}},n=(0,s.uE)('<h1 class="title" data-v-5bea1364>CC-MLM: Content-based Controls for Large-scale Music language Modeling</h1><div class="author" data-v-5bea1364> Liwei Lin, Gus Xia, Junyan Jiang @<a href="http://www.musicxlab.com/" data-v-5bea1364>Music X Lab</a></div><div class="card" data-v-5bea1364><div class="sub-sec" data-v-5bea1364> We equip <a href="https://arxiv.org/abs/2306.05284" data-v-5bea1364>MusicGen</a>, a text-to-music generation model, with direct and <b data-v-5bea1364>content-based controls</b> on innate music languages, including chords, rhythms, and pianoroll. To achieve this, we contribute a parameter-efficient fine-tuning (PEFT) method tailored for Transformer-based audio language model fine-turning. Our approach achieved low-resource semi-supervised learning, tuning with less than 4% parameters compared to the original model and training on a small dataset set with fewer than 300 <i data-v-5bea1364>unannotated</i> songs. We illustrate the <b data-v-5bea1364>chords</b> and <b data-v-5bea1364>rhythms</b> control power of the model. Moreover, by combining pianoroll and text descriptions, our system enables flexible music <b data-v-5bea1364>style transfer</b> and <b data-v-5bea1364>music variation generation</b>. <br data-v-5bea1364><br data-v-5bea1364> See more details in our paper [!2brelease] and try our model via github [!2brelease] or huggingface [!2brelease]. </div></div>',3);function r(a,m,i,e,r,o){const j=(0,s.up)("AudioGroup");return(0,s.wg)(),(0,s.iD)("div",t,[n,(0,s.Wm)(j)])}var o=i(7139);const j=a=>((0,s.dD)("data-v-b4fe88b0"),a=a(),(0,s.Cn)(),a),l={class:"card"},d=j((()=>(0,s._)("div",{class:"sub-sec"},[(0,s._)("h2",null," Chord and Rhythm Controls "),(0,s.Uk)(" Chord and rhythm controls via symbolic chord representation and acoustic drum tracks. ")],-1))),u={class:"audio-bar"},b=j((()=>(0,s._)("div",{class:"chord-col"},[(0,s._)("div",{class:"chord-name"}," Estimated Chords of the Generated Sample"),(0,s._)("div",{class:"chord-name"}," Conditioned Chords")],-1))),c={class:"audio-bar"},h=j((()=>(0,s._)("div",{class:"sample-name"},null,-1))),f={class:"desc",ref:"desc11"},p={class:"desc",ref:"desc12"},g={class:"desc",ref:"desc13"},v={class:"desc",ref:"desc14"},B={class:"desc",ref:"desc15"},C={class:"audio-bar"},N={class:"card"},F=j((()=>(0,s._)("div",{class:"sub-sec"},[(0,s._)("h2",null," Content-based Style Transfer / Music Variation Generation "),(0,s.Uk)(" Content-based style transfer / music variation generation via chord and rhythm controls with symbolic piano roll hints. "),(0,s._)("br"),(0,s.Uk)(" The model incorporates musical elements from the provided piano roll, such as counter-melodies or motifs. ")],-1))),y=j((()=>(0,s._)("div",{class:"demo-desc"},null,-1))),G={class:"audio-bar"},E=j((()=>(0,s._)("div",{class:"chord-col"},[(0,s._)("div",{class:"chord-name"}," Estimated Chords of the Generated Sample"),(0,s._)("div",{class:"chord-name"}," Conditioned Chords")],-1))),A={class:"audio-bar"},w=j((()=>(0,s._)("div",{class:"sample-name"},null,-1))),D={class:"desc",ref:"desc21"},_={class:"desc",ref:"desc22"},T={class:"desc",ref:"desc23"},$={class:"desc",ref:"desc24"},S={class:"desc",ref:"desc25"},x={class:"audio-bar"};function k(a,m,i,e,t,n){const r=(0,s.up)("my-canvas"),j=(0,s.up)("my-audio");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",l,[d,(0,s._)("div",u,[b,(0,s.Wm)(r,{class:"canvas",ref:"drumsCanvas",chords:i.drums_chords,audioTag:"111",onPauseAudio:n.pauseTarget,onPlayAudio:n.playTarget},null,8,["chords","onPauseAudio","onPlayAudio"])]),(0,s._)("div",c,[h,(0,s._)("div",f,"Conditioned Drums",512),(0,s._)("div",p,"lazy jazz composition features a captivating saxophone solo that effortlessly melds with piano chords, skillfully weaving its way through the melody with languid grace. Instruments: saxophone, piano, drums.",512),(0,s._)("div",g,"relax folk song with a flute solo and acoustic guitar chords. instrument: flute, guitar, drums",512),(0,s._)("div",v,"happy piano with a swing melody. instrument: piano, drums",512),(0,s._)("div",B,"A grand orchestral arrangement with thunderous percussion, epic brass fanfares, and soaring strings, creating a cinematic atmosphere fit for a heroic battle.",512)]),((0,s.wg)(),(0,s.iD)(s.HY,null,(0,s.Ko)(5,(a=>(0,s._)("div",{key:a},[(0,s._)("div",C,[(0,s._)("div",{class:"sample-name",ref_for:!0,ref:"sample1"+a},(0,o.zw)("Sample 00"+a),513),((0,s.wg)(),(0,s.iD)(s.HY,null,(0,s.Ko)(5,(m=>(0,s.Wm)(j,{class:"audio",musicSrc:i.drumsSrc[a-1][m-1],audioTag:[1,a,m],ref_for:!0,ref:"1"+a+m,key:"1"+a+m,onPlay:i=>n.updateAttrs(1,a,m),onTimeupdate:n.updateCanvas},null,8,["musicSrc","audioTag","onPlay","onTimeupdate"]))),64))])]))),64))]),(0,s._)("div",N,[F,y,(0,s._)("div",G,[E,(0,s.Wm)(r,{class:"canvas",ref:"pianoCanvas",chords:i.piano_chords,audioTag:"211",onPauseAudio:n.pauseTarget,onPlayAudio:n.playTarget},null,8,["chords","onPauseAudio","onPlayAudio"])]),(0,s._)("div",A,[w,(0,s._)("div",D,"Conditioned Drums and Piano Roll",512),(0,s._)("div",_,"lazy jazz composition features a captivating saxophone solo that effortlessly melds with piano chords, skillfully weaving its way through the melody with languid grace. Instruments: saxophone, piano, drums.",512),(0,s._)("div",T,"relax folk song with a flute solo and acoustic guitar chords. instrument: flute, guitar, drums",512),(0,s._)("div",$,"happy piano with a swing melody. instrument: piano, drums",512),(0,s._)("div",S,"A grand orchestral arrangement with thunderous percussion, epic brass fanfares, and soaring strings, creating a cinematic atmosphere fit for a heroic battle.",512)]),((0,s.wg)(),(0,s.iD)(s.HY,null,(0,s.Ko)(5,(a=>(0,s._)("div",{key:a},[(0,s._)("div",x,[(0,s._)("div",{class:"sample-name",ref_for:!0,ref:"sample2"+a},(0,o.zw)("Sample 00"+a),513),((0,s.wg)(),(0,s.iD)(s.HY,null,(0,s.Ko)(5,(m=>(0,s.Wm)(j,{class:"audio",musicSrc:i.pianoSrc[a-1][m-1],audioTag:[2,a,m],ref_for:!0,ref:"2"+a+m,key:"2"+a+m,onPlay:i=>n.updateAttrs(2,a,m),onTimeupdate:n.updateCanvas},null,8,["musicSrc","audioTag","onPlay","onTimeupdate"]))),64))])]))),64))])],64)}i(7658);const P=["src"];function M(a,m,i,e,t,n){return(0,s.wg)(),(0,s.iD)("audio",{ref:"player",src:i.musicSrc,controls:"",preload:"auto",onPlay:m[0]||(m[0]=a=>n.play())},null,40,P)}var O={name:"MyAudio",props:{musicSrc:{type:String,require:!0},audioTag:{type:Array,require:!0}},watch(){},data(){return{}},mounted(){let a=this;setInterval((function(){a.timeupdate()}),10)},methods:{play(){this.$emit("play")},getProgress(){return null===this.$refs.player?[0,0,1]:[this.$refs.player.currentTime/this.$refs.player.duration,this.$refs.player.currentTime,this.$refs.player.duration]},timeupdate(){null===this.$refs.player||this.$refs.player.paused||this.$emit("timeupdate",this.getProgress(),this.audioTag)},pause(){null===this.$refs.player||this.$refs.player.paused||this.$refs.player.pause()},continue(a){null!==this.$refs.player&&(this.$refs.player.paused||this.$refs.player.pause(),this.$refs.player.currentTime=a*this.$refs.player.duration,this.$refs.player.play())}}},R=i(89);const z=(0,R.Z)(O,[["render",M]]);var I=z;const W={style:{position:"relative"}},q={ref:"layer2",width:"1600",height:"200",style:{position:"absolute",width:"100%",height:"120px","z-index":"2"}},H={ref:"layer3",width:"1600",height:"200",style:{position:"absolute",width:"100%",height:"120px","z-index":"1"}};function J(a,m,i,e,t,n){return(0,s.wg)(),(0,s.iD)("div",W,[(0,s._)("canvas",{ref:"layer1",width:"1600",height:"200",onMousemove:m[0]||(m[0]=(...a)=>n.mousemove&&n.mousemove(...a)),onMouseleave:m[1]||(m[1]=(...a)=>n.mouseleave&&n.mouseleave(...a)),onMousedown:m[2]||(m[2]=(...a)=>n.mousedown&&n.mousedown(...a)),onMouseup:m[3]||(m[3]=(...a)=>n.mouseup&&n.mouseup(...a)),style:{position:"absolute",width:"100%",height:"120px","z-index":"3"}},null,544),(0,s._)("canvas",q,null,512),(0,s._)("canvas",H,null,512)])}function L(a,m){return"C"===a?"rgba(255,0,0, 0.3)":"C#"===a?"rgba(255,150,50,0.3)":"D"===a?"rgba(255,145,0,0.3)":"D#"===a||"Eb"===a?"rgba(255,242,0,0.3)":"E"===a?"rgb(0,128,0,0.3)":"F"===a?"rgba(0,255,217,0.3)":"F#"===a?"rgba(0,178,255,0.3)":"G"===a?"rgba(0,0,128,0.3)":"G#"===a?"rgba(34,0,255,0.3)":"A"===a?"rgba(94,0,255,0.3)":"A#"===a||"Bb"===a?"rgba(153,0,255,0.3)":"B#"===a?"rgba(247,0,255,0.3)":"rgba(220,220,220,0.3)"}function Y(a){return"N"===a[1]?22*a[0].length:22*a[0].length+16*a[1].length}function K(a){let m,i,e=Math.floor(a),s=Math.floor(60*(a-e));return m=e<10?"0"+e:""+e,i=s<10?"0"+s:""+s,m+" : "+i}var Z={name:"MyCanvas",props:{chords:{type:Object,require:!0},audioTag:{type:String,require:!0}},data(){return{chordCanvas:null,pgCanvas:null,ratio:0,highlightBar:!1,redBar:!1,isDrag:!1,init:!1,globalInit:!1,audio:this.audioTag,selectedTags:["001/000","001/000"]}},mounted(){let a=this.$refs["layer2"],m=this.$refs["layer1"],i=this.$refs["layer3"];this.chordCanvas=a.getContext("2d"),this.pgCanvas=m.getContext("2d"),this.durCanvas=i.getContext("2d"),this.updateCanvas(this.selectedTags[0],this.selectedTags[1],0,0,0,0,0)},methods:{updateCanvas(a,m,i,e,s,t,n){this.init&&(e=0,this.init=!1),this.selectedTags=[a,m],this.audio=s,this.cur=t,this.dur=n,0===e&&(this.clearPG(),this.drawChords(a,m)),this.drawProgress(i,e),this.drawCurrentTime(t,n,i)},drawBackground(){},drawCurrentTime(a,m,i){let e=this.$refs["layer3"].width,s=this.$refs["layer3"].height,t=this.durCanvas,n=K(a),r=K(m),o=i*e,j=80;t.clearRect(o-2*j,s/2-30,4*j,40),t.font="22px Arial",t.fillStyle="black",t.textAlign="left top",t.fillText(n,o-j,s/2-10,j,10),t.fillText(r,o+10,s/2-10,j,10)},drawChords(a,m){let i=this.$refs["layer2"].width,e=this.$refs["layer2"].height,s=this.chordCanvas,t=this.chords[a],n=this.chords[m];s.clearRect(0,0,i,e),this.drawChordSegs(s,t,i,e,0),this.drawChordSegs(s,n,i,e,e/2+.5)},drawChordSegs(a,m,i,e,s){let t=0,n=0,r=0,o=i;for(let j=0;j<m.length;++j){r=m[j][0]*i/1001,o=(m[j][1]-m[j][0])*i/1001,a.fillStyle=L(m[j][2],m[j][3]),a.fillRect(r,s+2,o,e/2-4),a.fillStyle="rgba(0, 0, 0, 0.2)",a.fillRect(r,s+2,5,e/2-4);let l=[m[j][2],m[j][3]];if(o>10&&r+2<t?(n+=25,this.drawTags(a,r,s+25+n,i,e/2,l)):o>10?(n=0,this.drawTags(a,r,s+25+n,i,e/2,l)):n=0,o>10){let a=Y(l);t=o>a?r+o:r+a}}},drawTags(a,m,i,e,s,t){a.font="22px Comic Sans MS",a.fillStyle="black",a.textAlign="left top",a.fillText(t[0],m+8,i,e,s),"N"!==t[1]&&(a.font="16px Comic Sans MS",1===t[0].length?a.fillText(t[1],m+23,i,e,s):a.fillText(t[1],m+40,i,e,s))},clearPG(){let a=this.$refs["layer1"].width,m=this.$refs["layer1"].height,i=this.pgCanvas;i.clearRect(0,0,a,m),i=this.durCanvas,i.clearRect(0,0,a,m)},drawProgress(a,m){let i=this.$refs["layer1"].width,e=this.$refs["layer1"].height,s=this.pgCanvas,t=16;m>0?(s.fillStyle="rgba(0,0,0,0.06)",s.clearRect(i*a-t,0,2*t,e),s.fillRect(i*a-t-2,0,t+2,e)):(s.fillStyle="rgba(0,0,0,0.3)",s.fillRect(0,0,i*a,e)),this.highlightBar?(s.fillStyle="rgba(255,0,0,0.8)",s.fillRect(i*a-8,0,16,e),s.fillStyle="rgba(255,255,255,0.8)",s.fillRect(i*a-5,0,10,e),this.redBar=!0):this.redBar=!1,s.beginPath(),s.strokeStyle="black",s.lineWidth=4,s.moveTo(i*a,0),s.lineTo(i*a,e),s.stroke(),s.closePath(),this.ratio=a},isActive(a){return Math.abs(this.getMouseRatio(a)-this.ratio)<.2},getMouseRatio(a){let m=this.$refs["layer1"].getBoundingClientRect();return(a.clientX-m.left)/(m.right-m.left)},setBarStatus(a){0===a?(this.highlightBar=!1,this.redBar&&this.drawProgress(this.ratio,1)):(this.highlightBar=!0,this.redBar||this.drawProgress(this.ratio,1))},mouseleave(a){this.isDrag,this.isDrag=!1,this.setBarStatus(0)},mousemove(a){if(this.isActive(a)?this.setBarStatus(1):this.setBarStatus(0),this.isDrag){let m=this.getMouseRatio(a);this.updateCanvas(this.selectedTags[0],this.selectedTags[1],m,0,this.audio,m*this.dur,this.dur)}},mousedown(a){this.highlightBar&&(this.isDrag||this.$emit("pauseAudio",this.audio),this.isDrag=!0,this.init=!0)},mouseup(a){this.isDrag&&this.$emit("playAudio",[this.audio,this.ratio]),this.isDrag=!1}}};const U=(0,R.Z)(Z,[["render",J]]);var X=U;function V(a){let m="./audios/00"+a+"/00",i=Array(0);for(let e=1;e<=5;++e){let a=Array(0);for(let i=0;i<=5;++i)a.push(m+e+"/00"+i+".wav");i.push(a)}return i}function Q(a){return"drums"===a?i(459)[0]:"piano"===a?i(2575)[0]:i(3559)[0]}var aa={name:"AudioGroup",components:{MyAudio:I,MyCanvas:X},props:{drumsSrc:{type:Array,default:V(1)},pianoSrc:{type:Array,default:V(2)},fullSrc:{type:Array,default:V(3)},drums_chords:{type:Object,default:Q("drums")},piano_chords:{type:Object,default:Q("piano")},full_chords:{type:Object,default:Q("full")}},methods:{updateAttrs(a,m,i){this.reviseDiv(a,m,i);let e=""+a+m+i,s=this.$refs[e][0].getProgress();this.reviseCanvas(s[0],a,m,i,0,s[1],s[2]);for(let t=1;t<=2;t++)for(let a=1;a<=5;a++)for(let m=1;m<=5;m++){let i=""+t+a+m;i!==e&&this.$refs[i][0].pause()}},reviseDiv(a,m,i){1===a?this.$refs.drumsCanvas.globalInit=!0:2===a&&(this.$refs.pianoCanvas.globalInit=!0),this.$refs["desc"+a+i].style.background="rgba(255, 0, 0, 0.1)",this.$refs["sample"+a+m][0].style.background="rgba(255, 0, 0, 0.1)";for(let e=1;e<=5;e++)e!==i&&(this.$refs["desc"+a+e].style.background="rgba(255, 0, 0, 0)");for(let e=1;e<=5;e++)e!==m&&(this.$refs["sample"+a+e][0].style.background="rgba(255, 0, 0, 0)")},reviseCanvas(a,m,i,e,s,t,n){let r=""+m+i+e,o="00"+i+"/00"+(e-1),j="00"+i+"/000";1===m?this.$refs.drumsCanvas.updateCanvas(o,j,a,s,r,t,n):2===m&&this.$refs.pianoCanvas.updateCanvas(o,j,a,s,r,t,n)},updateCanvas(a,m){"number"===typeof a[0]&&this.reviseCanvas(a[0],m[0],m[1],m[2],1,a[1],a[2])},pauseTarget(a){void 0!==this.$refs[a]&&this.$refs[a][0].pause()},playTarget(a){void 0!==a[0]&&void 0!==this.$refs[a[0]]&&this.$refs[a[0]][0].continue(a[1])}}};const ma=(0,R.Z)(aa,[["render",k],["__scopeId","data-v-b4fe88b0"]]);var ia=ma,ea={name:"App",components:{AudioGroup:ia}};const sa=(0,R.Z)(ea,[["render",r],["__scopeId","data-v-5bea1364"]]);var ta=sa;const na=(0,e.ri)(ta);na.mount("#app")},459:function(a){a.exports=JSON.parse('[{"001/000":[[0,25,"N","N"],[25,207,"Bb","maj"],[207,371,"F","maj"],[371,420,"D","min"],[420,613,"G","min"],[613,815,"Eb","maj"],[815,911,"C","min"],[911,1000,"F","maj"]],"001/001":[[0,1,"N","N"],[1,29,"F","maj/3"],[29,228,"Bb","maj7"],[228,297,"F","min7"],[297,421,"F","7"],[421,615,"G","min"],[615,814,"Eb","maj7"],[814,893,"C","min7"],[893,1001,"F","sus4"]],"001/002":[[0,1,"N","N"],[1,28,"D","min"],[28,131,"Bb","maj"],[131,204,"D","min"],[204,238,"Bb","maj"],[238,398,"F","maj"],[398,421,"D","min"],[421,616,"G","min"],[616,809,"Eb","maj"],[809,909,"C","maj"],[909,1001,"F","maj/5"]],"001/003":[[0,1,"N","N"],[1,28,"F","maj"],[28,222,"Bb","maj"],[222,419,"F","maj"],[419,618,"G","maj"],[618,812,"Eb","maj"],[812,911,"C","min"],[911,1001,"F","7"]],"001/004":[[0,1,"N","N"],[1,226,"Bb","maj"],[226,423,"F","maj"],[423,618,"G","min"],[618,812,"Eb","maj"],[812,911,"C","min"],[911,1001,"F","maj/5"]],"002/000":[[0,43,"Bb","maj"],[43,130,"G","min"],[130,212,"F","maj"],[212,301,"Eb","maj"],[301,470,"Bb","maj"],[470,552,"F","maj"],[552,597,"Eb","maj"],[597,616,"Bb","maj/3"],[616,637,"C","min"],[637,723,"Bb","maj"],[723,806,"G","min"],[806,891,"F","maj"],[891,978,"Eb","maj"],[978,1000,"Bb","maj"]],"002/001":[[0,1,"N","N"],[1,45,"Bb","maj"],[45,128,"G","maj"],[128,218,"F","maj"],[218,382,"Eb","maj"],[382,554,"Bb","maj7"],[554,685,"Eb","maj7"],[685,719,"F","maj"],[719,807,"G","min7"],[807,890,"F","maj"],[890,1001,"Eb","maj"]],"002/002":[[0,1,"N","N"],[1,23,"F","maj"],[23,57,"Bb","maj"],[57,136,"G","min"],[136,216,"F","maj"],[216,298,"Eb","maj"],[298,391,"Bb","maj"],[391,485,"F","min/5"],[485,555,"Ab","maj"],[555,636,"Eb","maj"],[636,741,"Bb","maj"],[741,812,"G","min"],[812,892,"F","min"],[892,976,"Eb","maj"],[976,1001,"Bb","maj"]],"002/003":[[0,1,"N","N"],[1,20,"C","maj"],[20,48,"Bb","maj"],[48,108,"G","min"],[108,147,"Bb","maj/3"],[147,214,"F","maj"],[214,339,"Eb","maj"],[339,510,"Bb","maj"],[510,597,"F","maj"],[597,639,"C","min/b3"],[639,722,"Bb","maj"],[722,808,"G","min"],[808,895,"F","maj"],[895,1001,"Eb","maj"]],"002/004":[[0,1,"N","N"],[1,137,"Bb","maj"],[137,221,"F","min"],[221,316,"Eb","maj"],[316,473,"Bb","maj"],[473,554,"F","maj"],[554,647,"Eb","maj"],[647,810,"Bb","maj"],[810,894,"F","min"],[894,983,"Eb","maj"],[983,1001,"Bb","maj"]],"003/000":[[0,3,"N","N"],[3,91,"D","maj"],[91,126,"A","maj/3"],[126,154,"A","maj"],[154,249,"B","min7"],[249,306,"D","maj"],[306,397,"G","maj7"],[397,455,"D","maj/3"],[455,512,"E","min7"],[512,757,"A","maj"],[757,829,"D","maj"],[829,869,"A","maj/3"],[869,906,"A","maj"],[906,998,"B","min7"],[998,1000,"F#","min"]],"003/001":[[0,1,"N","N"],[1,154,"B","min7"],[154,288,"C","maj7"],[288,461,"D","maj"],[461,607,"A","7"],[607,759,"A","maj"],[759,903,"D","maj/5"],[903,1001,"B","min7"]],"003/002":[[0,1,"N","N"],[1,103,"D","maj"],[103,157,"A","maj"],[157,233,"B","min7"],[233,305,"C#","min7"],[305,455,"B","min7"],[455,532,"E","min7"],[532,757,"A","maj"],[757,846,"D","maj"],[846,907,"A","maj"],[907,1001,"B","min7"]],"003/003":[[0,1,"N","N"],[1,84,"D","maj"],[84,157,"A","7"],[157,307,"B","min"],[307,368,"G","maj"],[368,460,"A","7"],[460,495,"E","min7"],[495,605,"A","maj"],[605,642,"D","maj/3"],[642,688,"A","maj"],[688,755,"D","maj/5"],[755,832,"D","maj"],[832,909,"A","maj"],[909,1001,"B","min7"]],"003/004":[[0,1,"N","N"],[1,95,"D","maj"],[95,168,"C#","min7"],[168,253,"B","7"],[253,308,"C#","min"],[308,399,"F#","min"],[399,473,"E","maj"],[473,541,"D","maj"],[541,606,"Ab","min"],[606,822,"A","maj"],[822,849,"D","maj"],[849,903,"A","maj/3"],[903,983,"B","min"],[983,1001,"C#","maj"]],"004/000":[[0,14,"N","N"],[14,132,"C","maj"],[132,248,"G","maj"],[248,279,"C","maj"],[279,308,"D","min"],[308,334,"E","min"],[334,361,"A","min"],[361,478,"G","maj"],[478,824,"C","maj"],[824,1000,"G","maj"]],"004/001":[[0,10,"N","N"],[10,146,"C","maj7"],[146,248,"G","maj7"],[248,369,"C","maj"],[369,474,"G","maj"],[474,828,"C","maj"],[828,1001,"G","maj"]],"004/002":[[0,1,"N","N"],[1,15,"G","maj"],[15,134,"C","maj"],[134,247,"G","maj"],[247,307,"C","maj"],[307,390,"E","min"],[390,478,"G","maj"],[478,676,"C","maj"],[676,709,"G","maj"],[709,822,"C","maj"],[822,1001,"G","maj"]],"004/003":[[0,1,"N","N"],[1,147,"C","maj"],[147,248,"G","maj"],[248,301,"C","maj"],[301,477,"G","maj"],[477,541,"C","maj"],[541,594,"G","maj"],[594,668,"C","maj"],[668,709,"G","maj"],[709,767,"C","maj"],[767,1001,"G","maj"]],"004/004":[[0,1,"N","N"],[1,22,"G","maj"],[22,160,"C","maj"],[160,273,"G","maj"],[273,310,"A","min"],[310,365,"F","maj"],[365,482,"G","maj"],[482,708,"C","maj"],[708,974,"C","min"],[974,1001,"D","min"]],"005/000":[[0,38,"Eb","maj"],[38,194,"F","min7"],[194,347,"Bb","maj"],[347,499,"Eb","maj/3"],[499,651,"Ab","maj"],[651,731,"Bb","maj"],[731,805,"B","dim"],[805,884,"C","min"],[884,909,"Bb","min7"],[909,961,"Eb","maj"],[961,1000,"Ab","maj"]],"005/001":[[0,1,"N","N"],[1,77,"Eb","maj"],[77,181,"F","maj"],[181,310,"G","min"],[310,346,"F#","maj"],[346,499,"Eb","maj7"],[499,656,"Ab","maj"],[656,809,"Bb","min7"],[809,906,"C","min7"],[906,959,"Eb","7"],[959,1001,"Ab","maj7"]],"005/002":[[0,1,"N","N"],[1,57,"Eb","maj"],[57,192,"F","min7"],[192,344,"Bb","maj"],[344,597,"Eb","maj"],[597,700,"Bb","sus4"],[700,806,"Bb","7"],[806,959,"C","min7"],[959,1001,"Ab","maj"]],"005/003":[[0,1,"N","N"],[1,93,"Eb","maj"],[93,209,"F","7"],[209,382,"Bb","maj"],[382,500,"Eb","maj"],[500,654,"Ab","maj"],[654,806,"Bb","maj"],[806,902,"C","min"],[902,960,"Eb","maj"],[960,1001,"Ab","maj"]],"005/004":[[0,1,"N","N"],[1,39,"C","min"],[39,151,"F","maj"],[151,203,"F","min"],[203,355,"Bb","maj"],[355,506,"Eb","maj"],[506,657,"Ab","maj"],[657,810,"Bb","maj"],[810,903,"C","min"],[903,962,"Eb","maj/5"],[962,1001,"Ab","maj"]]}]')},3559:function(a){a.exports=JSON.parse('[{"001/000":[[0,1,"N","N"],[1,29,"F","maj/3"],[29,228,"Bb","maj7"],[228,297,"F","min7"],[297,421,"F","7"],[421,615,"G","min"],[615,814,"Eb","maj7"],[814,893,"C","min7"],[893,1001,"F","sus4"]],"001/001":[[0,1,"N","N"],[1,219,"Bb","maj"],[219,419,"F","maj"],[419,616,"G","min"],[616,813,"Eb","maj"],[813,909,"C","min"],[909,1001,"F","maj"]],"001/002":[[0,1,"N","N"],[1,29,"F","maj/3"],[29,228,"Bb","maj7"],[228,297,"F","min7"],[297,421,"F","7"],[421,615,"G","min"],[615,814,"Eb","maj7"],[814,893,"C","min7"],[893,1001,"F","sus4"]],"001/003":[[0,1,"N","N"],[1,28,"F","maj"],[28,221,"Bb","maj"],[221,420,"F","maj"],[420,618,"G","min"],[618,752,"Eb","maj"],[752,1001,"Eb","7"]],"001/004":[[0,1,"N","N"],[1,28,"G","7"],[28,131,"Bb","maj"],[131,226,"Bb","maj/5"],[226,419,"F","7"],[419,616,"G","min"],[616,813,"Eb","maj"],[813,909,"C","min7"],[909,1001,"Bb","maj/5"]],"002/000":[[0,1,"N","N"],[1,29,"F","maj/3"],[29,228,"Bb","maj7"],[228,297,"F","min7"],[297,421,"F","7"],[421,615,"G","min"],[615,814,"Eb","maj7"],[814,893,"C","min7"],[893,1001,"F","sus4"]],"002/001":[[0,1,"N","N"],[1,219,"Bb","maj"],[219,419,"F","maj"],[419,616,"G","min"],[616,813,"Eb","maj"],[813,909,"C","min"],[909,1001,"F","maj"]],"002/002":[[0,1,"N","N"],[1,29,"F","maj/3"],[29,228,"Bb","maj7"],[228,297,"F","min7"],[297,421,"F","7"],[421,615,"G","min"],[615,814,"Eb","maj7"],[814,893,"C","min7"],[893,1001,"F","sus4"]],"002/003":[[0,1,"N","N"],[1,28,"F","maj"],[28,221,"Bb","maj"],[221,420,"F","maj"],[420,618,"G","min"],[618,752,"Eb","maj"],[752,1001,"Eb","7"]],"002/004":[[0,1,"N","N"],[1,28,"G","7"],[28,131,"Bb","maj"],[131,226,"Bb","maj/5"],[226,419,"F","7"],[419,616,"G","min"],[616,813,"Eb","maj"],[813,909,"C","min7"],[909,1001,"Bb","maj/5"]],"003/000":[[0,1,"N","N"],[1,29,"F","maj/3"],[29,228,"Bb","maj7"],[228,297,"F","min7"],[297,421,"F","7"],[421,615,"G","min"],[615,814,"Eb","maj7"],[814,893,"C","min7"],[893,1001,"F","sus4"]],"003/001":[[0,1,"N","N"],[1,219,"Bb","maj"],[219,419,"F","maj"],[419,616,"G","min"],[616,813,"Eb","maj"],[813,909,"C","min"],[909,1001,"F","maj"]],"003/002":[[0,1,"N","N"],[1,29,"F","maj/3"],[29,228,"Bb","maj7"],[228,297,"F","min7"],[297,421,"F","7"],[421,615,"G","min"],[615,814,"Eb","maj7"],[814,893,"C","min7"],[893,1001,"F","sus4"]],"003/003":[[0,1,"N","N"],[1,28,"F","maj"],[28,221,"Bb","maj"],[221,420,"F","maj"],[420,618,"G","min"],[618,752,"Eb","maj"],[752,1001,"Eb","7"]],"003/004":[[0,1,"N","N"],[1,28,"G","7"],[28,131,"Bb","maj"],[131,226,"Bb","maj/5"],[226,419,"F","7"],[419,616,"G","min"],[616,813,"Eb","maj"],[813,909,"C","min7"],[909,1001,"Bb","maj/5"]],"004/000":[[0,1,"N","N"],[1,29,"F","maj/3"],[29,228,"Bb","maj7"],[228,297,"F","min7"],[297,421,"F","7"],[421,615,"G","min"],[615,814,"Eb","maj7"],[814,893,"C","min7"],[893,1001,"F","sus4"]],"004/001":[[0,1,"N","N"],[1,219,"Bb","maj"],[219,419,"F","maj"],[419,616,"G","min"],[616,813,"Eb","maj"],[813,909,"C","min"],[909,1001,"F","maj"]],"004/002":[[0,1,"N","N"],[1,29,"F","maj/3"],[29,228,"Bb","maj7"],[228,297,"F","min7"],[297,421,"F","7"],[421,615,"G","min"],[615,814,"Eb","maj7"],[814,893,"C","min7"],[893,1001,"F","sus4"]],"004/003":[[0,1,"N","N"],[1,28,"F","maj"],[28,221,"Bb","maj"],[221,420,"F","maj"],[420,618,"G","min"],[618,752,"Eb","maj"],[752,1001,"Eb","7"]],"004/004":[[0,1,"N","N"],[1,28,"G","7"],[28,131,"Bb","maj"],[131,226,"Bb","maj/5"],[226,419,"F","7"],[419,616,"G","min"],[616,813,"Eb","maj"],[813,909,"C","min7"],[909,1001,"Bb","maj/5"]],"005/000":[[0,1,"N","N"],[1,29,"F","maj/3"],[29,228,"Bb","maj7"],[228,297,"F","min7"],[297,421,"F","7"],[421,615,"G","min"],[615,814,"Eb","maj7"],[814,893,"C","min7"],[893,1001,"F","sus4"]],"005/001":[[0,1,"N","N"],[1,219,"Bb","maj"],[219,419,"F","maj"],[419,616,"G","min"],[616,813,"Eb","maj"],[813,909,"C","min"],[909,1001,"F","maj"]],"005/002":[[0,1,"N","N"],[1,29,"F","maj/3"],[29,228,"Bb","maj7"],[228,297,"F","min7"],[297,421,"F","7"],[421,615,"G","min"],[615,814,"Eb","maj7"],[814,893,"C","min7"],[893,1001,"F","sus4"]],"005/003":[[0,1,"N","N"],[1,28,"F","maj"],[28,221,"Bb","maj"],[221,420,"F","maj"],[420,618,"G","min"],[618,752,"Eb","maj"],[752,1001,"Eb","7"]],"005/004":[[0,1,"N","N"],[1,28,"G","7"],[28,131,"Bb","maj"],[131,226,"Bb","maj/5"],[226,419,"F","7"],[419,616,"G","min"],[616,813,"Eb","maj"],[813,909,"C","min7"],[909,1001,"Bb","maj/5"]]}]')},2575:function(a){a.exports=JSON.parse('[{"001/000":[[0,25,"N","N"],[25,207,"Bb","maj"],[207,371,"F","maj"],[371,420,"D","min"],[420,613,"G","min"],[613,815,"Eb","maj"],[815,911,"C","min"],[911,1000,"F","maj"]],"001/001":[[0,23,"N","N"],[23,274,"Bb","maj"],[274,367,"F","maj"],[367,418,"F","maj/3"],[418,618,"G","min7"],[618,814,"Eb","maj7"],[814,910,"C","min7"],[910,1001,"F","7"]],"001/002":[[0,1,"N","N"],[1,30,"C","maj"],[30,223,"Bb","maj"],[223,418,"F","7"],[418,578,"G","min"],[578,615,"Bb","maj"],[615,813,"Eb","maj"],[813,913,"C","min"],[913,1001,"F","maj"]],"001/003":[[0,1,"N","N"],[1,237,"Bb","maj"],[237,418,"F","maj"],[418,614,"G","min"],[614,813,"Eb","maj"],[813,908,"C","min"],[908,1001,"F","maj"]],"001/004":[[0,1,"N","N"],[1,59,"G","min"],[59,226,"Bb","maj"],[226,419,"F","maj"],[419,618,"G","min"],[618,814,"Eb","maj"],[814,911,"C","min"],[911,1001,"F","maj"]],"002/000":[[0,43,"Bb","maj"],[43,130,"G","min"],[130,212,"F","maj"],[212,301,"Eb","maj"],[301,470,"Bb","maj"],[470,552,"F","maj"],[552,597,"Eb","maj"],[597,616,"Bb","maj/3"],[616,637,"C","min"],[637,723,"Bb","maj"],[723,806,"G","min"],[806,891,"F","maj"],[891,978,"Eb","maj"],[978,1000,"Bb","maj"]],"002/001":[[0,1,"N","N"],[1,42,"Bb","maj"],[42,129,"G","min7"],[129,215,"F","maj"],[215,279,"Eb","maj7"],[279,361,"Eb","maj"],[361,469,"Bb","maj"],[469,513,"F","maj"],[513,553,"F","7"],[553,636,"Eb","maj"],[636,722,"Bb","maj"],[722,807,"G","min"],[807,896,"F","maj"],[896,978,"Eb","maj"],[978,1001,"Eb","maj/5"]],"002/002":[[0,1,"N","N"],[1,43,"Bb","maj"],[43,129,"G","min"],[129,214,"F","maj"],[214,300,"Eb","maj"],[300,468,"Bb","maj"],[468,554,"F","maj"],[554,637,"Eb","maj"],[637,723,"Bb","maj"],[723,807,"G","min"],[807,893,"F","maj"],[893,1001,"Eb","maj"]],"002/003":[[0,1,"N","N"],[1,39,"G","min/5"],[39,128,"G","min"],[128,211,"F","maj"],[211,300,"Eb","maj"],[300,469,"Bb","maj"],[469,553,"F","maj"],[553,637,"Eb","maj"],[637,722,"Bb","maj"],[722,806,"G","min"],[806,892,"F","maj"],[892,978,"Eb","maj"],[978,1001,"Bb","maj"]],"002/004":[[0,1,"N","N"],[1,46,"Bb","maj"],[46,138,"G","min"],[138,215,"F","maj"],[215,301,"Eb","maj"],[301,469,"Bb","maj"],[469,551,"F","maj"],[551,635,"Eb","maj"],[635,723,"Bb","maj"],[723,808,"G","min"],[808,892,"F","maj"],[892,978,"Eb","maj"],[978,1001,"Bb","maj"]],"003/000":[[0,3,"N","N"],[3,91,"D","maj"],[91,126,"A","maj/3"],[126,154,"A","maj"],[154,249,"B","min7"],[249,306,"D","maj"],[306,397,"G","maj7"],[397,455,"D","maj/3"],[455,512,"E","min7"],[512,757,"A","maj"],[757,829,"D","maj"],[829,869,"A","maj/3"],[869,906,"A","maj"],[906,998,"B","min7"],[998,1000,"F#","min"]],"003/001":[[0,1,"N","N"],[1,159,"D","maj"],[159,305,"B","min7"],[305,455,"G","maj"],[455,512,"E","min7"],[512,574,"A","maj"],[574,707,"A","sus4(b7)"],[707,753,"D","maj/5"],[753,916,"D","maj"],[916,1001,"B","min7"]],"003/002":[[0,1,"N","N"],[1,159,"D","maj"],[159,230,"B","min"],[230,312,"D","maj/5"],[312,421,"G","maj"],[421,460,"D","maj/3"],[460,513,"D","maj/2"],[513,606,"A","sus4"],[606,755,"A","maj"],[755,907,"D","maj"],[907,1001,"B","min"]],"003/003":[[0,1,"N","N"],[1,156,"D","maj"],[156,251,"B","min7"],[251,308,"B","min/b7"],[308,337,"D","maj"],[337,399,"G","maj"],[399,455,"D","maj/3"],[455,517,"D","maj/2"],[517,607,"A","maj"],[607,756,"A","7"],[756,908,"D","maj"],[908,1001,"B","min7"]],"003/004":[[0,1,"N","N"],[1,127,"D","maj"],[127,154,"A","sus4"],[154,315,"B","min"],[315,418,"G","maj7"],[418,461,"G","maj"],[461,515,"E","min"],[515,562,"A","maj"],[562,605,"D","maj"],[605,766,"A","maj"],[766,911,"D","maj"],[911,1001,"B","min"]],"004/000":[[0,14,"N","N"],[14,132,"C","maj"],[132,248,"G","maj"],[248,279,"C","maj"],[279,308,"D","min"],[308,334,"E","min"],[334,361,"A","min"],[361,478,"G","maj"],[478,824,"C","maj"],[824,1000,"G","maj"]],"004/001":[[0,1,"N","N"],[1,158,"C","maj"],[158,248,"G","maj"],[248,279,"C","7"],[279,334,"D","min7"],[334,380,"A","min7"],[380,482,"G","min7"],[482,803,"C","min7"],[803,882,"G","min7"],[882,1001,"G","min"]],"004/002":[[0,6,"N","N"],[6,138,"C","maj"],[138,248,"G","maj"],[248,277,"C","maj"],[277,308,"D","min"],[308,334,"C","maj/3"],[334,368,"A","min"],[368,478,"G","maj"],[478,827,"C","maj"],[827,1001,"G","maj"]],"004/003":[[0,1,"N","N"],[1,134,"C","maj"],[134,248,"G","maj"],[248,279,"C","maj"],[279,307,"G","maj/5"],[307,334,"C","maj/3"],[334,362,"A","min"],[362,477,"G","maj"],[477,828,"C","maj"],[828,1001,"G","maj"]],"004/004":[[0,1,"N","N"],[1,15,"F","maj"],[15,161,"C","maj"],[161,250,"G","maj"],[250,281,"C","maj"],[281,304,"F","maj"],[304,333,"C","maj/5"],[333,362,"A","min"],[362,481,"G","maj"],[481,824,"C","maj"],[824,1001,"G","maj"]],"005/000":[[0,38,"Eb","maj"],[38,194,"F","min7"],[194,347,"Bb","maj"],[347,499,"Eb","maj/3"],[499,651,"Ab","maj"],[651,731,"Bb","maj"],[731,805,"B","dim"],[805,884,"C","min"],[884,909,"Bb","min7"],[909,961,"Eb","maj"],[961,1000,"Ab","maj"]],"005/001":[[0,1,"N","N"],[1,39,"Ab","maj"],[39,193,"F","min7"],[193,267,"Eb","maj"],[267,348,"Bb","maj"],[348,499,"Eb","maj"],[499,651,"Ab","maj"],[651,806,"Bb","maj"],[806,901,"C","min7"],[901,959,"Eb","maj"],[959,1001,"Ab","maj"]],"005/002":[[0,1,"N","N"],[1,38,"Eb","maj"],[38,81,"C","min"],[81,218,"F","min"],[218,382,"Bb","maj"],[382,502,"Eb","maj"],[502,679,"Ab","maj"],[679,769,"Bb","maj"],[769,810,"B","maj"],[810,974,"C","min"],[974,1001,"Ab","maj"]],"005/003":[[0,1,"N","N"],[1,50,"Ab","maj"],[50,189,"F","min7"],[189,269,"Eb","maj"],[269,348,"Bb","maj"],[348,498,"Eb","maj"],[498,655,"Ab","maj"],[655,765,"Bb","maj"],[765,803,"B","dim"],[803,885,"C","min"],[885,942,"Bb","maj"],[942,960,"Eb","maj"],[960,1001,"Ab","maj"]],"005/004":[[0,1,"N","N"],[1,142,"F","maj"],[142,205,"F","min7"],[205,262,"Eb","maj/5"],[262,388,"Bb","maj"],[388,427,"Ab","maj/3"],[427,538,"Eb","maj/3"],[538,656,"Ab","maj"],[656,748,"Bb","maj"],[748,808,"B","dim"],[808,882,"C","maj"],[882,930,"Bb","maj"],[930,960,"Eb","maj"],[960,1001,"Ab","maj"]]}]')}},m={};function i(e){var s=m[e];if(void 0!==s)return s.exports;var t=m[e]={exports:{}};return a[e].call(t.exports,t,t.exports,i),t.exports}i.m=a,function(){var a=[];i.O=function(m,e,s,t){if(!e){var n=1/0;for(l=0;l<a.length;l++){e=a[l][0],s=a[l][1],t=a[l][2];for(var r=!0,o=0;o<e.length;o++)(!1&t||n>=t)&&Object.keys(i.O).every((function(a){return i.O[a](e[o])}))?e.splice(o--,1):(r=!1,t<n&&(n=t));if(r){a.splice(l--,1);var j=s();void 0!==j&&(m=j)}}return m}t=t||0;for(var l=a.length;l>0&&a[l-1][2]>t;l--)a[l]=a[l-1];a[l]=[e,s,t]}}(),function(){i.n=function(a){var m=a&&a.__esModule?function(){return a["default"]}:function(){return a};return i.d(m,{a:m}),m}}(),function(){i.d=function(a,m){for(var e in m)i.o(m,e)&&!i.o(a,e)&&Object.defineProperty(a,e,{enumerable:!0,get:m[e]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){i.o=function(a,m){return Object.prototype.hasOwnProperty.call(a,m)}}(),function(){var a={143:0};i.O.j=function(m){return 0===a[m]};var m=function(m,e){var s,t,n=e[0],r=e[1],o=e[2],j=0;if(n.some((function(m){return 0!==a[m]}))){for(s in r)i.o(r,s)&&(i.m[s]=r[s]);if(o)var l=o(i)}for(m&&m(e);j<n.length;j++)t=n[j],i.o(a,t)&&a[t]&&a[t][0](),a[t]=0;return i.O(l)},e=self["webpackChunkcc_musicgen_demo"]=self["webpackChunkcc_musicgen_demo"]||[];e.forEach(m.bind(null,0)),e.push=m.bind(null,e.push.bind(e))}();var e=i.O(void 0,[998],(function(){return i(5701)}));e=i.O(e)})();
//# sourceMappingURL=app.c7ec6ef5.js.map