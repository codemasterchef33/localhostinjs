//DOM Elements

const studentFrom=document.getElementById('studentFrom');
const studentsContainer=document.querySelector('.students');
const nameinput=studentFrom['name'];
const ageinput=studentFrom['email'];

const students=  JSON.parse(localStorage.getItem('students'))  || [];




const add=(name,email)=>{
   students.push({
    name,
    email
   });

   localStorage.setItem('students', JSON.stringify(students));
   return{name,email};
}
//create element
const createstudentelement =({name,email})=>{
const studentdiv=document.createElement('div');
const studentname=document.createElement('h2');
const studentemail=document.createElement('h2');

//fill the content
studentname.innerText='student name:'+name;
studentemail.innerText='student email:'+email;
//Adding to the dom
studentdiv.append(studentname,studentemail);
studentsContainer.appendChild(studentdiv);

};

students.forEach(createstudentelement);


studentFrom.onsubmit=(e)=>{
    e.preventDefault();
    const newStudent=add(nameinput.value,ageinput.value)
    createstudentelement(newStudent)
    nameinput.value=' '
    ageinput.value=' '
}