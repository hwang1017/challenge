(this.webpackJsonpui=this.webpackJsonpui||[]).push([[0],{24:function(e,t,s){},25:function(e,t,s){},46:function(e,t,s){"use strict";s.r(t);var c=s(2),n=s.n(c),a=s(18),i=s.n(a),r=(s(24),s(25),s(3)),l=s.n(r),j=s(5),d=s(4),o=s(7),u=s.n(o),m=s(0);var b=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),s=t[0],n=t[1];return Object(c.useEffect)((function(){(function(){var e=Object(j.a)(l.a.mark((function e(){var t,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("/users");case 2:t=e.sent,s=t.data,n(s);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(m.jsxs)("div",{className:"part all-users",children:[Object(m.jsx)("div",{className:"title",children:"All Users"}),Object(m.jsx)("div",{className:"description",children:"Users and their ages"}),Object(m.jsxs)("div",{className:"list",children:[Object(m.jsxs)("div",{className:"listitem",children:[Object(m.jsx)("div",{className:"listitem-1",children:Object(m.jsx)("strong",{children:"Username"})}),Object(m.jsx)("div",{className:"listitem-2",children:Object(m.jsx)("strong",{children:"Age"})})]}),s.map((function(e,t){var s=e.username,c=e.age;return Object(m.jsxs)("div",{className:"listitem data",children:[Object(m.jsx)("div",{className:"listitem-1",children:s}),Object(m.jsx)("div",{className:"listitem-2",children:c})]},t)}))]})]})},O=s(19);var h=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),s=t[0],n=t[1],a=Object(c.useState)([]),i=Object(d.a)(a,2),r=i[0],o=i[1],b=Object(c.useState)("____"),h=Object(d.a)(b,2),v=h[0],x=h[1],f=Object(c.useState)(""),p=Object(d.a)(f,2),g=p[0],N=p[1];Object(c.useEffect)((function(){(function(){var e=Object(j.a)(l.a.mark((function e(){var t,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("/items");case 2:t=e.sent,s=t.data,o(Object(O.a)(s));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var w=function(){var e=Object(j.a)(l.a.mark((function e(t){var s,c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.target.value,N(""),x(s),e.next=5,u.a.get("/users/age/".concat(s));case 5:c=e.sent,a=c.data,n(a);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"part demo",children:[Object(m.jsxs)("div",{className:"title",children:["Age Demographic of Users With"," ",Object(m.jsx)("strong",{className:"select-item",children:v})]}),Object(m.jsxs)("div",{className:"dropdown",children:[Object(m.jsxs)("button",{className:"dropdown-btn",onClick:function(){N(g?"":"show")},children:["item",Object(m.jsx)("img",{src:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.materialui.co%2FmaterialIcons%2Fnavigation%2Farrow_drop_down_white_192x192.png&f=1&nofb=1",alt:"arrow-down"})]}),Object(m.jsx)("div",{className:"dropdown-items ".concat(g),children:r.map((function(e,t){return Object(m.jsx)("option",{className:"dropdown-item",value:e,onClick:function(e){return w(e)},children:e},t)}))})]}),Object(m.jsxs)("div",{className:"list",children:[Object(m.jsxs)("div",{className:"listitem",children:[Object(m.jsx)("div",{className:"listitem-1",children:Object(m.jsx)("strong",{children:"Age"})}),Object(m.jsx)("div",{className:"listitem-2",children:Object(m.jsx)("strong",{children:"Count"})})]}),s.map((function(e,t){return Object(m.jsxs)("div",{className:"listitem data",children:[Object(m.jsx)("div",{className:"listitem-1",children:e[0]}),Object(m.jsx)("div",{className:"listitem-2",children:e[1]})]},t)}))]})]})};var v=function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(b,{}),Object(m.jsx)(h,{})]})},x=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,47)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;s(e),c(e),n(e),a(e),i(e)}))};i.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(v,{})}),document.getElementById("root")),x()}},[[46,1,2]]]);
//# sourceMappingURL=main.1f3617de.chunk.js.map