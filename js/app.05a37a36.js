(function(e){function t(t){for(var n,u,a=t[0],c=t[1],i=t[2],s=0,b=[];s<a.length;s++)u=a[s],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&b.push(r[u][0]),r[u]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);p&&p(t);while(b.length)b.shift()();return o.push.apply(o,i||[]),l()}function l(){for(var e,t=0;t<o.length;t++){for(var l=o[t],n=!0,a=1;a<l.length;a++){var c=l[a];0!==r[c]&&(n=!1)}n&&(o.splice(t--,1),e=u(u.s=l[0]))}return e}var n={},r={app:0},o=[];function u(t){if(n[t])return n[t].exports;var l=n[t]={i:t,l:!1,exports:{}};return e[t].call(l.exports,l,l.exports,u),l.l=!0,l.exports}u.m=e,u.c=n,u.d=function(e,t,l){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(u.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(l,n,function(t){return e[t]}.bind(null,n));return l},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/WebCalc/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var i=0;i<a.length;i++)t(a[i]);var p=c;o.push([0,"chunk-vendors"]),l()})({0:function(e,t,l){e.exports=l("56d7")},"56d7":function(e,t,l){"use strict";l.r(t);var n=l("7a23");const r=Object(n["d"])('<header class="header"><div class="jumbotron jumbotron-fluid-text-center"><h1>Calculator</h1><hr class="rule"><h6 class="lead">A simple calculator that performs Arithmetic,</h6><h6 class="lead">Trigonometric, and Exponential operations</h6></div></header>',1),o={id:"app"},u={class:"col-lg-5 offset-lg-4"},a=Object(n["e"])("label",{for:"num1",class:"lead"},"First Number",-1),c=Object(n["e"])("br",null,null,-1),i=Object(n["e"])("br",null,null,-1),p=Object(n["e"])("label",{for:"num2",class:"lead"},"Second Number",-1),s=Object(n["e"])("br",null,null,-1),b=Object(n["e"])("br",null,null,-1),d=Object(n["e"])("label",{for:"operation",class:"lead"},"Operation (Arithmetic/Trig)",-1),f=Object(n["e"])("br",null,null,-1),m=Object(n["e"])("br",null,null,-1),h=Object(n["e"])("br",null,null,-1),O=Object(n["e"])("br",null,null,-1);function j(e,t,l,j,v,y){return Object(n["f"])(),Object(n["c"])(n["a"],null,[r,Object(n["e"])("div",o,[Object(n["e"])("form",u,[a,c,Object(n["i"])(Object(n["e"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>v.num1=e),class:"form-control w-75",id:"num1",placeholder:"Number 1",required:"",autocomplete:"off"},null,512),[[n["h"],v.num1]]),i,p,s,Object(n["i"])(Object(n["e"])("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=e=>v.num2=e),class:"form-control w-75",id:"num2",placeholder:"Number 2",required:"",autocomplete:"off"},null,512),[[n["h"],v.num2]]),b,d,f,Object(n["i"])(Object(n["e"])("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=e=>v.operation=e),class:"form-control w-75",id:"num2",placeholder:"Operation",required:"",autocomplete:"off"},null,512),[[n["h"],v.operation]]),m,Object(n["e"])("button",{type:"button",class:"btn btn-primary btn-circle",onClick:t[4]||(t[4]=e=>y.calculateResult())},"Calculate Result"),h,O,Object(n["e"])("label",null,"Result: "+Object(n["g"])(v.result),1)])])],64)}var v=l("bc3a"),y=l.n(v);const g="https://webcalcapi.herokuapp.com/api";var w={name:"App",components:null,data(){return{num1:"",num2:"",operation:"",result:""}},methods:{calculateResult(){y()({method:"POST",url:g,data:JSON.stringify({num1:parseFloat(this.num1),num2:parseFloat(this.num2),operation:this.operation})}).then(e=>{console.log(e.data),this.result=e.data["res"]})}}};w.render=j;var x=w;Object(n["b"])(x).mount("#app")}});
//# sourceMappingURL=app.05a37a36.js.map