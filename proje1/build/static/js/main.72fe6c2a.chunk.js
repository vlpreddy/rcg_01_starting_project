(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(3),a=n.n(s),c=(n(9),n(1)),i=(n(10),n(4)),d=(n(11),n(0));var r=function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),n=e.date.toLocaleString("en-US",{day:"2-digit"}),s=e.date.getFullYear();return Object(d.jsxs)("div",{className:"expense-date",children:[Object(d.jsxs)("div",{className:"expense-date__month",children:[" ",t]}),Object(d.jsxs)("div",{className:"expense-date__year",children:[" ",n]}),Object(d.jsxs)("div",{className:"expense-date__day",children:[" ",s]})]})};n(13),n(14);var l=function(e){var t="card "+e.className;return Object(d.jsx)("div",{className:t,children:e.children})};var o=function(e){var t=Object(c.useState)(e.title),n=Object(i.a)(t,2),s=n[0],a=n[1];return Object(d.jsxs)(l,{className:"expense-item",children:[Object(d.jsx)(r,{date:e.date}),Object(d.jsxs)("div",{className:"expense-item__description",children:[Object(d.jsx)("h2",{children:s}),Object(d.jsxs)("div",{className:"expense-item__price ",children:["$",e.amount]})]}),Object(d.jsx)("button",{onClick:function(){a("Updated")},children:"Change Title"})]})};var x=function(e){return Object(d.jsxs)(l,{className:"expenses",children:[Object(d.jsx)("h2",{children:"Let's get started!"}),Object(d.jsx)(o,{title:e.expenses[0].title,amount:e.expenses[0].amount,date:e.expenses[0].date}),Object(d.jsx)(o,{title:e.expenses[1].title,amount:e.expenses[1].amount,date:e.expenses[1].date}),Object(d.jsx)(o,{title:e.expenses[2].title,amount:e.expenses[2].amount,date:e.expenses[2].date}),Object(d.jsx)(o,{title:e.expenses[3].title,amount:e.expenses[3].amount,date:e.expenses[3].date}),Object(d.jsx)(o,{title:e.expenses[4].title,amount:e.expenses[4].amount,date:e.expenses[4].date})]})},u=function(){var e=[{id:"e1",title:"Car Insurance",amount:255.85,date:new Date(2021,5,20)},{id:"e2",title:"Bike Insurance",amount:255.85,date:new Date(2021,2,6)},{id:"e3",title:"New Tv",amount:266.85,date:new Date(2021,7,19)},{id:"e4",title:"Sofa",amount:245.85,date:new Date(2021,4,1)},{id:"e5",title:"Toilet Paper",amount:45.85,date:new Date(2021,2,1)}];return Object(d.jsx)(x,{expenses:e})};a.a.render(Object(d.jsx)(u,{}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.72fe6c2a.chunk.js.map