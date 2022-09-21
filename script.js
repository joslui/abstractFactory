function Employee(name) {
  this.name = name;

  this.say = function() {
    console.log('Im an employee ' + name);
  }
}

function EmployeeFactory() {
  this.create = function (name) {
    return new Employee(name);
  };
}

function Vendor(name) {
  this.name = name;

  this.say = function () {
    console.log('Im a vendor ' + name);
  }
}

function VendorFactory() {
  this.create = function(name) {
    return new Vendor(name);
  }
}
(function() {
  var persons = [];
  var employeeFactory = new EmployeeFactory();


  persons.push(employeeFactory.create('Jose Luis'));
  persons.push(employeeFactory.create('Mora Itachi'));


  persons.forEach(person => {
    person.say();
  });
})();