(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[5],{2394:function(e,t,a){"use strict";var c=a(15),o=a(0),n=a(700),l=a(2589),r=a(524),i=a(300),s=a(805),b=a(831),u=a(825),d=a(2407),j=a(817),O=a(833),p=a(835),m=a(836),f=a(837),v=a(2567),g=a(2580),h=a(2590),S=a(721),y=a(2409),C=a(2412),x=a(80),k=a(2582),E=a(37),I=a(2588),w=a(1),P=function(e){var t=Object(o.useState)(!0),a=Object(c.a)(t,2),n=a[0],l=a[1],i=Object(o.useState)(!0),s=Object(c.a)(i,2),b=s[0],d=s[1],j=Object(o.useState)("APPROVE"),O=Object(c.a)(j,2),p=O[0],m=O[1],f=""!==e.value?x.a.parseEther(e.value):k.a.from("0");Object(o.useEffect)((function(){e.account?f.gt(k.a.from("0"))?(l(!1),d(!1)):(l(!0),d(!0)):(d(!0),l(!0))}),[e.value,e.account,e.balance]);var v=Object(I.a)(E.s,"approve",{transactionName:"Approve $JUICE"}),g=v.state,h=v.send;Object(o.useEffect)((function(){"Exception"!==g.status&&"Fail"!==g.status||(b||l(!1),e.openFailedPopup("Failed approve $JUICE"),m("APPROVE")),"None"===g.status&&(b||l(!1),m("APPROVE")),"Success"===g.status&&(m("APPROVE"),e.openSuccessPopup("Successful approve $JUICE")),"Mining"===g.status&&(l(!0),d(!1),m("PENDING..."))}),[g]);return Object(w.jsx)(r.a,{mt:"auto",style:e.style,children:Object(w.jsx)(u.a,{size:"large",variant:"contained",color:"primary",style:{width:"100%",marginTop:"4rem"},disabled:n,onClick:function(){e.account?(e.setOpen(!1),h(E.B,f)):e.setOpen(!0)},children:p})})},N=function(e){var t=Object(o.useState)(!0),a=Object(c.a)(t,2),n=a[0],l=a[1],i=Object(o.useState)(!0),s=Object(c.a)(i,2),b=s[0],d=s[1],j=Object(o.useState)("STAKE"),O=Object(c.a)(j,2),p=O[0],m=O[1],f=""!==e.value?x.a.parseEther(e.value):k.a.from("0"),v=x.a.parseEther(e.balance);Object(o.useEffect)((function(){f.gt(k.a.from("0"))?(l(!1),d(!1)):(l(!0),d(!0)),e.account?f.gt(v)?(l(!0),d(!0),m("INSUFFICIENT BALANCE")):v.eq(k.a.from("0"))||f.eq(k.a.from("0"))?(l(!0),d(!0)):(l(!1),d(!1),m("STAKE")):(l(!0),d(!0))}),[e.value,e.account,e.balance]);var g=Object(I.a)(E.C,"enter",{transactionName:"Stake Drop"}),h=g.state,S=g.send;Object(o.useEffect)((function(){"Exception"!==h.status&&"Fail"!==h.status||(b||l(!1),m("STAKE"),e.openFailedPopup("Failed stake $JUICE")),"None"===h.status&&(b||l(!1),m("STAKE")),"Success"===h.status&&(m("STAKE"),e.setAmount(""),e.openSuccessPopup("Successfully Staked $JUICE")),"Mining"===h.status&&(l(!0),d(!1),m("PENDING..."))}),[h]);return Object(w.jsx)(r.a,{mt:"auto",style:e.style,children:Object(w.jsx)(u.a,{size:"large",variant:"contained",color:"primary",style:{width:"100%",marginTop:"4rem"},disabled:n,onClick:function(){e.account?(e.setOpen(!1),S(f)):e.setOpen(!0)},children:p})})},A=function(e){var t=Object(o.useState)(!0),a=Object(c.a)(t,2),n=a[0],l=a[1],i=Object(o.useState)(!0),s=Object(c.a)(i,2),b=s[0],d=s[1],j=Object(o.useState)("UNSTAKE"),O=Object(c.a)(j,2),p=O[0],m=O[1],f=""!==e.value?x.a.parseEther(e.value):k.a.from("0"),v=x.a.parseEther(e.balance);Object(o.useEffect)((function(){f.gt(k.a.from("0"))?(l(!1),d(!1)):(l(!0),d(!0)),e.account?f.gt(v)?(l(!0),d(!0),m("INSUFFICIENT BALANCE")):v.eq(k.a.from("0"))||f.eq(k.a.from("0"))?(l(!0),d(!0)):(l(!1),d(!1),m("UNSTAKE")):(l(!0),d(!0))}),[e.value,e.account,e.balance]);var g=Object(I.a)(E.C,"leave",{transactionName:"Unstake Drop"}),h=g.state,S=g.send;Object(o.useEffect)((function(){"Exception"!==h.status&&"Fail"!==h.status||(b||l(!1),m("UNSTAKE"),e.openFailedPopup("Failed unstake $JUICE")),"None"===h.status&&(b||l(!1),m("UNSTAKE")),"Success"===h.status&&(m("UNSTAKE"),e.setAmount(""),e.openSuccessPopup("Successfully Unstaked $JUICE")),"Mining"===h.status&&(l(!0),d(!1),m("PENDING..."))}),[h]);return Object(w.jsx)(r.a,{mt:"auto",children:Object(w.jsx)(u.a,{size:"large",variant:"contained",color:"primary",style:{width:"100%",marginTop:"4rem"},disabled:n,onClick:function(){e.account?(e.setOpen(!1),S(f)):e.setOpen(!0)},children:p})})},T=a(385),U=a(36),z=[{value:"1",label:"Stake",disabled:!1},{value:"2",label:"Unstake",disabled:!1}];t.a=function(e){var t=Object(S.a)().account,a=Object(o.useState)(void 0),I=Object(c.a)(a,2),F=I[0],R=I[1],D=Object(o.useState)("0"),L=Object(c.a)(D,2),M=L[0],K=L[1],V=Object(o.useState)("0"),J=Object(c.a)(V,2),$=J[0],B=J[1],q=Object(y.a)(E.E,t,E.B),W=Object(C.a)(E.E,t),G=Object(C.a)(E.B,t),H=Object(o.useState)("1"),X=Object(c.a)(H,2),Q=X[0],Y=X[1],Z=Object(o.useState)(""),_=Object(c.a)(Z,2),ee=_[0],te=_[1],ae=Object(o.useState)(""),ce=Object(c.a)(ae,2),oe=ce[0],ne=ce[1];Object(o.useEffect)((function(){q&&R(q),W&&K(x.a.formatEther(W.toString())),G&&B(x.a.formatEther(G.toString()))}),[q,W,G]);var le=Object(o.useState)(!1),re=Object(c.a)(le,2),ie=re[0],se=re[1],be=function(){se(!1)},ue=Object(o.useState)(!1),de=Object(c.a)(ue,2),je=de[0],Oe=de[1],pe=Object(o.useState)({message:"",icon:""}),me=Object(c.a)(pe,2),fe=me[0],ve=me[1],ge=function(){Oe(!1)},he=function(e){ve({message:e,icon:"failedWarning.svg",title:"Failed"}),Oe(!0)},Se=function(e){ve({message:e,icon:"success.svg",title:"Success"}),Oe(!0)},ye=new Date(1e3*e.timeLock);return Object(w.jsxs)(n.a,{spacing:3,children:[Object(w.jsxs)(v.a,{value:Q,children:[Object(w.jsx)(g.a,{onChange:function(e,t){Y(t)},centered:!0,children:z.map((function(e,t){return Object(w.jsx)(l.a,{label:e.label,value:String(t+1),style:{fontSize:"1.5rem",padding:"0.5rem"}},e.value)}))}),Object(w.jsxs)(r.a,{sx:{p:"2rem",mt:2,width:"100%",borderRadius:1,bgcolor:"grey.5008"},children:[Object(w.jsx)(h.a,{value:String(1),children:Object(w.jsxs)(n.a,{children:[Object(w.jsx)(i.a,{variant:"h4",children:"Stake $JUICE"}),Object(w.jsx)(T.a,{variant:"filled",color:"primary",style:{marginBottom:"1rem",width:"min-content",marginTop:"0.2rem"},children:"1 JUICE = 1 Share"}),Object(w.jsx)(r.a,{sx:{mt:2,mb:2,display:"flex"},children:Object(w.jsx)(s.a,{style:{width:"100%",margin:"auto"},label:"Stake Amount",InputProps:{endAdornment:Object(w.jsx)(b.a,{position:"end",children:Object(w.jsx)(u.a,{variant:"text",onClick:function(e){te(M)},children:"MAX"})})},value:ee,onChange:function(e){return function(e){te(e)}(e.target.value)},type:"number"})}),Object(w.jsx)(d.a,{label:"Max: ".concat(Object(U.a)(M)," $JUICE"),style:{width:"min-content"}}),F&&""!==ee&&!x.a.parseEther(ee).eq(k.a.from("0"))&&F.gte(x.a.parseEther(ee))?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(N,{setOpen:se,value:ee,account:t,balance:M,setAmount:te,openSuccessPopup:Se,openFailedPopup:he}),Object(w.jsx)(P,{setOpen:se,value:ee,account:t,balance:M,openSuccessPopup:Se,openFailedPopup:he,style:{display:"none"}})]}):Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(P,{setOpen:se,value:ee,account:t,balance:M,openSuccessPopup:Se,openFailedPopup:he}),Object(w.jsx)(N,{style:{display:"none"},setOpen:se,value:ee,account:t,balance:M,setAmount:te,openSuccessPopup:Se,openFailedPopup:he})]})]})},"1"),Object(w.jsx)(h.a,{value:String(2),children:Object(w.jsx)(n.a,{children:e.lockUnstake?Object(w.jsxs)(i.a,{variant:"h6",children:["Unstake will be available after ",ye.toLocaleString()]}):Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(i.a,{variant:"h4",children:"Unstake $JUICE"}),Object(w.jsx)(T.a,{variant:"filled",color:"primary",style:{marginBottom:"1rem",width:"min-content",marginTop:"0.2rem"},children:"1 $JUICE = 1 Share"}),Object(w.jsx)(r.a,{sx:{mt:2,mb:2,display:"flex"},children:Object(w.jsx)(s.a,{style:{width:"100%",margin:"auto"},label:"Unstake Amount",InputProps:{endAdornment:Object(w.jsx)(b.a,{position:"end",children:Object(w.jsx)(u.a,{variant:"text",onClick:function(e){ne($)},children:"MAX"})})},type:"number",value:oe,onChange:function(e){return function(e){ne(e)}(e.target.value)}})}),Object(w.jsx)(d.a,{label:"Staked: ".concat(Object(U.a)($)," $JUICE"),style:{width:"min-content"}}),Object(w.jsx)(A,{setOpen:se,value:oe,account:t,balance:$,setAmount:ne,openSuccessPopup:Se,openFailedPopup:he})]})})},"2")]})]}),Object(w.jsxs)(j.a,{open:ie,onClose:be,children:[Object(w.jsx)(O.a,{children:"Wallet Not Connected"}),Object(w.jsx)(p.a,{children:Object(w.jsx)(m.a,{id:"alert-dialog-description",children:"Connect a wallet first to stake/unstake!"})}),Object(w.jsx)(f.a,{children:Object(w.jsx)(u.a,{onClick:be,autoFocus:!0,children:"Ok"})})]}),Object(w.jsxs)(j.a,{open:je,onClose:ge,children:[Object(w.jsx)(O.a,{children:fe.title}),Object(w.jsxs)(p.a,{children:[Object(w.jsx)("img",{alt:"",src:"/static/svg/".concat(fe.icon),style:{width:"8rem",margin:"auto",marginTop:"2rem"}}),Object(w.jsx)(m.a,{id:"alert-dialog-description",style:{textAlign:"center",marginTop:"2rem",fontSize:"1.2rem"},children:fe.message})]}),Object(w.jsx)(f.a,{children:Object(w.jsx)(u.a,{onClick:ge,autoFocus:!0,children:"Ok"})})]})]})}},2407:function(e,t,a){"use strict";var c=a(10),o=a(13),n=a(2),l=a(0),r=a(17),i=a(206),s=a(79),b=a(91),u=a(1),d=Object(b.a)(Object(u.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),j=a(28),O=a(23),p=a(708),m=a(19),f=a(14),v=a(174),g=a(207);function h(e){return Object(v.a)("MuiChip",e)}var S=Object(g.a)("MuiChip",["root","sizeSmall","sizeMedium","colorPrimary","colorSecondary","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","focusVisible"]),y=["avatar","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant"],C=Object(f.a)("div",{name:"MuiChip",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState,o=a.color,n=a.clickable,l=a.onDelete,r=a.size,i=a.variant;return[Object(c.a)({},"& .".concat(S.avatar),t.avatar),Object(c.a)({},"& .".concat(S.avatar),t["avatar".concat(Object(O.a)(r))]),Object(c.a)({},"& .".concat(S.avatar),t["avatarColor".concat(Object(O.a)(o))]),Object(c.a)({},"& .".concat(S.icon),t.icon),Object(c.a)({},"& .".concat(S.icon),t["icon".concat(Object(O.a)(r))]),Object(c.a)({},"& .".concat(S.icon),t["iconColor".concat(Object(O.a)(o))]),Object(c.a)({},"& .".concat(S.deleteIcon),t.deleteIcon),Object(c.a)({},"& .".concat(S.deleteIcon),t["deleteIcon".concat(Object(O.a)(r))]),Object(c.a)({},"& .".concat(S.deleteIcon),t["deleteIconColor".concat(Object(O.a)(o))]),Object(c.a)({},"& .".concat(S.deleteIcon),t["deleteIconOutlinedColor".concat(Object(O.a)(o))]),t.root,t["size".concat(Object(O.a)(r))],t["color".concat(Object(O.a)(o))],n&&t.clickable,n&&"default"!==o&&t["clickableColor".concat(Object(O.a)(o),")")],l&&t.deletable,l&&"default"!==o&&t["deletableColor".concat(Object(O.a)(o))],t[i],"outlined"===i&&t["outlined".concat(Object(O.a)(o))]]}})((function(e){var t,a=e.theme,o=e.ownerState,l=Object(s.a)(a.palette.text.primary,.26);return Object(n.a)((t={fontFamily:a.typography.fontFamily,fontSize:a.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:a.palette.text.primary,backgroundColor:a.palette.action.selected,borderRadius:16,whiteSpace:"nowrap",transition:a.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box"},Object(c.a)(t,"&.".concat(S.disabled),{opacity:a.palette.action.disabledOpacity,pointerEvents:"none"}),Object(c.a)(t,"& .".concat(S.avatar),{marginLeft:5,marginRight:-6,width:24,height:24,color:"light"===a.palette.mode?a.palette.grey[700]:a.palette.grey[300],fontSize:a.typography.pxToRem(12)}),Object(c.a)(t,"& .".concat(S.avatarColorPrimary),{color:a.palette.primary.contrastText,backgroundColor:a.palette.primary.dark}),Object(c.a)(t,"& .".concat(S.avatarColorSecondary),{color:a.palette.secondary.contrastText,backgroundColor:a.palette.secondary.dark}),Object(c.a)(t,"& .".concat(S.avatarSmall),{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:a.typography.pxToRem(10)}),Object(c.a)(t,"& .".concat(S.icon),Object(n.a)({color:"light"===a.palette.mode?a.palette.grey[700]:a.palette.grey[300],marginLeft:5,marginRight:-6},"small"===o.size&&{fontSize:18,marginLeft:4,marginRight:-4},"default"!==o.color&&{color:"inherit"})),Object(c.a)(t,"& .".concat(S.deleteIcon),Object(n.a)({WebkitTapHighlightColor:"transparent",color:l,fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:Object(s.a)(l,.4)}},"small"===o.size&&{fontSize:16,marginRight:4,marginLeft:-4},"default"!==o.color&&{color:Object(s.a)(a.palette[o.color].contrastText,.7),"&:hover, &:active":{color:a.palette[o.color].contrastText}})),t),"small"===o.size&&{height:24},"default"!==o.color&&{backgroundColor:a.palette[o.color].main,color:a.palette[o.color].contrastText},o.onDelete&&Object(c.a)({},"&.".concat(S.focusVisible),{backgroundColor:Object(s.a)(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)}),o.onDelete&&"default"!==o.color&&Object(c.a)({},"&.".concat(S.focusVisible),{backgroundColor:a.palette[o.color].dark}))}),(function(e){var t,a=e.theme,o=e.ownerState;return Object(n.a)({},o.clickable&&(t={userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:Object(s.a)(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity)}},Object(c.a)(t,"&.".concat(S.focusVisible),{backgroundColor:Object(s.a)(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)}),Object(c.a)(t,"&:active",{boxShadow:a.shadows[1]}),t),o.clickable&&"default"!==o.color&&Object(c.a)({},"&:hover, &.".concat(S.focusVisible),{backgroundColor:a.palette[o.color].dark}))}),(function(e){var t,a,o=e.theme,l=e.ownerState;return Object(n.a)({},"outlined"===l.variant&&(t={backgroundColor:"transparent",border:"1px solid ".concat("light"===o.palette.mode?o.palette.grey[400]:o.palette.grey[700])},Object(c.a)(t,"&.".concat(S.clickable,":hover"),{backgroundColor:o.palette.action.hover}),Object(c.a)(t,"&.".concat(S.focusVisible),{backgroundColor:o.palette.action.focus}),Object(c.a)(t,"& .".concat(S.avatar),{marginLeft:4}),Object(c.a)(t,"& .".concat(S.avatarSmall),{marginLeft:2}),Object(c.a)(t,"& .".concat(S.icon),{marginLeft:4}),Object(c.a)(t,"& .".concat(S.iconSmall),{marginLeft:2}),Object(c.a)(t,"& .".concat(S.deleteIcon),{marginRight:5}),Object(c.a)(t,"& .".concat(S.deleteIconSmall),{marginRight:3}),t),"outlined"===l.variant&&"default"!==l.color&&(a={color:o.palette[l.color].main,border:"1px solid ".concat(Object(s.a)(o.palette[l.color].main,.7))},Object(c.a)(a,"&.".concat(S.clickable,":hover"),{backgroundColor:Object(s.a)(o.palette[l.color].main,o.palette.action.hoverOpacity)}),Object(c.a)(a,"&.".concat(S.focusVisible),{backgroundColor:Object(s.a)(o.palette[l.color].main,o.palette.action.focusOpacity)}),Object(c.a)(a,"& .".concat(S.deleteIcon),{color:Object(s.a)(o.palette[l.color].main,.7),"&:hover, &:active":{color:o.palette[l.color].main}}),a))})),x=Object(f.a)("span",{name:"MuiChip",slot:"Label",overridesResolver:function(e,t){var a=e.ownerState.size;return[t.label,t["label".concat(Object(O.a)(a))]]}})((function(e){var t=e.ownerState;return Object(n.a)({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},"small"===t.size&&{paddingLeft:8,paddingRight:8})}));function k(e){return"Backspace"===e.key||"Delete"===e.key}var E=l.forwardRef((function(e,t){var a=Object(m.a)({props:e,name:"MuiChip"}),c=a.avatar,s=a.className,b=a.clickable,f=a.color,v=void 0===f?"default":f,g=a.component,S=a.deleteIcon,E=a.disabled,I=void 0!==E&&E,w=a.icon,P=a.label,N=a.onClick,A=a.onDelete,T=a.onKeyDown,U=a.onKeyUp,z=a.size,F=void 0===z?"medium":z,R=a.variant,D=void 0===R?"filled":R,L=Object(o.a)(a,y),M=l.useRef(null),K=Object(j.a)(M,t),V=function(e){e.stopPropagation(),A&&A(e)},J=!(!1===b||!N)||b,$="small"===F,B=J||A?p.a:g||"div",q=Object(n.a)({},a,{component:B,disabled:I,size:F,color:v,onDelete:!!A,clickable:J,variant:D}),W=function(e){var t=e.classes,a=e.disabled,c=e.size,o=e.color,n=e.onDelete,l=e.clickable,r=e.variant,s={root:["root",r,a&&"disabled","size".concat(Object(O.a)(c)),"color".concat(Object(O.a)(o)),l&&"clickable",l&&"clickableColor".concat(Object(O.a)(o)),n&&"deletable",n&&"deletableColor".concat(Object(O.a)(o)),"".concat(r).concat(Object(O.a)(o))],label:["label","label".concat(Object(O.a)(c))],avatar:["avatar","avatar".concat(Object(O.a)(c)),"avatarColor".concat(Object(O.a)(o))],icon:["icon","icon".concat(Object(O.a)(c)),"iconColor".concat(Object(O.a)(o))],deleteIcon:["deleteIcon","deleteIcon".concat(Object(O.a)(c)),"deleteIconColor".concat(Object(O.a)(o)),"deleteIconOutlinedColor".concat(Object(O.a)(o))]};return Object(i.a)(s,h,t)}(q),G=B===p.a?{component:g||"div",focusVisibleClassName:W.focusVisible,disableRipple:Boolean(A)}:{},H=null;if(A){var X=Object(r.default)("default"!==v&&("outlined"===D?W["deleteIconOutlinedColor".concat(Object(O.a)(v))]:W["deleteIconColor".concat(Object(O.a)(v))]),$&&W.deleteIconSmall);H=S&&l.isValidElement(S)?l.cloneElement(S,{className:Object(r.default)(S.props.className,W.deleteIcon,X),onClick:V}):Object(u.jsx)(d,{className:Object(r.default)(W.deleteIcon,X),onClick:V})}var Q=null;c&&l.isValidElement(c)&&(Q=l.cloneElement(c,{className:Object(r.default)(W.avatar,c.props.className)}));var Y=null;return w&&l.isValidElement(w)&&(Y=l.cloneElement(w,{className:Object(r.default)(W.icon,w.props.className)})),Object(u.jsxs)(C,Object(n.a)({as:B,className:Object(r.default)(W.root,s),disabled:!(!J||!I)||void 0,onClick:N,onKeyDown:function(e){e.currentTarget===e.target&&k(e)&&e.preventDefault(),T&&T(e)},onKeyUp:function(e){e.currentTarget===e.target&&(A&&k(e)?A(e):"Escape"===e.key&&M.current&&M.current.blur()),U&&U(e)},ref:K,ownerState:q},G,L,{children:[Q||Y,Object(u.jsx)(x,{className:Object(r.default)(W.label),ownerState:q,children:P}),H]}))}));t.a=E},2409:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var c=a(15),o=a(2482),n=a(714);function l(e,t,a){var l,r=null!==(l=Object(n.a)(t&&a&&e&&{abi:o.a,address:e,method:"allowance",args:[t,a]}))&&void 0!==l?l:[];return Object(c.a)(r,1)[0]}},2412:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var c=a(15),o=a(2482),n=a(714);function l(e,t){var a,l=null!==(a=Object(n.a)(t&&e&&{abi:o.a,address:e,method:"balanceOf",args:[t]}))&&void 0!==a?a:[];return Object(c.a)(l,1)[0]}}}]);