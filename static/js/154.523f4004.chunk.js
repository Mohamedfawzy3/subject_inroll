"use strict";(self.webpackChunksignup=self.webpackChunksignup||[]).push([[154],{4154:function(e,s,t){t.r(s);var n=t(3433),c=t(9439),a=t(1243),i=t(2791),r=t(7022),l=t(1594),o=(t(3508),t(1087)),d=t(71),u=t(184);s.default=function(){var e=(0,i.useState)([]),s=(0,c.Z)(e,2),t=s[0],h=s[1];return(0,i.useEffect)((function(){0===t.length&&a.Z.get("https://subjects-proj-data.onrender.com/books").then((function(e){return h(e.data)}))}),[t]),(0,u.jsx)("section",{className:"get_books",children:(0,u.jsxs)(r.Z,{children:[(0,u.jsxs)("div",{className:"d-flex justify-content-end ",children:[(0,u.jsx)("button",{className:"btn sort-btn",onClick:function(){t.sort((function(e,s){return e.title<s.title?-1:e.title>s.title?1:void 0})),h((0,n.Z)(t))},children:"Sort by Title"}),(0,u.jsx)(o.rU,{className:"setting",to:"/setting",children:(0,u.jsx)(d.Fuo,{})})]}),(0,u.jsx)("div",{className:"boxes",children:t.map((function(e){return(0,u.jsxs)(l.Z,{className:"card",children:[(0,u.jsx)(l.Z.Img,{variant:"top",src:e.cover_image,className:"img"}),(0,u.jsx)(l.Z.Body,{className:"card-body",children:(0,u.jsx)(l.Z.Title,{className:"header",children:e.title})}),(0,u.jsx)(l.Z.Body,{className:"card-body",children:(0,u.jsx)(o.rU,{className:"btn bg-warning",to:"./book/".concat(e.id),children:"Details"})})]},e.id)}))})]})})}}}]);
//# sourceMappingURL=154.523f4004.chunk.js.map