
function myFunction(){
  var leap=document.getElementById("year").value;
  var result;
  if (leap  %4 ==0 && leap %100==0)  {
    if (leap % 400==0){
         result="It's a leap year";
    }else{
         result="It's not a leap year";
    }
} else if(leap %4==0 ){
       result="it's a leap year";
} else {
    result="it's not a leap year";
}
    alert(result);
}
