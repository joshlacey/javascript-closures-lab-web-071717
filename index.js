const app = "I don't do much."

function bumpCounter() {
  let counter = 0
  function addBump() { counter += 1};
  function getBumps() { return counter };
  return {addBump, getBumps};
}

function createAnimal(animal) {
  function something(device) {
    return {animalType: animal, deadlyDevice: device};
  }
  return something;
}

let sharkCreator = createAnimal('Shark');
let sharkWithFrickinCannon = sharkCreator('Cannon');

let sharkWithFrickinLaserbeam = sharkCreator('Laserbeam');
