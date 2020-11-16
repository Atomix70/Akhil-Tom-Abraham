function show(){
    a=document.getElementById("email").value
    console.log(a)
    b=document.getElementById("psw").value
    console.log(b)
    c=document.getElementById("phno").value
    console.log(c)    
    console.log(document.getElementById("cpsw").value)
    // console.log(document.getElementById(email).value)
}

function reveal(){
    document.getElementById("pswvalid").removeAttribute("hidden")
}
function noreveal(){
        document.getElementById("pswvalid").setAttribute("hidden",true)
       
    }


function pswscorecalc()
{
    document.getElementsByClassName("progress-bar")[0].removeAttribute("hidden")

    a=document.getElementById("psw").value;
    console.log(a)
    // console.log(a.match(/[A-Z]/g).length)
    // console.log(a.match(/[a-z]/g).length)
    // console.log(a.match(/\d/g).length)
    score=0
    score1=0
    score2=0
    score3=0
    score4=0
    if(a.length>=8)
    {
        score1=20;
    }
    else score1=5;

    try
    {
        if((a.match(/[A-Z]/g).length)>=1)
    {
        score2=20;
    }
    else score2=2;
    }
    catch(e){}
    
    try{
    if((a.match(/[a-z]/g).length)>1)
    {
        score4=20;
    }
    else{
        score4=0;
    }
    }
    catch(e){}
    try{
    if(a.match(/\d/g).length>=3)
    {
        score3=20
    }
    else if((a.match(/\d/).length<=3)&&(a.match(/\d/).length>=1)){
        score3=10;
    }
    else{
        score3=0;
    }
    }catch(e)
    {
    // pass
    }

    console.log(score1,score2,score3,score4);
    score=(score1+score2+score3+score4)/4;
    document.getElementsByClassName("progress-bar")[0].style.width=score*5+"%";
    if ((score<=20)&&(score>=18))
    {
        document.getElementById("pswstrength").innerHTML="<b>Strong</b>";
        document.getElementById("pswstrength").style.color="green";
        document.getElementsByClassName("progress-bar")[0].style.backgroundColor="green"
       

    }
    else if ((score<18)&&(score>=10))
    {
        document.getElementById("pswstrength").innerHTML="<b>medium</b>"
        document.getElementById("pswstrength").style.color="orange"
        document.getElementsByClassName("progress-bar")[0].style.backgroundColor="orange"
    }
    else
    {
        document.getElementById("pswstrength").innerHTML="<b>poor</b>"
        document.getElementById("pswstrength").style.color="red"
        document.getElementsByClassName("progress-bar")[0].style.backgroundColor="red"

    }
    

}

function pswvalidation(){
    if(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/.test(document.getElementById("psw").value)){
        
          return (true)  
    }
    else{
        alert("not proper password")
        return(false)
    }
}


function pswconf(){
    if(document.getElementById("cpsw").value==document.getElementById("psw").value)
    {
        document.getElementById("pswconf").innerHTML="password matches"
        return (true)
       
    }
    else{
        document.getElementById("pswconf").removeAttribute("hidden")
        console.log(document.getElementById("pswconf").value)
        return (false)
    }

}
function ValidateEmail() 
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(document.getElementById("email").value))
  {
    return (true)
  }
  else{
    alert("You have entered an invalid email address!")
    return (false)
}
}
function phonvalid()
{
    if(document.getElementById("phno")!="")
    {
       if(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(document.getElementById("phno").value))
        {
            return (true)
        }
        else
        {
            alert("not a valid phone format")
            document.getElementById("phno").value=""
            return (false)
        }
    }
}

// if(pswvalidation()&&pswconf()&&ValidateEmail&&phonvalid())
// {
//     document.getElementById("signup").setAttribute("disabled",false)
// }