(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[2],{480:function(e,t,a){"use strict";var n=a(482);t.a=Object(n.a)("checkbox")},482:function(e,t,a){"use strict";var n=a(18),f=a(22),i=a(4),d=a(5),l=a(6),r=a(3),s=a(7),c=a(1),o=a(0),m=a.n(o),h=a(15),O=a.n(h),u=a(20),p=a(21),b=a(29),v=a(10),y=a(468),k=a(2);t.a=function(g){var e=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(l.a)(this,Object(r.a)(a).call(this,e))).state={checked:e.checked},t.id="cb_".concat(Object(b.b)()),t.input=null,t.el=null,t.handleChange=t.handleChange.bind(Object(c.a)(Object(c.a)(t))),t.handleInputChange=t.handleInputChange.bind(Object(c.a)(Object(c.a)(t))),t.handleEnter=t.handleEnter.bind(Object(c.a)(Object(c.a)(t))),t.bindRef=t.bindRef.bind(Object(c.a)(Object(c.a)(t))),t}return Object(s.a)(a,e),Object(d.a)(a,[{key:"componentDidUpdate",value:function(e){var t=this.props,a=t.checked,n=t.inputable,i=t.value,d=t.htmlValue;e.value!==i&&void 0===a&&this.setState({checked:n?!!i:i===d})}},{key:"getChecked",value:function(){var e=this.props,t=e.checked,a=e.value,n=e.htmlValue;return"function"==typeof t?t(n):void 0!==t?t:void 0===this.state.checked?a===n:this.state.checked}},{key:"getProp",value:function(e){return void 0!==this.props[e]?this.props[e]:this.state[e]}},{key:"bindRef",value:function(e){e&&(this.el=e)}},{key:"handleEnter",value:function(e){Object(v.d)(e)&&this.handleChange({target:{checked:!this.getChecked()}})}},{key:"handleChange",value:function(e){var t=this,a=this.props,n=a.onChange,i=a.onRawChange,d=a.index,l=a.inputable,r=e.target.checked;if(this.setState({checked:r},function(){return t.el.focus()}),"switch"===g&&n)n(r);else{var s=l?this.props.value:this.props.htmlValue;i&&i(s,r),s=r?s:void 0,n&&n(s,r,d)}}},{key:"handleInputChange",value:function(e){var t=this.props,a=t.onChange,n=t.index,i=0<e.length;a&&a(e,i,n)}},{key:"render",value:function(){var e=this.props,t=e.disabled,a=e.style,n=e.content,i=e.size,d=e.children,l=e.inputable,r=e.onClick,s=this.getChecked(),c="switch"===g,o=O()(Object(k.g)("_",t&&"disabled",!0===s&&"checked","indeterminate"===s&&"indeterminate",c&&"switch",{large:"large"===i,small:"small"===i}),this.props.className),h=Object(f.a)(n,2),u=h[0],p=h[1],b=c&&"small"!==i?m.a.createElement("span",{className:Object(k.g)("switch-children")},s?u:p):null,v="string"==typeof this.props.value?this.props.value:"";return m.a.createElement("label",{onKeyDown:this.handleEnter,className:o,style:a,htmlFor:this.id,tabIndex:t?-1:0,ref:this.bindRef},b,m.a.createElement("input",{id:this.id,disabled:t,tabIndex:-1,type:c?"checkbox":g,onClick:r,onChange:this.handleChange,checked:s}),m.a.createElement("i",{className:Object(k.g)("indicator",g)}),d&&!c&&m.a.createElement("span",null,d),l&&!c&&s&&m.a.createElement(y.a,{className:Object(k.g)("text"),onChange:this.handleInputChange,value:v}),c&&m.a.createElement("span",{className:Object(k.g)("switch-indicator")}))}}]),a}(u.b);return e.defaultProps=Object(n.a)({},p.a,{htmlValue:!0,onClick:void 0,content:[]}),e}},509:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var h=a(30),r=a(4),n=a(5),s=0,c=1,o=2,u=3,i=function(){function l(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};Object(r.a)(this,l);var t=e.data,a=e.value,n=e.keygen,i=e.mode,d=e.disabled;this.keygen=n,this.mode=i,this.valueMap=new Map,this.events={},this.disabled=d||function(){return!1},this.setValue(a),this.setData(t)}return Object(n.a)(l,[{key:"bind",value:function(e,t){this.events[e]=t}},{key:"unbind",value:function(e){delete this.events[e]}},{key:"setValue",value:function(e){(this.value=e)&&e!==this.cachedValue&&this.initValue()}},{key:"getValue",value:function(){var i=this,d=[];return this.valueMap.forEach(function(e,t){switch(i.mode){case s:1===e&&d.push(t);break;case c:1<=e&&d.push(t);break;case o:1===e&&0===i.pathMap.get(t).children.length&&d.push(t);break;case u:if(1===e)(a=i.pathMap.get(t).path,!!(n=a[a.length-1])&&1===i.valueMap.get(n))||d.push(t)}var a,n}),this.cachedValue=d}},{key:"setValueMap",value:function(e,t){this.valueMap.set(e,t);var a=this.events[e];a&&a()}},{key:"set",value:function(e,t,a){var n=this;this.isDisabled(e)||this.setValueMap(e,t);var i=this.pathMap.get(e),d=i.path,l=i.children;if("asc"!==a&&l.forEach(function(e){n.set(e,t,"desc")}),"desc"!==a&&0<d.length){var r=d[d.length-1],s=t;this.pathMap.get(r).children.forEach(function(e){s!==n.valueMap.get(e)&&(s=2)}),this.set(r,s,"asc")}}},{key:"isDisabled",value:function(e){var t=this.pathMap.get(e);return!!t&&t.isDisabled}},{key:"get",value:function(e){return this.valueMap.get(e)}},{key:"getDataById",value:function(e){return this.dataMap.get(e)}},{key:"getPath",value:function(e){return this.pathMap.get(e)}},{key:"getChecked",value:function(e){var t=this.get(e),a=1===t;return 2===t&&(a="indeterminate"),a}},{key:"getKey",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",a=2<arguments.length?arguments[2]:void 0;return"function"==typeof this.keygen?this.keygen(e,t):this.keygen?e[this.keygen]:t+(t?",":"")+a}},{key:"initValue",value:function(a,n){var i,d=this;if(this.data&&this.value)return a||(a=[],this.pathMap.forEach(function(e,t){0===e.path.length&&a.push(t)})),a.forEach(function(e){var t=d.pathMap.get(e).children;if(n)return d.setValueMap(e,1),void d.initValue(t,n);var a=0<=d.value.indexOf(e)?1:0;1===a&&d.mode!==c?d.initValue(t,1):a=0<t.length?d.initValue(t):0<=d.value.indexOf(e)?1:0,d.setValueMap(e,a),void 0===i?i=a:i!==a&&(i=2)}),i}},{key:"initData",value:function(e,l,r){var s=this,c=3<arguments.length&&void 0!==arguments[3]?arguments[3]:[],o=[];return e.forEach(function(e,t){var a=s.getKey(e,l[l.length-1],t);s.dataMap.set(a,e);var n=r;n||"function"!=typeof s.disabled||(n=s.disabled(e,t));var i=[].concat(Object(h.a)(c),[t]);o.push(a);var d=[];Array.isArray(e.children)&&(d=s.initData(e.children,[].concat(Object(h.a)(l),[a]),n,i)),s.pathMap.set(a,{children:d,path:l,isDisabled:n,indexPath:i,index:t})}),o}},{key:"setData",value:function(e){this.pathMap=new Map,this.dataMap=new Map,(this.data=e)&&(this.initData(e,[]),this.initValue())}}]),l}()},533:function(e,t,a){"use strict";var d=a(30),o=a(22),l=a(4),n=a(5),s=a(6),c=a(3),i=a(7),h=a(1),u=a(0),v=a.n(u),p=a(42),r=a(20),b=a(509),g=a(15),f=a.n(g),m=a(2),O=a(13),y=a(19),k=a(18),j=a(46),x=a(25),C=a(114),D=a(480),E=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(s.a)(this,Object(c.a)(a).call(this,e))).handleChange=t.handleChange.bind(Object(h.a)(Object(h.a)(t))),e.datum.bind(e.id,t.forceUpdate.bind(Object(h.a)(Object(h.a)(t)))),t}return Object(i.a)(a,e),Object(n.a)(a,[{key:"componentWillUnmount",value:function(){Object(x.a)(Object(c.a)(a.prototype),"componentWillUnmount",this).call(this),this.props.datum.unbind(this.props.id)}},{key:"checkDisabled",value:function(){var e=this.props,t=e.datum,a=e.id;return!!e.disabled||t.isDisabled(a)}},{key:"handleChange",value:function(e,t){var a=this.props,n=a.datum,i=a.id,d=a.onChange;n.set(i,t?1:0),d(n.getValue(),i)}},{key:"render",value:function(){var e=this.props,t=e.datum,a=e.id,n=t.getChecked(a);return v.a.createElement(D.a,{checked:n,disabled:this.checkDisabled(),onChange:this.handleChange,className:Object(m.D)("checkbox")})}}]),a}(r.b),N=v.a.createElement("span",{className:Object(m.D)("icon-loading")},v.a.createElement(C.a,{name:"ring",size:12})),M=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(s.a)(this,Object(c.a)(a).call(this,e))).state={fetching:!1},t.handleNodeClick=t.handleNodeClick.bind(Object(h.a)(Object(h.a)(t))),t.handleIndicatorClick=t.handleIndicatorClick.bind(Object(h.a)(Object(h.a)(t))),t}return Object(i.a)(a,e),Object(n.a)(a,[{key:"handleNodeClick",value:function(){var e=this.props,t=e.data,a=e.id,n=e.parentClickExpand;t.children&&0<t.children.length&&n?this.handleIndicatorClick():this.props.onNodeClick(t,a)}},{key:"handleIndicatorClick",value:function(){var e=this.props,t=e.id,a=e.data,n=e.onToggle,i=e.loader;n(),void 0===a.children&&(this.setState({fetching:!0}),i(t,a))}},{key:"renderNode",value:function(){var e=this.props,t=e.id,a=e.active,n=e.data,i=e.renderItem,d=e.expanded;return("function"==typeof i?i:function(e){return e[i]})(n,d,a,t)}},{key:"renderIndicator",value:function(){var e=this.props,t=e.data,a=e.expanded,n=e.loader,i=v.a.createElement("a",{onClick:this.handleIndicatorClick,className:Object(m.D)("icon-".concat(a?"sub":"plus"))},v.a.createElement("span",null));return t.children&&0<t.children.length?i:Array.isArray(t.children)||null===t.children?null:this.state.fetching&&!t.children?N:n&&!this.state.fetching?i:null}},{key:"render",value:function(){var e=this.props,t=(e.data,e.onToggle,e.onChange),a=(e.expanded,e.draggable,e.onDragOver),n=(e.onDrop,Object(O.a)(e,["data","onToggle","onChange","expanded","draggable","onDragOver","onDrop"]));return v.a.createElement("div",{onDragOver:a},this.renderIndicator(),v.a.createElement("div",{className:Object(m.D)("content")},t&&v.a.createElement(E,Object.assign({},n,{onChange:t})),v.a.createElement("div",{className:Object(m.D)("text"),onClick:this.handleNodeClick},this.renderNode())))}}]),a}(r.b),I=document.createElement("div");I.className=Object(m.D)("drag-place");var w=document.createElement("div");I.appendChild(w);var V=!1,S=function(e){function d(e){var t;Object(l.a)(this,d),t=Object(s.a)(this,Object(c.a)(d).call(this,e));var a=e.bindNode(e.id,t.update.bind(Object(h.a)(Object(h.a)(t)))),n=a.active,i=a.expanded;return t.state={active:n,expanded:i},t.bindElement=t.bindElement.bind(Object(h.a)(Object(h.a)(t))),t.handleToggle=t.handleToggle.bind(Object(h.a)(Object(h.a)(t))),t.handleDragStart=t.handleDragStart.bind(Object(h.a)(Object(h.a)(t))),t.handleDragOver=t.handleDragOver.bind(Object(h.a)(Object(h.a)(t))),t.handleDragEnd=t.handleDragEnd.bind(Object(h.a)(Object(h.a)(t))),t}return Object(i.a)(d,e),Object(n.a)(d,[{key:"componentWillUnmount",value:function(){Object(x.a)(Object(c.a)(d.prototype),"componentWillUnmount",this).call(this),this.props.unbindNode(this.props.id)}},{key:"update",value:function(e,t){this.state[e]!==t&&this.setState(Object(j.a)({},e,t))}},{key:"bindElement",value:function(e){this.element=e}},{key:"handleToggle",value:function(){var e=this.props,t=e.id,a=e.onToggle,n=!this.state.expanded;this.setState({expanded:n}),a&&a(t,n)}},{key:"handleDragStart",value:function(e){var t=this;if(!V){V=!0,e.dataTransfer.effectAllowed="copyMove",e.dataTransfer.setData("text/plain",this.props.id);var a=this.element.querySelector(".".concat(Object(m.D)("content"))),n=a.getBoundingClientRect();this.dragImage=a.cloneNode(!0),document.body.appendChild(this.dragImage),this.dragImage.style.position="absolute",this.dragImage.style.top="-1000px",this.dragImage.style.left="-1000px",this.dragImage.style.width="".concat(n.width,"px"),this.dragImage.style.background="#fff",this.dragImage.style.boxShadow="0 0 5px 0 rgba(0, 0, 0, 0.1)",e.dataTransfer.setDragImage(this.dragImage,e.clientX-n.left,e.clientY-n.top),setTimeout(function(){t.element.style.display="none"},0)}}},{key:"handleDragOver",value:function(e){if(V){var t=this.element,a=t.getBoundingClientRect(),n=(a.bottom-a.top)/2,i=e.clientY-a.top,d=this.props.index;w.style.height="0px",i<n+4?(t.parentNode.insertBefore(I,t),6<i&&(d=-1,w.style.height="".concat(a.height,"px"))):(d+=1,t.parentNode.insertBefore(I,t.nextElementSibling)),I.setAttribute("data-target",this.props.id),I.setAttribute("data-position",d)}}},{key:"handleDragEnd",value:function(){if(this.element.style.display="",V&&I.parentNode){V=!1,document.body.removeChild(this.dragImage);var e=this.props,t=e.id,a=e.index,n=e.onDrop,i=parseInt(I.getAttribute("data-position"),10),d=I.getAttribute("data-target");I.parentNode.removeChild(I),d===t&&a===i||n(t,d,i)}}},{key:"render",value:function(){var e=this.props,t=e.data,a=e.expandedMap,n=e.listComponent,i=e.onDrop,d=Object(O.a)(e,["data","expandedMap","listComponent","onDrop"]),l=t.children&&0<t.children.length,r=this.state.expanded,s=Object(k.a)({},d,{data:t.children,expanded:r,expandedMap:a,onDrop:i}),c={};return i&&Object.assign(c,{draggable:!0,onDragStart:this.handleDragStart,onDragEnd:this.handleDragEnd}),v.a.createElement("div",Object.assign({},c,{ref:this.bindElement,className:Object(m.D)("node")}),v.a.createElement(M,Object.assign({},d,{active:this.state.active,data:t,expanded:r,onToggle:this.handleToggle,onDragOver:this.handleDragOver})),l&&Object(u.createElement)(n,s))}}]),d}(r.b),T=function(e){function r(e){var t;return Object(l.a)(this,r),(t=Object(s.a)(this,Object(c.a)(r).call(this,e))).bindLines=t.bindElement.bind(Object(h.a)(Object(h.a)(t)),"lines"),t.bindElement=t.bindElement.bind(Object(h.a)(Object(h.a)(t)),"element"),t.renderNode=t.renderNode.bind(Object(h.a)(Object(h.a)(t))),t}return Object(i.a)(r,e),Object(n.a)(r,[{key:"getKey",value:function(e,t){var a=this.props,n=a.id,i=a.keygen;return"function"==typeof i?i(e,n):i?e[i]:n+(n?",":"")+t}},{key:"bindElement",value:function(e,t){this[e]=t}},{key:"renderNode",value:function(e,t){var a=this.props,n=(a.data,a.isRoot,a.expanded,a.keygen),i=a.line,d=(a.className,a.style,Object(O.a)(a,["data","isRoot","expanded","keygen","line","className","style"])),l=this.getKey(e,t);return v.a.createElement(S,Object.assign({},d,{data:e,id:l,index:t,key:l,line:i,keygen:n,listComponent:r}))}},{key:"render",value:function(){var e=this.props,t=e.data,a=e.expanded,n=e.className,i=e.style;if(!a&&!this.hasExpanded)return null;this.hasExpanded=!0;var d=Object.assign({},i,{display:a?"block":"none"});return v.a.createElement("div",{className:n,ref:this.bindElement,onDrop:y.c,onDragOver:y.c,style:d},t.map(this.renderNode))}}]),r}(u.PureComponent);T.defaultProps={id:"",line:!0,className:Object(m.D)("children")};var A=T;function P(e){var t=f()(Object(m.D)("_",e.line?"with-line":"no-line"),e.className);return v.a.createElement(A,Object.assign({},e,{className:t,expanded:!0,path:"",isRoot:!0,deepIndex:0}))}P.defaultProps={data:[],line:!0};var R=P,U=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(s.a)(this,Object(c.a)(a).call(this,e))).state={active:null},t.nodes=new Map,t.datum=e.datum||new b.a({data:e.data,loader:e.loader,keygen:e.keygen,mode:e.mode,onChange:e.onChange,value:e.value||e.defaultValue,disabled:"function"==typeof e.disabled?e.disabled:void 0}),t.handleDrop=t.handleDrop.bind(Object(h.a)(Object(h.a)(t))),t.handleToggle=t.handleToggle.bind(Object(h.a)(Object(h.a)(t))),t.handleNodeClick=t.handleNodeClick.bind(Object(h.a)(Object(h.a)(t))),t.bindNode=t.bindNode.bind(Object(h.a)(Object(h.a)(t))),t.unbindNode=t.unbindNode.bind(Object(h.a)(Object(h.a)(t))),t}return Object(i.a)(a,e),Object(n.a)(a,[{key:"componentDidUpdate",value:function(e){e.expanded!==this.props.expanded&&this.handleExpanded(this.props.expanded),e.active!==this.props.active&&this.handleActive(this.props.active),(this.props.onChange||this.props.onDrop)&&(this.datum.mode=this.props.mode,e.value!==this.props.value&&this.datum.setValue(this.props.value||[]),e.data!==this.props.data&&this.props.dataUpdate&&this.datum.setData(this.props.data))}},{key:"getActive",value:function(){var e=this.props.active;return void 0===e?this.state.active:e}},{key:"bindNode",value:function(e,t){this.nodes.set(e,t);var a=this.props.active===e,n=this.props.expanded||this.props.defaultExpanded;return this.props.defaultExpandAll?{active:a,expanded:!0}:{active:a,expanded:n&&0<=n.indexOf(e)}}},{key:"unbindNode",value:function(e){this.nodes.delete(e)}},{key:"handleExpanded",value:function(e){var t=new Set(e),a=!0,n=!1,i=void 0;try{for(var d,l=this.nodes[Symbol.iterator]();!(a=(d=l.next()).done);a=!0){var r=d.value,s=Object(o.a)(r,2),c=s[0];(0,s[1])("expanded",t.has(c))}}catch(e){n=!0,i=e}finally{try{a||null==l.return||l.return()}finally{if(n)throw i}}}},{key:"handleActive",value:function(e){var t=!0,a=!1,n=void 0;try{for(var i,d=this.nodes[Symbol.iterator]();!(t=(i=d.next()).done);t=!0){var l=i.value,r=Object(o.a)(l,2),s=r[0];(0,r[1])("active",s===e)}}catch(e){a=!0,n=e}finally{try{t||null==d.return||d.return()}finally{if(a)throw n}}}},{key:"handleNodeClick",value:function(e,t){var a=this,n=this.props,i=n.active,d=n.onClick;void 0===i&&this.setState({active:t},function(){a.handleActive(t)}),d&&d(e,t)}},{key:"handleToggle",value:function(t){var e,a=this.props,n=a.expanded,i=a.onExpand;e=0<=n.indexOf(t)?n.filter(function(e){return e!==t}):[].concat(Object(d.a)(n),[t]),i&&i(e)}},{key:"handleDrop",value:function(e,l,r){var s=this,c=this.datum.getPath(e),o=this.datum.getPath(l),t=Object(p.a)(this.props.data,function(e){var a,n,i=e;c.indexPath.forEach(function(e,t){i=t<c.indexPath.length-1?i[e].children:(n=function(){return a.splice(e,1)[0]},(a=i)[e])});var d=e;if(o.indexPath.forEach(function(e,t){t<o.indexPath.length-1?d=d[e].children:d===a&&(n(),n=function(){})}),-1===r){d=d[o.index],Array.isArray(d.children)||(d.children=[]),d.children.push(i),r=d.children.length-1;var t=s.nodes.get(l);t&&t("expanded",!0)}else d.splice(r,0,i),l=o.path[o.path.length-1];n()});this.props.onDrop(t,e,l,r)}},{key:"render",value:function(){var e=this.props,t=e.className,a=e.style,n=e.data,i=e.disabled,d=e.line,l=e.keygen,r=e.onExpand,s=e.onChange,c=e.renderItem,o=e.mode,h=e.onDrop,u=e.loader,p=e.parentClickExpand,b=r?this.handleToggle:void 0;return v.a.createElement(R,{className:t,data:n,datum:this.datum,disabled:"function"!=typeof i&&i,bindNode:this.bindNode,keygen:l,line:d,loader:u,mode:o,unbindNode:this.unbindNode,onChange:s,onDrop:h&&this.handleDrop,onToggle:b,onNodeClick:this.handleNodeClick,renderItem:c,style:a,parentClickExpand:p})}}]),a}(r.b);U.defaultProps={data:[],defaultExpanded:[],defaultValue:[],mode:0,dataUpdate:!0};var B=U,K=a(61);B.Select=Object(K.a)(B),B.Field=B.Select,B.displayName="ShineoutTree";t.a=B}}]);