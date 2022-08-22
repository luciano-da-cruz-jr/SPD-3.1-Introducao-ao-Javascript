const elementSub = document.getElementById("subtrair");
const elementAdd = document.getElementById("adicionar");
var currentNumberWrapper = document.getElementById("currentNumber")
var currentNumber = 0;

elementSub.addEventListener("click",subtrair);
elementAdd.addEventListener("click",adicionar)

function adicionar()
{
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;

    if(currentNumber > -1)
    {
        currentNumberWrapper.style.color = 'black';
    }
}

function subtrair()
{
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;

    if(currentNumber < 0)
    {
        currentNumberWrapper.style.color = 'red';
    }
}

