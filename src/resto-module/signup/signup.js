// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form 
function validateForm() 
{
    // Retrieving the values of form elements 
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.mobile.value;
    var checkboxes = document.getElementsByName("hobbies[]");
    
	// Defining error variables with a default value
    var nameErr = emailErr = mobileErr = true;
    
    // Validate name
    if(name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }
    
    // Validate email address
    if(email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }
    //Validate password
    var pw = document.getElementById("pswd").value;  
    //check empty password field  
    if(pw == "") {  
       document.getElementById("message").innerHTML = "**Fill the password please!";  
       return false;  
    }  
     
   //minimum password length validation  
    if(pw.length < 8) {  
       document.getElementById("message").innerHTML = "**Password length must be atleast 8 characters";  
       return false;  
    }  
    
  //maximum length of password validation  
    if(pw.length > 15) {  
       document.getElementById("message").innerHTML = "**Password length must not exceed 15 characters";  
       return false;  
    } else {  
       alert("Password is correct");  
    }  
   
    // Validate mobile number
    if(mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid 10 digit mobile number");
        } else{
            printError("mobileErr", "");
            mobileErr = false;
        }
    }

    // Prevent the form from being submitted if there are any errors
    if((nameErr || emailErr || mobileErr ) == true) {
       return false;
    } else {
        // Creating a string from input data for preview
        var dataPreview = "You've entered the following details: \n" +
                          "Full Name: " + name + "\n" +
                          "Email Address: " + email + "\n" +
                          "Mobile Number: " + mobile + "\n" +
                        
        // Display input data in a dialog box before submitting the form
        alert(dataPreview);
    }

}
// Form Validation 

var inputEmail= document.getElementById("email");
localStorage.setItem("email", inputEmail.value);
var storedValue = localStorage.getItem("email");

var inputName= document.getElementById("name");
localStorage.setItem("name", inputEmail.value);
var storedValue = localStorage.getItem("name");


var inputName= document.getElementById("name");
localStorage.setItem("name", inputEmail.value);
var storedValue = localStorage.getItem("name");

var inputName= document.getElementById("password");
localStorage.setItem("password", inputEmail.value);
var storedValue = localStorage.getItem("password");

var inputName= document.getElementById("mobile");
localStorage.setItem("mobile", inputEmail.value);
var storedValue = localStorage.getItem("mobile");


function signup (){
    return (
    <form action="../Sign-in/signin.html" name="contactForm" onsubmit="return validateForm()" method="post">
    <h2>Sign-up to disney+</h2>
    <div class="row">
        <label>Full Name</label>
        <input type="text" name="name"/>
        <div class="error" id="nameErr"></div>
    </div>
    <div class="row">
        <label>Email Address</label>
        <input type="text" name="email"/>
        <div class="error" id="emailErr"></div>
    </div>
    <div class="row">
        <label>Password</label>
        <input type="password" id="pswd" value="" name="password"/>
        <div class="error" id="passwordErr"></div>
    </div>
    <div class="row">
        <label>Mobile Number</label>
        <input type="text" name="mobile" maxlength="10"/>
        <div class="error" id="mobileErr"></div>
    </div>        
    <div class="row">
        <input type="submit" value="Submit"/ > 
    
    </div>
</form>
    );
}