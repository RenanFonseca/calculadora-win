class Calc {

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
        console.log(value);
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
        }

    }   
}

window.winCalc = new Calc;


