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
        display.innerText+=e.target.innerText;
    });