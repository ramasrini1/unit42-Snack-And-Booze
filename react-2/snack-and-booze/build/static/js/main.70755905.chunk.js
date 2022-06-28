(this["webpackJsonpsnack-and-booze"]=this["webpackJsonpsnack-and-booze"]||[]).push([[0],{42:function(e,t,c){},44:function(e,t,c){},66:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c(13),a=c.n(r),s=(c(42),c(43),c(12)),i=c(15),o=c(16),j=c(11),d=(c(44),c(4)),b=c(3);var l=function(){return Object(b.jsx)("section",{className:"col-md-8",children:Object(b.jsx)(d.a,{children:Object(b.jsx)(d.b,{className:"text-center",children:Object(b.jsx)(d.d,{children:Object(b.jsx)("h3",{className:"font-weight-bold",children:"Welcome to Silicon Valley's premier dive cafe!"})})})})})},u=c(34),p=c(35),h=c(19),O=c.n(h),x="http://localhost:5000",f=function(){function e(){Object(u.a)(this,e)}return Object(p.a)(e,null,[{key:"getSnacks",value:function(){var e=Object(i.a)(Object(s.a)().mark((function e(){var t;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("".concat(x,"/snacks"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getDrinks",value:function(){var e=Object(i.a)(Object(s.a)().mark((function e(){var t;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("".concat(x,"/drinks"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"addNewItem",value:function(){var e=Object(i.a)(Object(s.a)().mark((function e(t){var c;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("newItem is id: ".concat(t.id," description: ").concat(t.description," \n    serve: ").concat(t.serve," recipe: ").concat(t.recipe," name:").concat(t.name," foodType:").concat(t.foodType)),e.next=3,O.a.post("".concat(x,"/").concat(t.foodType),{id:t.id,name:t.name,description:t.description,recipe:t.recipe,serve:t.serve});case 3:return c=e.sent,e.abrupt("return",c.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),m=f;c(66);var v=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(d.i,{expand:"md",children:[Object(b.jsx)(j.c,{exact:!0,to:"/",className:"navbar-brand",children:"Snack or Booze"}),Object(b.jsxs)(d.g,{className:"ml-auto",navbar:!0,children:[Object(b.jsx)(d.h,{children:Object(b.jsx)(j.c,{to:"/snacks",children:"Snacks"})}),Object(b.jsx)(d.h,{children:Object(b.jsx)(j.c,{to:"/drinks",children:"Drinks"})}),Object(b.jsx)(d.h,{children:Object(b.jsx)(j.c,{to:"/newItem",children:"Add Food"})})]})]})})},k=c(5);c(72);var y=function(e){var t=e.food,c=e.foodType;return Object(b.jsx)("section",{className:"col-md-4",children:Object(b.jsx)(d.a,{children:Object(b.jsxs)(d.b,{children:[Object(b.jsx)(d.d,{className:"font-weight-bold text-center",children:"Food Menu"}),Object(b.jsx)(d.c,{children:"Some quick example text to build on the card title and make up the bulk of the card's content."}),Object(b.jsx)(d.e,{children:t.map((function(e){return Object(b.jsx)(j.b,{to:"/".concat(c,"/").concat(e.id),children:Object(b.jsx)(d.f,{children:e.name})},e.id)}))})]})})})};var g=function(e){var t=e.items,c=e.cantFind,n=Object(k.h)().id,r=t.find((function(e){return e.id===n}));return r?Object(b.jsx)("section",{children:Object(b.jsx)(d.a,{children:Object(b.jsxs)(d.b,{children:[Object(b.jsx)(d.d,{className:"font-weight-bold text-center",children:r.name}),Object(b.jsx)(d.c,{className:"font-italic",children:r.description}),Object(b.jsxs)("p",{children:[Object(b.jsx)("b",{children:"Recipe:"})," ",r.recipe]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("b",{children:"Serve:"})," ",r.serve]})]})})}):Object(b.jsx)(k.a,{to:c})},w=c(18),N=c(17);var S=function(){var e=Object(k.g)(),t={id:"",name:"",description:"",recipe:"",serve:""},c=Object(n.useState)(t),r=Object(o.a)(c,2),a=r[0],s=r[1],i=function(e){var t=e.target,c=t.name,n=t.value;s((function(e){return Object(N.a)(Object(N.a)({},e),{},Object(w.a)({},c,n))}))};return Object(b.jsx)("div",{children:Object(b.jsxs)("form",{onSubmit:function(c){c.preventDefault(),console.log(a);m.addNewItem(Object(N.a)(Object(N.a)({},a),{},{id:a.name.toLowerCase()}));e.push("/".concat(a.foodType)),s(t)},children:[Object(b.jsx)("label",{htmlFor:"foodType",children:"Food Type"}),Object(b.jsx)("input",{id:"foodType",type:"text",name:"foodType",placeholder:"Food Type",value:a.foodType,onChange:i}),Object(b.jsx)("label",{htmlFor:"name",children:"Name"}),Object(b.jsx)("input",{id:"name",type:"text",name:"name",placeholder:"Name",value:a.name,onChange:i}),Object(b.jsx)("label",{htmlFor:"description",children:"Description"}),Object(b.jsx)("input",{id:"description",type:"text",name:"description",placeholder:"Description",value:a.description,onChange:i}),Object(b.jsx)("label",{htmlFor:"recipe",children:"Recipe"}),Object(b.jsx)("input",{id:"recipe",type:"text",name:"recipe",placeholder:"recipe",value:a.recipe,onChange:i}),Object(b.jsx)("label",{htmlFor:"serve",children:"Serve"}),Object(b.jsx)("input",{id:"serve",type:"text",name:"serve",placeholder:"serve",value:a.serve,onChange:i}),Object(b.jsx)("button",{children:"Add Food Item!"})]})})};var F=function(){var e=Object(n.useState)(!0),t=Object(o.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)([]),d=Object(o.a)(a,2),u=d[0],p=d[1],h=Object(n.useState)([]),O=Object(o.a)(h,2),x=O[0];return O[1],Object(n.useEffect)((function(){function e(){return e=Object(i.a)(Object(s.a)().mark((function e(){var t;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("useEffect get snacks"),e.next=3,m.getSnacks();case 3:t=e.sent,p(t),r(!1);case 6:case"end":return e.stop()}}),e)}))),e.apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),c?Object(b.jsx)("p",{children:"Loading \u2026"}):Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(j.a,{children:[Object(b.jsx)(v,{}),Object(b.jsx)("main",{children:Object(b.jsxs)(k.d,{children:[Object(b.jsx)(k.b,{exact:!0,path:"/",children:Object(b.jsx)(l,{snacks:u})}),Object(b.jsx)(k.b,{exact:!0,path:"/snacks",children:Object(b.jsx)(y,{food:u,foodType:"snacks",title:"Snacks"})}),Object(b.jsx)(k.b,{path:"/snacks/:id",children:Object(b.jsx)(g,{items:u,cantFind:"/snacks"})}),Object(b.jsx)(k.b,{exact:!0,path:"/drinks",children:Object(b.jsx)(y,{food:x,foodType:"drinks",title:"Drinks"})}),Object(b.jsx)(k.b,{path:"/drinks/:id",children:Object(b.jsx)(g,{items:x,cantFind:"/drinks"})}),Object(b.jsx)(k.b,{path:"/newItem",children:Object(b.jsx)(S,{})}),Object(b.jsx)(k.b,{children:Object(b.jsx)("p",{children:"Hmmm. I can't seem to find what you want."})})]})})]})})};a.a.render(Object(b.jsx)(F,{}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.70755905.chunk.js.map