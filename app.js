 /////form values by id
 let fname = document.getElementById("fname");
 let lname = document.getElementById("lname");
 let degree = document.getElementById("degree");
 let subDegree = document.getElementById("sub-degree");
 let DOB = document.getElementById("dob");
 let email = document.getElementById("email");
 let mobile = document.getElementById("mobile");
 let regExp = /^[a-zA-Z0-9]{2,10}$/;
 let regExp1 = /^[a-zA-Z ]{5,10}$/;
 let regEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
 let regMobile = /^[0-9]{10}$/;
 let regDob = /^[0-9]+\-[0-9]+\-[0-9]+$/;

 var selectedRow = null;
 var count = 0;

 function onFormSubmit() {
     var formData = readFormData();



     // insertNewRecord(formData);  
     if (selectedRow == null) {
         insertNewRecord(formData);
     } else {
         updateRecord(formData);
     }
     resetForm();


 }


 fname.addEventListener("keyup", function () {
     checkFirstName(fname);
 });

 lname.addEventListener("keyup", function () {
     checkLastName(lname);
 });

 degree.addEventListener("keyup", function () {
     checkDegree(degree);
 });

 subDegree.addEventListener("keyup", function () {
     checkSubDegree(subDegree);
 });

 DOB.addEventListener("keyup", function () {
     checkDob(DOB);
 });

 email.addEventListener("keyup", function () {
     checkEmail(email);
 });

 mobile.addEventListener("keyup", function () {
     checkMobile(mobile);
 });


 function checkInput() {

     let firstNameEl = checkFirstName(fname);
     let lastNameEl = checkLastName(lname);
     let degreeEl = checkDegree(degree);
     let subDegreeEl = checkSubDegree(subDegree);
     let dobEl = checkDob(DOB);
     let emailEl = checkEmail(email);
     let mobileEl = checkMobile(mobile);


     let isFormValid = (firstNameEl && lastNameEl && degreeEl && subDegreeEl &&
         dobEl && emailEl && mobileEl);
     let subBtn = document.getElementById("sub-btn");
     if (isFormValid) {

         subBtn.disabled = false;
     }
     if (!isFormValid && subBtn.disabled == false) {
         subBtn.disabled = true;
     }
 }

 function checkFirstName(fname) {
     message = document.getElementById("fmsg");
     if (!fname.value) {
         setErrorFor(fname, message);
         return false;
     } else if (regExp.test(fname.value)) {
         setSuccessFor(fname, message);
         return true;
     } else {
         setErrorFor(fname, message);
         return false;
     }
 }

 function checkDob(DOB) {
     message = document.getElementById("dobMsg");
     if (!DOB.value) {
         setErrorFor(DOB, message);
         return false;
     } else if (regDob.test(DOB.value)) {
         setSuccessFor(DOB, message);
         return true;
     } else {
         setErrorFor(DOB, message);
         return false;
     }
 }

 function checkLastName(lname) {
     message = document.getElementById("lmsg");
     if (!lname.value) {
         setErrorFor(lname, message);
         return false;
     } else if (regExp.test(lname.value)) {
         setSuccessFor(lname, message);
         return true;
     } else {
         setErrorFor(lname, message);
         return false;
     }
 }

 function checkDegree(degree) {
     message = document.getElementById("dmsg");
     if (!degree.value) {
         setErrorFor(degree, message);
         return false;
     } else if (regExp1.test(degree.value)) {
         setSuccessFor(degree, message);
         return true;
     } else {
         setErrorFor(degree, message);
         return false;
     }
 }

 function checkSubDegree(subDegree) {
     message = document.getElementById('sdmsg');
     if (!subDegree.value) {
         setErrorFor(subDegree, message);
         return false;
     } else if (regExp1.test(subDegree.value)) {
         setSuccessFor(subDegree, message);
         return true;
     } else {
         setErrorFor(subDegree, message);
         return false;
     }
 }

 function checkEmail(email) {
     message = document.getElementById("emsg");
     if (!email.value) {
         setErrorFor(email, message);
         return false;
     } else if (regEmail.test(email.value)) {
         setSuccessFor(email, message);
         return true;
     } else {
         setErrorFor(email, message);
         return false;
     }
 }

 function checkMobile(mobile) {
     message = document.getElementById("mmsg");
     if (!mobile.value) {
         setErrorFor(mobile, message);
         return false;
     } else if (regMobile.test(mobile.value)) {
         setSuccessFor(mobile, message);
         return true;
     } else {
         setErrorFor(mobile, message);
         return false;
     }
 }

 function setErrorFor(input, message) {
     message.innerText = `enter a valid ${input.placeholder}`;
     input.classList.add("error");
 }

 function setSuccessFor(input, message) {
     input.classList.add("success");
     input.classList.remove("error");
     message.innerText = "";
 }


 function readFormData() {
     var formData = {
         firstName: document.getElementById("fname").value,
         lastName: document.getElementById("lname").value,
         Degree: document.getElementById("degree").value,
         SubDegree: document.getElementById("sub-degree").value,
         DOB: document.getElementById("dob").value,
         email: document.getElementById("email").value,
         mobile: document.getElementById("mobile").value,
     };
     return formData;
 }

 function rand() {
     return count = count + 1;
 }

 function insertNewRecord(data) {
     var table = document.getElementById("studentList").getElementsByTagName('tbody')[0];
     var newRow = table.insertRow(table.length);
     //studentID
     cell0 = newRow.insertCell(0);
     cell0.innerHTML = rand();

     //student values
     cell1 = newRow.insertCell(1);
     cell1.innerHTML = data.firstName;

     cell2 = newRow.insertCell(2);
     cell2.innerHTML = data.lastName;

     cell3 = newRow.insertCell(3);
     cell3.innerHTML = data.Degree;

     cell4 = newRow.insertCell(4);
     cell4.innerHTML = data.SubDegree;

     cell5 = newRow.insertCell(5);
     cell5.innerHTML = data.DOB;

     cell6 = newRow.insertCell(6);
     cell6.innerHTML = data.email;

     cell7 = newRow.insertCell(7);
     cell7.innerHTML = data.mobile;

     cell8 = newRow.insertCell(8);
     cell8.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                        <a onClick ="onDelete(this)">Delete</a>`;
 }

 //resetform values

 function resetForm() {
     let fName = document.getElementById("fname");
     fName.value = "";
     fName.classList.remove("success");

     let lName = document.getElementById("lname");
     lName.value = "";
     lName.classList.remove("success");

     let degreeEl = document.getElementById("degree");
     degreeEl.value = "";
     degreeEl.classList.remove("success");

     let subDegreeEl = document.getElementById("sub-degree");
     subDegreeEl.value = "";
     subDegreeEl.classList.remove("success");

     let dobEl = document.getElementById("dob");
     dobEl.value = "";
     dobEl.classList.remove("success");

     let emailEl = document.getElementById("email");
     emailEl.value = "";
     emailEl.classList.remove("success");

     let mobileEl = document.getElementById("mobile");
     mobileEl.value = "";
     mobileEl.classList.remove("success");

     let subBtn = document.getElementById("sub-btn");
     subBtn.disabled = true;

     selectedRow = null;

 }

 function onEdit(td) {
     selectedRow = td.parentElement.parentElement;
     document.getElementById("fname").value = selectedRow.cells[1].innerHTML;
     document.getElementById("lname").value = selectedRow.cells[2].innerHTML;
     document.getElementById("degree").value = selectedRow.cells[3].innerHTML;
     document.getElementById("sub-degree").value = selectedRow.cells[4].innerHTML;
     document.getElementById("dob").value = selectedRow.cells[5].innerHTML;
     document.getElementById("email").value = selectedRow.cells[6].innerHTML;
     document.getElementById("mobile").value = selectedRow.cells[7].innerHTML;
 }

 function updateRecord(formData) {
     selectedRow.cells[1].innerHTML = formData.firstName;
     selectedRow.cells[2].innerHTML = formData.lastName;
     selectedRow.cells[3].innerHTML = formData.Degree;
     selectedRow.cells[4].innerHTML = formData.SubDegree;
     selectedRow.cells[5].innerHTML = formData.DOB;
     selectedRow.cells[6].innerHTML = formData.email;
     selectedRow.cells[7].innerHTML = formData.mobile;
 }

 function onDelete(td) {
     if (confirm('Are you sure to delete this record?')) {
         row = td.parentElement.parentElement;
         document.getElementById("studentList").deleteRow(row.rowIndex);
         resetForm();
     }
 }