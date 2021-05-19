
//function get(){
  //  var a=5;
  //  var b=a; 
// var c= Math.random(b);
//// var d= Math.floor(c);
//// console.log(c);
// document.getElementById("demo").innerHTML=c;
//}

function get(){
    document.getElementById("one").style.visibility="hidden";
    document.getElementById("two").style.visibility="visible";
    document.getElementById("three").style.visibility="visible";
    document.getElementById("four").style.visibility="visible";
    document.getElementById("five").style.visibility="visible";
    document.getElementById("six").style.visibility="visible";
    document.getElementById("seven").style.visibility="visible";
    document.getElementById("eight").style.visibility="visible";
    document.getElementById("nine").style.visibility="visible";
}
    function get1(){
        document.getElementById("one").style.visibility="visible";
        document.getElementById("two").style.visibility="hidden";
        document.getElementById("three").style.visibility="visible";
        document.getElementById("four").style.visibility="visible";
        document.getElementById("five").style.visibility="visible";
        document.getElementById("six").style.visibility="visible";
        document.getElementById("seven").style.visibility="visible";
        document.getElementById("eight").style.visibility="visible";
        document.getElementById("nine").style.visibility="visible";
    

    }
    function get2(){
        document.getElementById("one").style.visibility="visible";
        document.getElementById("two").style.visibility="visible";
        document.getElementById("three").style.visibility="hidden";
        document.getElementById("four").style.visibility="visible";
        document.getElementById("five").style.visibility="visible";
        document.getElementById("six").style.visibility="visible";
        document.getElementById("seven").style.visibility="visible";
        document.getElementById("eight").style.visibility="visible";
        document.getElementById("nine").style.visibility="visible";
    
    }
    function get3(){
        document.getElementById("one").style.visibility="visible";
        document.getElementById("two").style.visibility="visible";
        document.getElementById("three").style.visibility="visible";
        document.getElementById("four").style.visibility="hidden";
        document.getElementById("five").style.visibility="visible";
        document.getElementById("six").style.visibility="visible";
        document.getElementById("seven").style.visibility="visible";
        document.getElementById("eight").style.visibility="visible";
        document.getElementById("nine").style.visibility="visible";
    
    }
    function get4(){
        document.getElementById("one").style.visibility="visible";
        document.getElementById("two").style.visibility="visible";
        document.getElementById("three").style.visibility="visible";
        document.getElementById("four").style.visibility="visible";
        document.getElementById("five").style.visibility="hidden";
        document.getElementById("six").style.visibility="visible";
        document.getElementById("seven").style.visibility="visible";
        document.getElementById("eight").style.visibility="visible";
        document.getElementById("nine").style.visibility="visible";
        }
    function get5(){
        document.getElementById("one").style.visibility="visible";
    document.getElementById("two").style.visibility="visible";
    document.getElementById("three").style.visibility="visible";
    document.getElementById("four").style.visibility="visible";
    document.getElementById("five").style.visibility="visible";
    document.getElementById("six").style.visibility="hidden";
    document.getElementById("seven").style.visibility="visible";
    document.getElementById("eight").style.visibility="visible";
    document.getElementById("nine").style.visibility="visible";

    }
    function get6(){
        document.getElementById("one").style.visibility="visible";
        document.getElementById("two").style.visibility="visible";
        document.getElementById("three").style.visibility="visible";
        document.getElementById("four").style.visibility="visible";
        document.getElementById("five").style.visibility="visible";
        document.getElementById("six").style.visibility="visible";
        document.getElementById("seven").style.visibility="hidden";
        document.getElementById("eight").style.visibility="visible";
        document.getElementById("nine").style.visibility="visible";
    
    }
    function get7(){  
        document.getElementById("one").style.visibility="visible";
        document.getElementById("two").style.visibility="visible";
        document.getElementById("three").style.visibility="visible";
        document.getElementById("four").style.visibility="visible";
        document.getElementById("five").style.visibility="visible";
        document.getElementById("six").style.visibility="visible";
        document.getElementById("seven").style.visibility="visible";
        document.getElementById("eight").style.visibility="hidden";
        document.getElementById("nine").style.visibility="visible";
    
    }
    function get8(){
        document.getElementById("one").style.visibility="visible";
        document.getElementById("two").style.visibility="visible";
        document.getElementById("three").style.visibility="visible";
        document.getElementById("four").style.visibility="visible";
        document.getElementById("five").style.visibility="visible";
        document.getElementById("six").style.visibility="visible";
        document.getElementById("seven").style.visibility="visible";
        document.getElementById("eight").style.visibility="visible";
        document.getElementById("nine").style.visibility="hidden";
    }


    function hash(){
    var names = ["ram","surya","soumika","pramodini","zubair"]
    var a = Math.random()*9;
    var b = Math.floor(a);
    document.getElementById("ran").innerHTML=names[b];

    if(b==0){
        document.getElementById("one").style.visibility="hidden";
    }
    else{
        document.getElementById("one").style.visibility="visible";
    }
if(b==1){
    document.getElementById("two").style.visibility="hidden";

}
else{
    document.getElementById("two").style.visibility="visible";
}
if(b==2){
    document.getElementById("three").style.visibility="hidden";

}
else{
    document.getElementById("three").style.visibility="visible";
}
if(b==3){
    document.getElementById("four").style.visibility="hidden";

}
else{
    document.getElementById("four").style.visibility="visible";
}
if(b==4){
    document.getElementById("five").style.visibility="hidden";

}
else{
    document.getElementById("five").style.visibility="visible";
}
if(b==5){
    document.getElementById("six").style.visibility="hidden";

}
else{
    document.getElementById("six").style.visibility="visible";

}
if(b==6){
    document.getElementById("seven").style.visibility="hidden";

}
else{
    document.getElementById("seven").style.visibility="visible";
}
if(b==7){
    document.getElementById("eight").style.visibility="hidden";

}
else{
    document.getElementById("eight").style.visibility="visible";
}
if(b==8){
    document.getElementById("nine").style.visibility="hidden";

}
else{
    document.getElementById("nine").style.visibility="visible";
}
console.log(b);
}
function validateform()
{
    var name=document.myform.name.value;
    var password=document.myform.password.value;
    if(name==null||name==""){
        alert("Name can't be blank");
        return false;
    }
    else if(password.length<6){
        alert("password must be at least 6 characters long.");
        return false;
    }
}
   function add(){
       document.getElementById("add").style.visibility="hidden";
       
   }
   var a=0;
   fumction Sub(){
       if a=a+1
       document.getElementById("score").innerHTML=a;

   } fumction Sub(){
    if a=a+1
    document.getElementById("score").innerHTML=a;
}

    fumction Sub(){
        if a=a+1
        document.getElementById("score").innerHTML=a;
 