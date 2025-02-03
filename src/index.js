var num1, num2, ans;

function add(){
    num1=parseInt(document.getElementById("number1").value)
    console.log(num1)
    num2=parseInt(document.getElementById("number2").value)
    console.log(num2)
    ans=num1+num2
    console.log(ans)
    document.getElementById("answer").value=ans
}
function sub(){
    num1=parseInt(document.getElementById("number1").value)
    console.log(num1)
    num2=parseInt(document.getElementById("number2").value)
    console.log(num2)
    ans=num1-num2
    console.log(ans)
    document.getElementById("answer").value=ans
}
function mul(){
    num1=parseInt(document.getElementById("number1").value)
    console.log(num1)
    num2=parseInt(document.getElementById("number2").value)
    console.log(num2)
    ans=num1*num2
    console.log(ans)
    document.getElementById("answer").value=ans
}
function div(){
    num1=parseInt(document.getElementById("number1").value)
    console.log(num1)
    num2=parseInt(document.getElementById("number2").value)
    console.log(num2)
    ans=num1/num2
    console.log(ans)
    document.getElementById("answer").value=ans
}

    
