(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],{51:function(n,e,t){"use strict";t.r(e);var r,c,a,i,o,s,u,d,l,b,j,x,f,h,p,O,g,m,k=t(0),v=t.n(k),w=t(22),y=t.n(w),z=t(17),C=t(8),T=t(7),D=t(4),S=D.default.form(r||(r=Object(T.a)(["\n    padding: 20px;\n    background: white;\n    display: flex;\n    align-items: center;\n    flex-wrap: wrap;\n"]))),U=D.default.button(c||(c=Object(T.a)(["\n    background: ",";\n    color: ",";\n    padding: 10px;\n    margin: 0px 0px 0px 15px;\n    border: none;\n    cursor: pointer;\n    transition: 1s;\n\n    @media(max-width: ","px) {\n        flex-basis: 100%;\n        margin: 7px 0px;\n    }\n\n    &:hover {\n    filter: brightness(110%);\n    transform: scale(1.1);\n    }   \n\n    &:active {\n        filter: brightness(120%);\n    }\n\n    \n"])),(function(n){return n.theme.color.teal}),(function(n){return n.theme.color.white}),(function(n){return n.theme.breakpoint.mobileMax})),F=D.default.input(a||(a=Object(T.a)(["\n    flex-grow: 1;\n    padding: 10px;\n    border: 1px solid #80808040;\n    border-radius: 1px;\n"]))),P=t(37),I=t(10),L=t(21),M=t(34),N="tasks",R=function(n){return localStorage.setItem(N,JSON.stringify(n))},J=Object(L.b)({name:"tasks",initialState:{tasks:localStorage.getItem(N)?JSON.parse(localStorage.getItem(N)):[],hideDone:!1},reducers:{addTask:function(n,e){var t=n.tasks,r=e.payload;t.push(r)},toggleHideDone:function(n){n.hideDone=!n.hideDone},toggleTaskDone:function(n,e){var t=n.tasks,r=e.payload,c=t.findIndex((function(n){return n.id===r}));t[c].done=!t[c].done},removeTask:function(n,e){var t=n.tasks,r=e.payload,c=t.findIndex((function(n){return n.id===r}));t.splice(c,1)},setAllDone:function(n){var e,t=n.tasks,r=Object(M.a)(t);try{for(r.s();!(e=r.n()).done;){e.value.done=!0}}catch(c){r.e(c)}finally{r.f()}},fetchExampleTasks:function(){},setTasks:function(n,e){var t=e.payload;n.tasks=t}}}),E=J.actions,W=E.addTask,A=E.toggleHideDone,B=E.toggleTaskDone,H=E.removeTask,Z=E.setAllDone,G=E.fetchExampleTasks,V=E.setTasks,q=function(n){return n.tasks},K=function(n){return q(n).tasks},Q=function(n){return q(n).hideDone},X=function(n){return K(n).length>0},Y=function(n){return K(n).every((function(n){return n.done}))},$=function(n){return K(n).some((function(n){return n.done}))},_=J.reducer,nn=t(2),en=function(){var n=function(){var n=Object(k.useState)(""),e=Object(P.a)(n,2),t=e[0],r=e[1],c=Object(k.useRef)();return{newTaskContent:t,setNewTaskContent:r,inputRef:c,focusInput:function(){c.current.focus()}}}(),e=n.newTaskContent,t=n.setNewTaskContent,r=n.inputRef,c=n.focusInput,a=Object(I.b)();return Object(nn.jsxs)(S,{onSubmit:function(n){n.preventDefault();var r=e.trim();r&&(a(W({content:r,done:!1,id:Object(L.c)()})),t(""))},children:[Object(nn.jsx)(F,{autoFocus:!0,ref:r,value:e,placeholder:"Co jest do zrobienia?",onChange:function(n){var e=n.target;return t(e.value)}}),Object(nn.jsx)(U,{onClick:c,children:"Dodaj zadanie"})]})},tn=D.default.ul(i||(i=Object(T.a)(["\n    padding: 20px 0px;\n    margin: 0px;\n    background: white;\n"]))),rn=D.default.li(o||(o=Object(T.a)(["\n    display: flex;\n    margin: 0px 15px;\n    padding: 10px;\n    align-items: center;\n    border-bottom: 1px solid #80808040;\n    word-break: break-word;\n\n   ","\n"])),(function(n){return n.hidden&&Object(D.css)(s||(s=Object(T.a)(["\n        display: none;\n   "])))})),cn=D.default.span(u||(u=Object(T.a)(["\n    padding: 0px 10px;\n    flex-grow: 1;\n    color: #565555;\n    ","\n"])),(function(n){return n.done&&Object(D.css)(d||(d=Object(T.a)(["\n        text-decoration: line-through;\n    "])))})),an=D.default.button(l||(l=Object(T.a)(["\n    background: green;\n    border: none;\n    width: 27px;\n    height: 27px;\n    padding: 5px;\n    color: white;\n    flex-shrink: 0;\n    cursor: pointer;\n    transition: 0.3s;\n\n    ","\n\n    "," \n"])),(function(n){return n.toggleDone&&Object(D.css)(b||(b=Object(T.a)(["\n        background : ",";\n\n        &:hover {\n            filter: brightness(110%);\n    }       \n\n        &:active {\n            filter: brightness(120%);\n        }\n    "])),(function(n){return n.theme.color.green}))}),(function(n){return n.remove&&Object(D.css)(j||(j=Object(T.a)(["\n    background: ",";\n   \n    &:hover {\n        filter: brightness(110%);\n    }\n\n    &:active {\n        filter: brightness(120%);\n    }\n    "])),(function(n){return n.theme.color.red}))})),on="szukaj",sn=function(){var n=Object(C.h)(),e=new URLSearchParams(n.search).get(on),t=Object(I.c)((function(n){return function(n,e){var t=K(n);return e&&""!==e.trim()?t.filter((function(n){return n.content.toUpperCase().includes(e.trim().toUpperCase())})):t}(n,e)})),r=Object(I.c)(Q),c=Object(I.b)();return Object(nn.jsx)(tn,{children:t.map((function(n){return Object(nn.jsxs)(rn,{hidden:n.done&&r,children:[Object(nn.jsx)(an,{toggleDone:!0,onClick:function(){return c(B(n.id))},children:n.done?"\u2713":""}),Object(nn.jsx)(cn,{done:n.done,children:Object(nn.jsx)(z.b,{to:"/zadania/".concat(n.id),children:n.content})}),Object(nn.jsx)(an,{remove:!0,onClick:function(){return c(H(n.id))},children:"\ud83d\uddd1"})]},n.id)}))})},un=D.default.div(x||(x=Object(T.a)(["\n    display: flex;\n    align-items: center;\n\n    @media (max-width: ","px) {\n        flex-direction: column;\n        flex-basis: 100%;\n    }\n"])),(function(n){return n.theme.breakpoint.mobileMax})),dn=D.default.button(f||(f=Object(T.a)(["\n    border: none;\n    background: ",";\n    color: ",";\n    grid-gap: 20px;\n    transition: 1s;\n    margin: 10px 0px;\n    cursor: pointer;\n\n    &:hover {\n    filter: brightness(110%);\n    }\n\n    &:active {\n        filter: brightness(120%);\n    }\n\n    &:disabled {\n        color: ",";\n    cursor: unset;\n    }\n"])),(function(n){return n.theme.color.white}),(function(n){return n.theme.color.teal}),(function(n){return n.theme.color.grey})),ln=function(){var n=Object(I.c)(X),e=Object(I.c)(Y),t=Object(I.c)(Q),r=Object(I.c)($),c=Object(I.b)();return Object(nn.jsxs)(un,{children:[Object(nn.jsx)(dn,{onClick:function(){return c(G())},children:"Pobierz przyk\u0142adowe zadania"}),n&&Object(nn.jsxs)(nn.Fragment,{children:[Object(nn.jsxs)(dn,{onClick:function(){return c(A())},disabled:!e,children:[r?"".concat(t?"Poka\u017c":"Ukryj"):"Ukryj"," uko\u0144czone"]}),Object(nn.jsx)(dn,{onClick:function(){return c(Z())},disabled:e,children:"Uko\u0144cz wszystkie"})]})]})},bn=D.default.section(h||(h=Object(T.a)(["\n     margin: 0 5px 5px;\n"]))),jn=D.default.div(p||(p=Object(T.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    background: ",";\n    margin: 0px 0px 1px 0px;\n    padding-right: 15px;\n"])),(function(n){return n.theme.color.white})),xn=D.default.h2(O||(O=Object(T.a)(["\n    margin: 0 0 1px;\n    padding: 15px;\n    background: ",";\n    font-size: 17px;\n"])),(function(n){return n.theme.color.white})),fn=function(n){var e=n.title,t=n.body,r=n.extraContent;return Object(nn.jsxs)(bn,{children:[Object(nn.jsxs)(jn,{children:[Object(nn.jsx)(xn,{children:e}),r]}),t]})},hn=D.default.header(g||(g=Object(T.a)(["\n    margin: 0px 5px;\n"]))),pn=function(n){var e=n.title;return Object(nn.jsx)(hn,{children:Object(nn.jsx)("h1",{children:e})})},On=function(n){var e=n.children;return Object(nn.jsx)("main",{children:e})},gn=D.default.div(m||(m=Object(T.a)(["\n    display: grid;\n    grid-template-columns: 1fr;\n    padding: 20px;\n    background: ",";\n"])),(function(n){return n.theme.color.white})),mn=function(){var n=Object(C.h)(),e=Object(C.g)(),t=new URLSearchParams(n.search).get(on);return Object(nn.jsx)(gn,{children:Object(nn.jsx)(F,{placeholder:"Filtruj zadania",value:t||"",onChange:function(t){var r=t.target,c=new URLSearchParams(n.search);""===r.value.trim()?c.delete(on):c.set(on,r.value),e.push("".concat(n.pathname,"?").concat(c.toString()))}})})};var kn,vn=function(){return Object(nn.jsxs)(On,{children:[Object(nn.jsx)(pn,{title:"Lista zada\u0144"}),Object(nn.jsx)(fn,{title:"Dodaj nowe zadanie",body:Object(nn.jsx)(en,{})}),Object(nn.jsx)(fn,{title:"Wyszukiwarka",body:Object(nn.jsx)(mn,{})}),Object(nn.jsx)(fn,{title:"Lista zada\u0144",body:Object(nn.jsx)(sn,{}),extraContent:Object(nn.jsx)(ln,{})})]})},wn=D.default.div(kn||(kn=Object(T.a)(["\n    padding: 20px;\n    background: ",";\n"])),(function(n){return n.theme.color.white}));var yn,zn,Cn,Tn=function(){var n=Object(C.i)().id,e=Object(I.c)((function(e){return function(n,e){return K(n).find((function(n){return n.id===e}))}(e,n)}));return Object(nn.jsxs)(On,{children:[Object(nn.jsx)(pn,{title:"Szczeg\xf3\u0142y zadania"}),Object(nn.jsx)(fn,{title:e?e.content:"Nie znaleziono zadania\ud83d\ude1f",body:Object(nn.jsx)(nn.Fragment,{children:Object(nn.jsxs)(wn,{children:[Object(nn.jsx)("strong",{children:"Uko\u0144czono:"})," ",e.done?"tak":"nie"]})})})]})},Dn=D.default.div(yn||(yn=Object(T.a)(["\n    padding: 20px;\n    background: ",";\n    text-align: justify;\n"])),(function(n){return n.theme.color.white})),Sn=function(){return Object(nn.jsxs)(On,{children:[Object(nn.jsx)(pn,{title:"O autorze"}),Object(nn.jsx)(fn,{title:"Wojciech Bylica",body:Object(nn.jsx)(nn.Fragment,{children:Object(nn.jsx)(Dn,{children:Object(nn.jsx)("p",{children:"Perkusista, kompozytor, tw\xf3rca o szerokich zainteresowaniach stylistycznych Absolwent UMFC w Warszawie i PSJ im. H. Majewskiego w Warszawie. Stypendysta Urbanator Days, laureat konkursu Roland V-Drums."})})})})]})},Un="active",Fn=Object(D.default)(z.c).attrs((function(){return{activeClassName:Un}}))(zn||(zn=Object(T.a)(["\n    &."," {\n        color: red;\n    }\n"])),Un),Pn=function(){return Object(nn.jsx)(z.a,{children:Object(nn.jsxs)("nav",{children:[Object(nn.jsxs)("ul",{children:[Object(nn.jsx)("li",{children:Object(nn.jsx)(Fn,{to:"/zadania",children:"Zadania"})}),Object(nn.jsx)("li",{children:Object(nn.jsx)(Fn,{to:"/autor",children:"O autorze"})})]}),Object(nn.jsxs)(C.d,{children:[Object(nn.jsx)(C.b,{path:"/zadania/:id",children:Object(nn.jsx)(Tn,{})}),Object(nn.jsx)(C.b,{path:"/zadania",children:Object(nn.jsx)(vn,{})}),Object(nn.jsx)(C.b,{path:"/autor",children:Object(nn.jsx)(Sn,{})}),Object(nn.jsx)(C.b,{path:"/",children:Object(nn.jsx)(C.a,{to:"/zadania"})})]})]})})},In=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,52)).then((function(e){var t=e.getCLS,r=e.getFID,c=e.getFCP,a=e.getLCP,i=e.getTTFB;t(n),r(n),c(n),a(n),i(n)}))},Ln=t(35),Mn=Object(D.createGlobalStyle)(Cn||(Cn=Object(T.a)(['\n\nhtml {\n  box-sizing: border-box;\n}\n\n*, ::after, ::before {\n  box-sizing: inherit;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    font-family: "Montserrat", sans-serif;\n    margin: 0 auto;\n    max-width: 900px;\n    background: rgba(219, 216, 216, 0.733);\n    font-size: 15px;\n}\n']))),Nn=t(38),Rn=t(12),Jn=t.n(Rn),En=t(24),Wn=t(16),An=t(36),Bn=function(){var n=Object(An.a)(Jn.a.mark((function n(){var e;return Jn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/todo-list-react/exampleTasks.json");case 2:return(e=n.sent).ok||new Error(e.statusText),n.next=6,e.json();case 6:return n.abrupt("return",n.sent);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),Hn=Jn.a.mark(Vn),Zn=Jn.a.mark(qn),Gn=Jn.a.mark(Kn);function Vn(){var n;return Jn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Zaczynam prac\u0119"),e.prev=1,e.next=4,Object(Wn.b)(1e3);case 4:return e.next=6,Object(Wn.a)(Bn);case 6:return n=e.sent,e.next=9,Object(Wn.c)(V(n));case 9:e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(1),e.next=15,Object(Wn.a)(alert,"Co\u015b posz\u0142o nie tak!");case 15:case"end":return e.stop()}}),Hn,null,[[1,11]])}function qn(){var n;return Jn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Wn.d)(K);case 2:return n=e.sent,e.next=5,Object(Wn.a)(R,n);case 5:case"end":return e.stop()}}),Zn)}function Kn(){return Jn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Wn.f)(2e3,G.type,Vn);case 2:return n.next=4,Object(Wn.e)("*",qn);case 4:case"end":return n.stop()}}),Gn)}var Qn=Jn.a.mark(Xn);function Xn(){return Jn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(En.a)([Kn()]);case 2:case"end":return n.stop()}}),Qn)}var Yn=Object(Nn.a)(),$n=Object(L.a)({reducer:{tasks:_},middleware:[Yn]});Yn.run(Xn);var _n=$n;y.a.render(Object(nn.jsx)(v.a.StrictMode,{children:Object(nn.jsx)(I.a,{store:_n,children:Object(nn.jsxs)(D.ThemeProvider,{theme:{color:{green:"#00800",red:"#ff0000",teal:"teal",white:"white",grey:"grey"},breakpoint:{mobileMax:767}},children:[Object(nn.jsx)(Ln.Normalize,{}),Object(nn.jsx)(Mn,{}),Object(nn.jsx)(Pn,{})]})})}),document.getElementById("root")),In()}},[[51,1,2]]]);
//# sourceMappingURL=main.7e64b3fe.chunk.js.map