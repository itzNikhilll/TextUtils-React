(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{22:function(e,t,a){},23:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(15),r=a.n(n),o=(a(22),a(10)),l=(a(23),a(0));function i(e){var t={color:"dark"===e.mode?"white":"#042743",backgroundColor:"dark"===e.mode?"rgb(36 74 104)":"white"};return Object(l.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(l.jsx)("h1",{className:"my-3",children:"About Us"}),Object(l.jsxs)("div",{className:"accordion",id:"accordionExample",children:[Object(l.jsxs)("div",{className:"accordion-item",children:[Object(l.jsx)("h2",{className:"accordion-header",id:"headingOne",children:Object(l.jsx)("button",{className:"accordion-button",type:"button",style:t,"data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",children:Object(l.jsx)("strong",{children:"Analyze Your text "})})}),Object(l.jsx)("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:Object(l.jsx)("div",{className:"accordion-body",style:t,children:"Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or minutes read or much more."})})]}),Object(l.jsxs)("div",{className:"accordion-item",children:[Object(l.jsx)("h2",{className:"accordion-header",id:"headingTwo",children:Object(l.jsx)("button",{className:"accordion-button collapsed",style:t,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",children:Object(l.jsx)("strong",{children:"Free to use "})})}),Object(l.jsx)("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample",children:Object(l.jsx)("div",{className:"accordion-body",style:t,children:"TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.            "})})]}),Object(l.jsxs)("div",{className:"accordion-item",children:[Object(l.jsx)("h2",{className:"accordion-header",id:"headingThree",children:Object(l.jsx)("button",{className:"accordion-button collapsed",style:t,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",children:Object(l.jsx)("strong",{children:"Browser Compatible "})})}),Object(l.jsx)("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample",children:Object(l.jsx)("div",{className:"accordion-body",style:t,children:"This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.            "})})]})]})]})}var d=a(8);function b(e){return Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)(d.b,{className:"navbar-brand",to:"/",children:e.title}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(l.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(d.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(d.b,{className:"nav-link",to:"/about",children:e.aboutText})})]}),Object(l.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(l.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(l.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Toggle Theme"})]})]})]})})}function h(e){var t=Object(c.useState)(""),a=Object(o.a)(t,2),s=a[0],n=a[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(l.jsx)("h1",{children:e.heading}),Object(l.jsx)("div",{className:"mb-3",children:Object(l.jsx)("textarea",{className:"form-control",value:s,onChange:function(e){n(e.target.value)},style:{backgroundColor:"dark"===e.mode?"#13466e":"white",color:"dark"===e.mode?"white":"#042743"},id:"myBox",rows:"5"})}),Object(l.jsx)("button",{disabled:0===s.length,className:"btn btn-primary mx-2 my-1",onClick:function(){console.log("Uppercase was clicked");var t=s.toUpperCase();n(t),e.showAlert("Converted to Uppercase!","success")},children:"Convert to Uppercase"}),Object(l.jsx)("button",{disabled:0===s.length,className:"btn btn-primary mx-2 my-1",onClick:function(){var t=s.toLowerCase();n(t),e.showAlert("Converted to Lowercase!","success")},children:"Convert to Lowercase"}),Object(l.jsx)("button",{disabled:0===s.length,className:"btn btn-primary mx-2 my-1",onClick:function(){n(""),e.showAlert("Text Cleared!","success")},children:"Clear"}),Object(l.jsx)("button",{disabled:0===s.length,className:"btn btn-primary mx-2 my-1",onClick:function(){navigator.clipboard.writeText(s),e.showAlert("Text copied to clipboard!","success")},children:"Copy Text"}),Object(l.jsx)("button",{disabled:0===s.length,className:"btn btn-primary mx-2 my-1",onClick:function(){var t=s.replace(/\s+/g," ").trim();n(t),e.showAlert("Extra spaces removed!","success")},children:"Remove Extra Spaces"})]}),Object(l.jsxs)("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(l.jsx)("h2",{children:"Your text summary"}),Object(l.jsxs)("p",{children:[s.split(/\s+/).filter((function(e){return 0!==e.length})).length," Words and ",s.length," characters"]}),Object(l.jsxs)("p",{children:[.008*s.split(/\s+/).filter((function(e){return 0!==e.length})).length," Minutes read"]}),Object(l.jsx)("h2",{children:"Preview"}),Object(l.jsx)("p",{children:s.length>0?s:"Nothing to preview"})]})]})}var j=function(e){return Object(l.jsx)("div",{style:{height:"50px"},children:e.alert&&Object(l.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(l.jsx)("strong",{children:e.alert.type}),": ",e.alert.msg]})})},m=a(2);var u=function(){var e=Object(c.useState)("light"),t=Object(o.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(null),r=Object(o.a)(n,2),u=r[0],x=r[1],p=function(e,t){x({msg:e,type:t}),setTimeout((function(){x(null)}),1500)};return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(d.a,{children:[Object(l.jsx)(b,{title:"TextUtils",aboutText:"About Us",mode:a,toggleMode:function(){"light"===a?(s("dark"),document.body.style.backgroundColor="#042743",p("Dark mode has been enabled! ","success"),document.title="TextUtils - Dark Mode"):(s("light"),document.body.style.backgroundColor="white",p("Light mode has been enabled! ","success"),document.title="TextUtils - Light Mode")}}),Object(l.jsxs)("div",{className:"container my-3",children:[Object(l.jsx)(j,{alert:u}),Object(l.jsxs)(m.c,{children:[Object(l.jsx)(m.a,{path:"/about",children:Object(l.jsx)(i,{mode:a})}),Object(l.jsx)(m.a,{path:"/",children:Object(l.jsx)(h,{showAlert:p,heading:"Text Converter",mode:a})})]})]})]})})},x=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,31)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),c(e),s(e),n(e),r(e)}))};r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(u,{})}),document.getElementById("root")),x()}},[[30,1,2]]]);
//# sourceMappingURL=main.237d77b1.chunk.js.map