(this.webpackJsonplosowanko=this.webpackJsonplosowanko||[]).push([[0],{42:function(e,n,s){},43:function(e,n,s){},51:function(e,n,s){"use strict";s.r(n);var r=s(1),i=s.n(r),o=s(32),t=s.n(o),j=(s(42),s(43),s(9)),a=s(21),c=s(35),d=s(62),b=s(61),l=s(0),g=["onClick","id","game","winner"],O=Object(b.a)(d.a)({minWidth:"273px",minHeight:"40px",margin:"5px"}),x=function(e){var n=e.onClick,s=e.id,r=e.game,i=e.winner,o=void 0!==i&&i,t=Object(c.a)(e,g);return Object(l.jsx)(O,Object(a.a)(Object(a.a)({disabled:"Przegrany z drabinki 1"===r||"Wygrany drabinki 2"===r||!r,variant:"outlined",color:o?"success":"primary",onClick:function(){return r&&n(s)}},t),{},{children:r||""}))},w=function(e){var n=e.ids,s=e.goesTo,i=Object(r.useContext)(u),o=function(e){var r=Object(a.a)({},i.winnerTab),o=0===e?1:0;r[s.winner]=i.winnerTab[n[e]],r[s.loser]=i.winnerTab[n[o]],i.setWinnerTab(r)};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(x,{id:0,game:i.winnerTab[n[0]],onClick:o,winner:i.winnerTab[s.winner]===i.winnerTab[n[0]]&&i.winnerTab[s.winner]}),Object(l.jsx)(x,{id:1,game:i.winnerTab[n[1]],onClick:o,winner:i.winnerTab[s.winner]===i.winnerTab[n[1]]&&i.winnerTab[s.winner]})]})},T=Object(b.a)("div")({width:"100%",height:"70px",backgroundColor:"gray",display:"flex",justifyContent:"center",alignItems:"center",position:"fixed",zIndex:10,top:0}),z=Object(b.a)(d.a)({height:"50px",marginRight:"5px"}),h=function(e){var n=e.winnerTab,s=e.resetWinnerTab;return Object(l.jsxs)(T,{children:[Object(l.jsx)(z,{variant:"contained",color:"success",onClick:function(){return navigator.clipboard.writeText(JSON.stringify(n))},children:"Skopiuj do schowka"}),Object(l.jsx)(z,{variant:"contained",onClick:function(){return localStorage.setItem("saveData",JSON.stringify(n))},children:"Zapisz na p\xf3\u017aniej"}),Object(l.jsx)(z,{variant:"contained",color:"error",onClick:function(){return s()},children:"Resetuj"})]})},k={1:"Wied\u017amin 3",2:"Resident Evil 4",3:"Mafia 2",4:"Control",5:"GTA V",6:"Spider-man: Miles Morales",7:"Horizon Zero Dawn",8:"Demon's Souls",9:"Red Dead Redemption 2",10:"Heavy Rain",11:"Uncharted 2",12:"Death Stranding",13:"The Last of Us 2",14:"Crash Bandicoot 1",15:"Silent Hill 2",16:"GTA: San Andreas",17:"God of War",18:"Portal 2",19:"Detroit: Become Human",20:"GTA Vice City",21:"Uncharted 4",22:"Doom (2016)",23:"Ghost of Tsushima",24:"GTA IV",25:"The Last of Us",26:"Half Life 2",27:"Assassin's Creed II",28:"Ratchet & Clank (PS4)",29:"Spider-man",30:"Hades",31:"Bloodborne",32:"Days Gone",34:"God of War 3",36:"Hitman Blood Money",38:"Metal Gear Solid V",40:"Splinter Cell Chaos Theory",42:"Mafia 1",44:"Cyberpunk 2077",46:"The Last Guardian",48:"Returnal",50:"Uncharted",52:"Dragon Age: Origins",54:"Metal Gear Solid",56:"Ratchet & Clank: Rift Apart",58:"Tomb Raider (2013)",60:"Overcooked! All You Can Eat",62:"Until Dawn",64:"Red Dead Redemption",33:"Przegrany z drabinki 1",35:"Przegrany z drabinki 1",37:"Przegrany z drabinki 1",39:"Przegrany z drabinki 1",41:"Przegrany z drabinki 1",43:"Przegrany z drabinki 1",45:"Przegrany z drabinki 1",47:"Przegrany z drabinki 1",49:"Przegrany z drabinki 1",51:"Przegrany z drabinki 1",53:"Przegrany z drabinki 1",55:"Przegrany z drabinki 1",57:"Przegrany z drabinki 1",59:"Przegrany z drabinki 1",61:"Przegrany z drabinki 1",63:"Przegrany z drabinki 1",105:"Przegrany z drabinki 1",107:"Przegrany z drabinki 1",109:"Przegrany z drabinki 1",111:"Przegrany z drabinki 1",113:"Przegrany z drabinki 1",115:"Przegrany z drabinki 1",117:"Przegrany z drabinki 1",119:"Przegrany z drabinki 1",141:"Przegrany z drabinki 1",135:"Przegrany z drabinki 1",137:"Przegrany z drabinki 1",139:"Przegrany z drabinki 1",149:"Przegrany z drabinki 1",151:"Przegrany z drabinki 1",155:"Przegrany z drabinki 1",157:"Przegrany z drabinki 1",144:"Wygrany drabinki 2"},u=i.a.createContext(),y=Object(b.a)("div")({display:"flex",flexDirection:"column",justifyContent:"space-around"}),f=Object(b.a)("div")({display:"flex"}),P=Object(b.a)("div")({height:"100px"}),p=function(){var e=Object(r.useState)(k),n=Object(j.a)(e,2),s=n[0],i=n[1];Object(r.useEffect)((function(){var e=localStorage.getItem("saveData");e&&i(JSON.parse(e))}),[]);return Object(l.jsxs)(u.Provider,{value:{setWinnerTab:i,winnerTab:s},children:[Object(l.jsx)(h,{winnerTab:s,resetWinnerTab:function(){return i(k)}}),Object(l.jsx)(P,{}),Object(l.jsxs)(f,{children:[Object(l.jsxs)(y,{children:[Object(l.jsx)(w,{ids:[1,2],goesTo:{winner:65,loser:49}}),Object(l.jsx)(w,{ids:[3,4],goesTo:{winner:66,loser:51}}),Object(l.jsx)(w,{ids:[5,6],goesTo:{winner:67,loser:53}}),Object(l.jsx)(w,{ids:[7,8],goesTo:{winner:68,loser:55}}),Object(l.jsx)(w,{ids:[9,10],goesTo:{winner:69,loser:57}}),Object(l.jsx)(w,{ids:[11,12],goesTo:{winner:70,loser:59}}),Object(l.jsx)(w,{ids:[13,14],goesTo:{winner:71,loser:61}}),Object(l.jsx)(w,{ids:[15,16],goesTo:{winner:72,loser:63}}),Object(l.jsx)(w,{ids:[17,18],goesTo:{winner:73,loser:33}}),Object(l.jsx)(w,{ids:[19,20],goesTo:{winner:74,loser:35}}),Object(l.jsx)(w,{ids:[21,22],goesTo:{winner:75,loser:37}}),Object(l.jsx)(w,{ids:[23,24],goesTo:{winner:76,loser:39}}),Object(l.jsx)(w,{ids:[25,26],goesTo:{winner:77,loser:41}}),Object(l.jsx)(w,{ids:[27,28],goesTo:{winner:78,loser:43}}),Object(l.jsx)(w,{ids:[29,30],goesTo:{winner:79,loser:45}}),Object(l.jsx)(w,{ids:[31,32],goesTo:{winner:80,loser:47}})]}),Object(l.jsxs)(y,{children:[Object(l.jsx)(w,{ids:[65,66],goesTo:{winner:97,loser:105}}),Object(l.jsx)(w,{ids:[67,68],goesTo:{winner:98,loser:107}}),Object(l.jsx)(w,{ids:[69,70],goesTo:{winner:99,loser:109}}),Object(l.jsx)(w,{ids:[71,72],goesTo:{winner:100,loser:111}}),Object(l.jsx)(w,{ids:[73,74],goesTo:{winner:101,loser:113}}),Object(l.jsx)(w,{ids:[75,76],goesTo:{winner:102,loser:115}}),Object(l.jsx)(w,{ids:[77,78],goesTo:{winner:103,loser:117}}),Object(l.jsx)(w,{ids:[79,80],goesTo:{winner:104,loser:119}})]}),Object(l.jsxs)(y,{children:[Object(l.jsx)(w,{ids:[97,98],goesTo:{winner:121,loser:135}}),Object(l.jsx)(w,{ids:[99,100],goesTo:{winner:122,loser:137}}),Object(l.jsx)(w,{ids:[101,102],goesTo:{winner:123,loser:139}}),Object(l.jsx)(w,{ids:[103,104],goesTo:{winner:124,loser:141}})]}),Object(l.jsxs)(y,{children:[Object(l.jsx)(w,{ids:[121,122],goesTo:{winner:133,loser:149}}),Object(l.jsx)(w,{ids:[123,124],goesTo:{winner:134,loser:151}})]}),Object(l.jsx)(y,{children:Object(l.jsx)(w,{ids:[133,134],goesTo:{winner:143,loser:155}})}),Object(l.jsx)(y,{children:Object(l.jsx)(w,{ids:[143,144],goesTo:{winner:159,loser:157}})}),Object(l.jsx)(y,{children:Object(l.jsx)(x,{id:159,game:s[159],onClick:function(){},winner:!0,variant:"contained"})})]}),Object(l.jsx)(P,{}),"Drabinka przegranych:",Object(l.jsxs)(f,{children:[Object(l.jsxs)(y,{children:[Object(l.jsx)(w,{ids:[33,34],goesTo:{winner:81,loser:0}}),Object(l.jsx)(w,{ids:[35,36],goesTo:{winner:82,loser:0}}),Object(l.jsx)(w,{ids:[37,38],goesTo:{winner:83,loser:0}}),Object(l.jsx)(w,{ids:[39,40],goesTo:{winner:84,loser:0}}),Object(l.jsx)(w,{ids:[41,42],goesTo:{winner:85,loser:0}}),Object(l.jsx)(w,{ids:[43,44],goesTo:{winner:86,loser:0}}),Object(l.jsx)(w,{ids:[45,46],goesTo:{winner:87,loser:0}}),Object(l.jsx)(w,{ids:[47,48],goesTo:{winner:88,loser:0}}),Object(l.jsx)(w,{ids:[49,50],goesTo:{winner:89,loser:0}}),Object(l.jsx)(w,{ids:[51,52],goesTo:{winner:90,loser:0}}),Object(l.jsx)(w,{ids:[53,54],goesTo:{winner:91,loser:0}}),Object(l.jsx)(w,{ids:[55,56],goesTo:{winner:92,loser:0}}),Object(l.jsx)(w,{ids:[57,58],goesTo:{winner:93,loser:0}}),Object(l.jsx)(w,{ids:[59,60],goesTo:{winner:94,loser:0}}),Object(l.jsx)(w,{ids:[61,62],goesTo:{winner:95,loser:0}}),Object(l.jsx)(w,{ids:[63,64],goesTo:{winner:96,loser:0}})]}),Object(l.jsx)(P,{}),Object(l.jsxs)(y,{children:[Object(l.jsx)(w,{ids:[81,82],goesTo:{winner:106,loser:0}}),Object(l.jsx)(w,{ids:[83,84],goesTo:{winner:108,loser:0}}),Object(l.jsx)(w,{ids:[85,86],goesTo:{winner:110,loser:0}}),Object(l.jsx)(w,{ids:[87,88],goesTo:{winner:112,loser:0}}),Object(l.jsx)(w,{ids:[89,90],goesTo:{winner:114,loser:0}}),Object(l.jsx)(w,{ids:[91,92],goesTo:{winner:116,loser:0}}),Object(l.jsx)(w,{ids:[93,94],goesTo:{winner:118,loser:0}}),Object(l.jsx)(w,{ids:[95,96],goesTo:{winner:120,loser:0}})]}),Object(l.jsxs)(y,{children:[Object(l.jsx)(w,{ids:[105,106],goesTo:{winner:125,loser:0}}),Object(l.jsx)(w,{ids:[107,108],goesTo:{winner:126,loser:0}}),Object(l.jsx)(w,{ids:[109,110],goesTo:{winner:127,loser:0}}),Object(l.jsx)(w,{ids:[111,112],goesTo:{winner:128,loser:0}}),Object(l.jsx)(w,{ids:[113,114],goesTo:{winner:129,loser:0}}),Object(l.jsx)(w,{ids:[115,116],goesTo:{winner:130,loser:0}}),Object(l.jsx)(w,{ids:[117,118],goesTo:{winner:131,loser:0}}),Object(l.jsx)(w,{ids:[119,120],goesTo:{winner:132,loser:0}})]}),Object(l.jsxs)(y,{children:[Object(l.jsx)(w,{ids:[125,126],goesTo:{winner:136,loser:0}}),Object(l.jsx)(w,{ids:[127,128],goesTo:{winner:138,loser:0}}),Object(l.jsx)(w,{ids:[129,130],goesTo:{winner:140,loser:0}}),Object(l.jsx)(w,{ids:[131,132],goesTo:{winner:142,loser:0}})]}),Object(l.jsxs)(y,{children:[Object(l.jsx)(w,{ids:[135,136],goesTo:{winner:145,loser:0}}),Object(l.jsx)(w,{ids:[137,138],goesTo:{winner:146,loser:0}}),Object(l.jsx)(w,{ids:[139,140],goesTo:{winner:147,loser:0}}),Object(l.jsx)(w,{ids:[141,142],goesTo:{winner:148,loser:0}})]}),Object(l.jsxs)(y,{children:[Object(l.jsx)(w,{ids:[145,146],goesTo:{winner:150,loser:0}}),Object(l.jsx)(w,{ids:[147,148],goesTo:{winner:152,loser:0}})]}),Object(l.jsxs)(y,{children:[Object(l.jsx)(w,{ids:[149,150],goesTo:{winner:153,loser:0}}),Object(l.jsx)(w,{ids:[151,152],goesTo:{winner:154,loser:0}})]}),Object(l.jsx)(y,{children:Object(l.jsx)(w,{ids:[153,154],goesTo:{winner:156,loser:0}})}),Object(l.jsx)(y,{children:Object(l.jsx)(w,{ids:[155,156],goesTo:{winner:158,loser:0}})}),Object(l.jsx)(y,{children:Object(l.jsx)(w,{ids:[157,158],goesTo:{winner:144,loser:0}})})]})]})},m=Object(b.a)("div")({});var v=function(){return Object(l.jsx)(m,{children:Object(l.jsx)(p,{})})},C=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,64)).then((function(n){var s=n.getCLS,r=n.getFID,i=n.getFCP,o=n.getLCP,t=n.getTTFB;s(e),r(e),i(e),o(e),t(e)}))};t.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(v,{})}),document.getElementById("root")),C()}},[[51,1,2]]]);
//# sourceMappingURL=main.564c0fcc.chunk.js.map