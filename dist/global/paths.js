(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var _bar=require("./bar"),_bar2=_interopRequireDefault(_bar),_bezier=require("./bezier"),_bezier2=_interopRequireDefault(_bezier),_connector=require("./connector"),_connector2=_interopRequireDefault(_connector),_curvedRectangle=require("./curved-rectangle"),_curvedRectangle2=_interopRequireDefault(_curvedRectangle),_graph=require("./graph"),_graph2=_interopRequireDefault(_graph),_linear=require("./linear"),_linear2=_interopRequireDefault(_linear),_path=require("./path"),_path2=_interopRequireDefault(_path),_pie=require("./pie"),_pie2=_interopRequireDefault(_pie),_polygon=require("./polygon"),_polygon2=_interopRequireDefault(_polygon),_radar=require("./radar"),_radar2=_interopRequireDefault(_radar),_rectangle=require("./rectangle"),_rectangle2=_interopRequireDefault(_rectangle),_sankey=require("./sankey"),_sankey2=_interopRequireDefault(_sankey),_sector=require("./sector"),_sector2=_interopRequireDefault(_sector),_semiRegularPolygon=require("./semi-regular-polygon"),_semiRegularPolygon2=_interopRequireDefault(_semiRegularPolygon),_smoothLine=require("./smooth-line"),_smoothLine2=_interopRequireDefault(_smoothLine),_stock=require("./stock"),_stock2=_interopRequireDefault(_stock),_tree=require("./tree"),_tree2=_interopRequireDefault(_tree),_waterfall=require("./waterfall"),_waterfall2=_interopRequireDefault(_waterfall);window.Paths={Bar:_bar2["default"],Bezier:_bezier2["default"],Connector:_connector2["default"],CurvedRectangle:_curvedRectangle2["default"],Graph:_graph2["default"],Linear:_linear2["default"],Path:_path2["default"],Pie:_pie2["default"],Polygon:_polygon2["default"],Radar:_radar2["default"],Rectangle:_rectangle2["default"],Sankey:_sankey2["default"],Sector:_sector2["default"],SemiRegularPolygon:_semiRegularPolygon2["default"],SmoothLine:_smoothLine2["default"],Stock:_stock2["default"],Tree:_tree2["default"],Waterfall:_waterfall2["default"]};
},{"./bar":2,"./bezier":4,"./connector":5,"./curved-rectangle":6,"./graph":7,"./linear":9,"./path":11,"./pie":12,"./polygon":13,"./radar":14,"./rectangle":15,"./sankey":16,"./sector":17,"./semi-regular-polygon":18,"./smooth-line":19,"./stock":20,"./tree":22,"./waterfall":23}],2:[function(require,module,exports){
"use strict";function _interopRequireDefault(r){return r&&r.__esModule?r:{"default":r}}Object.defineProperty(exports,"__esModule",{value:!0});var _slicedToArray=function(){function r(r,e){var t=[],n=!0,a=!1,i=void 0;try{for(var l,o=r[Symbol.iterator]();!(n=(l=o.next()).done)&&(t.push(l.value),!e||t.length!==e);n=!0);}catch(u){a=!0,i=u}finally{try{!n&&o["return"]&&o["return"]()}finally{if(a)throw i}}return t}return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return r(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),_linear=require("./linear"),_linear2=_interopRequireDefault(_linear),_rectangle=require("./rectangle"),_rectangle2=_interopRequireDefault(_rectangle),_ops=require("./ops");exports["default"]=function(r){var e=r.data,t=r.accessor,n=void 0===t?_ops.id:t,a=r.width,i=r.height,l=r.min,o=r.max,u=r.gutter,f=void 0===u?10:u,c=r.compute,y=[];null==l&&(l=0),null==o&&(o=0);var d=!0,s=!1,v=void 0;try{for(var _,h=e.entries()[Symbol.iterator]();!(d=(_=h.next()).done);d=!0){var p=_slicedToArray(_.value,2),m=p[0],g=p[1],x=!0,b=!1,w=void 0;try{for(var A,q=g.entries()[Symbol.iterator]();!(x=(A=q.next()).done);x=!0){var S=_slicedToArray(A.value,2),T=S[0],D=S[1],R=n(D);l>R&&(l=R),R>o&&(o=R),null==y[T]&&(y[T]=[]),y[T][m]=R}}catch(j){b=!0,w=j}finally{try{!x&&q["return"]&&q["return"]()}finally{if(b)throw w}}}}catch(j){s=!0,v=j}finally{try{!d&&h["return"]&&h["return"]()}finally{if(s)throw v}}var M=y.length,O=(a-f*(M-1))/M,E=[],I=(0,_linear2["default"])([l,o],[i,0]),P=!0,k=!1,z=void 0;try{for(var B,C=y.entries()[Symbol.iterator]();!(P=(B=C.next()).done);P=!0){var F=_slicedToArray(B.value,2),m=F[0],G=F[1],H=O/G.length,J=(O+f)*m,K=!0,L=!1,N=void 0;try{for(var Q,U=G.entries()[Symbol.iterator]();!(K=(Q=U.next()).done);K=!0){var V=_slicedToArray(Q.value,2),T=V[0],D=V[1],W=J+H*T,X=W+H,Y=I(0),Z=I(D),$=(0,_rectangle2["default"])({left:W,right:X,bottom:Y,top:Z});E.push((0,_ops.enhance)(c,{item:e[T][m],line:$,group:m,index:T}))}}catch(j){L=!0,N=j}finally{try{!K&&U["return"]&&U["return"]()}finally{if(L)throw N}}}}catch(j){k=!0,z=j}finally{try{!P&&C["return"]&&C["return"]()}finally{if(k)throw z}}return{curves:E,scale:I}},module.exports=exports["default"];
},{"./linear":9,"./ops":10,"./rectangle":15}],3:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _slicedToArray=function(){function r(r,e){var t=[],o=!0,n=!1,i=void 0;try{for(var a,s=r[Symbol.iterator]();!(o=(a=s.next()).done)&&(t.push(a.value),!e||t.length!==e);o=!0);}catch(u){n=!0,i=u}finally{try{!o&&s["return"]&&s["return"]()}finally{if(n)throw i}}return t}return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return r(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),_ops=require("./ops"),average=function(r,e){var t=r.mass+e.mass,o=(0,_ops.times)(1/t,(0,_ops.plus)((0,_ops.times)(r.mass,r.point),(0,_ops.times)(e.mass,e.point)));return[o,t]},locate=function(r,e){var t=_slicedToArray(r,2),o=t[0],n=t[1],i=!0,a=!1,s=void 0;try{for(var u,d=e[Symbol.iterator]();!(i=(u=d.next()).done);i=!0){var l=u.value,f=l.box,c=f.top,p=f.bottom,m=f.left,y=f.right;if(o>=m&&y>=o&&n>=p&&c>=n)return l}}catch(v){a=!0,s=v}finally{try{!i&&d["return"]&&d["return"]()}finally{if(a)throw s}}},makeQuadrant=function(r,e){var t=r.top,o=r.bottom,n=r.left,i=r.right,a=_slicedToArray(e,2),s=a[0],u=a[1],d=(n+i)/2,l=(t+o)/2;return{box:{top:u?l:t,bottom:u?o:l,left:s?d:n,right:s?i:d}}},subdivide=function(r){var e=r.box;return[makeQuadrant(e,[0,0]),makeQuadrant(e,[1,0]),makeQuadrant(e,[0,1]),makeQuadrant(e,[1,1])]},addBody=function r(e,t){if(e.body){var o=e.body;delete e.body,e.children=subdivide(e),r(e,o),r(e,t)}else if(e.children){var n=locate(t.point,e.children),i=e.point?average(e,t):[t.point,t.mass],a=_slicedToArray(i,2),s=a[0],u=a[1];e.point=s,e.mass=u,r(n,t)}else e.body=t},makeTree=function(r,e){for(var t=!0;t;){var o=r,n=e;if(t=!1,0===o.length)return n;var i=o.shift();addBody(n,i),r=o,e=n,t=!0,i=void 0}},makeBodies=function(r){return(0,_ops.mapObject)(r,function(r,e){return{id:r,point:e,mass:1}})},makeRoot=function(r,e){return{box:{top:e,bottom:0,left:0,right:r}}},walkLeaves=function e(r,t){if(r.body)t(r);else if(r.children){var o=!0,n=!1,i=void 0;try{for(var a,s=r.children[Symbol.iterator]();!(o=(a=s.next()).done);o=!0){var u=a.value;e(u,t)}}catch(d){n=!0,i=d}finally{try{!o&&s["return"]&&s["return"]()}finally{if(n)throw i}}}},bodyForceOn=function(r,e,t){var o=(0,_ops.minus)(r.point,e.point),n=(0,_ops.length)(o);return(0,_ops.times)(t*r.mass*e.mass/(n*n*n),o)},boxWidth=function(r){var e=r.top,t=r.bottom,o=r.left,n=r.right;return(0,_ops.length)([e-t,n-o])},forceOn=function t(r,e,o,n){if(e===r)return[0,0];if(e.body)return bodyForceOn(r.body,e.body,o);if(e.point){var i=boxWidth(e.box),a=(0,_ops.length)((0,_ops.minus)(r.body.point,e.point));return n>i/a?bodyForceOn(r.body,e,o):(0,_ops.sumVectors)(e.children.map(function(e){return t(r,e,o,n)}))}return[0,0]},repulsiveForces=function(r,e,t){var o={};return walkLeaves(r,function(n){o[n.body.id]=forceOn(n,r,e,t)}),o};exports.tree=makeTree,exports.bodies=makeBodies,exports.root=makeRoot,exports.forces=repulsiveForces,exports["default"]={tree:makeTree,bodies:makeBodies,root:makeRoot,forces:repulsiveForces};
},{"./ops":10}],4:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _toConsumableArray(e){if(Array.isArray(e)){for(var r=0,o=Array(e.length);r<e.length;r++)o[r]=e[r];return o}return Array.from(e)}Object.defineProperty(exports,"__esModule",{value:!0});var _path=require("./path"),_path2=_interopRequireDefault(_path),_polygon=require("./polygon"),_polygon2=_interopRequireDefault(_polygon),_ops=require("./ops"),reflect=function(e,r){return(0,_ops.minus)((0,_ops.times)(2,e),r)};exports["default"]=function(e){var r,o=e.points,t=e.tension;t=t||.3;var u=[],n=o.length;if(2>=n)return(0,_polygon2["default"])({points:o});for(var p=1;n-1>=p;p++)u.push((0,_ops.times)(t,(0,_ops.minus)(o[p],o[p-1])));for(var a=[(0,_ops.plus)(o[0],reflect(u[0],u[1]))],p=1;n-2>=p;p++)a.push((0,_ops.minus)(o[p],(0,_ops.average)([u[p],u[p-1]])));a.push((0,_ops.minus)(o[n-1],reflect(u[n-2],u[n-3])));var s=a[0],i=a[1],_=o[0],l=o[1],f=(r=(0,_path2["default"])()).moveto.apply(r,_toConsumableArray(_)).curveto(s[0],s[1],i[0],i[1],l[0],l[1]);return{path:(0,_ops.range)(2,n).reduce(function(e,r){var t=a[r],u=o[r];return e.smoothcurveto(t[0],t[1],u[0],u[1])},f),centroid:(0,_ops.average)(o)}},module.exports=exports["default"];
},{"./ops":10,"./path":11,"./polygon":13}],5:[function(require,module,exports){
"use strict";function _interopRequireDefault(r){return r&&r.__esModule?r:{"default":r}}function _toConsumableArray(r){if(Array.isArray(r)){for(var e=0,t=Array(r.length);e<r.length;e++)t[e]=r[e];return t}return Array.from(r)}Object.defineProperty(exports,"__esModule",{value:!0});var _slicedToArray=function(){function r(r,e){var t=[],a=!0,n=!1,o=void 0;try{for(var u,i=r[Symbol.iterator]();!(a=(u=i.next()).done)&&(t.push(u.value),!e||t.length!==e);a=!0);}catch(l){n=!0,o=l}finally{try{!a&&i["return"]&&i["return"]()}finally{if(n)throw o}}return t}return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return r(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),_path=require("./path"),_path2=_interopRequireDefault(_path),_ops=require("./ops");exports["default"]=function(r){var e,t,a,n=r.start,o=r.end,u=r.tension;null==u&&(u=.05);var i=_slicedToArray(n,2),l=i[0],p=i[1],s=_slicedToArray(o,2),y=s[0],f=s[1],c=(y-l)*u,_=[l+c,p];return{path:(e=(t=(a=(0,_path2["default"])()).moveto.apply(a,_toConsumableArray(n))).lineto.apply(t,_).curveto(l+5*c,p,y-5*c,f,y-c,f)).lineto.apply(e,_toConsumableArray(o)),centroid:(0,_ops.average)([n,o])}},module.exports=exports["default"];
},{"./ops":10,"./path":11}],6:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _path=require("./path"),_path2=_interopRequireDefault(_path),_connector=require("./connector"),_connector2=_interopRequireDefault(_connector),_ops=require("./ops");exports["default"]=function(e){var t=e.topleft,o=e.topright,r=e.bottomleft,n=e.bottomright,a=(0,_connector2["default"])({start:t,end:o}).path,u=(0,_connector2["default"])({start:n,end:r}).path,p=a.connect(u).closepath(),c=(0,_ops.average)([t,o,r,n]);return{path:p,centroid:c}},module.exports=exports["default"];
},{"./connector":5,"./ops":10,"./path":11}],7:[function(require,module,exports){
"use strict";function _interopRequireDefault(r){return r&&r.__esModule?r:{"default":r}}Object.defineProperty(exports,"__esModule",{value:!0});var _slicedToArray=function(){function r(r,t){var e=[],n=!0,o=!1,a=void 0;try{for(var i,u=r[Symbol.iterator]();!(n=(i=u.next()).done)&&(e.push(i.value),!t||e.length!==t);n=!0);}catch(l){o=!0,a=l}finally{try{!n&&u["return"]&&u["return"]()}finally{if(o)throw a}}return e}return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return r(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),_polygon=require("./polygon"),_polygon2=_interopRequireDefault(_polygon),_ops=require("./ops"),_barnesHut=require("./barnes-hut"),_barnesHut2=_interopRequireDefault(_barnesHut),randomPosition=function(r,t){return[Math.random()*r,Math.random()*t]},cap=function(r,t){return Math.min(Math.max(t,0),r)},inside=function(r,t){return function(e){var n=_slicedToArray(e,2),o=n[0],a=n[1];return[cap(r,o),cap(t,a)]}},attractiveForces=function(r,t,e){var n={},o=!0,a=!1,i=void 0;try{for(var u,l=Object.keys(r)[Symbol.iterator]();!(o=(u=l.next()).done);o=!0){var s=u.value,c=r[s],f=c.start,d=c.end,y=c.weight,v=t[f],p=t[d],_=(0,_ops.times)(e*y,(0,_ops.minus)(v,p));n[f]||(n[f]=[0,0]),n[d]||(n[d]=[0,0]),n[f]=(0,_ops.minus)(n[f],_),n[d]=(0,_ops.plus)(n[d],_)}}catch(h){a=!0,i=h}finally{try{!o&&l["return"]&&l["return"]()}finally{if(a)throw i}}return n};exports["default"]=function(r){var t=r.data,e=r.nodeaccessor,n=r.linkaccessor,o=r.width,a=r.height,i=r.attraction,u=r.repulsion,l=r.threshold,s=function(r){return r};e||(e=s),n||(n=s),i=i||1,u=u||1,l=l||.5;var c=inside(o,a),f=t.nodes,d=t.links,y=t.constraints;y||(y={});var v={},p={},_=!0,h=!1,b=void 0;try{for(var m,w=f[Symbol.iterator]();!(_=(m=w.next()).done);_=!0){var x=m.value,g=e(x);v[g]=y[g]||randomPosition(o,a),p[g]=x}}catch(k){h=!0,b=k}finally{try{!_&&w["return"]&&w["return"]()}finally{if(h)throw b}}var H={},j=!0,q=!1,M=void 0;try{for(var O,S=d[Symbol.iterator]();!(j=(O=S.next()).done);j=!0){var A=O.value,D=n(A),P=D.start,R=D.end,T=D.weight;H[P+"|"+R]={weight:T,start:P,end:R,link:A}}}catch(k){q=!0,M=k}finally{try{!j&&S["return"]&&S["return"]()}finally{if(q)throw M}}var F=function(){var r=_barnesHut2["default"].bodies(v),t=_barnesHut2["default"].root(o,a),e=_barnesHut2["default"].tree(r,t),n=attractiveForces(H,v,i/1e3),s=_barnesHut2["default"].forces(e,1e3*u,l),f=!0,d=!1,p=void 0;try{for(var _,h=Object.keys(v)[Symbol.iterator]();!(f=(_=h.next()).done);f=!0){var b=_.value,m=v[b];if(y[b])v[b]=y[b];else{var w=n[b]||[0,0],x=s[b]||[0,0],g=(0,_ops.plus)(w,x);v[b]=c((0,_ops.plus)(m,g))}}}catch(k){d=!0,p=k}finally{try{!f&&h["return"]&&h["return"]()}finally{if(d)throw p}}return B()},E=function(r,t){y[r]=t},I=function(r){delete y[r]},z={tick:F,constrain:E,unconstrain:I},B=function(){var r=-1;return z.curves=(0,_ops.mapObject)(H,function(t,e){var n=e.start,o=e.end,a=e.link;r+=1;var i=v[n],u=v[o];return{link:(0,_polygon2["default"])({points:[i,u],closed:!1}),item:a,index:r}}),z.nodes=(0,_ops.mapObject)(p,function(r,t){return{point:v[r],item:t}}),z};return B()},module.exports=exports["default"];
},{"./barnes-hut":3,"./ops":10,"./polygon":13}],8:[function(require,module,exports){
"use strict";function _interopRequireDefault(r){return r&&r.__esModule?r:{"default":r}}Object.defineProperty(exports,"__esModule",{value:!0});var _slicedToArray=function(){function r(r,n){var e=[],t=!0,a=!1,i=void 0;try{for(var o,u=r[Symbol.iterator]();!(t=(o=u.next()).done)&&(e.push(o.value),!n||e.length!==n);t=!0);}catch(l){a=!0,i=l}finally{try{!t&&u["return"]&&u["return"]()}finally{if(a)throw i}}return e}return function(n,e){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return r(n,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),_linear=require("./linear"),_linear2=_interopRequireDefault(_linear),_ops=require("./ops"),epsilon=1e-5,box=function(r,n){var e=r.map(n),t=e.sort(function(r,n){var e=_slicedToArray(r,2),t=e[0],a=(e[1],_slicedToArray(n,2)),i=a[0];a[1];return t-i}),a=t.length,i=t[0][0],o=t[a-1][0],u=(0,_ops.minBy)(t,function(r){return r[1]}),l=(0,_ops.maxBy)(t,function(r){return r[1]});return i==o&&(o+=epsilon),u==l&&(l+=epsilon),{points:t,xmin:i,xmax:o,ymin:u,ymax:l}};exports["default"]=function(r){var n=r.data,e=r.xaccessor,t=r.yaccessor,a=r.width,i=r.height,o=r.closed,u=r.min,l=r.max;e||(e=function(r){var n=_slicedToArray(r,2),e=n[0];n[1];return e}),t||(t=function(r){var n=_slicedToArray(r,2),e=(n[0],n[1]);return e});var s=function(r){return[e(r),t(r)]},c=n.map(function(r){return box(r,s)}),f=(0,_ops.minBy)(c,function(r){return r.xmin}),y=(0,_ops.maxBy)(c,function(r){return r.xmax}),m=null==u?(0,_ops.minBy)(c,function(r){return r.ymin}):u,p=null==l?(0,_ops.maxBy)(c,function(r){return r.ymax}):l;o&&(m=Math.min(m,0),p=Math.max(p,0));var _=o?0:m,d=(0,_linear2["default"])([f,y],[0,a]),x=(0,_linear2["default"])([m,p],[i,0]),v=function(r){var n=_slicedToArray(r,2),e=n[0],t=n[1];return[d(e),x(t)]};return{arranged:c,scale:v,xscale:d,yscale:x,base:_}},module.exports=exports["default"];
},{"./linear":9,"./ops":10}],9:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _slicedToArray=function(){function r(r,e){var t=[],n=!0,o=!1,i=void 0;try{for(var u,a=r[Symbol.iterator]();!(n=(u=a.next()).done)&&(t.push(u.value),!e||t.length!==e);n=!0);}catch(l){o=!0,i=l}finally{try{!n&&a["return"]&&a["return"]()}finally{if(o)throw i}}return t}return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return r(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),linear=function r(e,t){var n=_slicedToArray(e,2),o=n[0],i=n[1],u=_slicedToArray(t,2),a=u[0],l=u[1],c=function(r){return a+(l-a)*(r-o)/(i-o)};return c.inverse=function(){return r([a,l],[o,i])},c};exports["default"]=linear,module.exports=exports["default"];
},{}],10:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _slicedToArray=function(){function r(r,e){var n=[],t=!0,u=!1,i=void 0;try{for(var a,o=r[Symbol.iterator]();!(t=(a=o.next()).done)&&(n.push(a.value),!e||n.length!==e);t=!0);}catch(s){u=!0,i=s}finally{try{!t&&o["return"]&&o["return"]()}finally{if(u)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return r(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),sum=function(r){return r.reduce(function(r,e){return r+e},0)},min=function(r){return r.reduce(function(r,e){return Math.min(r,e)})},max=function(r){return r.reduce(function(r,e){return Math.max(r,e)})},sumBy=function(r,e){return r.reduce(function(r,n){return r+e(n)},0)},minBy=function(r,e){return r.reduce(function(r,n){return Math.min(r,e(n))},1/0)},maxBy=function(r,e){return r.reduce(function(r,n){return Math.max(r,e(n))},-(1/0))},plus=function(r,e){var n=_slicedToArray(r,2),t=n[0],u=n[1],i=_slicedToArray(e,2),a=i[0],o=i[1];return[t+a,u+o]},minus=function(r,e){var n=_slicedToArray(r,2),t=n[0],u=n[1],i=_slicedToArray(e,2),a=i[0],o=i[1];return[t-a,u-o]},times=function(r,e){var n=_slicedToArray(e,2),t=n[0],u=n[1];return[r*t,r*u]},length=function(r){var e=_slicedToArray(r,2),n=e[0],t=e[1];return Math.sqrt(n*n+t*t)},sumVectors=function(r){return r.reduce(plus,[0,0])},average=function(r){return times(1/r.length,r.reduce(plus))},onCircle=function(r,e){return times(r,[Math.sin(e),-Math.cos(e)])},enhance=function(r,e){var n=r||{};for(var t in n){var u=n[t];e[t]=u(e.index,e.item,e.group)}return e},range=function(r,e,n){for(var t=[],u=r;e>u;u++)t.push(u);return n&&t.push(e),t},mapObject=function(r,e){var n=[],t=!0,u=!1,i=void 0;try{for(var a,o=Object.keys(r)[Symbol.iterator]();!(t=(a=o.next()).done);t=!0){var s=a.value,c=r[s];n.push(e(s,c))}}catch(m){u=!0,i=m}finally{try{!t&&o["return"]&&o["return"]()}finally{if(u)throw i}}return n},pairs=function(r){return mapObject(r,function(r,e){return[r,e]})},id=function(r){return r};exports.sum=sum,exports.min=min,exports.max=max,exports.sumBy=sumBy,exports.minBy=minBy,exports.maxBy=maxBy,exports.plus=plus,exports.minus=minus,exports.times=times,exports.id=id,exports.length=length,exports.sumVectors=sumVectors,exports.average=average,exports.onCircle=onCircle,exports.enhance=enhance,exports.range=range,exports.mapObject=mapObject,exports.pairs=pairs,exports["default"]={sum:sum,min:min,max:max,sumBy:sumBy,minBy:minBy,maxBy:maxBy,plus:plus,minus:minus,times:times,id:id,length:length,sumVectors:sumVectors,average:average,onCircle:onCircle,enhance:enhance,range:range,mapObject:mapObject,pairs:pairs};
},{}],11:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _slicedToArray=function(){function r(r,n){var t=[],e=!0,a=!1,o=void 0;try{for(var u,c=r[Symbol.iterator]();!(e=(u=c.next()).done)&&(t.push(u.value),!n||t.length!==n);e=!0);}catch(i){a=!0,o=i}finally{try{!e&&c["return"]&&c["return"]()}finally{if(a)throw o}}return t}return function(n,t){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return r(n,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),Path=function r(n){var t=n||[],e=function(r,n){var t=r.slice(0,r.length);return t.push(n),t},a=function(r,n){var t=_slicedToArray(r,2),e=t[0],a=t[1],o=_slicedToArray(n,2),u=o[0],c=o[1];return e===u&&a===c},o=function(r,n){for(var t=r.length;"0"===r.charAt(t-1);)t-=1;return"."===r.charAt(t-1)&&(t-=1),r.substr(0,t)},u=function(r,n){var t=r.toFixed(n);return o(t)},c=function(r){var n=r.command,t=r.params,e=t.map(function(r){return u(r,6)});return n+" "+e.join(" ")},i=function(r,n){var t=r.command,e=r.params,a=_slicedToArray(n,2),o=a[0],u=a[1];switch(t){case"M":return[e[0],e[1]];case"L":return[e[0],e[1]];case"H":return[e[0],u];case"V":return[o,e[0]];case"Z":return null;case"C":return[e[4],e[5]];case"S":return[e[2],e[3]];case"Q":return[e[2],e[3]];case"T":return[e[0],e[1]];case"A":return[e[5],e[6]]}},s=function(r,n){return function(t){var e="object"==typeof t?r.map(function(r){return t[r]}):arguments;return n.apply(null,e)}},m=function(n){return r(e(t,n))};return{moveto:s(["x","y"],function(r,n){return m({command:"M",params:[r,n]})}),lineto:s(["x","y"],function(r,n){return m({command:"L",params:[r,n]})}),hlineto:s(["x"],function(r){return m({command:"H",params:[r]})}),vlineto:s(["y"],function(r){return m({command:"V",params:[r]})}),closepath:function(){return m({command:"Z",params:[]})},curveto:s(["x1","y1","x2","y2","x","y"],function(r,n,t,e,a,o){return m({command:"C",params:[r,n,t,e,a,o]})}),smoothcurveto:s(["x2","y2","x","y"],function(r,n,t,e){return m({command:"S",params:[r,n,t,e]})}),qcurveto:s(["x1","y1","x","y"],function(r,n,t,e){return m({command:"Q",params:[r,n,t,e]})}),smoothqcurveto:s(["x","y"],function(r,n){return m({command:"T",params:[r,n]})}),arc:s(["rx","ry","xrot","largeArcFlag","sweepFlag","x","y"],function(r,n,t,e,a,o,u){return m({command:"A",params:[r,n,t,e,a,o,u]})}),print:function(){return t.map(c).join(" ")},points:function(){var r=[],n=[0,0],e=!0,a=!1,o=void 0;try{for(var u,c=t[Symbol.iterator]();!(e=(u=c.next()).done);e=!0){var s=u.value,m=i(s,n);n=m,m&&r.push(m)}}catch(f){a=!0,o=f}finally{try{!e&&c["return"]&&c["return"]()}finally{if(a)throw o}}return r},instructions:function(){return t.slice(0,t.length)},connect:function(n){var t=this.points(),e=t[t.length-1],o=n.points()[0],u=n.instructions().slice(1);return a(e,o)||u.unshift({command:"L",params:o}),r(this.instructions().concat(u))}}};exports["default"]=function(){return Path()},module.exports=exports["default"];
},{}],12:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _slicedToArray=function(){function e(e,r){var t=[],n=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done)&&(t.push(i.value),!r||t.length!==r);n=!0);}catch(l){o=!0,a=l}finally{try{!n&&u["return"]&&u["return"]()}finally{if(o)throw a}}return t}return function(r,t){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return e(r,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),_linear=require("./linear"),_linear2=_interopRequireDefault(_linear),_sector=require("./sector"),_sector2=_interopRequireDefault(_sector),_ops=require("./ops");exports["default"]=function(e){var r=e.data,t=e.accessor,n=e.center,o=e.r,a=e.R,i=e.compute,u=r.map(t),l=(0,_ops.sum)(u),s=(0,_linear2["default"])([0,l],[0,2*Math.PI]),c=[],f=0,d=!0,_=!1,p=void 0;try{for(var y,v=r.entries()[Symbol.iterator]();!(d=(y=v.next()).done);d=!0){var h=_slicedToArray(y.value,2),m=h[0],x=h[1],b=u[m];c.push((0,_ops.enhance)(i,{item:x,index:m,sector:(0,_sector2["default"])({center:n,r:o,R:a,start:s(f),end:s(f+b)})})),f+=b}}catch(q){_=!0,p=q}finally{try{!d&&v["return"]&&v["return"]()}finally{if(_)throw p}}return{curves:c}},module.exports=exports["default"];
},{"./linear":9,"./ops":10,"./sector":17}],13:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _toConsumableArray(e){if(Array.isArray(e)){for(var r=0,t=Array(e.length);r<e.length;r++)t[r]=e[r];return t}return Array.from(e)}Object.defineProperty(exports,"__esModule",{value:!0});var _path=require("./path"),_path2=_interopRequireDefault(_path),_ops=require("./ops");exports["default"]=function(e){var r,t=e.points,o=e.closed,a=t.length,u=t[0],n=t.slice(1,a+1),l=n.reduce(function(e,r){return e.lineto.apply(e,_toConsumableArray(r))},(r=(0,_path2["default"])()).moveto.apply(r,_toConsumableArray(u)));return{path:o?l.closepath():l,centroid:(0,_ops.average)(t)}},module.exports=exports["default"];
},{"./ops":10,"./path":11}],14:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _semiRegularPolygon=require("./semi-regular-polygon"),_semiRegularPolygon2=_interopRequireDefault(_semiRegularPolygon),_ops=require("./ops"),collectKeys=function(e){var r=[],t=(e.map(Object.keys),!0),n=!1,o=void 0;try{for(var a,u=e[Symbol.iterator]();!(t=(a=u.next()).done);t=!0){var i=a.value,l=!0,c=!1,s=void 0;try{for(var f,y=Object.keys(i)[Symbol.iterator]();!(l=(f=y.next()).done);l=!0){var p=f.value;-1==r.indexOf(p)&&r.push(p)}}catch(v){c=!0,s=v}finally{try{!l&&y["return"]&&y["return"]()}finally{if(c)throw s}}}}catch(v){n=!0,o=v}finally{try{!t&&u["return"]&&u["return"]()}finally{if(n)throw o}}return r},keyAccessor=function(e){var r={},t=!0,n=!1,o=void 0;try{for(var a,u=e[Symbol.iterator]();!(t=(a=u.next()).done);t=!0){var i=a.value;!function(e){r[e]=function(r){return r[e]}}(i)}}catch(l){n=!0,o=l}finally{try{!t&&u["return"]&&u["return"]()}finally{if(n)throw o}}return r},globalMax=function(e,r){var t=Object.keys(r),n=e.map(function(e){return(0,_ops.maxBy)(t,function(t){return r[t](e)})});return(0,_ops.max)(n)};exports["default"]=function(e){var r=e.data,t=e.accessor,n=e.center,o=e.r,a=e.max,u=e.rings,i=void 0===u?3:u,l=e.compute,c=void 0===l?{}:l;t||(t=keyAccessor(collectKeys(r)));var s=Object.keys(t),f=s.length,y=(2*Math.PI/f,-1);null==a&&(a=globalMax(r,t));var p=(0,_ops.range)(1,i,!0).map(function(e){var r=o*e/i;return(0,_semiRegularPolygon2["default"])({center:n,radii:(0,_ops.range)(0,f).map(function(e){return r})})}),v=r.map(function(e){return y+=1,(0,_ops.enhance)(c,{polygon:(0,_semiRegularPolygon2["default"])({center:n,radii:s.map(function(r){return o*t[r](e)/a})}),item:e,index:y})});return{curves:v,rings:p}},module.exports=exports["default"];
},{"./ops":10,"./semi-regular-polygon":18}],15:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _polygon=require("./polygon"),_polygon2=_interopRequireDefault(_polygon);exports["default"]=function(e){var o=e.left,t=e.right,r=e.top,u=e.bottom;return(0,_polygon2["default"])({points:[[t,r],[t,u],[o,u],[o,r]],closed:!0})},module.exports=exports["default"];
},{"./polygon":13}],16:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _slicedToArray=function(){function e(e,r){var t=[],n=!0,u=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(n=(a=c.next()).done)&&(t.push(a.value),!r||t.length!==r);n=!0);}catch(i){u=!0,o=i}finally{try{!n&&c["return"]&&c["return"]()}finally{if(u)throw o}}return t}return function(r,t){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return e(r,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),_rectangle=require("./rectangle"),_rectangle2=_interopRequireDefault(_rectangle),_curvedRectangle=require("./curved-rectangle"),_curvedRectangle2=_interopRequireDefault(_curvedRectangle),_ops=require("./ops");exports["default"]=function(e){var r=e.data,t=e.nodeaccessor,n=e.linkaccessor,u=e.width,o=e.height,a=e.gutter,c=e.rectWidth,i=e.compute,l=function(e){return e};t||(t=l),n||(n=l),a=a||10,c=c||10;var s=r.links.map(n),f=r.nodes.map(function(e){return e.map(t)}),d=(u-c)/(r.nodes.length-1),p={};f.reduce(function(e,r){return e.concat(r)}).forEach(function(e){p[e]={value:0,currentlyUsedIn:0,currentlyUsedOut:0}});var v=!0,y=!1,h=void 0;try{for(var g,_=function(){var e=_slicedToArray(g.value,2),r=e[0],t=e[1],n=(0,_ops.sumBy)(s.filter(function(e){return e.end===r}),function(e){return e.weight}),u=(0,_ops.sumBy)(s.filter(function(e){return e.start===r}),function(e){return e.weight});t.value=Math.max(n,u)},m=(0,_ops.pairs)(p)[Symbol.iterator]();!(v=(g=m.next()).done);v=!0)_()}catch(b){y=!0,h=b}finally{try{!v&&m["return"]&&m["return"]()}finally{if(y)throw h}}var x=f.map(function(e){return(0,_ops.sumBy)(e,function(e){return p[e].value})}),w=f.map(function(e){return o-(e.length-1)*a}),R=(0,_ops.min)(x.map(function(e,r){return w[r]/e})),q=!0,U=!1,A=void 0;try{for(var O,B=(0,_ops.pairs)(p)[Symbol.iterator]();!(q=(O=B.next()).done);q=!0){var E=_slicedToArray(O.value,2),I=(E[0],E[1]);I.scaledValue=R*I.value}}catch(b){U=!0,A=b}finally{try{!q&&B["return"]&&B["return"]()}finally{if(U)throw A}}var S=[],T=-1;f.forEach(function(e,t){var n=(0,_ops.sumBy)(e,function(e){return p[e].scaledValue})+(e.length-1)*a,u=(o-n)/2,l=u-a;e.forEach(function(e,n){var u=l+a,o=u+p[e].scaledValue;l=o;var s={top:u,bottom:o,left:c/2+t*d-c/2,right:c/2+t*d+c/2};p[e].rectangleCoords=s,T+=1,S.push((0,_ops.enhance)(i,{curve:(0,_rectangle2["default"])(s),item:r.nodes[t][n],index:T,group:t}))})});var k=s.map(function(e,t){var n=p[e.start],u=p[e.end],o=n.rectangleCoords,a=u.rectangleCoords,c=e.weight*R,l=o.top+n.currentlyUsedOut,s=a.top+u.currentlyUsedIn,f={topleft:[o.right,l],topright:[a.left,s],bottomleft:[o.right,l+c],bottomright:[a.left,s+c]};return n.currentlyUsedOut+=c,u.currentlyUsedIn+=c,(0,_ops.enhance)(i,{curve:(0,_curvedRectangle2["default"])(f),item:r.links[t],index:t})});return{curvedRectangles:k,rectangles:S}},module.exports=exports["default"];
},{"./curved-rectangle":6,"./ops":10,"./rectangle":15}],17:[function(require,module,exports){
"use strict";function _interopRequireDefault(r){return r&&r.__esModule?r:{"default":r}}function _toConsumableArray(r){if(Array.isArray(r)){for(var e=0,o=Array(r.length);e<r.length;e++)o[e]=r[e];return o}return Array.from(r)}Object.defineProperty(exports,"__esModule",{value:!0});var _path=require("./path"),_path2=_interopRequireDefault(_path),_ops=require("./ops");exports["default"]=function(r){var e,o,t,a,p=r.center,l=r.r,s=r.R,u=r.start,n=r.end,_=(0,_ops.plus)(p,(0,_ops.onCircle)(s,u)),i=(0,_ops.plus)(p,(0,_ops.onCircle)(s,n)),c=(0,_ops.plus)(p,(0,_ops.onCircle)(l,n)),y=(0,_ops.plus)(p,(0,_ops.onCircle)(l,u)),f=n-u>Math.PI?1:0,d=(e=(o=(t=(a=(0,_path2["default"])()).moveto.apply(a,_toConsumableArray(_))).arc.apply(t,[s,s,0,f,1].concat(_toConsumableArray(i)))).lineto.apply(o,_toConsumableArray(c))).arc.apply(e,[l,l,0,f,0].concat(_toConsumableArray(y))).closepath(),h=(u+n)/2,C=(l+s)/2,A=(0,_ops.plus)(p,(0,_ops.onCircle)(C,h));return{path:d,centroid:A}},module.exports=exports["default"];
},{"./ops":10,"./path":11}],18:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _polygon=require("./polygon"),_polygon2=_interopRequireDefault(_polygon),_ops=require("./ops");exports["default"]=function(e){var o=e.center,r=e.radii,t=2*Math.PI/r.length,u=r.map(function(e,r){return(0,_ops.plus)(o,(0,_ops.onCircle)(e,r*t))});return(0,_polygon2["default"])({points:u,closed:!0})},module.exports=exports["default"];
},{"./ops":10,"./polygon":13}],19:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _toConsumableArray(e){if(Array.isArray(e)){for(var r=0,a=Array(e.length);r<e.length;r++)a[r]=e[r];return a}return Array.from(e)}Object.defineProperty(exports,"__esModule",{value:!0});var _bezier=require("./bezier"),_bezier2=_interopRequireDefault(_bezier),_lineChartComp=require("./line-chart-comp"),_lineChartComp2=_interopRequireDefault(_lineChartComp),_ops=require("./ops");exports["default"]=function(e){var r=(0,_lineChartComp2["default"])(e),a=r.arranged,t=r.scale,o=r.xscale,n=r.yscale,i=r.base,l=-1,u=a.map(function(r){var a,o,n=r.points,u=r.xmin,p=r.xmax,s=n.map(t);l+=1;var _=(0,_bezier2["default"])({points:s}),c={path:(a=(o=_.path).lineto.apply(o,_toConsumableArray(t([p,i])))).lineto.apply(a,_toConsumableArray(t([u,i]))).closepath(),centroid:(0,_ops.average)([_.centroid,t([u,i]),t([p,i])])};return(0,_ops.enhance)(e.compute,{item:e.data[l],line:_,area:c,index:l})});return{curves:u,xscale:o,yscale:n}},module.exports=exports["default"];
},{"./bezier":4,"./line-chart-comp":8,"./ops":10}],20:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _polygon=require("./polygon"),_polygon2=_interopRequireDefault(_polygon),_lineChartComp=require("./line-chart-comp"),_lineChartComp2=_interopRequireDefault(_lineChartComp),_ops=require("./ops");exports["default"]=function(e){var o=(0,_lineChartComp2["default"])(e),r=o.arranged,t=o.scale,a=o.xscale,n=o.yscale,l=o.base,p=-1,u=r.map(function(o){var r=o.points,a=o.xmin,n=o.xmax,u=r.map(t);r.push([n,l]),r.push([a,l]);var i=r.map(t);return p+=1,(0,_ops.enhance)(e.compute,{item:e.data[p],line:(0,_polygon2["default"])({points:u,closed:!1}),area:(0,_polygon2["default"])({points:i,closed:!0}),index:p})});return{curves:u,xscale:a,yscale:n}},module.exports=exports["default"];
},{"./line-chart-comp":8,"./ops":10,"./polygon":13}],21:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var maxBy=function(e,t){return void 0===e&&(e=[]),e.reduce(function(e,r){return Math.max(e,t(r))},0)},treeHeight=function e(t){return 1+maxBy(t.children,e)},buildTree=function t(e,r){var n=arguments.length<=2||void 0===arguments[2]?0:arguments[2],i={item:e,level:n},u=r(e);return u&&u.length&&(i.children=u.map(function(e){return t(e,r,n+1)})),i},setHeight=function r(e){var t=arguments.length<=1||void 0===arguments[1]?0:arguments[1],n=arguments.length<=2||void 0===arguments[2]?[]:arguments[2];null!=n[t]?(e.height=n[t]+1,n[t]+=1):(n[t]=0,e.height=0);var i=!0,u=!1,a=void 0;try{for(var l,o=(e.children||[])[Symbol.iterator]();!(i=(l=o.next()).done);i=!0){var c=l.value;r(c,t+1,n)}}catch(h){u=!0,a=h}finally{try{!i&&o["return"]&&o["return"]()}finally{if(u)throw a}}return n},collect=function n(e,t){var r=[],i=!0,u=!1,a=void 0;try{for(var l,o=(e.children||[])[Symbol.iterator]();!(i=(l=o.next()).done);i=!0){var c=l.value;r.push(t(e,c)),r=r.concat(n(c,t))}}catch(h){u=!0,a=h}finally{try{!i&&o["return"]&&o["return"]()}finally{if(u)throw a}}return r};exports.treeHeight=treeHeight,exports.buildTree=buildTree,exports.setHeight=setHeight,exports.collect=collect;
},{}],22:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _connector=require("./connector"),_connector2=_interopRequireDefault(_connector),_linear=require("./linear"),_linear2=_interopRequireDefault(_linear),_ops=require("./ops"),_treeUtils=require("./tree-utils");exports["default"]=function(e){var t=e.data,r=e.width,n=e.height,i=e.children,o=e.tension;i||(i=function(e){return e.children});var u=(0,_treeUtils.buildTree)(t,i),l=(0,_treeUtils.treeHeight)(u),c=(0,_treeUtils.setHeight)(u),a=(0,_linear2["default"])([0,l-1],[0,r]),s=(0,_ops.range)(0,l).map(function(e){var t=Math.sqrt(e/(l-1))*n,r=(n-t)/2,i=r+t,o=e>0?c[e]+c[e-1]:c[e];return 0===o?function(e){return n/2}:(0,_linear2["default"])([0,o],[r,i])}),_=function(e){var t=e.level,r=s[t];return[a(t),r(e.height_)]},d=-1,f=(0,_treeUtils.collect)(u,function(e,t){return d+=1,t.height_=t.height+e.height,{connector:(0,_connector2["default"])({start:_(e),end:_(t),tension:o}),index:d,item:{start:e.item,end:t.item}}}),h=(0,_treeUtils.collect)(u,function(e,t){return{point:_(t),item:t.item}}),p={point:_(u),item:u.item};return{curves:f,nodes:[p].concat(h)}},module.exports=exports["default"];
},{"./connector":5,"./linear":9,"./ops":10,"./tree-utils":21}],23:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _slicedToArray=function(){function e(e,r){var t=[],a=!0,n=!1,i=void 0;try{for(var l,o=e[Symbol.iterator]();!(a=(l=o.next()).done)&&(t.push(l.value),!r||t.length!==r);a=!0);}catch(u){n=!0,i=u}finally{try{!a&&o["return"]&&o["return"]()}finally{if(n)throw i}}return t}return function(r,t){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return e(r,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),_linear=require("./linear"),_linear2=_interopRequireDefault(_linear),_rectangle=require("./rectangle"),_rectangle2=_interopRequireDefault(_rectangle),_ops=require("./ops");exports["default"]=function(e){var r=e.data,t=e.accessor,a=e.width,n=e.height,i=e.gutter,l=void 0===i?10:i,o=e.compute,u=e.min,c=void 0===u?0:u,f=e.max,d=void 0===f?0:f;t||(t=function(e){return e});var s=0,v=[],h=!0,y=!1,_=void 0;try{for(var p,m=r[Symbol.iterator]();!(h=(p=m.next()).done);h=!0){var g=p.value,x=t(g),b=x.value,w=x.absolute,q=w?[0,b||s]:[s,s+b],M=_slicedToArray(q,2),A=M[0],S=M[1],T=Math.min(A,S),D=Math.max(A,S);c=Math.min(c,T),d=Math.max(d,D),s=S,v.push({item:g,low:A,high:S,value:null!=b?b:S})}}catch(R){y=!0,_=R}finally{try{!h&&m["return"]&&m["return"]()}finally{if(y)throw _}}var j=v.length,O=(a-l*(j-1))/j,E=[],I=(0,_linear2["default"])([c,d],[n,0]),P=!0,k=!1,z=void 0;try{for(var B,C=v.entries()[Symbol.iterator]();!(P=(B=C.next()).done);P=!0){var F=_slicedToArray(B.value,2),G=F[0],g=F[1],H=G*(O+l),J=H+O,K=I(g.low),L=I(g.high),N=(0,_rectangle2["default"])({left:H,right:J,bottom:K,top:L});E.push((0,_ops.enhance)(o,{item:g.item,line:N,value:g.value,index:G}))}}catch(R){k=!0,z=R}finally{try{!P&&C["return"]&&C["return"]()}finally{if(k)throw z}}return{curves:E,scale:I}},module.exports=exports["default"];
},{"./linear":9,"./ops":10,"./rectangle":15}]},{},[1])


//# sourceMappingURL=dist/global/paths.js.map