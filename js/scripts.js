var leap=parseInt(prompt("Enter the year"));
if (leap  %4 ==0 && leap %100==0)  {
     if (leap % 400==0){
          console.log("It's a leap year");
     }else{
          console.log ("It's not a leap year");
     }
} else if(leap %4==0 ){
     console.log("it's a leap year");
} else {
     console.log("it's not a leap year");
}