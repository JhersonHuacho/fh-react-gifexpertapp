(this["webpackJsonpcounter-app"]=this["webpackJsonpcounter-app"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),l=n.n(c),o=n(3),i=n(1),u=function(e){var t=e.setCategories,n=Object(a.useState)(""),c=Object(i.a)(n,2),l=c[0],u=c[1];return console.log("AddCategory - antes del return"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),l.trim().length>2&&(t((function(e){return[l].concat(Object(o.a)(e))})),u("")),console.log("AddCategory - dentro de handleSubmit")}},r.a.createElement("input",{type:"text",value:l,onChange:function(e){console.log(e.target.value),u(e.target.value)}}))},s=n(5),m=n.n(s),d=n(8),f=function(){var e=Object(d.a)(m.a.mark((function e(t){var n,a,r,c,l;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=5r7MRKD79yT3zqVjdv6egHkpvfO7f9Km"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return r=e.sent,c=r.data,l=c.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",l);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e){var t=e.id,n=e.title,a=e.url;return console.log("GifGridItem",{id:t,title:n,url:a}),r.a.createElement("div",{className:"card animate__animated animate__fadeIn"},r.a.createElement("img",{src:a,alt:n}),r.a.createElement("p",null,n))},g=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){f(e).then((function(e){c({data:e,loading:!1})}))}),[e]),r}(t),c=n.data,l=n.loading;return console.log(c),console.log(l),r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"animate__animated animate__fadeIn"},t),l&&r.a.createElement("p",{className:"animate__animated animate__flash"},"Loading"),r.a.createElement("div",{className:"card-grid"},c.map((function(e){return r.a.createElement(p,Object.assign({key:e.id},e))}))))},v=function(){var e=Object(a.useState)(["One Punch"]),t=Object(i.a)(e,2),n=t[0],c=t[1];console.log("inicio",n);return console.log("antes del return",n),r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"GifExpertApp"),r.a.createElement(u,{setCategories:c}),r.a.createElement("hr",null),r.a.createElement("ol",null,n.map((function(e){return r.a.createElement(g,{key:e,category:e})}))))};n(15);l.a.render(r.a.createElement(v,null),document.getElementById("app"))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.3dbd3690.chunk.js.map