function Employee(id, name, salary){
    //this => new object
    this.id = id;
    this.name = name;
    this.salary = salary;
    //this => returned by default
}

//IF the function is NOT invoked with new,

//Approach-1
function Employee(id, name, salary){
    if (!(this instanceof Employee))
        throw new Error("Error in invocation. Please invoke it with 'new'!")
    //this => new object
    this.id = id;
    this.name = name;
    this.salary = salary;
    //this => returned by default
}

//Approach-2
function Employee(id, name, salary){
    if (!(this instanceof Employee))
        return new Employee(id, name, salary)
    //this => new object
    this.id = id;
    this.name = name;
    this.salary = salary;
    //this => returned by default
}

//Approach-3
function Employee(id, name, salary){
    if (!(this instanceof Employee))
        return JSON.stringify(new Employee(id, name, salary))
    //this => new object
    this.id = id;
    this.name = name;
    this.salary = salary;
    //this => returned by default
}
