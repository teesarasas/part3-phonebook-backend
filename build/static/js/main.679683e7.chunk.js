(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{38:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var c=t(0),a=t(1),r=t.n(a),o=t(15),u=t.n(o),i=t(6),l=t(3),s=function(e){var n=e.nameFilter,t=e.handleFilterChange;return Object(c.jsxs)("div",{children:["filter shown with",Object(c.jsx)("input",{onInput:function(){return n},type:"text",onChange:t})]})},d=function(e){var n=e.name,t=e.number,a=e.clickToDelete;return Object(c.jsxs)("div",{children:[n," ",t," ",Object(c.jsx)("button",{onClick:a,children:"delete"})]})},f=function(e){var n=e.filterPerson,t=e.handleDelete;return n.map((function(e){return Object(c.jsx)(d,{name:e.name,number:e.number,clickToDelete:function(){t(e.id)}},e.name)}))},b=function(e){var n=e.addName,t=e.newName,a=e.handleNameChange,r=e.newNumber,o=e.handleNumberChange;return Object(c.jsxs)("form",{onSubmit:n,children:[Object(c.jsxs)("div",{children:["name: ",Object(c.jsx)("input",{type:"text",value:t,onChange:a})]}),Object(c.jsxs)("div",{children:["number: ",Object(c.jsx)("input",{type:"text",value:r,onChange:o})]}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{type:"submit",children:"add"})})]})},j=t(4),m=t.n(j),h="http://localhost:3001/api/persons",O=function(e){return m.a.delete("".concat(h,"/").concat(e))},v=function(e,n){return m.a.put("".concat(h,"/").concat(e),n)},p=function(){return m.a.get(h)},x=function(e){return m.a.post(h,e)},g=function(e){var n=e.message,t=e.changeClass;return null===n?null:Object(c.jsx)("div",{className:t,children:n})},w=(t(38),function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],r=n[1],o=Object(a.useState)(""),u=Object(l.a)(o,2),d=u[0],j=u[1],m=Object(a.useState)(""),h=Object(l.a)(m,2),w=h[0],C=h[1],N=Object(a.useState)(""),k=Object(l.a)(N,2),y=k[0],S=k[1],T=Object(a.useState)(null),D=Object(l.a)(T,2),F=D[0],I=D[1],L=Object(a.useState)(""),P=Object(l.a)(L,2),A=P[0],E=P[1];Object(a.useEffect)((function(){console.log("effect"),p().then((function(e){r(e.data)}))}),[]);var J=t.filter((function(e){return-1!==e.name.toLowerCase().indexOf(y)}));return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Phonebook"}),Object(c.jsx)(g,{message:F,changeClass:A}),Object(c.jsx)(s,{nameFilter:J,handleFilterChange:function(e){console.log(e.target.value),S(e.target.value)}}),Object(c.jsx)("h3",{children:"Add a new"}),Object(c.jsx)(b,{addName:function(e){e.preventDefault();var n={name:d,number:w},c=t.find((function(e){return e.name.toLowerCase()===d.toLowerCase()}));if(c){var a=Object(i.a)(Object(i.a)({},c),{},{number:w}),o=c.id;window.confirm("".concat(d," is already added to phonebook, replace the old number with a new one?"))&&v(o,a).then((function(e){return r(t.map((function(n){return n.id!==o?n:e.data})))}),I("".concat(c.name,"'s number updated")),E("completed"),setTimeout((function(){I(null)}),5e3)).catch((function(e){E("error"),I("Information for ".concat(c.name," has already been removed from server")),r(t.filter((function(e){return e.id!==o}))),setTimeout((function(){I(null)}),5e3)})),j(""),C("")}else x(n).then((function(e){r(t.concat(e.data)),E("completed"),I("Added ".concat(d)),j(""),C(""),setTimeout((function(){I(null)}),5e3)}))},newName:d,handleNameChange:function(e){console.log(e.target.value),j(e.target.value)},newNumber:w,handleNumberChange:function(e){console.log(e.target.value),C(e.target.value)}}),Object(c.jsx)("h3",{children:"Numbers"}),Object(c.jsx)(f,{filterPerson:J,handleDelete:function(e){var n=t.find((function(n){return n.id===e}));window.confirm("Delete ".concat(n.name,"?"))&&O(e).then((function(){var c=t.filter((function(n){return n.id!==e}));r(c),E("completed"),I("".concat(n.name," was deleted")),setTimeout((function(){I(null)}),5e3)})).catch((function(c){E("error"),I("Information for ".concat(n.name," has already been removed from server"));var a=t.filter((function(n){return n.id!==e}));r(a),setTimeout((function(){I(null)}),5e3)}))}})]})});u.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(w,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.679683e7.chunk.js.map