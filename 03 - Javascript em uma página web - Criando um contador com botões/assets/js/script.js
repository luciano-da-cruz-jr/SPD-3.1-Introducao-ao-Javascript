const elementSub = document.getElementById("subtrair");
const elementAdd = document.getElementById("adicionar");
var currentNumberWrapper = document.getElementById("currentNumber")
var currentNumber = 0;



elementSub.addEventListener("click",subtrair);
elementAdd.addEventListener("click",adicionar)

function adicionar()
{   
    elementSub.disabled = false;

    if(currentNumber >= 0 && currentNumber <= 9)
    {   
        currentNumber = currentNumber + 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }else
    {
        elementAdd.disabled = true;
    }
    
}

function subtrair()
{
    elementAdd.disabled = false;

    if(currentNumber >= 1 && currentNumber <= 10)
    {
        currentNumber = currentNumber - 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }else
    {
        elementSub.disabled = true;
    }
}