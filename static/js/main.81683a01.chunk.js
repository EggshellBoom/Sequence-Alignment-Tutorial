(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n.p+"static/media/Local.360dfd5b.png"},15:function(e,t,n){e.exports=n(24)},20:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(13),c=n.n(r),i=(n(20),n(2)),o=n(3),u=n(5),s=n(4),m=n(6),h=(n(7),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).handlescore=function(e,t,a){var l=n.state.score_matrix;l[t.toUpperCase()]=parseInt(e),l[a.toUpperCase()]=parseInt(e),n.setState({score_matrix:l})},n.state={Alignment:"Global Alignment",sequence1:[],sequence2:[],sequence1_str:"",sequence2_str:"",score_matrix:{AA:1,AT:-1,AC:-1,AG:-1,TA:-1,TT:1,TC:-1,TG:-1,CA:-1,CT:-1,CC:1,CG:-1,GA:-1,GT:-1,GC:-1,GG:1,GAP:-1}},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props.submit_seqence;return l.a.createElement("div",{className:"App"},l.a.createElement("h2",null,"Alignment Method, Sequence & Score Matrix "),l.a.createElement("form",{className:"input-form",onSubmit:function(n){console.log(n.target.value),n.preventDefault(),t(e.state.sequence1,e.state.sequence2,e.state.score_matrix,e.state.Alignment)}},l.a.createElement("div",{className:"divider"},l.a.createElement("select",{onChange:function(t){e.setState({Alignment:t.target.value})}},l.a.createElement("option",null,"Global Alignment"),l.a.createElement("option",null,"Fitting Alignment"),l.a.createElement("option",null,"Local Alignment")),l.a.createElement("div",{className:"divider_1"},"Sequence 1",l.a.createElement("input",{required:!0,title:"DNA string, please only input CAGT",pattern:"[CAGTcagt]+",value:this.state.sequence1_str,onChange:function(t){e.setState({sequence1_str:t.target.value.toUpperCase(),sequence1:["","",t.target.value.toUpperCase().split("")].flat()})}}),l.a.createElement("br",null),"Sequence 2",l.a.createElement("input",{required:!0,title:"DNA string, please only input CAGT",pattern:"[CAGTcagt]+",value:this.state.sequence2_str,onChange:function(t){e.setState({sequence2_str:t.target.value.toUpperCase(),sequence2:["",t.target.value.toUpperCase().split("")].flat()})}})),l.a.createElement("table",null,l.a.createElement("tr",null,l.a.createElement("th",null),l.a.createElement("th",null,"A"),l.a.createElement("th",null,"T"),l.a.createElement("th",null,"C"),l.a.createElement("th",null,"G")),l.a.createElement("tr",null,l.a.createElement("th",null,"A"),l.a.createElement("td",null,l.a.createElement("input",{type:"number",value:this.state.score_matrix.AA,min:"-50",max:"50",onChange:function(t){e.handlescore(t.target.value,"AA","AA")}})),l.a.createElement("td",null,l.a.createElement("input",{type:"number",value:this.state.score_matrix.AT,min:"-50",max:"50",onChange:function(t){e.handlescore(t.target.value,"at","ta")}})),l.a.createElement("td",null,l.a.createElement("input",{type:"number",value:this.state.score_matrix.AC,min:"-50",max:"50",onChange:function(t){e.handlescore(t.target.value,"ac","ca")}})),l.a.createElement("td",null,l.a.createElement("input",{type:"number",value:this.state.score_matrix.AG,min:"-50",max:"50",onChange:function(t){e.handlescore(t.target.value,"ag","ga")}}))),l.a.createElement("tr",null,l.a.createElement("th",null,"T"),l.a.createElement("td",null,l.a.createElement("input",{type:"number",value:this.state.score_matrix.TA,min:"-50",max:"50",onChange:function(t){e.handlescore(t.target.value,"ta","at")}})),l.a.createElement("td",null,l.a.createElement("input",{type:"number",value:this.state.score_matrix.TT,min:"-50",max:"50",onChange:function(t){e.handlescore(t.target.value,"tt","tt")}})),l.a.createElement("td",null,l.a.createElement("input",{type:"number",value:this.state.score_matrix.TC,min:"-50",max:"50",onChange:function(t){e.handlescore(t.target.value,"tc","ct")}})),l.a.createElement("td",null,l.a.createElement("input",{type:"number",value:this.state.score_matrix.TG,min:"-50",max:"50",onChange:function(t){e.handlescore(t.target.value,"tg","gt")}}))),l.a.createElement("tr",null,l.a.createElement("th",null,"C"),l.a.createElement("td",null,l.a.createElement("input",{type:"number",value:this.state.score_matrix.CA,min:"-50",max:"50",onChange:function(t){e.handlescore(t.target.value,"ca","ac")}})),l.a.createElement("td",null,l.a.createElement("input",{type:"number",value:this.state.score_matrix.CT,min:"-50",max:"50",onChange:function(t){e.handlescore(t.target.value,"ct","tc")}})),l.a.createElement("td",null,l.a.createElement("input",{type:"number",value:this.state.score_matrix.CC,min:"-50",max:"50",onChange:function(t){e.handlescore(t.target.value,"cc","cc")}})),l.a.createElement("td",null,l.a.createElement("input",{type:"number",value:this.state.score_matrix.CG,min:"-50",max:"50",onChange:function(t){e.handlescore(t.target.value,"cg","gc")}}))),l.a.createElement("tr",null,l.a.createElement("th",null,"G"),l.a.createElement("td",null,l.a.createElement("input",{type:"number",value:this.state.score_matrix.GA,min:"-50",max:"50",onChange:function(t){e.handlescore(t.target.value,"ga","ag")}})),l.a.createElement("td",null,l.a.createElement("input",{type:"number",value:this.state.score_matrix.GT,min:"-50",max:"50",onChange:function(t){e.handlescore(t.target.value,"gt","tg")}})),l.a.createElement("td",null,l.a.createElement("input",{type:"number",value:this.state.score_matrix.GC,min:"-50",max:"50",onChange:function(t){e.handlescore(t.target.value,"gc","cg")}})),l.a.createElement("td",null,l.a.createElement("input",{type:"number",value:this.state.score_matrix.GG,min:"-50",max:"50",onChange:function(t){e.handlescore(t.target.value,"gg","gg")}}))),l.a.createElement("tr",null,l.a.createElement("th",null,"GAP"),l.a.createElement("td",null),l.a.createElement("td",null),l.a.createElement("td",null),l.a.createElement("td",null,l.a.createElement("input",{type:"number",value:this.state.score_matrix.GAP,min:"-50",max:"50",onChange:function(t){e.handlescore(t.target.value,"GAP")}}))))),l.a.createElement("input",{type:"submit",className:"submit-button"})))}}]),t}(a.Component)),p=n(8),d=n.n(p),g=n(9),f=n.n(g),b=n(10),_=n.n(b),E=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).handleSelect=function(e){var t=n.props,a=t.Alignment,l=t.submit_recurrence;e===a?("Global Alignment"===a?n.setState({correct_1:!0,correct_2:!1,correct_3:!1}):"Fitting Alignment"===a?n.setState({correct_1:!1,correct_2:!0,correct_3:!1}):"Local Alignment"===a&&n.setState({correct_1:!1,correct_2:!1,correct_3:!0}),alert("Awesome! You are correct! Now you can click the Next button to proceed!"),l()):alert("The recurrence you chose is not ".concat(a,", click on the question mark if you need more info."))},n.state={correct_1:!1,correct_2:!1,correct_3:!1},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props.Alignment;return l.a.createElement("div",{className:"App"},l.a.createElement("h3",null,"Step1: Choose The Correct Recurrence For "),l.a.createElement("h2",null," ",t,"  "),l.a.createElement("div",{className:"divider_1"},l.a.createElement("div",{className:"select_window",backgroud:!0},l.a.createElement("button",{onClick:function(){e.handleSelect("Global Alignment")}}," Select "),l.a.createElement("img",{src:d.a,width:"500",height:"120"}),l.a.createElement("h1",{className:this.state.correct_1?"green_smile":""},": )")),l.a.createElement("div",{className:"select_window"},l.a.createElement("button",{onClick:function(){e.handleSelect("Fitting Alignment")}}," Select "),l.a.createElement("img",{src:f.a,width:"500",height:"150"}),l.a.createElement("h1",{className:this.state.correct_2?"green_smile":""},": )")),l.a.createElement("div",{className:"select_window"},l.a.createElement("button",{onClick:function(){e.handleSelect("Local Alignment")}}," Select "),l.a.createElement("img",{src:_.a,width:"500",height:"150"}),l.a.createElement("h1",{className:this.state.correct_3?"green_smile":""},": )"))))}}]),t}(a.Component),v=function(e){var t=e.Alignment;return"Global Alignment"===t?l.a.createElement("img",{className:"recurrence",src:d.a,width:"500",height:"120"}):"Fitting Alignment"===t?l.a.createElement("img",{className:"recurrence",src:f.a,width:"500",height:"150"}):"Local Alignment"===t?l.a.createElement("img",{className:"recurrence",src:_.a,width:"500",height:"150"}):l.a.createElement("div",null)},A=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).handleTable=function(e,t,a){var l=n.state.dp_table;l[t][a]=parseInt(e),n.setState({dp_table:l})},n.check=function(){var e,t,a=n.props,l=a.Alignment,r=a.dp_table_global,c=a.dp_table_local,i=a.dp_table_fitting,o=n.state.dp_table;if("Global Alignment"===l){for(t=0;t<o.length;t++)for(e=0;e<o[t].length;e++)if(null!==o[t][e]&&o[t][e]!==r[t][e])return alert("Your initialization is not correct,click the question mark for more info!"),!1;return alert("Awesome! You got it correct! Now you can click Next button to proceed"),!0}if("Fitting Alignment"===l){for(t=0;t<o.length;t++)for(e=0;e<o[t].length;e++)if(null!==o[t][e]&&o[t][e]!==i[t][e])return alert("Your initialization is not correct,click the question mark for more info!"),!1;return alert("Awesome! You got it correct! Now you can click Next button to proceed"),!0}if("Local Alignment"===l){for(t=0;t<o.length;t++)for(e=0;e<o[t].length;e++)if(null!==o[t][e]&&o[t][e]!==c[t][e])return alert("Your initialization is not correct,click the question mark for more info!"),!1;return alert("Awesome! You got it correct! Now you can click Next button to proceed"),!0}},n.state={dp_table:[]},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.dp_table;this.setState({dp_table:e})}},{key:"render",value:function(){var e=this,t=this.props,n=t.Alignment,a=t.sequence1,r=t.sequence2,c=(t.score_matrix,this.state.dp_table),i=a.flat().map(function(e){return l.a.createElement("th",null,e)}),o=c.map(function(t,n){return l.a.createElement("tr",null,l.a.createElement("th",null,r[n]),t.map(function(t,a){return l.a.createElement("td",null,l.a.createElement("input",{type:"number",value:c[n][a],onChange:function(t){e.handleTable(t.target.value,n,a)},min:"-99",max:"99",disabled:0!==n&&0!==a,required:!0}))}))});return l.a.createElement("div",{className:"App"},l.a.createElement("h3",null,"Step2: Initialize the DP table for"),l.a.createElement("h2",null," ",n),l.a.createElement("h5",null,"Consult the base case and the edge cases from the recurrence and correspond the values to the table."),l.a.createElement("div",{className:"divider_1"},l.a.createElement(v,{Alignment:n}),l.a.createElement("form",{onSubmit:function(t){console.log(t.target.value),t.preventDefault(),e.check()&&e.props.submit_initialization()}},l.a.createElement("table",null,l.a.createElement("tr",null,i),o),l.a.createElement("input",{type:"submit",className:"submit-button"}))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){if(e.dp_table!==t.dp_table)return{dp_table:e.dp_table}}}]),t}(a.Component),k=n(25),y=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).myElement=null,n.myTween=null,n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.val/5,t=this.props.max/5;this.myTween=new k.a({repeat:-1}).from(this.myElement,e,{}).to(this.myElement,.2,{color:"red"}).to(this.myElement,t-e,{}).to(this.myElement,.2,{color:"white"})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"box"},l.a.createElement("div",{ref:function(t){return e.myElement=t}}," ",this.props.val,"  "))}}]),t}(a.Component),N=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).handleSelect=function(e){"Right Down"===e||"Down Right"===e?(alert("Great, you got it correct! For dynamic programming, you should always start from the base case and go out the opposite direction as the recursion "),n.props.submit_direction()):alert("You are not correct. Click the question mark to see more info")},n.state={idx:Math.floor(5*Math.random())},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.Alignment,a=(t.sequence1,t.sequence2,t.DownRight),r=t.RightDown,c=t.UpLeft,i=t.LeftUp,o=t.RightUp,u=t.UpRight,s=t.DownLeft,m=t.LeftDown,h=(this.state.dp_table,m.map(function(e,t){return l.a.createElement("tr",null,e.map(function(e,n){return l.a.createElement("td",null,l.a.createElement(y,{val:m[t][n],max:m.length*m[0].length}))}))})),p=s.map(function(e,t){return l.a.createElement("tr",null,e.map(function(e,n){return l.a.createElement("td",null,l.a.createElement(y,{val:s[t][n],max:s.length*s[0].length}))}))}),d=u.map(function(e,t){return l.a.createElement("tr",null,e.map(function(e,n){return l.a.createElement("td",null,l.a.createElement(y,{val:u[t][n],max:u.length*u[0].length}))}))}),g=o.map(function(e,t){return l.a.createElement("tr",null,e.map(function(e,n){return l.a.createElement("td",null,l.a.createElement(y,{val:o[t][n],max:o.length*o[0].length}))}))}),f=i.map(function(e,t){return l.a.createElement("tr",null,e.map(function(e,n){return l.a.createElement("td",null,l.a.createElement(y,{val:i[t][n],max:i.length*i[0].length}))}))}),b=a.map(function(e,t){return l.a.createElement("tr",null,e.map(function(e,n){return l.a.createElement("td",null,l.a.createElement(y,{val:a[t][n],max:a.length*a[0].length}))}))}),_=r.map(function(e,t){return l.a.createElement("tr",null,e.map(function(e,n){return l.a.createElement("td",null,l.a.createElement(y,{val:r[t][n],max:r.length*r[0].length}))}))}),E=[c.map(function(e,t){return l.a.createElement("tr",null,e.map(function(e,n){return l.a.createElement("td",null,l.a.createElement(y,{val:c[t][n],max:c.length*c[0].length}))}))}),f,g,d,p,h];return l.a.createElement("div",{className:"App"},l.a.createElement("h3",null,"Step3: Select the direction to fill out the table"),l.a.createElement("h2",null," ",n),l.a.createElement("h5",null,"Consult the recurrence and the base case to find the flow to fill the table."),l.a.createElement(v,{Alignment:n}),l.a.createElement("div",{className:"divider"},l.a.createElement("div",{className:"divider_1"},l.a.createElement("table",{className:"directionTable"},_),l.a.createElement("button",{onClick:function(){return e.handleSelect("Right Down")}},"Select")),l.a.createElement("div",{className:"divider_1"},l.a.createElement("table",{className:"directionTable"},E[this.state.idx]),l.a.createElement("button",{onClick:function(){return e.handleSelect("wrong")}},"Select")),l.a.createElement("div",{className:"divider_1"},l.a.createElement("table",{className:"directionTable"},b),l.a.createElement("button",{onClick:function(){return e.handleSelect("Down Right")}},"Select"))))}}]),t}(a.Component),S=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).handleTable=function(e,t,a){var l=n.state.dp_table;l[t][a]=parseInt(e),n.setState({dp_table:l})},n.check=function(){var e,t,a=n.props,l=a.Alignment,r=a.dp_table_global,c=a.dp_table_local,i=a.dp_table_fitting,o=n.state.dp_table;if("Global Alignment"===l){for(t=0;t<o.length;t++)for(e=0;e<o[t].length;e++)if(o[t][e]!==r[t][e])return alert("Your table is not correct,click the question mark for more info!"),!1;return alert("Awesome! You got it correct! Now you can click Next button to proceed"),!0}if("Fitting Alignment"===l){for(t=0;t<o.length;t++)for(e=0;e<o[t].length;e++)if(o[t][e]!==i[t][e])return alert("Your table is not correct,click the question mark for more info!"),!1;return alert("Awesome! You got it correct! Now you can click Next button to proceed"),!0}if("Local Alignment"===l){for(t=0;t<o.length;t++)for(e=0;e<o[t].length;e++)if(o[t][e]!==c[t][e])return alert("Your table is not correct,click the question mark for more info!"),!1;return alert("Awesome! You got it correct! Now you can click Next button to proceed"),!0}},n.state={dp_table:[]},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.dp_table;this.setState({dp_table:e})}},{key:"render",value:function(){var e,t=this,n=this.props,a=n.Alignment,r=n.sequence1,c=n.sequence2,i=this.props,o=i.dp_table_global,u=i.dp_table_local,s=i.dp_table_fitting,m=this.state.dp_table;"Global Alignment"===a&&(e=o),"Fitting Alignment"===a&&(e=s),"Local Alignment"===a&&(e=u);var h=r.flat().map(function(e){return l.a.createElement("th",null,e)}),p=m.map(function(n,a){return l.a.createElement("tr",null,l.a.createElement("th",null,c[a]),n.map(function(n,r){return l.a.createElement("td",{className:m[a][r]===e[a][r]?"green":""},l.a.createElement("input",{type:"number",value:m[a][r],onChange:function(e){t.handleTable(e.target.value,a,r)},min:"-99",max:"99",readonly:(0===a||0===r)&&"readonly",required:!0}))}))});return l.a.createElement("div",{className:"App"},l.a.createElement("h3",null,"Step4: Complete the DP table for"),l.a.createElement("h2",null," ",a),l.a.createElement("h5",null,"Consult the recurrence and the direction you just chose,finish the table."),l.a.createElement("div",{className:"divider_1"},l.a.createElement(v,{Alignment:a}),l.a.createElement("form",{onSubmit:function(e){console.log(e.target.value),e.preventDefault(),t.check()&&t.props.submit_finish()}},l.a.createElement("table",null,l.a.createElement("tr",null,h),p),l.a.createElement("input",{type:"submit",className:"submit-button"}))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){if(e.dp_table!==t.dp_table)return{dp_table:e.dp_table}}}]),t}(a.Component),w=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"box"},l.a.createElement("div",{className:this.props.clickable?"yellow":""}," ",l.a.createElement("div",{className:this.props.clicked?"green":""},this.props.val," ")," "))}}]),t}(a.Component),C=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).handleRestart=function(){var e=n.state.empty;n.setState({clicked:JSON.parse(JSON.stringify(e)),BackTrace:JSON.parse(JSON.stringify(e)),clickable:JSON.parse(JSON.stringify(e)),first_click:!0,last_clicked:null})},n.handleClick=function(e,t){console.log(e,t);var a=n.state,l=a.first_click,r=a.last_clicked;a.first_clicked;if(l&&n.setState({first_clicked:[e,t]}),n.state.clickable[e][t]||l){var c=n.state.clicked,i=n.state.clickable,o=n.state.BackTrace;c[e][t]=!0,r&&(o[r[0]][r[1]]=[e,t],r[0]>=1&&(i[r[0]-1][r[1]]=!1),r[1]>=1&&(i[r[0]][r[1]-1]=!1),r[0]>=1&&r[1]>=1&&(i[r[0]-1][r[1]-1]=!1)),e>=1&&(i[e-1][t]=!0),t>=1&&(i[e][t-1]=!0),e>=1&&t>=1&&(i[e-1][t-1]=!0),n.setState({clicked:c,clickable:i,first_click:!1,last_clicked:[e,t]})}},n.check=function(){var e,t,a=n.props,l=a.Alignment,r=a.backtrace_fitting,c=a.backtrace_global,i=a.backtrace_local,o=a.dp_table,u=n.state,s=u.BackTrace,m=u.clicked,h=u.first_clicked,p=u.last_clicked;if("Global Alignment"===l){for(t=0;t<s.length;t++)for(e=0;e<s[t].length;e++){if(null!==s[t][e]&&!c[t][e].some(function(n){return n.length===s[t][e].length&&n.every(function(n,a){return n===s[t][e][a]})}))return alert("Your table is not correct,click the question mark for more info!"),console.log(c[t][e],s[t][e]),!1;if(0===e&&0===t&&!m[t][e])return alert("Your table is not correct,click the question mark for more info!"),!1;if(e===s[t].length-1&&t===s.length-1&&!m[t][e])return alert("Your table is not correct,click the question mark for more info!"),!1}return alert("Awesome! You got it correct! Now you can click Next button to proceed"),!0}if("Fitting Alignment"===l){var d=!1,g=-100;for(t=0;t<s.length;t++)for(e=0;e<s[t].length;e++){if(null!==s[t][e]&&!r[t][e].some(function(n){return n.length===s[t][e].length&&n.every(function(n,a){return n===s[t][e][a]})}))return alert("Your table is not correct,click the question mark for more info!"),console.log(r[t][e],s[t][e]),!1;0===t&&m[t][e]&&(d=!0),t===s.length-1&&o[t][e]>g&&(g=o[t][e])}return d&&o[h[0]][h[1]]===g?(alert("Awesome! You got it correct! Now you can click Next button to proceed"),!0):(alert("Your table is not correct,click the question mark for more info!"),!1)}if("Local Alignment"===l){for(d=!1,g=-100,t=0;t<s.length;t++)for(e=0;e<s[t].length;e++){if(null!==s[t][e]&&!i[t][e].some(function(n){return n.length===s[t][e].length&&n.every(function(n,a){return n===s[t][e][a]})}))return alert("Your table is not correct,click the question mark for more info!"),console.log(i[t][e],s[t][e]),!1;o[t][e]>g&&(g=o[t][e])}return 0===o[p[0]][p[1]]&&o[h[0]][h[1]]===g?(alert("Awesome! You got it correct! Now you can click Next button to proceed"),!0):(alert("Your table is not correct,click the question mark for more info!"),!1)}},n.handleSubmit=function(){n.check()&&n.props.submit_backtrace(n.state.BackTrace,n.state.clicked,n.state.first_clicked,n.state.last_clicked)},n.state={dp_table:[],BackTrace:[],clicked:[],clickable:[],empty:[],first_click:!0,last_clicked:null,first_clicked:null},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.dp_table;this.setState({dp_table:e})}},{key:"render",value:function(){var e=this,t=this.props,n=t.Alignment,a=t.sequence1,r=t.sequence2,c=this.state,i=c.dp_table,o=c.clickable,u=c.clicked,s=a.flat().map(function(e){return l.a.createElement("th",null,e)}),m=i.map(function(t,n){return l.a.createElement("tr",null,l.a.createElement("th",null,r[n]),t.map(function(t,a){return l.a.createElement("td",{onClick:function(){return e.handleClick(n,a)}},l.a.createElement(w,{clicked:u[n][a],clickable:o[n][a],val:i[n][a]}))}))});return l.a.createElement("div",{className:"App"},l.a.createElement("h3",null,"Step5: Perform BackTrace on the dp table"),l.a.createElement("h2",null," ",n),l.a.createElement("h5",null,"First click the final score of the alignment, then click the yellow area to backtrace step by step"),l.a.createElement("div",{className:"divider_1"},l.a.createElement(v,{Alignment:n}),l.a.createElement("table",null,l.a.createElement("tr",null,s),m),l.a.createElement("button",{onClick:this.handleRestart},"Restart"),l.a.createElement("button",{onClick:this.handleSubmit},"Submit")))}}],[{key:"getDerivedStateFromProps",value:function(e,t){if(e.dp_table!==t.dp_table){var n=Array(e.dp_table.length).fill(null).map(function(){return Array(e.dp_table[0].length).fill(null)}),a=Array(e.dp_table.length).fill(null).map(function(){return Array(e.dp_table[0].length).fill(null)}),l=Array(e.dp_table.length).fill(null).map(function(){return Array(e.dp_table[0].length).fill(null)}),r=Array(e.dp_table.length).fill(null).map(function(){return Array(e.dp_table[0].length).fill(null)});return{dp_table:e.dp_table,clicked:n,BackTrace:a,clickable:l,empty:r}}}}]),t}(a.Component),O=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).handleAlign=function(e,t,a){var l,r=n.state,c=r.Alignment1,i=r.Alignment2;0===t&&((l=c)[a]=e,n.setState({Alignment1:l})),1===t&&((l=i)[a]=e,n.setState({Alignment2:l}))},n.check=function(){var e=n.props,t=e.ans_Alignment1,a=e.ans_Alignment2,l=n.state,r=l.Alignment1,c=l.Alignment2;return n.seqencecheck(t,r)&&n.seqencecheck(a,c)?(alert("Congrats!!!!"),!0):n.seqencecheck(t,c)&&n.seqencecheck(a,r)?(alert("Congrats!!!!"),!0):(alert("Wrong!"),!1)},n.handleSubmit=function(){n.check()&&(console.log("checked"),n.setState({finished:!0}))},n.myElement=null,n.myTween=null,n.state={Alignment1:Array(50).fill(""),Alignment2:Array(50).fill(""),finished:!1},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.myTween=new k.a({repeat:-1}).from(this.myElement,2,{rotation:"+=360"}).to(this.myElement,2,{fontSize:100})}},{key:"seqencecheck",value:function(e,t){var n;for(console.log(e,t),n=0;n<e.length;n++)if(e[n]!==t[n])return console.log(e[n],t[void 0]),!1;return!0}},{key:"render",value:function(){var e=this,t=this.props,n=t.Alignment,a=t.ans_Alignment1,r=t.sequence1,c=t.sequence2,i=this.props,o=i.dp_table,u=i.clicked,s=r.flat().map(function(e){return l.a.createElement("th",null,e)}),m=a.map(function(t,n){return l.a.createElement("div",{className:"Alignment"},l.a.createElement("select",{onChange:function(t){e.handleAlign(t.target.value,0,n)}},l.a.createElement("option",null,"  "),l.a.createElement("option",null," C "),l.a.createElement("option",null," A "),l.a.createElement("option",null," G "),l.a.createElement("option",null," T "),l.a.createElement("option",null,"---")),l.a.createElement("select",{onChange:function(t){e.handleAlign(t.target.value,1,n)}},l.a.createElement("option",null,"  "),l.a.createElement("option",null," C "),l.a.createElement("option",null," A "),l.a.createElement("option",null," G "),l.a.createElement("option",null," T "),l.a.createElement("option",null,"---")))}),h=u.map(function(e,t){return l.a.createElement("tr",null,l.a.createElement("th",null,c[t]),e.map(function(e,n){return l.a.createElement("td",null,l.a.createElement(w,{clicked:u[t][n],val:o[t][n]}))}))});return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:this.state.finished?"":"hidden",ref:function(t){return e.myElement=t}}," ",l.a.createElement("h1",null,"Great Work!!"),"  "),l.a.createElement("div",{className:this.state.finished?"hidden":""},l.a.createElement("h3",null,"Step6: Final Alignment"),l.a.createElement("h2",null," ",n),l.a.createElement("h5",null,"Give the final Alignment according to the BackTrace"),l.a.createElement("div",{className:"divider_1"},l.a.createElement("div",{className:"divider"},l.a.createElement(v,{Alignment:n})),l.a.createElement("div",{className:"Alignmentdivider_1"},l.a.createElement("table",null,l.a.createElement("tr",null,s),h),l.a.createElement("div",null,l.a.createElement("div",{className:"Alignmentdivider"},m),l.a.createElement("button",{onClick:this.handleSubmit},"Submit"))),l.a.createElement("div",null))))}}]),t}(a.Component),x=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).GetAlignment=function(e,t,a){var l=[],r=[],c=[],i=n.state,o=i.sequence1,u=i.sequence2;for(c=t;c[0]!==e[0]||c[1]!==e[1];)console.log(c),a[c[0]+1][c[1]+1]?(l.push(o[c[1]+2]),r.push(u[c[0]+1]),c=[c[0]+1,c[1]+1]):a[c[0]][c[1]+1]?(l.push(o[c[1]+2]),r.push("---"),c=[c[0],c[1]+1]):a[c[0]+1][c[1]]&&(l.push("---"),r.push(u[c[0]+1]),c=[c[0]+1,c[1]]),console.log("Alignment1",l),console.log("Alignment2",r);n.setState({Alignment1:l,Alignment2:r})},n.MapDirections=function(){var e,t,a=Array(5).fill(null).map(function(){return Array(4).fill(null)}),l=JSON.parse(JSON.stringify(a)),r=JSON.parse(JSON.stringify(a)),c=JSON.parse(JSON.stringify(a)),i=JSON.parse(JSON.stringify(a)),o=JSON.parse(JSON.stringify(a)),u=JSON.parse(JSON.stringify(a)),s=JSON.parse(JSON.stringify(a)),m=JSON.parse(JSON.stringify(a)),h=0;for(t=0;t<r.length;t++)for(e=0;e<r[0].length;e++)r[t][e]=h,h+=1;for(h=0,e=0;e<l[0].length;e++)for(t=0;t<l.length;t++)l[t][e]=h,h+=1;for(h=0,e=c[0].length-1;e>=0;e--)for(t=c.length-1;t>=0;t--)c[t][e]=h,h+=1;for(h=0,t=i.length-1;t>=0;t--)for(e=i[0].length-1;e>=0;e--)i[t][e]=h,h+=1;for(h=0,t=i.length-1;t>=0;t--)for(e=0;e<o[0].length;e++)o[t][e]=h,h+=1;for(h=0,e=0;e<u[0].length;e++)for(t=u.length-1;t>=0;t--)u[t][e]=h,h+=1;for(h=0,e=s[0].length-1;e>=0;e--)for(t=0;t<s.length;t++)s[t][e]=h,h+=1;for(h=0,t=0;t<m.length;t++)for(e=m[0].length-1;e>=0;e--)m[t][e]=h,h+=1;console.log(l,r,c,i,o,u,s,m),n.setState({DownRight:l,RightDown:r,UpLeft:c,LeftUp:i,RightUp:o,UpRight:u,DownLeft:s,LeftDown:m})},n.GlobalAlignment=function(e,t,a,l){var r,c,i=JSON.parse(JSON.stringify(e)),o=JSON.parse(JSON.stringify(e));for(c=0;c<i.length;c++)for(r=0;r<i[c].length;r++)0===r&&0===c&&(i[c][r]=0,o[c][r]=[[0]]),r>0&&(null==i[c][r]?(i[c][r]=i[c][r-1]+t.GAP,o[c][r]=[[c,r-1]]):i[c][r]<i[c][r-1]+t.GAP?(i[c][r]=i[c][r-1]+t.GAP,o[c][r]=[[c,r-1]]):i[c][r]===i[c][r-1]+t.GAP&&o[c][r].push([c,r-1])),c>0&&(null==i[c][r]?(i[c][r]=i[c-1][r]+t.GAP,o[c][r]=[[c-1,r]]):i[c][r]<i[c-1][r]+t.GAP?(i[c][r]=i[c-1][r]+t.GAP,o[c][r]=[[c-1,r]]):i[c][r]===i[c-1][r]+t.GAP&&o[c][r].push([c-1,r])),r>0&&c>0&&(i[c][r]<i[c-1][r-1]+t[a[r+1]+l[c]]?(i[c][r]=i[c-1][r-1]+t[a[r+1]+l[c]],o[c][r]=[[c-1,r-1]]):i[c][r]===i[c-1][r-1]+t[a[r+1]+l[c]]&&o[c][r].push([c-1,r-1]));console.log(o),n.setState({dp_table_global:i,backtrace_global:o})},n.FittingAlignment=function(e,t,a,l){var r,c,i=JSON.parse(JSON.stringify(e)),o=JSON.parse(JSON.stringify(e));for(c=0;c<i.length;c++)for(r=0;r<i[c].length;r++)0===c&&(i[c][r]=0,o[c][r]=[[0]]),r>0&&c>0&&(null==i[c][r]?(i[c][r]=i[c][r-1]+t.GAP,o[c][r]=[[c,r-1]]):i[c][r]<i[c][r-1]+t.GAP?(i[c][r]=i[c][r-1]+t.GAP,o[c][r]=[[c,r-1]]):i[c][r]===i[c][r-1]+t.GAP&&o[c][r].push([c,r-1])),c>0&&(null==i[c][r]?(i[c][r]=i[c-1][r]+t.GAP,o[c][r]=[[c-1,r]]):i[c][r]<i[c-1][r]+t.GAP?(i[c][r]=i[c-1][r]+t.GAP,o[c][r]=[[c-1,r]]):i[c][r]===i[c-1][r]+t.GAP&&o[c][r].push([c-1,r])),r>0&&c>0&&(i[c][r]<i[c-1][r-1]+t[a[r+1]+l[c]]?(i[c][r]=i[c-1][r-1]+t[a[r+1]+l[c]],o[c][r]=[[c-1,r-1]]):i[c][r]===i[c-1][r-1]+t[a[r+1]+l[c]]&&o[c][r].push([c-1,r-1]));console.log(o),n.setState({dp_table_fitting:i,backtrace_fitting:o})},n.LocalAlignment=function(e,t,a,l){var r,c,i=JSON.parse(JSON.stringify(e)),o=JSON.parse(JSON.stringify(e));for(c=0;c<i.length;c++)for(r=0;r<i[c].length;r++)i[c][r]=0,o[c][r]=[[0]],r>0&&(null==i[c][r]?(i[c][r]=i[c][r-1]+t.GAP,o[c][r]=[[c,r-1]]):i[c][r]<i[c][r-1]+t.GAP?(i[c][r]=i[c][r-1]+t.GAP,o[c][r]=[[c,r-1]]):i[c][r]===i[c][r-1]+t.GAP&&o[c][r].push([c,r-1])),r>0&&c>0&&(null==i[c][r]?(i[c][r]=i[c-1][r]+t.GAP,o[c][r]=[[c-1,r]]):i[c][r]<i[c-1][r]+t.GAP?(i[c][r]=i[c-1][r]+t.GAP,o[c][r]=[[c-1,r]]):i[c][r]===i[c-1][r]+t.GAP&&o[c][r].push([c-1,r])),r>0&&c>0&&(i[c][r]<i[c-1][r-1]+t[a[r+1]+l[c]]?(i[c][r]=i[c-1][r-1]+t[a[r+1]+l[c]],o[c][r]=[[c-1,r-1]]):i[c][r]<i[c-1][r-1]+t[a[r+1]+l[c]]&&o[c][r].push([c-1,r-1]));console.log(o),n.setState({dp_table_local:i,backtrace_local:o})},n.handleNext=function(){var e=n.state,t=e.current_step;if(e.allowed_step>t){var a=t+1;n.setState({current_step:a})}},n.handlePrev=function(){var e=n.state.current_step;if(e>0){var t=e-1;n.setState({current_step:t})}},n.submit_seqence=function(e,t,a,l){console.log(e,t,a,l);var r=n.state.allowed_step,c=r,i=Array(t.length).fill(null).map(function(){return Array(e.length-1).fill(null)});r<1&&(c=1),n.GlobalAlignment(i,a,e,t),n.FittingAlignment(i,a,e,t),n.LocalAlignment(i,a,e,t),n.MapDirections(i),n.setState({sequence1:e,sequence2:t,score_matrix:a,Alignment:l,allowed_step:c,dp_table:i}),alert("Sequence Inputs Submitted! Please click Next button to proceed!")},n.submit_recurrence=function(){var e=n.state.allowed_step,t=e;e<2&&(t=2),n.setState({allowed_step:t})},n.submit_initialization=function(){var e=n.state.allowed_step,t=e;e<3&&(t=3),n.setState({allowed_step:t})},n.submit_direction=function(){var e=n.state.allowed_step,t=e;e<4&&(t=4),n.setState({allowed_step:t})},n.submit_finish=function(){var e=n.state.allowed_step,t=e;e<5&&(t=5),n.setState({allowed_step:t})},n.submit_backtrace=function(e,t,a,l){var r=n.state.allowed_step,c=r;r<6&&(c=6),n.setState({allowed_step:c,BackTrace:e,clicked:t,first_clicked:a,last_clicked:l}),n.GetAlignment(a,l,t)},n.state={Alignment:null,sequence1:[],sequence2:[],dp_table:[],dp_table_global:[],dp_table_fitting:[],dp_table_local:[],backtrace_fitting:[],backtrace_global:[],backtrace_local:[],DownRight:[],RightDown:[],UpLeft:[],LeftUp:[],RightUp:[],UpRight:[],DownLeft:[],LeftDown:[],BackTrace:[],clicked:[],first_clicked:[],last_clicked:[],Alignment1:[],Alignment2:[],score_matrix:null,current_step:0,allowed_step:0},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.Alignment,n=e.sequence1,a=e.sequence2,r=e.score_matrix,c=e.current_step,i=e.allowed_step,o=e.dp_table,u=e.dp_table_fitting,s=e.dp_table_global,m=e.dp_table_local,p=e.DownRight,d=e.RightDown,g=e.UpLeft,f=e.LeftUp,b=e.RightUp,_=e.UpRight,v=e.DownLeft,k=e.LeftDown,y=e.backtrace_fitting,w=e.backtrace_global,x=e.backtrace_local,q=e.clicked,G=e.first_clicked,j=e.last_clicked,T=e.Alignment1,D=e.Alignment2;return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("button",{disabled:!(c>0),onClick:this.handlePrev},"Back"),l.a.createElement("section",{className:0===c?"":"hidden"},l.a.createElement(h,{submit_seqence:this.submit_seqence})),l.a.createElement("section",{className:1===c?"":"hidden"},l.a.createElement(E,{Alignment:t,submit_recurrence:this.submit_recurrence})),l.a.createElement("section",{className:2===c?"":"hidden"},l.a.createElement(A,{Alignment:t,dp_table:o,submit_recurrence:this.submit_recurrence,sequence1:n,sequence2:a,dp_table_global:s,dp_table_fitting:u,dp_table_local:m,score_matrix:r,submit_initialization:this.submit_initialization})),l.a.createElement("section",{className:3===c?"":"hidden"},l.a.createElement(N,{Alignment:t,dp_table:o,submit_recurrence:this.submit_recurrence,sequence1:n,sequence2:a,DownRight:p,RightDown:d,UpLeft:g,LeftUp:f,RightUp:b,UpRight:_,DownLeft:v,LeftDown:k,submit_direction:this.submit_direction})),l.a.createElement("section",{className:4===c?"":"hidden"},l.a.createElement(S,{Alignment:t,dp_table:o,submit_recurrence:this.submit_recurrence,sequence1:n,sequence2:a,dp_table_global:s,dp_table_fitting:u,dp_table_local:m,score_matrix:r,submit_finish:this.submit_finish})),l.a.createElement("section",{className:5===c?"":"hidden"},l.a.createElement(C,{Alignment:t,dp_table:o,submit_recurrence:this.submit_recurrence,sequence1:n,sequence2:a,dp_table_global:s,dp_table_fitting:u,dp_table_local:m,score_matrix:r,backtrace_fitting:y,backtrace_global:w,backtrace_local:x,submit_backtrace:this.submit_backtrace})),l.a.createElement("section",{className:6===c?"":"hidden"},l.a.createElement(O,{Alignment:t,dp_table:o,submit_recurrence:this.submit_recurrence,sequence1:n,sequence2:a,dp_table_global:s,dp_table_fitting:u,dp_table_local:m,score_matrix:r,backtrace_fitting:y,backtrace_global:w,backtrace_local:x,submit_backtrace:this.submit_backtrace,first_clicked:G,last_clicked:j,clicked:q,ans_Alignment1:T,ans_Alignment2:D})),l.a.createElement("button",{disabled:!(c<i),onClick:this.handleNext},"Next")))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e,t,n){},8:function(e,t,n){e.exports=n.p+"static/media/Global.e2fff51c.png"},9:function(e,t,n){e.exports=n.p+"static/media/Fitting.edd622f2.png"}},[[15,2,1]]]);
//# sourceMappingURL=main.81683a01.chunk.js.map