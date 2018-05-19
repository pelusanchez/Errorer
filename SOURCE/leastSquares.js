'use strict';
class leastSquares {
    
    constructor(func){
        this.func_parsed = this.parseFunction(func);
    };

    parseFunction=(a)=>{
        let spl = a.split(/\+/);
        let i=spl.length;
        let parameters = [];
        let functions = [];
        let subSplit;
        let math_functions = "sin|cos|tan|asin|acos|atan|sinh|cosh|tanh|exp".split(/\|/g);
        while(i--){
            if(spl.indexOf(functions))
            subSplit.replace(/sin/g, "Math.sin");
            subSplit.replace(/cos/g, "Math.cos");
            subSplit = spl[i].split(/\*|\//));
        }
    };
    
    /**
     * Function leastSquares
     * @param {string} func : function to fit
     * @param {array} x     : x data
     * @param {array} y     : y data
     */
    leastSquares=function(func, x, y){
        let func = this.split_function(func);
    }
}