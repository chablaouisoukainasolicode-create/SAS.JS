let numbre1 = prompt("entre the firts numbre : ") ;
let operation = prompt("entre the operation symbole(+ ;- ; * ; / ): ") ;
let numbre2 = prompt("entre the second numbre : ");
switch (operation)
{
    case"+":
    alert(+numbre1+ +numbre2);
break;
case"-":
alert(numbre1 - numbre2);
break;
case "*":
    alert(numbre1*numbre2);
    break;
    case"/":
    if (numbre2 !=0) {
        alert( numbre1/numbre2);
        break;
    }else{
        alert("error");
        break;
    }
    default : alert("error : (try again");
}