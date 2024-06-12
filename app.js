let cart=[];
function Patients(fullName,password,dob,gender,phone,diseases){
    this.fullName=fullName;
    this.password=password;
    this.dob=dob;
    this.gender=gender;
    this.phone=phone;
    this.diseases=diseases;
 };


document.getElementById("patientForm").addEventListener('submit',function(formsection){
    formsection.preventDefault();

    
    let fullName =document.getElementById("fullName").value;
    let password = document.getElementById("password").value;
    let dob = document.getElementById("dob").value;
    let gender = document.getElementById("gender").value;
    let phone = document.getElementById("phone").value;
    let diseases = document.getElementById("diseases").value; 

    let mypatients=new Patients(fullName,password,dob,gender,phone,diseases);
    
    localStorage.setItem("aqw",JSON.stringify(cart));
    cart.push(mypatients);
      let x= localStorage.getItem('aqw');
      

      let mainsection = document.getElementById("mainsection");
      mainsection.innerHTML = `
        <p ><img src="img/hosbital.jpg" ></p>
        <p><strong>Enter your full name:</strong> ${mypatients.fullName}</p>
        <p><strong> your Password :</strong> ${mypatients.password}</p>
        <p><strong> Date of Birth:</strong> ${mypatients.dob}</p>
        <p><strong>your Gender:</strong> ${mypatients.gender}</p>
        <p><strong>Enter your phone:</strong> ${mypatients.phone}</p>
        <p><strong>Chronic Diseases:</strong> ${mypatients.diseases}</p>
        
        
    `;
   
  
  


    





});

