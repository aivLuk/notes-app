(this["webpackJsonpnotes-app"]=this["webpackJsonpnotes-app"]||[]).push([[0],[,function(e,t,n){e.exports={NotesContainer:"Notes_NotesContainer__4ZuSd",SingleNote:"Notes_SingleNote__f8QrY",noteTransition:"Notes_noteTransition__3mkOI",Note:"Notes_Note__3Q-dY",Done:"Notes_Done__3uoXO",Date:"Notes_Date__1nl4E",Gone:"Notes_Gone__SOAWH",noteGone:"Notes_noteGone__2EFuH"}},function(e,t,n){e.exports={InputContainer:"Input_InputContainer__2vSBe",TextArea:"Input_TextArea__38jc5",InputBtn:"Input_InputBtn__ra9Be"}},,,,,,,function(e,t,n){e.exports={App:"App_App__17aBM"}},,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(5),c=n.n(r),s=(n(17),n(3)),i=n(6),l=n(7),u=n(10),p=n(8),d=n(11),N=n(9),_=n.n(N),m=n(2),h=n.n(m),f=function(e){return o.a.createElement("div",{className:h.a.InputContainer},o.a.createElement("textarea",{type:"text",className:h.a.TextArea,style:{border:e.error?"1px solid red":"1px solid #ccc"},placeholder:"Add a note here...",onChange:e.changed}),o.a.createElement("button",{onClick:e.clicked,className:h.a.InputBtn},"Add note"))},v=n(1),g=n.n(v),E=function(e){var t=e.notes.map((function(t,n){return o.a.createElement("div",{key:n,className:g.a.SingleNote},o.a.createElement("p",{className:g.a.Note},t.note),o.a.createElement("span",{className:g.a.Date},t.date),o.a.createElement("button",{className:g.a.Done,onClick:function(){return e.clicked(n)}},"Done"))}));return o.a.createElement("div",{className:g.a.NotesContainer},t)},k=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={currentNote:"",notes:[],error:!1},n.addNoteHandler=function(){if(n.state.currentNote.length>0){var e=n.state.currentNote,t=Object(s.a)(n.state.notes),a=(new Date).toLocaleString();t.push({note:e,date:a}),n.setState({notes:t,error:!1})}else n.setState({error:!0})},n.changeNoteHandler=function(e){var t=e.target.value;n.setState({currentNote:t})},n.NoteDoneHandler=function(e){var t=Object(s.a)(n.state.notes);t.splice(e,1),n.setState({notes:t})},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:_.a.App},o.a.createElement(f,{error:this.state.error,clicked:this.addNoteHandler,changed:function(t){return e.changeNoteHandler(t)}}),o.a.createElement(E,{notes:this.state.notes,clicked:this.NoteDoneHandler}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[12,1,2]]]);
//# sourceMappingURL=main.10fdd761.chunk.js.map