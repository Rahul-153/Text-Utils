(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),c=a.n(r),o=(a(10),a(1)),s=(a(12),a(4)),i=a.n(s);function m(e){return l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"#"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"#"},"Home"))),l.a.createElement("div",{className:"form-check form-switch ".concat(e.darkText)},l.a.createElement("input",{className:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckDefault",onClick:e.toggleMode}),l.a.createElement("label",{className:"form-check-label-light",for:"flexSwitchCheckDefault"},"Enable DarkMode"))))))}m.protoTypes={title:i.a.string};var u=m;var d=function(e){var t,a=Object(n.useState)(""),r=Object(o.a)(a,2),c=r[0],s=r[1];return l.a.createElement("div",{style:{color:"dark"===e.mode?"white":"black"}},l.a.createElement("div",{className:"container my-3"},l.a.createElement("h1",null,e.heading),l.a.createElement("div",{className:"mb-3"},l.a.createElement("textarea",{className:"form-control",id:"myBox",rows:"8",value:c,onChange:function(e){console.log("handle on change"),s(e.target.value)},style:{backgroundColor:"dark"===e.mode?"#325885":"white",color:"dark"===e.mode?"white":"black"}})),l.a.createElement("button",{className:"btn btn-primary mx-2",onClick:function(){console.log("handle on onclick"),t=c.toUpperCase(),document.querySelector(".preview-text").innerHTML=t,e.showAlert("Text converted to UpperCase","success")}},"Convert to Uppercase"),l.a.createElement("button",{className:"btn btn-primary mx-2",onClick:function(){console.log("handle on onclick"),t=c.toLowerCase(),document.querySelector(".preview-text").innerHTML=t,e.showAlert("Text converted to LowerCase","success")}},"Convert to Lowercase"),l.a.createElement("button",{className:"btn btn-primary mx-2",onClick:function(){var t=document.querySelector("#myBox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Copied to clipboard","success")}},"Copy Text")),l.a.createElement("div",{className:"container my-3"},l.a.createElement("h3",null,"Text Summary"),l.a.createElement("p",{className:"text-sum"},c.split(" ").length," words and ",c.length," characters")),l.a.createElement("div",{className:"container my-3"},l.a.createElement("h3",null,"Preview Your Text"),l.a.createElement("p",{className:"preview-text"})))};var b=function(e){return e.alert&&l.a.createElement("div",null,l.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},l.a.createElement("strong",null,function(e){var t=e.toLowerCase();return t.charAt("0").toUpperCase()+t.slice(1)}(e.alert.type)),": ",e.alert.msg))};var v=function(){var e=Object(n.useState)("light"),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),s=Object(o.a)(c,2),i=s[0],m=s[1],v=Object(n.useState)(null),p=Object(o.a)(v,2),g=p[0],h=p[1],E=function(e,t){h({msg:e,type:t}),setTimeout(function(){h(null)},2e3)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(u,{title:"Textutils",mode:a,toggleMode:function(){"dark"===a?(r("light"),m(""),document.body.style.backgroundColor="white",E("Light mode is enabled","success")):(r("dark"),m("text-light"),document.body.style.backgroundColor="#325885",E("Dark mode is enabled","success"))},darkText:i}),l.a.createElement(b,{alert:g}),l.a.createElement(d,{heading:"Enter the text to analyze",mode:a,showAlert:E}))},p=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,17)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),l(e),r(e),c(e)})};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(v,null)),document.getElementById("root")),p()},5:function(e,t,a){e.exports=a(16)}},[[5,3,2]]]);
//# sourceMappingURL=main.2401514f.chunk.js.map