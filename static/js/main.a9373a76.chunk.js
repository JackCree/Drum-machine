(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var r=a(2),s=a.n(r),i=a(8),o=a.n(i),n=a(3),c=a(4),d=a(1),l=a(6),p=a(5),m=a(0),u=[{keyCode:81,keyTrigger:"Q",id:"Heater-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{keyCode:87,keyTrigger:"S",id:"Heater-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{keyCode:69,keyTrigger:"E",id:"Heater-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{keyCode:65,keyTrigger:"A",id:"Heater-4",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{keyCode:83,keyTrigger:"S",id:"Clap",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{keyCode:68,keyTrigger:"D",id:"open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{keyCode:90,keyTrigger:"Z",id:"Kick-n-Hat",url:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{keyCode:88,keyTrigger:"X",id:"Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}],h=[{keyCode:81,keyTrigger:"Q",id:"Chord-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"},{keyCode:87,keyTrigger:"S",id:"Chord-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"},{keyCode:69,keyTrigger:"E",id:"Chord-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"},{keyCode:65,keyTrigger:"A",id:"Shaker",url:"https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"},{keyCode:83,keyTrigger:"S",id:"Open-HH-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"},{keyCode:68,keyTrigger:"D",id:"Closed-HH-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"},{keyCode:90,keyTrigger:"Z",id:"Punchy-Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"},{keyCode:88,keyTrigger:"X",id:"Side-Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Snare",url:"https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"}],y={backgroundColor:"orange",boxShadow:"0 3px orange",height:77,marginTop:13},k={backgroundColor:"grey",marginTop:10,boxShadow:"3px 0px 5px black"},g=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={padStyle:k},r.playSound=r.playSound.bind(Object(d.a)(r)),r.handleKeyPress=r.handleKeyPress.bind(Object(d.a)(r)),r.activatePad=r.activatePad.bind(Object(d.a)(r)),r}return Object(c.a)(a,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyPress)}},{key:"handleKeyPress",value:function(e){e.keyCode===this.props.keyCode&&this.playSound()}},{key:"activatePad",value:function(){this.props.power?"orange"===this.state.padStyle.backgroundColor?this.setState({padStyle:k}):this.setState({padStyle:y}):13===this.state.padStyle.marginTop?this.setState({padStyle:k}):this.setState({padStyle:{height:77,marginTop:13,backgroundColor:"grey",boxShadow:"0 3px grey"}})}},{key:"playSound",value:function(){var e=this,t=document.getElementById(this.props.keyTrigger);t.currentTime=0,t.play(),this.activatePad(),setTimeout((function(){return e.activatePad()}),100),this.props.updateDisplay(this.props.clipId.replace(/-/g," "))}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"drum-pad",id:this.props.clipId,onClick:this.playSound,style:this.state.padStyle,children:[Object(m.jsx)("audio",{className:"clip",id:this.props.keyTrigger,src:this.props.clip}),this.props.keyTrigger]})}}]),a}(s.a.Component),j=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(e){return Object(n.a)(this,a),t.call(this,e)}return Object(c.a)(a,[{key:"render",value:function(){var e,t=this;return e=this.props.power?this.props.currentPadBank.map((function(e,a,r){return Object(m.jsx)(g,{clip:r[a].url,clipId:r[a].id,keyCode:r[a].keyCode,keyTrigger:r[a].keyTrigger,power:t.props.power,updateDisplay:t.props.updateDisplay})})):this.props.currentPadBank.map((function(e,a,r){return Object(m.jsx)(g,{clip:"#",clipId:r[a].id,keyCode:r[a].keyCode,keyTrigger:r[a].keyTrigger,power:t.props.power,updateDisplay:t.props.updateDisplay})})),Object(m.jsx)("div",{className:"pad-bank",children:e})}}]),a}(s.a.Component),C=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={power:!0,display:String.fromCharCode(160),currentPadBank:u,currentPadBankId:"Heater Kit",sliderVal:.3},r.displayClipName=r.displayClipName.bind(Object(d.a)(r)),r.selectBank=r.selectBank.bind(Object(d.a)(r)),r.adjustVolume=r.adjustVolume.bind(Object(d.a)(r)),r.powerControl=r.powerControl.bind(Object(d.a)(r)),r.clearDisplay=r.clearDisplay.bind(Object(d.a)(r)),r}return Object(c.a)(a,[{key:"powerControl",value:function(){this.setState({power:!this.state.power,display:String.fromCharCode(160)})}},{key:"selectBank",value:function(){this.state.power&&("Heater Kit"===this.state.currentPadBankId?this.setState({currentPadBank:h,display:"Smooth Piano Kit",currentPadBankId:"Smooth Piano Kit"}):this.setState({currentPadBank:u,display:"Heater Kit",currentPadBankId:"Heater Kit"}))}},{key:"displayClipName",value:function(e){this.state.power&&this.setState({display:e})}},{key:"adjustVolume",value:function(e){var t=this;this.state.power&&(this.setState({sliderVal:e.target.value,display:"Volume: "+Math.round(100*e.target.value)}),setTimeout((function(){return t.clearDisplay()}),1e3))}},{key:"clearDisplay",value:function(){this.setState({display:String.fromCharCode(160)})}},{key:"render",value:function(){var e=this,t=this.state.power?{float:"right"}:{float:"left"},a=this.state.currentPadBank===u?{float:"left"}:{float:"right"};return[].slice.call(document.getElementsByClassName("clip")).forEach((function(t){t.volume=e.state.sliderVal})),Object(m.jsxs)("div",{className:"inner-container",id:"drum-machine",children:[Object(m.jsx)(j,{clipVolume:this.state.sliderVal,currentPadBank:this.state.currentPadBank,power:this.state.power,updateDisplay:this.displayClipName}),Object(m.jsxs)("div",{className:"logo",children:[Object(m.jsx)("div",{className:"inner-logo ",children:"FCC"+String.fromCharCode(160)}),Object(m.jsx)("i",{className:"inner-logo fa fa-free-code-camp"})]}),Object(m.jsxs)("div",{className:"controls-container",children:[Object(m.jsxs)("div",{className:"control",children:[Object(m.jsx)("p",{children:"Power"}),Object(m.jsx)("div",{className:"select",onClick:this.powerControl,children:Object(m.jsx)("div",{className:"inner",style:t})})]}),Object(m.jsx)("p",{id:"display",children:this.state.display}),Object(m.jsx)("div",{className:"volume-slider",children:Object(m.jsx)("input",{max:"1",min:"0",onChange:this.adjustVolume,step:"0.01",type:"range",value:this.state.sliderVal})}),Object(m.jsxs)("div",{className:"control",children:[Object(m.jsx)("p",{children:"Bank"}),Object(m.jsx)("div",{className:"select",onClick:this.selectBank,children:Object(m.jsx)("div",{className:"inner",style:a})})]})]})]})}}]),a}(s.a.Component),b=(a(14),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then((function(t){var a=t.getCLS,r=t.getFID,s=t.getFCP,i=t.getLCP,o=t.getTTFB;a(e),r(e),s(e),i(e),o(e)}))});o.a.render(Object(m.jsx)(C,{}),document.getElementById("root")),b()}},[[15,1,2]]]);
//# sourceMappingURL=main.a9373a76.chunk.js.map