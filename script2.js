// BMW
function BMWSedan() {
  function start() {
    console.log('BMW-Sedan..');
  }

  return {
    start
  };
}

function BMWHatchback() {
  function start() {
    console.log('BMW-Hatchback');
  }

  return {
    start
  };
}

function BMWCoupe() {
  function start() {
    console.log('BMW-Coupe');
  }

  return {
    start
  };
}

function BMWFactory() {
  return {
    createSedan: BMWSedan,
    createHatchback: BMWHatchback,
    createCoupe: BMWCoupe
  }
}

//TOYOTA
function ToyotaSedan() {
  function start() {
    console.log('Toyota-Sedan..');
  }

  return {
    start
  };
}

function ToyotaHatchback() {
  function start() {
    console.log('Toyota-Hatchback');
  }

  return {
    start
  };
}

function ToyotaCoupe() {
  function start() {
    console.log('Toyota-Coupe');
  }

  return {
    start
  };
}

function ToyotaFactory() {
  return {
    createSedan: ToyotaSedan,
    createHatchback: ToyotaHatchback,
    createCoupe: ToyotaCoupe
  }
}

//FORD
function FordSedan() {
  function start() {
    console.log('Ford-Sedan..');
  }

  return {
    start
  };
}

function FordHatchback() {
  function start() {
    console.log('Ford-Hatchback');
  }

  return {
    start
  };
}

function FordCoupe() {
  function start() {
    console.log('Ford-Coupe');
  }

  return {
    start
  };
}

function FordFactory() {
  return {
    createSedan: FordSedan,
    createHatchback: FordHatchback,
    createCoupe: FordCoupe
  }
}
//Suzuki
function SuzukiSedan() {
  function start() {
    console.log('Suzuki-Sedan..');
  }

  return {
    start
  };
}

function SuzukiHatchback() {
  function start() {
    console.log('Suzuki-Hatchback');
  }

  return {
    start
  };
}

function SuzukiCoupe() {
  function start() {
    console.log('Suzuki-Coupe');
  }

  return {
    start
  };
}

function SuzukiFactory() {
  return {
    createSedan: SuzukiSedan,
    createHatchback: SuzukiHatchback,
    createCoupe: SuzukiCoupe
  }
}



// Abstract Factory
// function CarFactoryProducer(brand) {
//   switch (brand) {
//     case 'BMW':
//       return BMWFactory();
//     case 'Toyota':
//       return ToyotaFactory();
//     case 'Ford':
//       return FordFactory();
//   }
// }

// const carFactory = CarFactoryProducer('Ford');

// carFactory.createSedan().start();
// carFactory.createHatchback().start();
// carFactory.createCoupe().start();

function CarFactoryProducer() {
  const brands = {};

  function registerCarBrand(brand, carFatory) {
    const sedan = carFatory.createSedan;
    const hatchback = carFatory.createHatchback;
    const coupe = carFatory.createCoupe;

    if (sedan && hatchback && coupe) {
      brands[brand] = carFatory;
    }
  }

  function getCarFactory(brand) {
    const carFactory = brands[brand];
    return carFactory || null;
  }

  return {
    getCarFactory,
    registerCarBrand
  }
}

const carFactoryProducer = CarFactoryProducer();

carFactoryProducer.registerCarBrand('BMW', BMWFactory());
carFactoryProducer.registerCarBrand('Toyota', ToyotaFactory());
carFactoryProducer.registerCarBrand('Ford', FordFactory());
carFactoryProducer.registerCarBrand('Suzuki', SuzukiFactory());

const carFactory = carFactoryProducer.getCarFactory('Suzuki');

carFactory.createSedan().start();
carFactory.createHatchback().start();
carFactory.createCoupe().start();