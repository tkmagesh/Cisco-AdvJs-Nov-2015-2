function Employee(id, name, salary){
    this.id = id;
    this.name = name;
    this.salary = salary;
}

function Employee(id, name, salary){
    if (!(this instanceof Employee))
       return new Employee(id, name, salary);
    this.id = id;
    this.name = name;
    this.salary = salary;
}



var getId = function(){
    return this.__id;
}
function Employee(id, name, salary){
    //var _id = id;
    this.__id = id;
    this.name = name;
    this.salary = salary;
    this.getId = getId;
}
