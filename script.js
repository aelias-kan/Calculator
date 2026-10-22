const buttonsGrid = document.querySelector('.buttons');
// console.log(buttonsGrid);

let buttons = ['C','del','%','+','7','8','9','-','4','5','6','*','1','2','3','/','0','.','=',];

    for (let i =0; i<buttons.length; i++)
    {
        let newButton = document.createElement('button');
        newButton.style.backgroundColor = 'grey';
        newButton.style.boxSizing = 'border-box';
        newButton.style.border = '1px solid black';
        newButton.innerText= buttons[i];
        newButton.style.flex = `1 1 24%`;
        if (i === buttons.length-1)
        {
        newButton.style.flexBasis = "50%";
        }
        newButton.style.margin = "1px 1px 1px 1px"
        newButton.style.borderRadius = "5px";
        newButton.style.fontSize = "24px";
        buttonsGrid.appendChild(newButton);
    }

    const display = document.querySelector('.display');
    const results = document.querySelector('.result');
    buttonsGrid.addEventListener('click', (e)=> {
    
    const lastChar = display.innerText.slice(-1);
    console.log(lastChar);
    const operators = ['+','-','*','%','/','.']
    const Target = e.target; 
    if (e.target.tagName !== 'BUTTON') {return};
    

    let lastIndex = display.innerText.length-1;
    const currentNumber = display.innerText.split(/[+\-*/%]/).pop();

    if (Target.innerText === "." && currentNumber.includes(".")) {
        return;
    }

    if (Target.innerText === "=")
    {
        const expression = display.innerText;
        results.innerText = expression;
        results.innerText+=' =';
        let expressionArray = expression.match(/\d+\.?\d*|[+\-*\/%]/g);
        expressionArray.forEach((element,index) =>
        {
            if (operators.includes(element))
            {
                let operator = expressionArray[index];
                leftOperand = Number(expressionArray[index-1]);
                rightOperand = Number(expressionArray[index+1]);
                let result;
                switch(operator)
                {
                    case '*':
                        result = leftOperand * rightOperand;
                        expressionArray.splice(index - 1, 3, result);
                        break;
                    case '/':
                         result = leftOperand / rightOperand;
                        expressionArray.splice(index - 1, 3, result);
                        break;
                    case '%':
                        result = leftOperand % rightOperand;
                        expressionArray.splice(index - 1, 3, result);
                        break;
                    case '+':
                        result = leftOperand + rightOperand;
                        expressionArray.splice(index - 1, 3, result);
                        break;
                    case '-':
                        result = leftOperand - rightOperand;
                        expressionArray.splice(index - 1, 3, result);
                        break;
                }
            }

        });
        display.innerText = expressionArray;
    }
    else if(Target.innerText === 'del' || Target.innerText === 'C' )
    {
        if (Target.innerText === "C")
        {
            display.innerText ="";
            results.innerText ="";
        }
        else 
        {
            display.innerText = display.innerText.slice(0,-1);
        }

    }else if (display.innerText[lastIndex] === '+' || display.innerText[lastIndex] === '-' || display.innerText[lastIndex] === '*' || display.innerText[lastIndex] === '/' || display.innerText[lastIndex] === '%' || display.innerText[lastIndex] === '.')
    {
        if (operators.includes(lastChar) && operators.includes(e.target.innerText))
        {
            if(lastChar !== e.target.innerText){
                display.innerText = display.innerText.slice(0,-1);
                display.innerText+=e.target.innerText;
                return;
            }
            else
            {
                return;
            }
        }
                
        if (display.innerText[lastIndex] === '.' && e.target.innerText === ".")
        {
            return;   
        }else
        {         
            display.innerText += e.target.innerText;
        }
    }
    else 
    {
        display.innerText+=e.target.innerText;
    }            
});