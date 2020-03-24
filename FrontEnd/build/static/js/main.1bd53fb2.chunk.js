(this["webpackJsonpreact-telephone-directory"]=this["webpackJsonpreact-telephone-directory"]||[]).push([[0],{18:function(e,t,n){e.exports=n(41)},23:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),u=n(12),o=n.n(u),c=(n(23),n(13)),s=n(14),l=n(16),i=n(15),m=n(17),d=function(e){var t=e.personList,n=e.buttonHandlerFactory,a=t.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.number),r.a.createElement("td",null,function(e){return r.a.createElement("form",{onSubmit:n(e)},r.a.createElement("button",{type:"submit"},"remove"))}(e)))}));return r.a.createElement("table",null,r.a.createElement("tbody",null,a))},p=function(e){var t=e.newName,n=e.onNameChange,a=e.newNumber,u=e.onNumberChange,o=e.addPerson;return r.a.createElement("form",{onSubmit:o},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:t,onChange:n})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:a,onChange:u})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},f=n(2),h=n.n(f),b=function(){return h.a.get("/api/persons").then((function(e){return e.data}))},N=function(e){return h.a.post("/api/persons",e).then((function(e){return e.data}))},v=function(e){return h.a.delete("".concat("/api/persons","/").concat(e.id))},w=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(i.a)(t).call(this,e))).handleNewName=function(e){return n.setState({newName:e.target.value})},n.handleNewNumber=function(e){return n.setState({newNumber:e.target.value})},n.addPerson=function(e){if(e.preventDefault(),!n.preventDuplicate()){var t={name:n.state.newName,number:n.state.newNumber};N(t).then((function(e){n.setState({persons:n.state.persons.concat(e),newName:"",newNumber:""})})).catch((function(e){alert(e.response.data.error)}))}},n.preventDuplicate=function(){var e=n.state.persons.map((function(e){return e.name})).includes(n.state.newName);return e&&alert("Name '".concat(n.state.newName,"' already exists!")),e},n.removePerson=function(e){return function(t){t.preventDefault(),window.confirm("Do you really want to remove ".concat(e.name,"?"))&&v(e).then((function(){n.setState({persons:n.state.persons.filter((function(t){return e.id!==t.id}))})}))}},n.state={persons:[],newName:"",newNumber:""},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;b().then((function(t){e.setState({persons:t})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Directory"),r.a.createElement(p,{newName:this.state.newName,onNameChange:this.handleNewName,newNumber:this.state.newNumber,onNumberChange:this.handleNewNumber,addPerson:this.addPerson}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(d,{personList:this.state.persons,buttonHandlerFactory:this.removePerson}))}}]),t}(r.a.Component);o.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.1bd53fb2.chunk.js.map