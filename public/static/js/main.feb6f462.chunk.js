(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,n){e.exports=n(67)},39:function(e,t,n){},62:function(e,t){},66:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(29),u=n.n(c),o=(n(39),n(1)),i=n(30),m=n.n(i).a.connect(),s=function(e){return Object(a.useMemo)(function(){return Object.entries(e).forEach(function(e){var t=Object(o.a)(e,2),n=t[0],a=t[1];m.on(n,a)}),m})},l=n(31),f=n.n(l),p=n(33),d=n(32),v=n(15),b=n.n(v),O=function(e,t){var n=Object(a.useState)([]),r=Object(o.a)(n,2),c=r[0],u=r[1],i=function(e){return u([].concat(Object(d.a)(c),[Object(p.a)({},e,{at:b()(e.at)})]))},m=s({message:function(e){return e.from===t&&i(e)}});return[c,function(n){var a={from:e,content:n,at:b()().toISOString()};i(a),m.emit("dispatch",{type:"message",to:[t],payload:a})}]},j=function(e){var t=e.self,n=e.peer,c=O(t.id,n.id),u=Object(o.a)(c,2),i=u[0],m=u[1],s=Object(a.useState)(""),l=Object(o.a)(s,2),p=l[0],d=l[1],v=function(e){return f()("message",e.from===t.id&&"self",e.from===n.id&&"peer")};return r.a.createElement("div",{className:"panel"},r.a.createElement("div",null,"username: ",n.username),r.a.createElement("div",{className:"panel message-box"},i.map(function(e){return r.a.createElement("div",{className:v(e)},r.a.createElement("span",null,e.at.format("h:mma")," - "),r.a.createElement("span",null,function(e){return e.from===t.id?t.username:n.username}(e),": "),r.a.createElement("span",null,e.content))}),r.a.createElement("input",{value:p,onChange:function(e){return d(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&(m(p),d(""))}})))},E=(n(66),{}),g=function(e,t,n){var a=E[e];a&&clearTimeout(a),E[e]=setTimeout(function(){t(),E[e]=void 0},n)};var w=function(){var e=Object(a.useState)(-1),t=Object(o.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)([]),i=Object(o.a)(u,2),m=i[0],l=i[1],f=Object(a.useState)(""),p=Object(o.a)(f,2),d=p[0],v=p[1],b=s({id:c,peers:l}),O=m.find(function(e){return e.id===n}),E=m.filter(function(e){return e.id!==n});return r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"panel"},"username:",r.a.createElement("input",{value:d,onChange:function(e){var t=e.target.value;v(t),g("emit username",function(){return b.emit("username",t)},1e3)}})),E.map(function(e){return r.a.createElement(j,{key:e.id,self:O,peer:e})}))};u.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.feb6f462.chunk.js.map