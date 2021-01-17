class Calc {
    
    _lastOperator = "";
    _lastNumber = "";
    _arrayNumbers = [];

    constructor() {

        console.log("Iniciou");
        this.setDisplay();
        this.initBtnEvents();

        setInterval(()=>{
            this.setDisplay();
        }, 1);
       
        
    }

    initBtnEvents() {

        let btns = document.querySelectorAll(".btn");

        btns.forEach(btn=>{
            btn.addEventListener('click', ()=>{
                this.execBtn(btn.firstChild.nodeValue);
            })
        })            

    }

    addOperation(value) {     
        this._lastOperator = value;

        if(!this.isOperation(value) && !isNaN(value) && this._arrayNumbers.length == 0) {

            this._arrayNumbers.push(value);
            console.log(this._arrayNumbers);
            
        } else if(!isNaN(value) && this.isOperation(this._getLastArray())) {

            this._arrayNumbers.push(value);
            console.log(this._arrayNumbers);

        } else if(!this.isOperation(value)) {
            
            let number = this._getLastNumber().toString();
            let newNumber = number+value;
            
            this._arrayNumbers[this._arrayNumbers.length -1] = parseInt(newNumber);
            console.log(this._arrayNumbers);            
        }

        if(this.isOperation(value) && this._arrayNumbers.length >= 1 && !this.isOperation(this._getLastArray())) {

            this._arrayNumbers.push(value);
            console.log(this._arrayNumbers);

        } else if(this.isOperation(value) && this._arrayNumbers.length >= 1 && this.isOperation(this._getLastArray())) {
            this._changeOperator(value);
            console.log(this._arrayNumbers);
        }

    }

    setDisplay() {

        let display = document.querySelector("#display");
        display.innerHTML = this._arrayNumbers.join("");
    }

    isOperation(value) {

        return (['+', '-', '*', '/'].indexOf(value) > -1);

    }

    _getLastNumber(i = 1) {

        
        if(!this.isOperation(this._arrayNumbers[this._arrayNumbers.length - i])) {
            this._lastNumber = this._arrayNumbers[this._arrayNumbers.length - i]
        } else {
            ++i;
            this._getLastNumber(i);
        }

        return this._lastNumber;
    }

    _getLastArray() {
        return this._arrayNumbers[this._arrayNumbers.length -1];
    }

    _changeOperator(value) {
        if(this.isOperation(value)) {
            this._arrayNumbers[this._arrayNumbers.length - 1] = value;
        }
    }

    _btnCalcular(value) {
        let total = eval(value.join(""));
        this._setResult(total);
        console.log(total);
    }

    _setResult(value) {
        let result = document.querySelector("#result");
        result.innerHTML = value;
    }

    execBtn(value) {

        switch(value) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addOperation(parseInt(value));
                break;  
            
            case '÷':
                this.addOperation('/');
                break;
            
            case 'X':
                this.addOperation('*');
                break;

            case '-':
                this.addOperation('-');
                break;

            case '+':
                this.addOperation('+');
                break;

            case '=':
                this._btnCalcular(this._arrayNumbers);
                break;
            
            default:
                console.log(value);
                break;
        }

    }   
}

window.winCalc = new Calc;