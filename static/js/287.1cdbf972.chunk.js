"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[287],{3965:function(e,t,n){n.d(t,{A:function(){return a}});var r=n(4569),a=n.n(r)().create({baseURL:"https://api.themoviedb.org/3/"})},6287:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(5861),a=n(8152),c=n(7757),s=n.n(c),i=n(2791),u=n(3965),o=n(3504),l=n(6594),f="HomePage_HomePage__VFhQq",p=n(184),d=function(){var e=(0,i.useState)(!1),t=(0,a.Z)(e,2),n=t[0],c=t[1],d=(0,i.useState)(null),h=(0,a.Z)(d,2),m=(h[0],h[1]),v=(0,i.useState)([]),k=(0,a.Z)(v,2),b=k[0],g=k[1],x=function(){var e=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.prev=1,e.next=4,u.A.get("trending/movie/day?api_key=3bf6ab2d930f009ec312eecba4ae9f94");case 4:t=e.sent,console.log(t),g(t.data.results),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),m(e.t0);case 12:return e.prev=12,c(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})));return function(){return e.apply(this,arguments)}}();return(0,i.useEffect)((function(){x()}),[]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h1",{children:"Trending Today"}),(0,p.jsx)("ul",{children:b.map((function(e){return(0,p.jsx)("li",{className:f,children:(0,p.jsx)(o.rU,{to:"/movies/".concat(e.id),className:f,children:e.original_title})},e.id)}))}),n&&(0,p.jsx)(l.a,{type:"spokes",color:"#3f72b5"})]})}}}]);
//# sourceMappingURL=287.1cdbf972.chunk.js.map