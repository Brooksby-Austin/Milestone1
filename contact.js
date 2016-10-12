function isValid(){
  var jemail = document.forms["form"]["email"].value;
  var jcemail = document.forms["form"]["cemail"].value;
  var jfname = document.forms["form"]["firstname"].value;
  var jlname = document.forms["form"]["lastname"].value;

  if(jfname===null||jfname===""
  ||jlname===null||jlname===""
  ||jemail===null||jemail===""
  ||jcemail===null||jcemail==="")
  {
    alert("All fields must be filled");
    return false;
  }
  else if(jemail!==jcemail)
  {
    alert("Confirmation failed, fields not equal");
    return false;
  }

}
