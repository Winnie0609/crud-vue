(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{173:function(t,e,o){var content=o(223);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(69).default)("7388ab72",content,!0,{sourceMap:!1})},186:function(t,e,o){"use strict";var n={data:function(){return{}}},r=o(62),component=Object(r.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("Nuxt")}),[],!1,null,null,null);e.a=component.exports},192:function(t,e,o){o(193),t.exports=o(194)},222:function(t,e,o){"use strict";o(173)},223:function(t,e,o){var n=o(68)(!1);n.push([t.i,"h1[data-v-bfedb7fe]{font-size:20px}",""]),t.exports=n},228:function(t,e,o){var content=o(229);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(69).default)("48d69384",content,!0,{sourceMap:!1})},229:function(t,e,o){var n=o(68)(!1);n.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;1,600;1,700&display=swap);"]),n.push([t.i,'body{font-family:"Open Sans",sans-serif}*{color:#000}.comment-form{width:550px;margin:50px auto;text-align:center}.comment-form .title{margin-bottom:20px}.cards{display:flex;justify-content:space-around;flex-wrap:wrap;margin:70px 120px}.card{margin:30px 20px;width:370px;cursor:pointer;transition:.3s}.card:hover{transform:scale(1.03);transition:.2s}.post-title{margin-bottom:15px;font-size:20px;font-weight:600}',""]),t.exports=n},230:function(t,e,o){"use strict";o.r(e),o.d(e,"state",(function(){return r})),o.d(e,"mutations",(function(){return c})),o.d(e,"actions",(function(){return d}));var n=o(6),r=(o(60),o(231),o(172),o(13),o(16),function(){return{posts:[]}}),c={setPosts:function(t,data){t.posts=data},pushPost:function(t,e){t.posts.unshift(e)},setPost:function(t,e){var o=e.id,title=e.title,body=e.body,n=t.posts.findIndex((function(t){return t.id===o}));this._vm.$set(t.posts,n,{title:title,body:body,id:o,show:!0})},removePost:function(t,e){var o=t.posts.findIndex((function(t){return t.id===e}));t.posts.splice(o,1)},setShow:function(t,e){var o=e.id,n=e.show,r=t.posts.findIndex((function(t){return t.id===o}));t.posts[r].show=n}},d={initPost:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var o,n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.commit,e.next=3,fetch("https://jsonplaceholder.typicode.com/posts");case 3:return n=e.sent,e.next=6,n.json();case 6:(data=e.sent).forEach((function(t){t.show=!0})),o("setPosts",data);case 9:case"end":return e.stop()}}),e)})))()},createPost:function(t,e){return Object(n.a)(regeneratorRuntime.mark((function o(){var n,title,body,r,c;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return n=t.commit,title=e.title,body=e.body,o.next=4,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify({title:title,body:body,userId:1}),headers:{"Content-type":"application/json; charset=UTF-8"}});case 4:return r=o.sent,o.next=7,r.json();case 7:(c=o.sent).show=!0,c.id=Math.floor(1e4*Math.random()),n("pushPost",c);case 11:case"end":return o.stop()}}),o)})))()},updatePost:function(t,e){return Object(n.a)(regeneratorRuntime.mark((function o(){var n,r,c,d,f;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return n=t.commit,r=e.post,c=e.editedTitle,d=e.editedBody,o.next=4,fetch("https://jsonplaceholder.typicode.com/posts/1",{method:"PUT",body:JSON.stringify({id:1,title:r.title,body:r.body,userId:1}),headers:{"Content-type":"application/json; charset=UTF-8"}});case 4:return f=o.sent,o.next=7,f.json();case 7:n("setPost",{id:r.id,title:c,body:d}),n("setShow",{id:r.id,show:!0});case 9:case"end":return o.stop()}}),o)})))()},editBtn:function(t,e){var o=t.commit;t.state.posts.forEach((function(t){t.id!==e.id&&o("setShow",{id:t.id,show:!0})})),o("setShow",{id:e.id,show:!e.show})},cancelBtn:function(t,e){var o=t.commit,n=t.state,r=n.posts.findIndex((function(t){return t.id===e.id}));n.posts.forEach((function(t){t.id===r&&o("setShow",{id:t.id,show:!0})})),o("setShow",{id:e.id,show:!0})},deletePost:function(t,e){var o=t.commit;fetch("https://jsonplaceholder.typicode.com/posts/".concat(e.id),{method:"DELETE"}),o("removePost",e.id)}}},47:function(t,e,o){"use strict";var n={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},r=(o(222),o(62)),c=o(174),d=o.n(c),f=o(252),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",{attrs:{dark:""}},[404===t.error.statusCode?o("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):o("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),o("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"bfedb7fe",null);e.a=component.exports;d()(component,{VApp:f.a})}},[[192,6,1,7]]]);