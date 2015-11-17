/*
Create a calculator object exhibiting the following behavior

var calculator = ...

calculator.add(100)
calculator.subtract(50);
calculator.divide(2)
calculator.multiply(10)
calculator.getResult() // => 250

*/

function getCalculator(){
    var result = 0;
    return {
        add : function(n){
            result += n;
        },
        subtract : function(n){
            result -= n;
        },
        divide : function(n){
            result /= n;
        },
        multiply : function(n){
            result *= n;
        },
        getResult : function(){
            return result;
        }
    }
}

var calculator = getCalculator();
