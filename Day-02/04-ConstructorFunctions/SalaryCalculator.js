/*

Create a SalaryCalculator class that has the following attributes
    - basic
    - hra
    - da
    - tax
    - salary (initialized with 0)

    - calculate() // => populate the salary with (basic + hra + da) - tax
*/

/*var SalaryCalculator = (function(){
    var calculate = function(){
        var gross = this.basic + this.hra + this.da;
        var net = gross * ((100-this.tax)/100);
        this.salary = net;
    }

    function SalaryCalculator(basic, hra , da, tax){
        this.basic = basic;
        this.hra = hra;
        this.da = da;
        this.tax = tax;
        this.salary = 0;
        this.calculate = calculate;
    }
    return SalaryCalculator;
})();*/

    function SalaryCalculator(basic, hra , da, tax){
        this.basic = basic;
        this.hra = hra;
        this.da = da;
        this.tax = tax;
        this.salary = 0;
    }
    SalaryCalculator.prototype.calculate = function(){
        var gross = this.basic + this.hra + this.da;
        var net = gross * ((100-this.tax)/100);
        this.salary = net;
    }



