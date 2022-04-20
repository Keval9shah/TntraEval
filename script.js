
var options="";
for (let i = 0; i < 24; i++) {
  options+="<option value='"+i+":00'>"+i+":00</option>"
}

document.querySelectorAll("select").forEach(element=>{
  if(element.id!="age"){
    element.innerHTML+=options;
  }
});

var configbox=document.getElementById("configuration")
configbox.onchange=()=>{
  let check;
  if(!configbox.checked){
    check=true;
    document.querySelectorAll("select").forEach(element=>{
      if(element.id!="age"){
        element.disabled=true;
      }
    })
  }
  else{
    check=false;
  }
  let inputs=document.querySelectorAll("input");
  for (let i = 4; i < inputs.length; i++) {
    inputs[i].disabled=check;
    inputs[i].checked=!check && inputs[i].checked;
  }
}

document.querySelectorAll("input[type='checkbox']").forEach(element=>{
  if(element.id!="configuration"){
    element.onchange=()=>{
      let cls="."+element.id;
      if(element.checked){
        document.querySelector(cls).disabled=false;
      }
      else{
        document.querySelector(cls).disabled=true;
      }
    }
  }
});


$(document).ready(function() {
  $("#basic-form").validate({
    errorClass: "error fail-alert",
    validClass: "valid success-alert",
    rules: {
      firstName : {
        required: true,
        minlength: 3,
        regex:/^[A-Za-z\s]{3,15}$/,
      },
      lastName : {
        required: true,
        minlength: 3,
        regex:/^[A-Za-z\s]{3,15}$/,
      },
      email: {
        required: true,
        email: true,
      },
      monday:{
        required:{
          depends:function(elm){
            let cls="#"+elm.name;
            return $(cls).is(":checked");
          }
        }
      },
      tuesday:{
        required:{
          depends:function(elm){
            let cls="#"+elm.name;
            return $(cls).is(":checked");
          }
        }
      },
      wednesday:{
        required:{
          depends:function(elm){
            let cls="#"+elm.name;
            return $(cls).is(":checked");
          }
        }
      },
      thursday:{
        required:{
          depends:function(elm){
            let cls="#"+elm.name;
            return $(cls).is(":checked");
          }
        }
      },
      friday:{
        required:{
          depends:function(elm){
            let cls="#"+elm.name;
            return $(cls).is(":checked");
          }
        }
      },
      saturday:{
        required:{
          depends:function(elm){
            let cls="#"+elm.name;
            return $(cls).is(":checked");
          }
        }
      },
      sunday:{
        required:{
          depends:function(elm){
            let cls="#"+elm.name;
            return $(cls).is(":checked");
          }
        }
      },
    }
  });
});
$.validator.addMethod("regex", function(value, element, regexpr) {          
  return regexpr.test(value);
});
