function Vehicle(type, model) {
  this.type = type;
  this.model = model;
}

Vehicle.prototype.description = function () {
  return `I am of type "${this.type}" and my model is "${this.model}"`;
}


//MOTORCYCLES
function MotorcycleType1(type, model) {
  Vehicle.call(this, type, model);
}

MotorcycleType1.prototype = Object.create(Vehicle.prototype);
MotorcycleType1.prototype.constructor = MotorcycleType1;

function MotorcycleType2(type, model) {
  Vehicle.call(this, type, model);
}

MotorcycleType2.prototype = Object.create(Vehicle.prototype);
MotorcycleType2.prototype.constructor = MotorcycleType2;



//CARS
function CarType1(type, model) {
  Vehicle.call(this, type, model);
}

CarType1.prototype = Object.create(Vehicle.prototype);
CarType1.prototype.constructor = CarType1;

function CarType2(type, model) {
  Vehicle.call(this, type, model);
}

CarType2.prototype = Object.create(Vehicle.prototype);
CarType2.prototype.constructor = CarType2;

//FACTORIES
//MOTORCYCLE FACTORY

function MotorcycleFactory() {}

MotorcycleFactory.prototype.create = function (model) {
  switch (model) {
    case 'sport':
      return new MotorcycleType1('motorcycle', 'sport');
    case 'motoneta':
      return new MotorcycleType2('motorcycle', 'motoneta');
    default:
      console.log('Model not found');
      return;
  }
}

//CAR FACTORY
function CarFactory() {}

CarFactory.prototype.create = function (model) {
  switch (model) {
    case 'sport':
      return new CarType1('car', 'sport');
    case 'motoneta':
      return new CarType2('car', 'motoneta');
    default:
      console.log('Model not found');
      return;
  }
}


function FactoryProvider() {}

FactoryProvider.prototype.createType = function (type) {
  if (type === 'car') {
    return new CarFactory();
  } else if(type === 'motorcycle') {
    return new MotorcycleFactory();
  } else {
    console.log('Error Type');
  }
}


const superFactory = new FactoryProvider();

const cars = superFactory.createType('car');
const motorcycle = superFactory.createType('motorcycle');


const sportCar = cars.create('sport');
console.log(sportCar.description());

const motonetaCar = cars.create('motoneta');
console.log(motonetaCar.description());

const sportMotorcycle = motorcycle.create('sport');
console.log(sportMotorcycle.description());

const motonetaMotorcycle = motorcycle.create('motoneta');
console.log(motonetaMotorcycle.description());


// var m1 = new MotorcycleType1('motorcycle', 'sport');
// console.log(m1);
// console.log(m1.description());

// var m2 = new MotorcycleType2('motorcycle', 'motoneta');
// console.log(m2);
// console.log(m2.description());

// var c1 = new CarType1('car', 'deportivo');
// console.log(c1);
// console.log(c1.description());

// var c2 = new CarType2('car', 'combi');
// console.log(c2);
// console.log(c2.description());