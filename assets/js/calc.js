class Calc {
    
    _lastOperator = "";
    _lastNumber = "";
    _arrayNumbers = [];

    constructor() {

        console.log("Iniciou");
        this.initBtnEvents();
       
        
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
        }

        if(this.isOperation(value) && this._arrayNumbers.length >= 1) {
            this._arrayNumbers.push(value);
        }

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
            
            default:
                console.log(value);
                break;
        }

    }   
}

window.winCalc = new Calc;