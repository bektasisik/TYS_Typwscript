(()=>{"use strict";var e={674:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Attendance=void 0,t.Attendance=class{constructor(e,t){this.date=new Date,this.today=this.date.getDate()+"/"+(this.date.getMonth()+1)+"/"+this.date.getFullYear()+" "+this.date.getHours()+":"+this.date.getMinutes()+":"+this.date.getSeconds(),this.id=e,this.prayerTime=t}showInfoAttendance(){console.log(this.id+" "+this.prayerTime+" "+this.today)}}},406:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Student=void 0,t.Student=class{constructor(e,t,n){this.id=e,this.name=t,this.surname=n,this.absent=0}increaseAbsent(){this.absent=this.absent+1}setName(e){this.name=e}setSurname(e){this.surname=e}showInfoStudent(){console.log(this.name+" "+this.surname+" "+this.absent)}}},669:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.StudentAttendance=void 0,t.StudentAttendance=class{constructor(e,t,n){this.student=e,this.attendance=t,this.isAbsence=n}getAttendance(){return this.attendance}getStudent(){return this.student}getIsAbsenceToString(e){return e?"Var":"Yok"}showInfoStudentAttendance(){console.log(this.student+" "+this.attendance+" "+this.getIsAbsenceToString)}}},711:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.AttendanceService=void 0;const d=n(674),s=n(669);t.AttendanceService=class{constructor(){this.attendances=[],this.studentAttendances=[],this.sequence=1}getAttendanceList(){return this.attendances}getAttendance(e){return this.attendances.filter((t=>t.id===e))[0]}getStudentAttendances(){return this.studentAttendances}getAttendancesByAttendanceId(e){return this.studentAttendances.filter((t=>t.getAttendance().id===e))}getAttendancesByStudentId(e){return this.studentAttendances.filter((t=>t.getStudent().id===e))}takeAttendance(e,t){const n=new d.Attendance(this.sequence++,e);this.attendances.push(n),t.forEach(((e,t)=>{const d=new s.StudentAttendance(t,n,e);e||t.increaseAbsent(),this.studentAttendances.push(d)}))}}},287:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.StudentService=void 0;const d=n(406);t.StudentService=class{constructor(){this._students=[],this._sequence=1,this.addStudent("Ahmet","Yılmaz"),this.addStudent("Mehmet","Yılmaz"),this.addStudent("Ali","Yılmaz"),this.addStudent("Veli","Yılmaz")}addStudent(e,t){const n=new d.Student(this._sequence++,e,t);this._students.push(n)}getStudents(){return this._students}getStudent(e){return this._students.filter((t=>t.id===e))[0]}updateStudent(e,t,n){const d=this.getStudent(e);d.name=t,d.surname=n}deleteStudent(e){this._students=this._students.filter((t=>t.id!==e))}}}},t={};function n(d){var s=t[d];if(void 0!==s)return s.exports;var a=t[d]={exports:{}};return e[d](a,a.exports,n),a.exports}(()=>{const e=n(287),t=n(711),d=new e.StudentService,s=new t.AttendanceService,a=document.getElementById("addStudentButton"),i=document.getElementById("updateStudentButton"),c=document.getElementById("takeAttendanceButton"),u=document.getElementById("nameInput"),r=document.getElementById("surnameInput"),l=document.getElementById("selectPrayerTime"),o=document.getElementsByName("selectAbsence"),m=(document.getElementById("selectListWithAttendanceId"),document.getElementById("mySelectStudentId"),document.getElementById("studentListBody")),h=document.getElementById("takeAttendanceBody");let p;function A(){m.innerHTML="",d.getStudents().forEach((e=>{const t=document.createElement("tr"),n=document.createElement("td"),s=document.createElement("td"),c=document.createElement("td"),l=document.createElement("td"),o=document.createElement("td"),h=document.createElement("td"),g=document.createElement("td"),S=document.createElement("button"),b=document.createElement("button");n.innerHTML=e.id.toString(),s.innerText=e.name,c.innerText=e.surname,l.innerText=e.absent.toString(),S.setAttribute("class","btn btn-danger"),S.setAttribute("id","deleteButton"),S.setAttribute("data-id",e.id.toString()),S.innerHTML='<i class="fas fa-trash-alt"></i>',b.setAttribute("class","btn btn-primary"),b.setAttribute("id","updateButton"),b.setAttribute("data-id",e.id.toString()),b.innerHTML='<i class="fa-solid fa-edit"></i>',o.appendChild(S),h.appendChild(b),t.appendChild(n),t.appendChild(s),t.appendChild(c),t.appendChild(l),g.appendChild(o),g.appendChild(h),g.setAttribute("class","d-flex justify-content-around"),t.appendChild(g),m.appendChild(t),S.addEventListener("click",(()=>{d.deleteStudent(Number(S.dataset.id)),A()})),b.addEventListener("click",(()=>{p=e,u.value=p.name,r.value=p.surname,a.style.display="none",i.style.display="block",i.setAttribute("data-id",p.id.toString())}))})),h.innerHTML="",d.getStudents().forEach((e=>{const t=document.createElement("tr"),n=document.createElement("td"),d=document.createElement("td"),s=document.createElement("td"),a=document.createElement("td"),i=document.createElement("select"),c=document.createElement("option"),u=document.createElement("option");n.innerHTML=e.id.toString(),d.innerText=e.name,s.innerText=e.surname,i.setAttribute("class","form-select"),i.setAttribute("name","selectAbsence"),i.setAttribute("aria-label","select example"),c.setAttribute("value","+"),u.setAttribute("value","-"),c.innerText="+",u.innerText="-",i.appendChild(c),i.appendChild(u),a.appendChild(i),t.appendChild(n),t.appendChild(d),t.appendChild(s),t.appendChild(a),h.appendChild(t)}))}document.getElementById("tbodyListForAttendance"),A(),a.addEventListener("click",(e=>{console.log("Ekleme"),d.addStudent(u.value,r.value),u.value="",r.value="",A(),e.preventDefault()})),i.addEventListener("click",(e=>{d.updateStudent(p.id,u.value,r.value),u.value="",r.value="",A(),a.style.display="block",i.style.display="none",e.preventDefault()})),c.addEventListener("click",(e=>{const t=new Map;d.getStudents().forEach(((e,n)=>{t.set(e,"+"===o[n].value)})),s.takeAttendance(l.value,t),console.log(s.getAttendanceList()),A(),function(){const e=s.getAttendanceList(),t=document.getElementById("selectListWithAttendanceId");t.innerHTML="";const n=document.createElement("option");n.setAttribute("disabled","disabled"),n.innerText="Lütfen Listelemek İstedğiniz Vakti Seçiniz...",t.appendChild(n),e.forEach((e=>{const n=document.createElement("option");n.setAttribute("value",e.id.toString()),n.innerText=e.today+" "+e.prayerTime,t.appendChild(n)}))}(),e.preventDefault()}))})()})();