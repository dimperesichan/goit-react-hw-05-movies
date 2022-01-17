"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[857],{983:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(184);function o(e){var n=e.content,t=e.name,o=e.type,a=e.onClick,c=e.disabled;return(0,r.jsx)("button",{type:o,name:t,onClick:a,disabled:c,className:"Button",children:n})}o.defaultProps={type:"button",onClick:function(){return null}}},7760:function(e,n,t){t.d(n,{SQ:function(){return r},vl:function(){return o},RX:function(){return a}});var r={position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"},o={position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"},a={position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"}},3128:function(e,n,t){t.r(n),t.d(n,{default:function(){return v}});var r=t(8683),o=t(8152),a=t(2791),c=t(9271),u=t(983),s=t(577),i=t(7760),l=(t(5462),t(184));function f(e){var n=e.onSubmit,t=(0,a.useState)(""),r=(0,o.Z)(t,2),c=r[0],f=r[1];return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c?(n(c),f("")):s.Am.warning("Input some text!",i.SQ)},className:"search-form",children:[(0,l.jsx)("input",{name:"form-input",value:c,onChange:function(e){return f(e.target.value)},type:"text",className:"form-input",placeholder:"What are we looking for?",autoComplete:"on",autoFocus:!0}),(0,l.jsx)(u.Z,{type:"submit",name:"searchButton",content:"Search",disabled:!1,className:"Button"})]}),(0,l.jsx)(s.Ix,{position:"top-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!0,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,pauseOnHover:!0,draggable:!0,draggablePercent:60})]})}var p=t(8565),d=t(7532),g=t(2187),h=(0,a.lazy)((function(){return t.e(424).then(t.bind(t,6385))})),m=(0,a.lazy)((function(){return t.e(144).then(t.bind(t,9402))}));function v(){var e,n,t=(0,c.useHistory)(),u=(0,c.useLocation)(),v=null!==(e=new URLSearchParams(u.search).get("query"))&&void 0!==e?e:"",b=null!==(n=new URLSearchParams(u.search).get("page"))&&void 0!==n?n:1,k=(0,a.useState)([]),y=(0,o.Z)(k,2),x=y[0],C=y[1],j=(0,a.useState)(b),w=(0,o.Z)(j,2),_=w[0],S=w[1],O=(0,a.useState)(""),P=(0,o.Z)(O,2),N=P[0],Z=P[1],B=(0,a.useState)(0),E=(0,o.Z)(B,2),H=E[0],F=E[1],A=(0,a.useRef)(!0);(0,a.useEffect)((function(){A.current?A.current=!1:p.FE(_,N).then((function(e){var n=e.results,t=e.total_pages;n?(n.length>1&&s.Am.info("Enjoy!",i.RX),C(n),F(t)):s.Am.error("No such results!",i.vl)})).catch((function(e){s.Am.error('No images by "'.concat(N,'"!'),i.vl),console.log("error on catch: ",e)}))}),[_,N]),(0,a.useEffect)((function(){""!==v&&Z(v)}),[v]);var L=function(e,n){t.push((0,r.Z)((0,r.Z)({},u),{},{search:"query=".concat(e,"&page=").concat(n)}))};return(0,l.jsxs)("div",{children:[(0,l.jsx)(f,{onSubmit:function(e){N!==e&&(Z(e),L(e,_))}}),(0,l.jsxs)(a.Suspense,{fallback:(0,l.jsx)(g.Z,{}),children:[(0,l.jsx)(h,{movies:x,url:"".concat(d.MB,"/")}),x.length>1&&(0,l.jsx)(m,{onClick:function(e){var n=e.currentTarget.name;n===d.Z0&&_>1&&(S((function(e){return Number(e)-1})),L(N,Number(_)-1)),n===d.zb&&_!==H&&(S((function(e){return Number(e)+1})),L(N,Number(_)+1))},page:_,totalPages:H})]}),(0,l.jsx)(s.Ix,{position:"top-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!0,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,pauseOnHover:!0,draggable:!0,draggablePercent:60})]})}},8565:function(e,n,t){t.d(n,{kl:function(){return p},FE:function(){return d},Y5:function(){return g},xc:function(){return h},Hx:function(){return m},IA:function(){return v}});var r=t(5861),o=t(7757),a=t.n(o),c=t(4569),u=t.n(c),s="https://api.themoviedb.org/3/",i="f6f92051b45422d9426f457ad6610127";function l(){return f.apply(this,arguments)}function f(){return f=(0,r.Z)(a().mark((function e(){var n,t,r,o,c=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=c.length>0&&void 0!==c[0]?c[0]:"",!(t=c.length>1&&void 0!==c[1]?c[1]:{}).hasQuery){e.next=7;break}return e.next=5,u().get(n,t);case 5:return r=e.sent,e.abrupt("return",200===r.status&&0!==r.data.results.length?r.data:Promise.reject(new Error(console.log("Not found by query"))));case 7:return e.next=9,u().get(n,t);case 9:return o=e.sent,e.abrupt("return",200===o.status?o.data:Promise.reject(new Error(console.log("Not found"))));case 11:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}function p(e){return l("".concat(s,"trending/all/week?api_key=").concat(i,"&page=").concat(e))}function d(e,n){return l("".concat(s,"search/movie?api_key=").concat(i,"&query=").concat(n,"&page=").concat(e,"&include_adult=false"),{hasQuery:!0})}function g(e){return l("".concat(s,"movie/").concat(e,"?api_key=").concat(i))}function h(e){return l("".concat(s,"movie/").concat(e,"/credits?api_key=").concat(i))}function m(e){return l("".concat(s,"movie/").concat(e,"/reviews?api_key=").concat(i))}function v(e){var n=e.id;return l("".concat(s,"movie/").concat(n,"/videos?api_key=").concat("f6f92051b45422d9426f457ad6610127","&language=en-US"))}}}]);
//# sourceMappingURL=Movies-page.98690fe0.chunk.js.map