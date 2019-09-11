(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[32],{1254:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),s=t(474),c=t(475),i=t(34),l=t(1255),o=t.n(l),u=t(1256),d=t.n(u),m=Object(i.b)(o.a,d.a),h=[{name:"1-base",title:Object(i.b)("基本用法 \n 基础的进度条","Base \n Basic progress bar"),component:t(1257).default,rawText:t(1258)},{name:"2-type",title:Object(i.b)("样式 \n 内置了四种样式，通过 type 来调用","Type \n There are 4 built-in style."),component:t(1259).default,rawText:t(1260)},{name:"3-color",title:Object(i.b)(" \n 通过 color 使用自定义颜色","Color \n Use custom colors."),component:t(1261).default,rawText:t(1262)},{name:"4-circle",title:Object(i.b)("圆形 \n 设置 shape 为 'circle'，显示为环形进度条","Circle \n Set the shape property to circle to display circular progress bar."),component:t(1263).default,rawText:t(1264)},{name:"5-size",title:Object(i.b)("大小 \n 通过 size 或 style 来控制大小 \n 通过 strokeWidth 属性来控制线框宽度","Size \n Set size(circle) or style(line) property to change the size."),component:t(1265).default,rawText:t(1266)},{name:"6-animation",title:Object(i.b)("动态示例 \n value 变更时动画效果演示","Animation \n The animation for changing value."),component:t(1267).default,rawText:t(1268)}];n.default=Object(s.a)(function(e){return a.a.createElement(c.b,Object.assign({},e,{codes:void 0,source:m,examples:h}))})},1255:function(e,n){e.exports="# Progress *进度条*\n\n<example />\n\n## API \n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| background | string | '#e9ecef' | 背景色 |\n| className | string | - | 扩展className |\n| children | string \\| ReactElement | - | 附加内容 |\n| color | string | primary | 前景色 |\n| shape | string | 'line' | 样式，可选值为 \\['line', 'circle'] |\n| size | number | 100 | 进度条大小，仅对 circle 有效 |\n| strokeWidth | number | 8 | 线框宽度 |\n| style | object | 无 | 最外层扩展样式 |\n| type | string | 无 | 内置配色，可选值为，\\['success', 'info', 'warning', 'danger'] |\n| value | number | 0 | 百分比值，0 <= value <= 100 |"},1256:function(e,n){e.exports="# Progress\n\n<example />\n\n## API \n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| background | string | '#e9ecef' | Background color |\n| className | string | - | Extend className |\n| children | string \\| ReactElement | - | Content |\n| color | string | primary | Foreground color |\n| shape | string | 'line' | Options:  \\['line', 'circle'] |\n| size | number | 100 | The width and height of 'circle' shape. |\n| strokeWidth | number | 8 | The width of the stroke |\n| style | object | - | Container element style |\n| type | string | - | Built-in color, options: \\['success', 'info', 'warning', 'danger'] |\n| value | number | 0 | Percentage, 0 <= value <= 100 |"},1257:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),s=t(494);n.default=function(){return a.a.createElement("div",{style:{width:400}},a.a.createElement(s.a,{value:50}),a.a.createElement("br",null),a.a.createElement(s.a,{value:50},"50%"))}},1258:function(e,n){e.exports="/**\n * cn - 基本用法\n *    -- 基础的进度条\n * en - Base\n *    -- Basic progress bar\n */\nimport React from 'react'\nimport { Progress } from 'shineout'\n\nexport default function() {\n  return (\n    <div style={{ width: 400 }}>\n      <Progress value={50} />\n      <br />\n      <Progress value={50}>50%</Progress>\n    </div>\n  )\n}\n"},1259:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),s=t(494);n.default=function(){return a.a.createElement("div",{style:{width:400}},a.a.createElement(s.a,{value:100,type:"success"}),a.a.createElement("br",null),a.a.createElement(s.a,{value:90,type:"info"}),a.a.createElement("br",null),a.a.createElement(s.a,{value:80,type:"warning"}),a.a.createElement("br",null),a.a.createElement(s.a,{value:70,type:"danger"}))}},1260:function(e,n){e.exports='/**\n * cn - 样式\n *    -- 内置了四种样式，通过 type 来调用\n * en - Type\n *    -- There are 4 built-in style.\n */\nimport React from \'react\'\nimport { Progress } from \'shineout\'\n\nexport default function() {\n  return (\n    <div style={{ width: 400 }}>\n      <Progress value={100} type="success" />\n      <br />\n      <Progress value={90} type="info" />\n      <br />\n      <Progress value={80} type="warning" />\n      <br />\n      <Progress value={70} type="danger" />\n    </div>\n  )\n}\n'},1261:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),s=t(494);n.default=function(){return a.a.createElement("div",{style:{width:400}},a.a.createElement(s.a,{value:60,color:"#531dab"}),a.a.createElement("br",null),a.a.createElement(s.a,{value:50,color:"linear-gradient(45deg, #ffadd2 25%, #eb2f96 25%, #eb2f96 50%, #ffadd2 50%, #ffadd2 75%, #eb2f96 75%, #eb2f96)"}))}},1262:function(e,n){e.exports="/**\n * cn -\n *    -- 通过 color 使用自定义颜色\n * en - Color\n *    -- Use custom colors.\n */\nimport React from 'react'\nimport { Progress } from 'shineout'\n\nexport default function() {\n  return (\n    <div style={{ width: 400 }}>\n      <Progress value={60} color=\"#531dab\" />\n      <br />\n      <Progress\n        value={50}\n        color=\"linear-gradient(45deg, #ffadd2 25%, #eb2f96 25%, #eb2f96 50%, #ffadd2 50%, #ffadd2 75%, #eb2f96 75%, #eb2f96)\"\n      />\n    </div>\n  )\n}\n"},1263:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),s=t(494);n.default=function(){return a.a.createElement("div",null,a.a.createElement(s.a,{shape:"circle",style:{marginRight:20},value:30}),a.a.createElement(s.a,{shape:"circle",style:{marginRight:20},value:70},"70%"),a.a.createElement(s.a,{shape:"circle",type:"success",style:{marginRight:20},value:100},"Success"),a.a.createElement(s.a,{shape:"circle",strokeLinecap:"butt",color:"#531dab",value:70}))}},1264:function(e,n){e.exports='/**\n * cn - 圆形\n *    -- 设置 shape 为 \'circle\'，显示为环形进度条\n * en - Circle\n *    -- Set the shape property to circle to display circular progress bar.\n */\nimport React from \'react\'\nimport { Progress } from \'shineout\'\n\nexport default function() {\n  return (\n    <div>\n      <Progress shape="circle" style={{ marginRight: 20 }} value={30} />\n\n      <Progress shape="circle" style={{ marginRight: 20 }} value={70}>\n        70%\n      </Progress>\n\n      <Progress shape="circle" type="success" style={{ marginRight: 20 }} value={100}>\n        Success\n      </Progress>\n\n      <Progress shape="circle" strokeLinecap="butt" color="#531dab" value={70} />\n    </div>\n  )\n}\n'},1265:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),s=t(494);n.default=function(){return a.a.createElement("div",null,a.a.createElement(s.a,{style:{width:120},strokeWidth:3,value:30}),a.a.createElement("br",null),a.a.createElement(s.a,{shape:"circle",size:50,strokeWidth:6,style:{marginRight:20},value:70}),a.a.createElement(s.a,{shape:"circle",type:"warning",style:{marginRight:20,width:70,height:70},value:70},"70%"),a.a.createElement(s.a,{shape:"circle",type:"success",value:100},"Success"))}},1266:function(e,n){e.exports='/**\n * cn - 大小\n *    -- 通过 size 或 style 来控制大小\n *    -- 通过 strokeWidth 属性来控制线框宽度\n * en - Size\n *    -- Set size(circle) or style(line) property to change the size.\n */\nimport React from \'react\'\nimport { Progress } from \'shineout\'\n\nexport default function() {\n  return (\n    <div>\n      <Progress style={{ width: 120 }} strokeWidth={3} value={30} />\n\n      <br />\n\n      <Progress shape="circle" size={50} strokeWidth={6} style={{ marginRight: 20 }} value={70} />\n\n      <Progress shape="circle" type="warning" style={{ marginRight: 20, width: 70, height: 70 }} value={70}>\n        70%\n      </Progress>\n\n      <Progress shape="circle" type="success" value={100}>\n        Success\n      </Progress>\n    </div>\n  )\n}\n'},1267:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return m});var r=t(4),a=t(5),s=t(6),c=t(3),i=t(7),l=t(0),o=t.n(l),u=t(494),d=t(44),m=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(s.a)(this,Object(c.a)(t).call(this,e))).handleClick=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:n.state.value;100<=(e+=12*Math.random())?(e=100,n.setState({value:e})):n.setState({value:e},function(){setTimeout(n.handleClick,320)})},n.state={value:0},n}return Object(i.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){var e=this.state.value;return o.a.createElement("div",null,o.a.createElement(u.a,{style:{width:400},value:e},o.a.createElement("div",{style:{width:50}},e.toFixed(0))),o.a.createElement("br",null),o.a.createElement(u.a,{shape:"circle",type:"success",value:e},e.toFixed(0),"%"),o.a.createElement(d.a,{style:{marginLeft:80},onClick:this.handleClick.bind(this,0)},"Start"))}}]),t}(l.Component)},1268:function(e,n){e.exports="/**\n * cn - 动态示例\n *    -- value 变更时动画效果演示\n * en - Animation\n *    -- The animation for changing value.\n */\nimport React, { Component } from 'react'\nimport { Button, Progress } from 'shineout'\n\nexport default class extends Component {\n  constructor(props) {\n    super(props)\n    this.state = { value: 0 }\n  }\n\n  handleClick = (value = this.state.value) => {\n    value += Math.random() * 12\n    if (value >= 100) {\n      value = 100\n      this.setState({ value })\n    } else {\n      this.setState({ value }, () => {\n        setTimeout(this.handleClick, 320)\n      })\n    }\n  }\n\n  render() {\n    const { value } = this.state\n\n    return (\n      <div>\n        <Progress style={{ width: 400 }} value={value}>\n          <div style={{ width: 50 }}>{value.toFixed(0)}</div>\n        </Progress>\n\n        <br />\n\n        <Progress shape=\"circle\" type=\"success\" value={value}>\n          {value.toFixed(0)}%\n        </Progress>\n\n        <Button style={{ marginLeft: 80 }} onClick={this.handleClick.bind(this, 0)}>\n          Start\n        </Button>\n      </div>\n    )\n  }\n}\n"},494:function(e,n,t){"use strict";var r=t(0),g=t.n(r),a=t(15),v=t.n(a),f=t(2);function s(e){var n=e.children,t=e.strokeWidth,r=e.type,a=e.value,s=e.color,c=e.style,i=e.background,l=v()(Object(f.u)("line",r),e.className),o={background:s,backgroundSize:"1em 1em",width:"".concat(a/100*100,"%"),borderRadius:t/2};return g.a.createElement("div",{className:l,style:c},g.a.createElement("div",{className:Object(f.u)("background"),style:{height:t,background:i,borderRadius:t/2}},g.a.createElement("div",{className:Object(f.u)("front"),style:o})),void 0!==n&&g.a.createElement("div",{className:Object(f.u)("content")},n))}s.defaultProps={strokeWidth:8};var c=s;function i(e){var n=e.children,t=e.strokeWidth,r=e.type,a=e.color,s=e.size,c=e.value,i=e.background,l=e.strokeLinecap,o=v()(Object(f.u)("circle",r),e.className),u=100-Math.ceil(2*t/s*100),d=2*Math.PI*u,m=[d*(c/100),d*(1-c/100)],h=Object.assign({width:s,height:s},e.style),p=0===c&&"round"===l?0:2*t;return g.a.createElement("div",{className:o,style:h},g.a.createElement("svg",{viewBox:"0 0 200 200"},g.a.createElement("circle",{className:Object(f.u)("background"),cx:"100",cy:"100",r:u,strokeWidth:2*t,fill:"transparent",style:{stroke:i}}),g.a.createElement("circle",{className:Object(f.u)("front"),cx:"100",cy:"100",r:u,fill:"transparent",style:{stroke:a},strokeDasharray:m,strokeLinecap:l,strokeWidth:p})),n&&g.a.createElement("div",{className:Object(f.u)("content")},n))}i.defaultProps={strokeLinecap:"round",strokeWidth:8,size:100};var l=i;function o(e){switch(e.shape){case"circle":return g.a.createElement(l,e);default:return g.a.createElement(c,e)}}o.defaultProps={shape:"line"},o.displayName="ShineoutProgress";n.a=o}}]);