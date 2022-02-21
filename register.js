
console.log("register");


class User{
    //tyhis is the param
        constructor(email, password, first, last, age, address, phone, payment, color){
            this.email=email;
            this.password=password;
            this.fname=first;
            this.lname=last;
            this.age=age;
            this.address=address;
            this.phone=phone;
            this.payment=payment;
            this.color=color;
        }
    
    }
    
    function isValid(user){
        //return false when user is not valid
        //return true when user is valid
        let valid=true;
        //we need to rest the original appearence of the inputs
        //by removing te class alert-error
        $("input").removeClass("alert-error");
        //validation with if statements
        if(user.email.length==0){
            //if we get here it means the email is empty and invalid 
            valid=false;
            $("#txtEmail").addClass("alert-error");
            console.log("Missing email");
        }
        if(user.password.length==0){
            valid=false;
            $("#txtPassword").addClass("alert-error");
            console.log("Missing Password");
        

            //add the validation for the frst and last name.
        }
        return valid;
    
    }
    
    function registerUser(){
        let email= $("#txtEmail").val(); //*check your id on html
        let password=$("#txtPassword").val();
        let first=$("#txtFirst").val();
        let last=$("#txtLast").val();
        let age=$("#txtAge").val();
        let address=$("#txtAddress").val();
        let phone=$("#txtPhone").val();
        let payment=$("#selPayment").val();
        let color=$("#txtColor").val();
    
        let user=new User(email, password, first, last, age, address, phone, payment, color)
        //validate the user
        if(isValid(user)){
            saveUsers(user);//this fn is in storeManager.js
        }
        clearForm();
    
    }

    function clearForm(){
        let email= $("#txtEmail").val();
        let password=$("#txtPassword").val();
        let first=$("#txtFirst").val();
        let last=$("#txtLast").val();
        let age=$("#txtAge").val();
        let address=$("#txtAddress").val();
        let phone=$("#txtPhone").val();
        let payment=$("#selPayment").val();
        let color=$("#txtColor").val();

    }

 
    
    function init(){
        console.log("Init Register");
        //hook events
        $("#btnRegister").click(registerUser);
    }
        
    
    window.onload=init;