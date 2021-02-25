
$( function() {
    $( "#Checkin" ).datepicker({ minDate: -20, maxDate: "+1M +15D" });
    $( "#Checkout" ).datepicker({ minDate: -20, maxDate: "+1M +15D" });

    setInterval(function(){
        
        $( "#imageslide" ).hide("slide", { direction: "left" }, 1000).show("slide", { direction: "right" }, 1000);
    
    }, 3000);

   

});


function IsValidEmail(email) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        if (reg.test(email.value) == false) 
        {
            
            return false;
        }
       
        return true;

};

function phonenumber(inputtxt)
{
  var phoneno = /^\d{10}$/;
  if((inputtxt.value.match(phoneno)))
    {
      return true;
        }
      else
        {
        alert("message");
        return false;
        }
};

    function validateform()
    {
        
    debugger;
    
    var fname = document.getElementById("fname");
    var add1 = document.getElementById("add1");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone"); 
    var City = document.getElementById("City");
    var State = document.getElementById("State");

    var Pincode = document.getElementById("Pincode");
    var Checkin = document.getElementById("Checkin");
    var Checkintime = document.getElementById("Checkintime");
    var Checkout = document.getElementById("Checkout");
    var Room_Prefrence = document.getElementsByName("Room-Prefrence");
    var fever = document.getElementsByName("fever");
    var Chillis = document.getElementsByName("Chillis");
    var Cough = document.getElementsByName("Cough");
    var breath = document.getElementsByName("breath");

    //var fname = document.getElementById("fname").value;

    if(fname.value=="")
    {
        document.getElementById("fname-error").innerHTML="First Name is required";
        fname.style.border = "1px solid red";
        fname.scrollIntoView();
        return false;
    }
    else
    {
        document.getElementById("fname-error").innerHTML="";
        fname.style.border = "0px solid";
    }
    if(add1.value=="")
    {
        document.getElementById("Address-error").innerHTML="Address can not blank";
        add1.style.border = "1px solid red";
        fname.scrollIntoView();
        return false;
    }
    else
    {
        document.getElementById("Address-error").innerHTML="";
        add1.style.border = "0px solid red";
    }
    if(email.value=="")
    {
        document.getElementById("email-error").innerHTML="Email is required for contact";
        email.style.border = "1px solid red";
        fname.scrollIntoView();
        return false;
    }
    else
    {   
        if (IsValidEmail(email)) {
            
            document.getElementById("email-error").innerHTML="";
            add1.style.border = "0px solid red";
            
        }
        else {
            
           

            document.getElementById("email-error").innerHTML="You have entered an invalid email address!";
            email.style.border = "1px solid red";
            fname.scrollIntoView();
            return (false)
           
           
        }  
                
    }
    if(phone.value=="")
    {
        document.getElementById("email-error").innerHTML="Cell is required for contact";
        phone.style.border = "1px solid red";
        fname.scrollIntoView();
        return false;
    }
    else
    {
        
        
        if (phonenumber(phone)) {
            
            document.getElementById("email-error").innerHTML="";
            phone.style.border = "0px solid red";
            
        }
        else {
            
           

            document.getElementById("email-error").innerHTML="You have entered an invalid cell number";
            phone.style.border = "1px solid red";
            fname.scrollIntoView();
            return (false)
           
           
        }

    }
    

    if(City.value=="")
    {
        document.getElementById("citytopin-error").innerHTML="City Required";
        City.style.border = "1px solid red";
        fname.scrollIntoView();
        return false;
    }
    else
    {
        document.getElementById("citytopin-error").innerHTML="";
        City.style.border = "0px solid red";
    }
    if(State.value=="")
    {
        document.getElementById("citytopin-error").innerHTML="State Required";
        State.style.border = "1px solid red";
        fname.scrollIntoView();
        return false;
    }
    else
    {
        document.getElementById("citytopin-error").innerHTML="";
        State.style.border = "0px solid red";
    }
    if(Pincode.value=="")
    {
        document.getElementById("citytopin-error").innerHTML="Pincode Required";
        Pincode.style.border = "1px solid red";
        fname.scrollIntoView();
        return false;
    }
    else
    {
        document.getElementById("citytopin-error").innerHTML="";
        Pincode.style.border = "0px solid red";
    }
    if(Checkin.value=="")
    {
        document.getElementById("Date-error").innerHTML="Please select Checkin date";
        Checkin.style.border = "1px solid red";
        fname.scrollIntoView();
        return false;
    }
    else
    {
        document.getElementById("Date-error").innerHTML="";
        Checkin.style.border = "0px solid red";
    }
    if(Checkout.value=="")
    {
        document.getElementById("Date-error").innerHTML="please select check-out date";
        Checkout.style.border = "1px solid red";
        fname.scrollIntoView();
        return false;
    }
    else
    {
        document.getElementById("Date-error").innerHTML="";
        Checkout.style.border = "0px solid red";
    }
    if((Room_Prefrence[0].checked == false) && (Room_Prefrence[1].checked == false) &&(Room_Prefrence[2].checked == false))
    {
        document.getElementById("Room-error").innerHTML="Select Room Preference";
        fname.scrollIntoView();
        return false;
    }
    else
    {
        document.getElementById("Room-error").innerHTML="";
    }
    if(fever[0].checked==false && breath[1].checked==false)
    {
        document.getElementById("fever-error").innerHTML="Select Yes/No";
        return false;
    }
    else
    {
        document.getElementById("fever-error").innerHTML="";
    }
    if(Chillis[0].checked==false && breath[1].checked==false)
    {
        document.getElementById("Chillis-error").innerHTML="Select Yes/No";
        return false;
    }
    else
    {
        document.getElementById("Chillis-error").innerHTML="";
    }
    if(Cough[0].checked==false && breath[1].checked==false)
    {
        document.getElementById("Cough-error").innerHTML="Select Yes/No";
        return false;
    }
    else
    {
        document.getElementById("Cough-error").innerHTML="";
    }
    if(breath[0].checked==false && breath[1].checked==false)
    {
        document.getElementById("breath-error").innerHTML="Select Yes/No";
        return false;
    }
    else
    {
        document.getElementById("breath-error").innerHTML="";
    }
   
    }

