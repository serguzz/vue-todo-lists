(function(t){function e(e){for(var n,a,s=e[0],c=e[1],l=e[2],u=0,v=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&v.push(r[a][0]),r[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(v.length)v.shift()();return i.push.apply(i,l||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],n=!0,s=1;s<o.length;s++){var c=o[s];0!==r[c]&&(n=!1)}n&&(i.splice(e--,1),t=a(a.s=o[0]))}return t}var n={},r={app:0},i=[];function a(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=n,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(o,n,function(e){return t[e]}.bind(null,n));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/vue-todo-lists/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var d=c;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("Navbar",{on:{add_todo_note:function(e){return t.addTodoNote()},undo_last_action:function(e){return t.undoLastAction()}}}),o("v-main",{staticStyle:{}}),o("v-container",[o("v-divider"),o("v-stepper-header",{staticClass:"d-flex justify-center align-center"},[o("h2",[t._v("Create, add, modify notes for your puposes. ")])]),o("v-subheader",{staticClass:"d-flex justify-center align-center"},[t._v("> "),0===t.todoNotes.length?o("div",[o("h2",[t._v(" No TODO-Notes found at the moment ! ")])]):o("div",[o("h2",[t._v("You have "+t._s(t.todoNotes.length)+" TODO Notes ")])])]),o("v-divider"),o("v-row",[t._l(t.todoNotes,(function(e,n){return o("v-col",{key:e,attrs:{cols:"4"}},[o("v-card",[o("v-card-title",[t._v(" Todo Note # "+t._s(n+1)+" ")]),o("v-card-subtitle",[0===e.length?o("div",[t._v(" NO tasks found in this note ! ")]):0===t.countOpenTasks(n)?o("div",[t._v(" You have finished all the tasks ! ")]):o("div",[t._v(" "+t._s(" You have "+t.countOpenTasks(n)+" tasks to do.")+" ")])]),o("v-divider"),o("v-list",[t._l(e,(function(e,r){return o("v-list-item",{key:e},[o("div",{class:{crossed:!0===e.isDone}},[t._v(" "+t._s(e.value)+" ")]),o("v-spacer"),o("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.checkTodoItem(n,r)}}},[t._v("✔️")]),o("v-btn",{attrs:{color:"error"},on:{click:function(e){return t.removeTodoItem(n,r)}}},[t._v("❌")])],1)})),o("v-list-item",[o("v-text-field",{staticClass:"centered-input",attrs:{width:"10px","append-icon":"✔️"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTodoItem(n)}},model:{value:t.newTodoItems[n],callback:function(e){t.$set(t.newTodoItems,n,e)},expression:"newTodoItems[noteIndex]"}},[t._v(" New Todo Item ")])],1)],2),o("v-divider"),o("v-list",[o("v-list-item",[o("div",{staticClass:"text-center"},[o("v-dialog",{attrs:{width:"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[o("v-btn",t._g({attrs:{color:"error",dark:""},on:{click:function(e){return t.setCurrentNote(n)}}},r),[t._v(" ❌ Delete Note ❌ ")])]}}],null,!0),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[o("v-card",[o("v-card-title",{staticClass:"text-h5 grey lighten-2"},[t._v(" Delete confirmation ")]),o("v-card-text",[o("br"),t._v(" Are you sure you want to delete the Note? ")]),o("v-divider"),o("v-card-actions",[o("v-spacer"),o("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Cancel ")]),o("v-btn",{attrs:{color:"error",text:""},on:{click:function(e){t.dialog=!1,t.deleteCurrentNote()}}},[t._v(" Delete ")])],1)],1)],1)],1)])],1)],1)],1)})),o("v-spacer"),o("v-col",{attrs:{cols:"4"}},[o("v-card",{attrs:{elevation:"20",height:"450"}},[o("v-card-title",[t._v(" Upload / Download / Create ")]),o("v-divider"),o("v-list",[o("v-list-item",[o("v-spacer"),o("input",{staticClass:"mb-2",attrs:{type:"file"},on:{change:t.setFileVariable}})],1),o("v-list-item",[o("v-spacer"),o("v-btn",{attrs:{width:"200",color:"orange",title:"Save your Notes"},on:{click:function(e){return t.importNotesFromFile()}}},[t._v(" Import from File ")])],1),o("v-list-item",[o("v-spacer"),o("v-btn",{attrs:{width:"200",color:"orange",title:"Save your Notes"},on:{click:function(e){return t.exportNotesToFile()}}},[t._v(" Export to File ")])],1),o("v-list-item",[o("v-spacer"),o("v-btn",{attrs:{width:"200",color:"orange",title:"test"},on:{click:function(e){return t.importNotesFromLocalStorage()}}},[t._v(" Import from Storage ")])],1),o("v-list-item",[o("v-spacer"),o("v-btn",{attrs:{width:"200",color:"orange",title:"Save your Notes"},on:{click:function(e){return t.exportNotesToLocalStorage()}}},[t._v(" Export to Storage ")])],1),o("v-list-item",[o("v-spacer"),o("v-btn",{staticClass:"orange mr-1",attrs:{width:"200"},on:{click:function(e){return t.addTodoNote()}}},[t._v("New Note ")])],1),o("v-list-item",[o("v-spacer"),o("v-btn",{staticClass:"orange mr-1",attrs:{width:"200"},on:{click:function(e){return t.undoLastAction()}}},[t._v("Undo Action ")])],1)],1)],1)],1)],2)],1)],1)},i=[],a=o("b85c"),s=(o("fb6a"),o("a434"),o("d3b7"),o("3ca3"),o("ddb0"),o("2b3d"),o("9861"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app-bar",{attrs:{color:"#6A76AB",dark:"","shrink-on-scroll":"",prominent:"",src:"https://picsum.photos/1920/1080?random","fade-img-on-scroll":"","scroll-target":"#scrolling-techniques-3"},scopedSlots:t._u([{key:"img",fn:function(e){var n=e.props;return[o("v-img",t._b({attrs:{gradient:"to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"}},"v-img",n,!1))]}},{key:"extension",fn:function(){return[o("v-tabs",{attrs:{"align-with-title":""}},[o("v-spacer"),o("v-btn",{staticClass:"orange mr-1",on:{click:function(e){return t.addTodoNote()}}},[t._v("New Note ")]),o("v-btn",{staticClass:"orange mr-1",on:{click:function(e){return t.undoLastAction()}}},[t._v("Undo Action ")])],1)]},proxy:!0}])},[o("v-app-bar-nav-icon"),o("v-app-bar-title",[t._v("Todo Notes")]),o("v-spacer"),o("v-btn",{attrs:{icon:""}},[o("v-icon",[t._v("mdi-dots-vertical")])],1)],1)}),c=[],l={setup:function(){},methods:{addTodoNote:function(){this.$emit("add_todo_note")},undoLastAction:function(){this.$emit("undo_last_action")}}},d=l,u=o("2877"),v=o("6544"),p=o.n(v),f=o("40dc"),h=o("5bc1"),m=o("bb78"),N=o("8336"),b=o("132d"),g=o("adda"),y=o("2fa4"),_=o("fe57"),T=Object(u["a"])(d,s,c,!1,null,"18184e06",null),k=T.exports;p()(T,{VAppBar:f["a"],VAppBarNavIcon:h["a"],VAppBarTitle:m["a"],VBtn:N["a"],VIcon:b["a"],VImg:g["a"],VSpacer:y["a"],VTabs:_["a"]});var w={name:"App",components:{Navbar:k},data:function(){return{dialog:!1,todoNotes:[[{value:"1.1 Implement Calculator App",isDone:!0},{value:'1.2 Read a book "Vue.js in action',isDone:!1},{value:"1.3 Learn Nest.js",isDone:!1}],[{value:"2.1 Implement a web store",isDone:!1},{value:'2.2 Read "Thinking Java" ',isDone:!1},{value:'2.3 Read "Gang of Four" ',isDone:!1}]],todoNotesBackup:[],newTodoItems:[],currentNoteIndex:0,file:null}},mounted:function(){localStorage.jsonTodoNotes&&(this.todoNotes=JSON.parse(localStorage.jsonTodoNotes))},watch:{},methods:{addTodoNote:function(){this.todoNotesBackup=this.todoNotes.slice(),this.todoNotes.push([])},setCurrentNote:function(t){this.currentNoteIndex=t,console.log("current noteIndex is "+this.currentNoteIndex)},deleteCurrentNote:function(){this.deleteTodoNote(this.currentNoteIndex),this.currentNoteIndex--},deleteTodoNote:function(t){this.todoNotesBackup=this.todoNotes.slice(),this.todoNotes.splice(t,1)},removeTodoItem:function(t,e){this.todoNotesBackup=this.todoNotes,this.todoNotes[t].splice(e,1)},undoLastAction:function(){this.todoNotesBackup.length>0&&(this.todoNotes=this.todoNotesBackup.slice())},addTodoItem:function(t){this.newTodoItems[t].length>0&&(this.todoNotes[t].push({value:this.newTodoItems[t],isDone:!1}),this.newTodoItems[t]="")},checkTodoItem:function(t,e){this.todoNotes[t][e].isDone=!this.todoNotes[t][e].isDone},countOpenTasks:function(t){var e,o=0,n=Object(a["a"])(this.todoNotes[t]);try{for(n.s();!(e=n.n()).done;){var r=e.value;r.isDone||o++}}catch(i){n.e(i)}finally{n.f()}return o},setFileVariable:function(t){if(t){var e=t.srcElement.files[0];this.file=e}},isValidTodoNotesList:function(t){if(!t)return!1;if(!Array.isArray(t))return!1;for(var e=0;e<t.length;e++){if(!Array.isArray(t[e]))return!1;for(var o=0;o<t[e].length;o++){if(!Object.prototype.hasOwnProperty.call(t[e][o],"value"))return!1;if("string"!==typeof t[e][o].value)return!1;if(!Object.prototype.hasOwnProperty.call(t[e][o],"isDone"))return!1;if("boolean"!==typeof t[e][o].isDone)return!1}}return!0},importNotesFromFile:function(){var t=this,e=new FileReader;e.onload=function(e){var o=e.target.result;try{var n=JSON.parse(o);t.isValidTodoNotesList(n)?(t.todoNotesBackup=t.todoNotes.slice(),t.todoNotes=n.slice()):alert("The imported file import is NOT VALID !! Choose another file.")}catch(r){alert("\nError when parsing JSON file: \n"+r+"\n\nImport only from JSON files!")}},e.onerror=function(t){console.error("Файл не может быть прочитан! код "+t.target.error.code)},this.file&&e.readAsText(this.file)},exportNotesToFile:function(){var t=JSON.stringify(this.todoNotes),e=new Blob([t],{type:"application/json"});if(window.navigator.msSaveOrOpenBlob)window.navigator.msSaveOrOpenBlob(e,"todo_notes.json");else{var o=document.createElement("a"),n=URL.createObjectURL(e);o.href=n,o.download="todo_notes.json",document.body.appendChild(o),o.click(),setTimeout((function(){document.body.removeChild(o),window.URL.revokeObjectURL(n)}),0)}},importNotesFromLocalStorage:function(){localStorage.jsonTodoNotes&&(this.todoNotes=JSON.parse(localStorage.jsonTodoNotes))},exportNotesToLocalStorage:function(){localStorage.jsonTodoNotes=JSON.stringify(this.todoNotes)}}},O=w,x=(o("7d97"),o("7496")),S=o("b0af"),V=o("99d9"),I=o("62ad"),C=o("a523"),j=o("169a"),A=o("ce7e"),D=o("8860"),L=o("da13"),B=o("f6c4"),F=o("0fd9"),J=o("9c54"),P=o("e0c7"),R=o("8654"),E=Object(u["a"])(O,r,i,!1,null,"6114978c",null),U=E.exports;p()(E,{VApp:x["a"],VBtn:N["a"],VCard:S["a"],VCardActions:V["a"],VCardSubtitle:V["b"],VCardText:V["c"],VCardTitle:V["d"],VCol:I["a"],VContainer:C["a"],VDialog:j["a"],VDivider:A["a"],VList:D["a"],VListItem:L["a"],VMain:B["a"],VRow:F["a"],VSpacer:y["a"],VStepperHeader:J["a"],VSubheader:P["a"],VTextField:R["a"]});var $=o("f309");n["a"].use($["a"]);var M=new $["a"]({});n["a"].config.productionTip=!1,new n["a"]({vuetify:M,render:function(t){return t(U)}}).$mount("#app")},"7d97":function(t,e,o){"use strict";o("7ee1")},"7ee1":function(t,e,o){}});
//# sourceMappingURL=app.2f79b93a.js.map