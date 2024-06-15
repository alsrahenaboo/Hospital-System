let cart=[];
function Patients(fullName,email,password,dob,gender,phone,diseases){
    this.fullName=fullName;
    this.email = email;
    this.password=password;
    this.dob=dob;
    this.gender=gender;
    this.phone=phone;
    this.diseases=diseases;
 };
 function validate() {
  let password = document.getElementById("password").value;
  let length = document.getElementById("length");
  let number = document.getElementById("number");
  let uper = document.getElementById("uper");
  let cp_char = document.getElementById("cp_char");
  
  if (password.length >= 8) {
      length.style.color = 'green';
  } else {
      length.style.color = 'red';
  }

  if (password.match(/[0-9]/)) {
      number.style.color = 'green';
  } else {
      number.style.color = 'red';
  }

  if (password.match(/[A-Z]/)) {
      uper.style.color = 'green';
  } else {
      uper.style.color = 'red';
  }

  if (password.match(/[!@#$%^&*]/)) {
      cp_char.style.color = 'green';
  } else {
      cp_char.style.color = 'red';
  }
}


document.getElementById("patientForm").addEventListener('submit',function(formsection){
    formsection.preventDefault();

    
    let fullName =document.getElementById("fullName").value;
    let email =document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let dob = document.getElementById("dob").value;
    let gender = document.getElementById("gender").value;
    let phone = document.getElementById("phone").value;
    let diseases = document.getElementById("diseases").value; 



    let errorMsg = document.getElementById("errormass");
    let emailError = document.getElementById("emailError");
    let phoneError = document.getElementById("phoneError");





    if(!/^\S+$/.test(fullName)){
      errorMsg.style.display="block";
      return;

    } else{
      errorMsg.style.display="none";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
      emailError.style.display="block";
      return;
    }else{
      emailError.style.display="none";
    }
    if(!/^07\d{8}$/.test(phone)){
      phoneError.style.display="block";
      return;
    }else{
      phoneError.style.display="none";
    }
    

    let mypatients=new Patients(fullName,email,password,dob,gender,phone,diseases);
    
    cart.push(mypatients);
    
    localStorage.setItem("aqw",JSON.stringify(cart));
      let x= localStorage.getItem('aqw');
      

      let mainsection = document.getElementById("mainsection");
      mainsection.innerHTML = `
        <p ><img src="img/hosbital.jpg" ></p>
        <p><strong>Enter your full name:</strong> ${mypatients.fullName}</p>
        <p><strong>Enter your Email:</strong> ${mypatients.email}</p>
        <p><strong> your Password :</strong> ${mypatients.password}</p>
        <p><strong> Date of Birth:</strong> ${mypatients.dob}</p>
        <p><strong>your Gender:</strong> ${mypatients.gender}</p>
        <p><strong>Enter your phone:</strong> ${mypatients.phone}</p>
        <p><strong>Chronic Diseases:</strong> ${mypatients.diseases}</p>
        
        
    `;
   
  
  


    





});

