(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],{28:function(n,e,t){"use strict";t.r(e);var r,o,i,c,a,s,d,u,l,b,f,j,x,p,h,g,O,m=t(0),k=t.n(m),v=t(8),w=t.n(v),y=t(4),D=t(3),C=t(2),T=C.default.form(r||(r=Object(D.a)(["\n    padding: 20px;\n    background: white;\n    display: flex;\n    align-items: center;\n    flex-wrap: wrap;\n"]))),z=C.default.input(o||(o=Object(D.a)(["\n    flex-grow: 1;\n    padding: 10px;\n    border: 1px solid #80808040;\n    border-radius: 1px;\n"]))),S=C.default.button(i||(i=Object(D.a)(["\n    background: ",";\n    color: ",";\n    padding: 10px;\n    margin: 0px 0px 0px 15px;\n    border: none;\n    cursor: pointer;\n    transition: 1s;\n\n    @media(max-width: ","px) {\n        flex-basis: 100%;\n        margin: 7px 0px;\n    }\n\n    &:hover {\n    filter: brightness(110%);\n    transform: scale(1.1);\n    }   \n\n    &:active {\n        filter: brightness(120%);\n    }\n\n    \n"])),(function(n){return n.theme.color.teal}),(function(n){return n.theme.color.white}),(function(n){return n.theme.breakpoint.mobileMax})),I=t(17),F=t(5),M=t(15),L=Object(F.b)({name:"tasks",initialState:{tasks:[{content:"test buttona",done:!0,id:Object(F.c)()}],hideDone:!1},reducers:{addTask:function(n,e){var t=n.tasks,r=e.payload;t.push(r)},toggleHideDone:function(n){n.hideDone=!n.hideDone},toggleTaskDone:function(n,e){var t=n.tasks,r=e.payload,o=t.findIndex((function(n){return n.id===r}));t[o].done=!t[o].done},removeTask:function(n,e){var t=n.tasks,r=e.payload,o=t.findIndex((function(n){return n.id===r}));t.splice(o)},setAllDone:function(n){var e,t=n.tasks,r=Object(M.a)(t);try{for(r.s();!(e=r.n()).done;){e.value.done=!0}}catch(o){r.e(o)}finally{r.f()}}}}),N=L.actions,P=N.addTask,J=N.toggleHideDone,R=N.toggleTaskDone,U=N.removeTask,A=N.setAllDone,B=function(n){return n.tasks},E=L.reducer,H=t(1),G=function(){var n=function(){var n=Object(m.useState)(""),e=Object(I.a)(n,2),t=e[0],r=e[1],o=Object(m.useRef)();return{newTaskContent:t,setNewTaskContent:r,inputRef:o,focusInput:function(){o.current.focus()}}}(),e=n.newTaskContent,t=n.setNewTaskContent,r=n.inputRef,o=n.focusInput,i=Object(y.b)();return Object(H.jsxs)(T,{onSubmit:function(n){n.preventDefault();var r=e.trim();r&&(i(P({content:r,done:!1,id:Object(F.c)()})),t(""))},children:[Object(H.jsx)(z,{autoFocus:!0,ref:r,value:e,placeholder:"Co jest do zrobienia?",onChange:function(n){var e=n.target;return t(e.value)}}),Object(H.jsx)(S,{onClick:o,children:"Dodaj zadanie"})]})},q=C.default.ul(c||(c=Object(D.a)(["\n    padding: 20px 0px;\n    margin: 0px;\n    background: white;\n"]))),K=C.default.li(a||(a=Object(D.a)(["\n    display: flex;\n    margin: 0px 15px;\n    padding: 10px;\n    align-items: center;\n    border-bottom: 1px solid #80808040;\n    word-break: break-word;\n\n   ","\n"])),(function(n){return n.hidden&&Object(C.css)(s||(s=Object(D.a)(["\n        display: none;\n   "])))})),Q=C.default.span(d||(d=Object(D.a)(["\n    padding: 0px 10px;\n    flex-grow: 1;\n    color: #565555;\n    ","\n"])),(function(n){return n.done&&Object(C.css)(u||(u=Object(D.a)(["\n        text-decoration: line-through;\n    "])))})),V=C.default.button(l||(l=Object(D.a)(["\n    background: green;\n    border: none;\n    width: 27px;\n    height: 27px;\n    padding: 5px;\n    color: white;\n    flex-shrink: 0;\n    cursor: pointer;\n    transition: 0.3s;\n\n    ","\n\n    "," \n"])),(function(n){return n.toggleDone&&Object(C.css)(b||(b=Object(D.a)(["\n        background : ",";\n\n        &:hover {\n            filter: brightness(110%);\n    }       \n\n        &:active {\n            filter: brightness(120%);\n        }\n    "])),(function(n){return n.theme.color.green}))}),(function(n){return n.remove&&Object(C.css)(f||(f=Object(D.a)(["\n    background: ",";\n   \n    &:hover {\n        filter: brightness(110%);\n    }\n\n    &:active {\n        filter: brightness(120%);\n    }\n    "])),(function(n){return n.theme.color.red}))})),W=function(){var n=Object(y.c)(B),e=n.tasks,t=n.hideDone,r=Object(y.b)();return Object(H.jsx)(q,{children:e.map((function(n){return Object(H.jsxs)(K,{hidden:n.done&&t,children:[Object(H.jsx)(V,{toggleDone:!0,onClick:function(){return r(R(n.id))},children:n.done?"\u2713":""}),Object(H.jsx)(Q,{done:n.done,children:n.content}),Object(H.jsx)(V,{remove:!0,onClick:function(){return r(U(n.id))},children:"\ud83d\uddd1"})]},n.id)}))})},X=C.default.div(j||(j=Object(D.a)(["\n    display: flex;\n    align-items: center;\n\n    @media (max-width: ","px) {\n        flex-direction: column;\n        flex-basis: 100%;\n    }\n"])),(function(n){return n.theme.breakpoint.mobileMax})),Y=C.default.button(x||(x=Object(D.a)(["\n    border: none;\n    background: ",";\n    color: ",";\n    grid-gap: 20px;\n    transition: 1s;\n    margin: 10px 0px;\n    cursor: pointer;\n\n    &:hover {\n    filter: brightness(110%);\n    }\n\n    &:active {\n        filter: brightness(120%);\n    }\n\n    &:disabled {\n        color: ",";\n    cursor: unset;\n    }\n"])),(function(n){return n.theme.color.white}),(function(n){return n.theme.color.teal}),(function(n){return n.theme.color.grey})),Z=function(){var n=Object(y.c)(B),e=n.tasks,t=n.hideDone,r=Object(y.b)();return Object(H.jsx)(X,{children:e.length>0&&Object(H.jsxs)(H.Fragment,{children:[Object(H.jsxs)(Y,{onClick:function(){return r(J())},disabled:e.every((function(n){return!n.done})),children:[e.some((function(n){return n.done}))?"".concat(t?"Poka\u017c":"Ukryj"):"Ukryj"," uko\u0144czone"]}),Object(H.jsx)(Y,{onClick:function(){return r(A())},disabled:e.every((function(n){return n.done})),children:"Uko\u0144cz wszystkie"})]})})},$=C.default.section(p||(p=Object(D.a)(["\n     margin: 0 5px 5px;\n"]))),_=C.default.div(h||(h=Object(D.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    background: white;\n    margin: 0px 0px 1px 0px;\n    padding-right: 15px;\n"]))),nn=C.default.h2(g||(g=Object(D.a)(["\n    margin: 0 0 1px;\n    padding: 15px;\n    background: ",";\n    font-size: 17px;\n"])),(function(n){return n.theme.color.white})),en=function(n){var e=n.title,t=n.body,r=n.extraContent;return Object(H.jsxs)($,{children:[Object(H.jsxs)(_,{children:[Object(H.jsx)(nn,{children:e}),r]}),t]})},tn=C.default.header(O||(O=Object(D.a)(["\n    margin: 0px 5px;\n"]))),rn=function(n){var e=n.title;return Object(H.jsx)(tn,{children:Object(H.jsx)("h1",{children:e})})},on=function(n){var e=n.children;return Object(H.jsx)("main",{children:e})};var cn,an=function(){var n=Object(y.c)(B).tasks;return Object(m.useEffect)((function(){localStorage.setItem("savedTasks",JSON.stringify(n))}),[n]),Object(H.jsxs)(on,{children:[Object(H.jsx)(rn,{title:"Lista zada\u0144"}),Object(H.jsx)(en,{title:"Dodaj nowe zadanie",body:Object(H.jsx)(G,{})}),Object(H.jsx)(en,{title:"Lista zada\u0144",body:Object(H.jsx)(W,{}),extraContent:Object(H.jsx)(Z,{})})]})},sn=function(){return Object(H.jsx)(an,{})},dn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,29)).then((function(e){var t=e.getCLS,r=e.getFID,o=e.getFCP,i=e.getLCP,c=e.getTTFB;t(n),r(n),o(n),i(n),c(n)}))},un=t(16),ln=Object(C.createGlobalStyle)(cn||(cn=Object(D.a)(['\n\nhtml {\n  box-sizing: border-box;\n}\n\n*, ::after, ::before {\n  box-sizing: inherit;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    font-family: "Montserrat", sans-serif;\n    margin: 0 auto;\n    max-width: 900px;\n    background: rgba(219, 216, 216, 0.733);\n    font-size: 15px;\n}\n']))),bn=Object(F.a)({reducer:{tasks:E}});w.a.render(Object(H.jsx)(k.a.StrictMode,{children:Object(H.jsx)(y.a,{store:bn,children:Object(H.jsxs)(C.ThemeProvider,{theme:{color:{green:"#00800",red:"#ff0000",teal:"teal",white:"white",grey:"grey"},breakpoint:{mobileMax:767}},children:[Object(H.jsx)(un.Normalize,{}),Object(H.jsx)(ln,{}),Object(H.jsx)(sn,{})]})})}),document.getElementById("root")),dn()}},[[28,1,2]]]);
//# sourceMappingURL=main.6ca0b136.chunk.js.map