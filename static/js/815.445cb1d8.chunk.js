"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[815],{672:function(n,t,e){e.d(t,{O:function(){return v}});var r,a,c,i,o=e(689),u=e(168),s=e(87),p=e(444),f=p.ZP.ul(r||(r=(0,u.Z)(["\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-column-gap: 10px;\n  grid-row-gap: 10px;\n  justify-content: center;\n\n  padding: 10px;\n  margin-top: 15px;\n\n  list-style: none;\n"]))),l=p.ZP.li(a||(a=(0,u.Z)(["\n  /* border: 1px solid black; */\n  max-width: 150px;\n  /* height: 280px; */\n\n  padding: 5px;\n\n  transition: all 250ms linear;\n\n  &:hover,\n  &:focus-visible {\n    scale: 1.1;\n    box-shadow: 3px 2px 5px 1px rgba(0, 0, 0, 0.26);\n  }\n"]))),d=(0,p.ZP)(s.rU)(c||(c=(0,u.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n\n  text-decoration: none;\n"]))),g=p.ZP.p(i||(i=(0,u.Z)(["\n  display: block;\n  text-align: center;\n\n  color: black;\n"]))),h=e(184),v=function(n){var t=n.moviesList,e=(0,o.TH)();return(0,h.jsx)(f,{children:t.map((function(n){var t=n.id,r=n.title,a=n.original_title,c=n.poster_path;return(0,h.jsx)(l,{children:(0,h.jsxs)(d,{to:"/movies/".concat(t),state:{from:e},children:[(0,h.jsx)("img",{src:c?"https://image.tmdb.org/t/p/w500".concat(c):"https://i.postimg.cc/VL0DBTFD/cinema-popcorn-soda-drink-tickets-and-film-strip-movie-poster-with-fast-food-snack-and-cola-beverage.webp",alt:r&&a,width:"150",height:"200"}),(0,h.jsx)(g,{children:r&&a})]})},t)}))})}},815:function(n,t,e){e.r(t),e.d(t,{default:function(){return f}});var r,a=e(439),c=e(672),i=e(791),o=e(635),u=e(168),s=e(444).ZP.h2(r||(r=(0,u.Z)(["\n  display: block;\n  text-align: center;\n  margin-top: 20px;\n"]))),p=e(184),f=function(){var n=(0,i.useState)([]),t=(0,a.Z)(n,2),e=t[0],r=t[1];return(0,i.useEffect)((function(){(0,o.SU)().then(r).catch((function(n){return alert("Please, try again - reload the page")}))}),[]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(s,{children:"Trending today"}),(0,p.jsx)(c.O,{moviesList:e})]})}},635:function(n,t,e){e.d(t,{E3:function(){return p},Mc:function(){return s},SU:function(){return u},Uw:function(){return l},eH:function(){return f}});var r=e(861),a=e(757),c=e.n(a),i=e(388);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o="0ffc72445f4cf4ad84f6636a20d6ec36",u=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("trending/movie/day?api_key=".concat(o));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(t,"?api_key=").concat(o,"&language=en-US\n  "));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("search/movie?api_key=".concat(o,"&language=en-US&query=").concat(t,"&include_adult=false\n  "));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(t,"/reviews?api_key=").concat(o));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=815.445cb1d8.chunk.js.map