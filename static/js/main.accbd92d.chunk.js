(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{32:function(n,e,t){n.exports=t.p+"static/media/Ubuntu-Italic.4b96047e.ttf"},33:function(n,e,t){n.exports=t.p+"static/media/Megrim-Regular.f0ddc91a.ttf"},36:function(n,e,t){n.exports=t(55)},43:function(n,e,t){n.exports=t.p+"static/media/firebase.bfa69c4f.svg"},44:function(n,e,t){n.exports=t.p+"static/media/redux.aa0a3376.svg"},45:function(n,e,t){n.exports=t.p+"static/media/LearnEnglish.24142243.png"},46:function(n,e,t){n.exports=t.p+"static/media/MovieFinder.0bf44e8a.png"},47:function(n,e,t){n.exports=t.p+"static/media/Tetris.ef40f46e.png"},48:function(n,e,t){n.exports=t.p+"static/media/Portfolio.f5a80f48.png"},53:function(n,e,t){n.exports=t.p+"static/media/avatar.04cff595.svg"},54:function(n,e,t){n.exports=t.p+"static/media/contact.c7e50416.svg"},55:function(n,e,t){"use strict";t.r(e);var r=t(1),a=t.n(r),i=t(27),o=t.n(i),c=t(14),l=t(8),u={ENGLISH:"en",POLISH:"pl"},s={LIGHT:"light",DARK:"dark"},p={lang:u.POLISH,theme:s.LIGHT},d=Object(r.createContext)(),m=function(n,e){switch(e.type){case"SET_LANG":return Object(l.a)(Object(l.a)({},n),{},{lang:e.payload});case"SET_THEME":return Object(l.a)(Object(l.a)({},n),{},{theme:e.payload})}},f=function(n){var e=Object(r.useReducer)(m,p),t=Object(c.a)(e,2),i={state:t[0],dispatch:t[1]};return a.a.createElement(d.Provider,{value:i},n.children)},h=(d.Consumer,t(3)),b=t(2),x=t(58),g=t(13),v=Object(g.a)({},u.ENGLISH,{learnEnglish_description:"This is a website that allows you to learn english by practising. Excercises are adequatly customized to users level. It was created using React, Firebase, Redux Toolkit, React Spring. This is fully responsive",movieFinder_description:"This is a website that allows you to search movie's details and film crew. The app was created in React, Context API. I have used TMDBAPI. It is responsive.",tetris_description:"This is my version of iconic game Tetris. Game was created in Hooks. This website isn't responsive",portfolio_description:"My portfolio is multilingual, was made in React, Hooks API.",skills_description:"Technology stack, which I use: ",my_description:"I am 21 year's old. I live in Boguchwa\u0142owice it is a small village near Katowice. I am a 3rd year IT student with major in Mobile and Web apps. I aspire to be Frontend Developer. I am selfmade,but still learning.I am currently working on a website for an online store with the possibility of creating own clothes design and a game of unity for phones. ",contact_description:"I am currently looking for my first job or apprenticeship, if you like my projects please contact me.","#about":"About me","#skills":"Skills","#projects":"Projects","#contact":"Contact",skills_header:"My Skills",projects_header:"My Projects",contact_header:"Contact with me",button_github:"See my Github",button_contact:"Contact me"}),w=Object(g.a)({},u.POLISH,{learnEnglish_description:"Jest to strona internetowa pozwalaj\u0105ca na nauk\u0119 j\u0119zyka angielskiego poprzez \u0107wiczenia praktycznie odpowiednio dostosowane do poziomu u\u017cytkownika.Strona zosta\u0142a wykonana za pomoc\u0105 Firebase, Reacta, Redux Toolkit, React Spring",movieFinder_description:"Jest to strona internetowa pozwalaj\u0105ca na wyszukiwanie informacji o filmach i osobami zwi\u0105zanymi z ich produkcj\u0105.Do tworzenia aplikacji wykorzysta\u0142em Reacta i opar\u0142em to na hookach.Korzysta\u0142em tak\u017ce z og\xf3lnodost\u0119pnego tmdbAPI.",tetris_description:"Jest to moja wersja kultowej gry Tetris. Gra jest wykonana za pomoc\u0105 hook\xf3w.Strona nie jest responsywna.",portfolio_description:"Moje Portfolio zosta\u0142o wykonane w Reactcie za pomoc\u0105 hook\xf3w ",my_description:"Mam 21 lat mieszkam w Boguchwa\u0142owicach ma\u0142ej wiosce blisko Katowic. Jestem studentem 3 roku informatyki o specjalizacji aplikacje mobilne i webowe aspiruje na stanowisko Frontend Developera. Jestem samoukiem, ci\u0105gle rozwijajam swoj\u0119 pasj\u0119. Obecnie pracuj\u0119 nad stron\u0105 sklepu internetowego z mo\u017cliwo\u015bci\u0105 stworzenia w\u0142asnego designu ubra\u0144 i nad gr\u0105 w unity na telefony. S\u0105 to projekty relaizowane w w\u0142asnym zakresie. ",skills_description:"Stack technologiczny, kt\xf3ry obecnie pozna\u0142em",contact_description:"Obecnie szukam pierwszej pracy lub praktyki w zawodzie, je\u015bli spodoba\u0142y ci si\u0119 moje projekty zapraszam do kontaktu.","#about":"O mnie","#skills":"Umiej\u0119tno\u015bci","#projects":"Projekty","#contact":"Kontakt",skills_header:"Moje Umi\u0119jetno\u015bci",projects_header:"Moje Projekty",contact_header:"Skontaktuj si\u0119 ze mn\u0105",button_github:"Zobacz m\xf3j Github",button_contact:"Skontaktuj si\u0119 ze mn\u0105"}),j=Object(l.a)(Object(l.a)({},v),w),E=function(n){var e=n.children,t=n.locale,i=void 0===t?u.ENGLISH:t;return a.a.createElement(x.a,{locale:i,textComponent:r.Fragment,messages:j[i]},e)},y={background:"#fff",color:"#000",contrastColor:"#fff",cardColor:"#f3f3f3",button:"#5a74a6"},k={background:"#282c34",color:"#fff",contrastColor:"#000",cardColor:"#222",button:"#5a74a6"},O=function(n){switch(n){case s.DARK:return k;case s.LIGHT:return y}},z="576px",_="768px",T="992px",C="1200px",I={xs:"(max-width: ".concat("399px",")"),sm:"(max-width: ".concat(z,")"),md:"(max-width: ".concat(_,")"),lg:"(max-width: ".concat(T,")"),xl:"(max-width: ".concat(C,")")};function S(){var n=Object(h.a)(["\n  position: absolute;\n  top: 15px;\n  right: 20px;\n  display: flex;\n  flex-direction: column;\n  display: none;\n  justify-content: space-around;\n  width: 2rem;\n  height: 2rem;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  z-index: 10;\n@media","{\ndisplay: flex;\n}\n  &:focus {\n    outline: none;\n  }\n\n  div {\n    width: 2rem;\n    height: 0.25rem;\n    background: ",";\n    border-radius: 10px;\n    transition: all 0.3s linear;\n    position: relative;\n    transform-origin: 1px;\n\n    :first-child {\n      transform: ",";\n    }\n\n    :nth-child(2) {\n      opacity: ",";\n      transform: ",";\n    }\n\n    :nth-child(3) {\n      transform: ",";\n    }\n  }\n"]);return S=function(){return n},n}var F=b.c.button(S(),I.md,(function(n){return n.theme.color}),(function(n){return n.open?"rotate(45deg)":"rotate(0)"}),(function(n){return n.open?"0":"1"}),(function(n){return n.open?"translateX(20px)":"translateX(0)"}),(function(n){return n.open?"rotate(-45deg)":"rotate(0)"})),P=function(n){var e=n.open,t=n.setOpen;return a.a.createElement(F,{open:e,onClick:function(){return t(!e)}},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null))};function G(){var n=Object(h.a)(["\n  padding: 5px;\n  transition: transform 0.4s ease;\n  text-transform: uppercase;\n  background: ",";\n  color: ",";\n  border-radius: ",";\n  cursor: ",";\n"]);return G=function(){return n},n}function L(){var n=Object(h.a)(["\n    padding: 10px;\n"]);return L=function(){return n},n}var R=b.c.div(L()),H=b.c.span(G(),(function(n){return n.active?n.theme.color:"transparent"}),(function(n){return n.active?n.theme.contrastColor:n.theme.color}),(function(n){return n.active?"20px":"0px"}),(function(n){return n.active?"default":"pointer"})),M=function(){var n=Object(r.useContext)(d),e=n.state,t=n.dispatch;return console.log("loacales",u),a.a.createElement(R,null,a.a.createElement(H,{active:"pl"===e.lang,onClick:function(){return t({type:"SET_LANG",payload:"pl"})}},"pl"),"/",a.a.createElement(H,{active:"en"===e.lang,onClick:function(){return t({type:"SET_LANG",payload:"en"})}},"en"))};function A(){var n=Object(h.a)(["\n  opacity: 0;\n  z-index: 15;\n  border-radius: 15px;\n  width: 42px;\n  height: 26px;\n  &:checked + ",' {\n    background: #444;\n    &::after {\n      content: "";\n      display: block;\n      border-radius: 50%;\n      width: 18px;\n      height: 18px;\n      margin-left: 21px;\n      transition: 0.2s;\n    }\n  }\n']);return A=function(){return n},n}function B(){var n=Object(h.a)(['\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  width: 42px;\n  height: 26px;\n  border-radius: 15px;\n  background: #bebebe;\n  cursor: pointer;\n  &::after {\n    content: "";\n    display: block;\n    border-radius: 50%;\n    width: 18px;\n    height: 18px;\n    margin: 3px;\n    background: #ffffff;\n    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);\n    transition: 0.2s;\n  }\n']);return B=function(){return n},n}function D(){var n=Object(h.a)(["\n  position: relative;\n  margin: 7.5px 0px;\n  display:inline-block;\n  width: 43px;\n  @media","{\n    transform: translateX(80px);\n  }\n\n"]);return D=function(){return n},n}var K=b.c.div(D(),I.md),J=b.c.label(B()),N=b.c.input(A(),J),X=function(){var n=Object(r.useContext)(d),e=n.state,t=n.dispatch,i=function(n){t({type:"SET_THEME",payload:n})};return a.a.createElement(K,null,a.a.createElement(N,{onChange:e.theme===s.LIGHT?function(){return i(s.DARK)}:function(){return i(s.LIGHT)},type:"checkbox"}),a.a.createElement(J,null))},Y=t(57),U=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return a.a.createElement(Y.a,{id:n,values:Object(l.a)({},e)})},W=t(9),q=t(21);function Z(){var n=Object(h.a)(["\n  width: 48px;\n  height: 48px;\n"]);return Z=function(){return n},n}var Q=b.c.img(Z()),V=[{content:"#about"},{content:"#skills"},{content:"#projects"},{content:"#contact"}],$=[{name:"HTML5",icon:a.a.createElement(W.d,null),color:"#e34f26"},{name:"CSS3",icon:a.a.createElement(W.a,null),color:"#264de4"},{name:"Sass",icon:a.a.createElement(W.i,null),color:"#CD6799"},{name:"JavaScript",icon:a.a.createElement(W.e,null),color:"#F0DB4F"},{name:"React",icon:a.a.createElement(W.h,null),color:"#61DBFB"},{name:"Git",icon:a.a.createElement(W.c,null),color:"#3E2C00"},{name:"Npm",icon:a.a.createElement(W.f,null),color:"#CC3534"},{name:"Gatsby",icon:a.a.createElement(q.a,null),color:"#663399"},{name:"Firebase",icon:a.a.createElement(Q,{src:t(43)})},{name:"Redux",icon:a.a.createElement(Q,{src:t(44)})}],nn=[{icon:a.a.createElement(W.g,null),text:"785167617",color:"#43cc08",path:"tel:+48785167617"},{icon:a.a.createElement(W.b,null),text:"Bergu#0813",color:"#7289DA",path:"https://discord.com/",target:"_blank"},{icon:a.a.createElement(q.b,null),text:"Bergkacper@gmail.com",color:"#D44638",path:"mailto:bergkacper@gmail.com"}],en=[{title:"LearnEnglish",description:"learnEnglish_description",image:t(45),live:"https://bergmaner.github.io/learnenglish/",github:"https://github.com/bergmaner/learnenglish"},{title:"MovieFinder",description:"movieFinder_description",image:t(46),live:"https://bergmaner.github.io/movieFinder/",github:"https://github.com/bergmaner/movieFinder"},{title:"Tetris",description:"tetris_description",image:t(47),live:"https://bergmaner.github.io/tetris/",github:"https://github.com/bergmaner/tetris"},{title:"Portfolio",description:"portfolio_description",image:t(48),live:"https://bergmaner.github.io/portfolio/",github:"https://github.com/bergmaner/portfolio"}];function tn(){var n=Object(h.a)(["\n  display: inline-block;\n  font-size: 1.5em;\n  color: ",";\n  padding: 10px;\n  text-decoration: none;\n"]);return tn=function(){return n},n}function rn(){var n=Object(h.a)(["\nmargin: 0;\npadding: 0;\nlist-style: none;\noverflow: hidden;\ndisplay: flex;\njustify-content: flex-end;\n@media","{\n  flex-direction: column;\n  width: 200px;\n  position: fixed;\n  background: ",";\n  justify-content: flex-start;\n  transform: ",";\n  top: 0px;\n  padding-top: 52px;\n  right: 0px;\n  height: calc(100vh - 52px);\n  transition: transform 0.4s ease;\n}\nli a{\n    display: block;\n    padding: 10px;\n    color: ",";\n    text-decoration: none;\n    border-radius: 20px;\n    font-size: 18px;\n  }\n  li a:hover{\n  background-color: ",";\n  color: ",";\n  }\n"]);return rn=function(){return n},n}function an(){var n=Object(h.a)(["\n  background: ",";\n  position: fixed;\n  z-index: 2;\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 100%;\n  padding: 10px 20px;\n  margin: 0px auto;\n  display: flex;\n  justify-content: space-between;\n"]);return an=function(){return n},n}var on=b.c.header(an(),(function(n){return n.theme.contrastColor})),cn=b.c.ul(rn(),I.md,(function(n){return n.theme.contrastColor}),(function(n){return n.open?"translateX(0)":"translateX(100%)"}),(function(n){return n.theme.color}),(function(n){return n.theme.color}),(function(n){return n.theme.contrastColor})),ln=b.c.a(tn(),(function(n){return n.theme.color})),un=function(){var n=Object(r.useState)(!1),e=Object(c.a)(n,2),t=e[0],i=e[1];return a.a.createElement(on,null,a.a.createElement(ln,{href:"#"},"Portfolio"),a.a.createElement(P,{open:t,setOpen:i}),a.a.createElement(cn,{open:t},V.map((function(n,e){return a.a.createElement("li",{key:e},a.a.createElement("a",{href:n.content},U(n.content)))})),a.a.createElement(M,null),a.a.createElement(X,null)))},sn=t(11),pn=t.n(sn);function dn(){var n=Object(h.a)(["\nborder: solid 1px ",";\ncolor: ",";\nfont-weight: 700;\nwidth: max-content;\npadding: 13px 22px;\n\ntext-transform: uppercase;\nborder-radius: 6px;\ntext-align: center;\ntext-decoration: none;\ndisplay: block;\nmargin-top: 20px;\nmargin-right: 50px;\nfont-size: 12px;\ncursor: pointer;\ntransition: all .3s ease-in-out 0s;\n@media","{\n    font-size: 15px;\n    padding: 12px 18px;\n    margin-right: 0px;\n}\n@media","{\n    font-size: 13px;\n    padding: 9px 12px;\n}\n:hover{\n    background-color: ",";\n    color: white;\n}\n"]);return dn=function(){return n},n}var mn=b.c.a(dn(),(function(n){return n.theme.button}),(function(n){return n.theme.color}),I.md,I.sm,(function(n){return n.theme.button})),fn=function(n){var e=n.children,t=n.path,r=n.newTab;return a.a.createElement("div",null,a.a.createElement(mn,{href:t,target:r&&"_blank"},e))};function hn(){var n=Object(h.a)(["\ndisplay: flex;\njustify-content: center;\nmargin-top: 20px;\n@media","{\njustify-content: space-around;\n}\n@media","{\n  flex-direction: column;\n  align-items: center;\n  margin: 0px;\n  }\n"]);return hn=function(){return n},n}function bn(){var n=Object(h.a)(["\n  text-align: left;\n  font-size: 20px;\n  padding: 0px 30px;\n  @media","{\n    padding: 0px;\n  }\n"]);return bn=function(){return n},n}function xn(){var n=Object(h.a)(["\n  > img {\n    max-width: 100%;\n    height: auto;\n  }\n"]);return xn=function(){return n},n}function gn(){var n=Object(h.a)(["\n  width: 100%;\n  box-sizing: border-box;\n  padding: 40px 20px;\n  border-bottom: #F3F3F3 3px solid;\n  margin-top: 52px;\n  display: flex;\n  @media","{\nflex-direction: column;\n  }\n  > * {\n    flex: 1;\n    margin-bottom: 30px;\n  }\n  h1{\n      margin-top: 0px;\n  }\n"]);return gn=function(){return n},n}var vn=b.c.div(gn(),I.md),wn=b.c.div(xn()),jn=b.c.p(bn(),I.xs),En=b.c.div(hn(),I.md,I.xs),yn=function(){return a.a.createElement(vn,{id:"about"},a.a.createElement(pn.a,null,a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement("h1",null,"Kacper Berg"),a.a.createElement(jn,null,U("my_description")),a.a.createElement(En,null,a.a.createElement(fn,{path:"#contact"},U("button_contact")),a.a.createElement(fn,{path:"https://github.com/bergmaner",newTab:!0},U("button_github"))))),a.a.createElement(wn,null,a.a.createElement("img",{alt:"",src:t(53)}))))};function kn(){var n=Object(h.a)(["\n  padding: 40px 20px;\n  border-bottom: #f3f3f3 3px solid;\n"]);return kn=function(){return n},n}function On(){var n=Object(h.a)(["\n  color: ",";\n"]);return On=function(){return n},n}function zn(){var n=Object(h.a)(["\n  display: inline-block;\n  margin-right: 20px;\n  margin-bottom: 20px;\n"]);return zn=function(){return n},n}function _n(){var n=Object(h.a)(["\n  font-size: 20px;\n  margin: 0px;\n"]);return _n=function(){return n},n}function Tn(){var n=Object(h.a)(["\n  font-size: 20px;\n"]);return Tn=function(){return n},n}function Cn(){var n=Object(h.a)(["\n  padding-left: 0;\n  list-style: none;\n  font-size: 3rem;\n  margin-bottom: 0px;\n  margin-top: 0px;\n  text-align: center;\n"]);return Cn=function(){return n},n}function In(){var n=Object(h.a)(["\n  font-size: 56px;\n  font-weight: 400;\n  margin-top: 0px;\n  @media","{\n    font-size: 30px;\n  }\n"]);return In=function(){return n},n}var Sn=b.c.h1(In(),I.sm),Fn=b.c.ul(Cn()),Pn=b.c.p(Tn()),Gn=b.c.p(_n()),Ln=b.c.li(zn()),Rn=b.c.span(On(),(function(n){return n.color})),Hn=b.c.div(kn()),Mn=function(){return a.a.createElement(Hn,{id:"skills"},a.a.createElement(pn.a,null,a.a.createElement(Sn,null,U("skills_header")),a.a.createElement(Pn,null,U("skills_description")),a.a.createElement("div",null,a.a.createElement(Fn,null,$.map((function(n,e){return a.a.createElement(Ln,{key:e},a.a.createElement(Rn,{color:n.color,background:n.background},n.icon),a.a.createElement(Gn,null,n.name))}))))))};function An(){var n=Object(h.a)(["\nbackground-color: ",";\ncolor: white;\nfont-weight: 700;\nwidth: max-content;\npadding: 6px 11px;\nmargin: 0px 20px;\ntext-transform: uppercase;\nborder-radius: 10px;\ntext-align: center;\ntext-decoration: none;\ndisplay: block;\nfont-size: 12px;\ncursor: pointer;\ntransition: all .3s ease-in-out 0s;\n: hover{\n    filter: brightness(90%);\n}\n"]);return An=function(){return n},n}var Bn=b.c.a(An(),(function(n){return n.theme.button})),Dn=function(n){var e=n.children,t=n.path,r=n.newTab;return a.a.createElement("div",null,a.a.createElement(Bn,{href:t,target:r&&"_blank"},e))};function Kn(){var n=Object(h.a)(["\n  display: flex;\n  justify-content: center;\n"]);return Kn=function(){return n},n}function Jn(){var n=Object(h.a)(["\n  position: absolute;\n  right: 0px;\n  width: calc(100% - 100px);\n  height: 100%;\n  box-sizing: border-box;\n  padding: 10px 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  h3 {\n    margin-top: 0px;\n    margin-bottom: 5px;\n    font-size: 16px;\n  }\n  p {\n    text-align: left;\n    font-size: 14px;\n    margin: 5px 0px;\n  }\n  @media","{\n    padding: 25px;\n    position: static;\n  }\n"]);return Jn=function(){return n},n}function Nn(){var n=Object(h.a)(["\n  position: relative;\n  min-height: 205px;\n  background: ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 45%;\n  margin: 30px 0px;\n  :hover "," {\n    width: 150px;\n    height: 75px;\n    transform: translate(-75px, calc(50% - 37px));\n    transition: 0.5s ease-in-out;\n  }\n  @media","{\n    width: 400px;\n  }\n  @media","{\n    max-width: 300px;\n    flex-direction:column;\n    :hover "," {\n      height: auto;\n      width: 100%;\n      transform:translate(0,0);\n      }\n  }\n"]);return Nn=function(){return n},n}function Xn(){var n=Object(h.a)(["\n  width: 100%;\n  position: absolute;\n  top: 0px;\n  @media","{\n    position: static;\n  }\n\n"]);return Xn=function(){return n},n}function Yn(){var n=Object(h.a)(["\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  transition: all 0.5s ease-in-out;\n @media","{\n   width: 100%;\n   position: relative;\n   transform: translateX(0);\n  \n }\n"]);return Yn=function(){return n},n}var Un=b.c.div(Yn(),I.md),Wn=b.c.img(Xn(),I.md),qn=b.c.div(Nn(),(function(n){return n.theme.cardColor}),Un,I.lg,I.md,Un),Zn=b.c.div(Jn(),I.md),Qn=b.c.div(Kn()),Vn=function(n){var e=n.title,t=n.description,r=n.path,i=n.livePath,o=n.githubPath;return a.a.createElement(qn,null,a.a.createElement(Un,null,a.a.createElement(Wn,{src:r})),a.a.createElement(Zn,null,a.a.createElement("div",null,a.a.createElement("h3",null,e),a.a.createElement("p",null,U(t)),a.a.createElement(Qn,null,a.a.createElement(Dn,{path:i,newTab:!0},"Live"),a.a.createElement(Dn,{path:o,newTab:!0},"Github")))))};function $n(){var n=Object(h.a)(["\n  position: relative;\n  width: 1000px;\n  margin: auto;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  transition: all 0.5s ease-in-out;\n  @media","{\n    width: 100%;\n    flex-direction: column;\n    align-items: center;\n  }\n"]);return $n=function(){return n},n}function ne(){var n=Object(h.a)(["\n  font-size: 56px;\n  font-weight: 400;\n  margin-top: 0px;\n  @media","{\n    font-size: 30px;\n  }\n"]);return ne=function(){return n},n}function ee(){var n=Object(h.a)(["\npadding: 40px 20px;\nborder-bottom: #F3F3F3 3px solid;\n@media","{\n  padding: 40px 0px;\n}\n"]);return ee=function(){return n},n}var te=b.c.div(ee(),I.xs),re=b.c.h1(ne(),I.sm),ae=b.c.div($n(),I.lg),ie=function(){return a.a.createElement(te,{id:"projects"},a.a.createElement(pn.a,null,a.a.createElement(re,null,U("projects_header")),a.a.createElement(ae,null,en.map((function(n,e){return a.a.createElement(Vn,{key:e,title:n.title,description:null===n||void 0===n?void 0:n.description,path:n.image,livePath:n.live,githubPath:n.github})})))))};function oe(){var n=Object(h.a)(["\n  font-size: 20px;\n  margin-left: 5px;\n  @media","{\n      font-size: 14px;\n  }\n"]);return oe=function(){return n},n}function ce(){var n=Object(h.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n"]);return ce=function(){return n},n}function le(){var n=Object(h.a)(["\n  transition: all 0.4s ease;\n  display: inline-block;\n  padding: 10px;\n  border-radius: 100%;\n  background: #ddd;\n  color: #555;\n  svg {\n    font-size: 30px;\n  }\n  :hover {\n    background: ",";\n    color: #fff;\n  }\n"]);return le=function(){return n},n}var ue=b.c.div(le(),(function(n){return n.color})),se=b.c.div(ce()),pe=b.c.div(oe(),I.xs),de=function(){return a.a.createElement("div",null,nn.map((function(n){return a.a.createElement(se,{style:{margin:"5px"}},a.a.createElement("a",{target:n.target,href:n.path},a.a.createElement(ue,{color:n.color},n.icon)),a.a.createElement(pe,null,n.text))})))};function me(){var n=Object(h.a)(["\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return me=function(){return n},n}function fe(){var n=Object(h.a)(["\n  text-align: left;\n  font-size: 20px;\n  padding: 0px 30px;\n  @media","{\n      font-size: 18px;\n      padding: 0px;\n  }\n"]);return fe=function(){return n},n}function he(){var n=Object(h.a)(["\n  width: 80%;\n  padding: 20px;\n"]);return he=function(){return n},n}function be(){var n=Object(h.a)(["\n  width: 100%;\n"]);return be=function(){return n},n}function xe(){var n=Object(h.a)(["\n  padding: 40px 20px;\n  box-sizing: border-box;\n  width: 100%;\n  display: flex;\n  @media","{\n      flex-direction: column;\n  }\n"]);return xe=function(){return n},n}var ge=b.c.div(xe(),I.sm),ve=b.c.img(be()),we=b.c.div(he()),je=b.c.p(fe(),I.sm),Ee=b.c.div(me()),ye=function(){return a.a.createElement(ge,{id:"contact"},a.a.createElement(pn.a,null,a.a.createElement(we,null,a.a.createElement("h1",null,U("contact_header"))," ",a.a.createElement(je,null,U("contact_description")),a.a.createElement(de,null)),a.a.createElement(Ee,null,a.a.createElement(ve,{src:t(54)}))))};function ke(){var n=Object(h.a)(["\nwidth: 100%;\nbox-sizing: border-box;\npadding: 20px;\nfont-size: 20px;\nbackground: #e4e4e4;\ncolor: #000;\nfont-family: 'footerFont';\n"]);return ke=function(){return n},n}var Oe=b.c.div(ke()),ze=function(){return a.a.createElement(Oe,null,"COPYWRIGHT \xa9 2020 BY BERG KACPER")},_e=function(){var n=Object(r.useState)(!1),e=Object(c.a)(n,2),t=e[0],a=e[1];return Object(r.useEffect)((function(){var n=function(){window.pageYOffset>350?a(!0):window.pageYOffset<=350&&a(!1)};return window.addEventListener("scroll",n),function(){window.removeEventListener("scroll",n)}}),[]),t},Te=t(31);function Ce(){var n=Object(h.a)(["\n  position: fixed;\n  right: 10px;\n  bottom: 10px;\n  font-size: 70px;\n  transition: opacity 0.4s;\n  opacity: ",";\n  :hover {\n    opacity: ",";\n  }\n  path {\n    cursor: pointer;\n  }\n"]);return Ce=function(){return n},n}var Ie=Object(b.c)(Te.a)(Ce(),(function(n){return n.visible?.6:0}),(function(n){return n.visible?1:0})),Se=function(){var n=_e();return a.a.createElement(Ie,{onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},visible:n})},Fe=t(32),Pe=t.n(Fe),Ge=t(33),Le=t.n(Ge);function Re(){var n=Object(h.a)(["\n  text-align: center;\n  overflow: hidden;\n"]);return Re=function(){return n},n}function He(){var n=Object(h.a)(["\n@font-face {\n  font-family: 'main';\n  src: url(",") format('truetype');\n}\n\n@font-face {\n  font-family: 'footerFont';\n  src: url(",") format('truetype');\n}\n\nbody {\n  margin: 0;\n  color: ",";\n  background: ",";\n    font-family: 'main', Arial;\n}\nhtml{\n  scroll-behavior: smooth;\n}\n"]);return He=function(){return n},n}var Me=Object(b.b)(He(),Pe.a,Le.a,(function(n){return n.theme.color}),(function(n){return n.theme.background})),Ae=b.c.div(Re()),Be=function(){var n=Object(r.useContext)(d),e=n.state;n.dispatch;return a.a.createElement(E,{locale:e.lang},a.a.createElement(b.a,{theme:O(e.theme)},a.a.createElement(Me,null),a.a.createElement(Ae,null,a.a.createElement(un,null),a.a.createElement(yn,null),a.a.createElement(Mn,null),a.a.createElement(ie,null),a.a.createElement(ye,null),a.a.createElement(Se,null),a.a.createElement(ze,null))))};o.a.render(a.a.createElement(f,null,a.a.createElement(Be,null)),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.accbd92d.chunk.js.map