const faker = require('faker');
let database = { catches: [] };

let baits = [
  'Crankbaits',
  'Worm',
  'Stick Bait',
  'Corn',
  'Rat-L-Trap Original Crankbait',
  "Cabela's Mean Eye Blade Bait",
];

let fishong_poles = [
  'Daiwa Minispin Spinning Rod',
  'Okuma Celilo Ultra Light Trout Rods',
  'Shakespeare Ugly Stik GX2 Spinning Rod',
  'PLUSINNO Fishing Rod and Reel',
  'Entsport Camo Legend Baitcasting Rod',
  'Shimano Stimula Spin Rod',
  'Tailwater Outfitters Toccoa Fly Rod',
];

let techniques = [
  'Tenkara fishing',
  'Rock fishing',
  'Pitch Fishing',
  'Casting',
  'Bank fishing',
  'Kite fishing',
  'Kontiki Fishing',
];

for (let i = 1; i <= 100; i++) {
  database.catches.push({
    id: i,
    name: faker.name.firstName() + ' ' + faker.name.lastName(),
    equipment: faker.lorem.word,
    bait: baits[faker.random.number({ min: 0, max: baits.length })],
    fishong_pole:
      fishong_poles[faker.random.number({ min: 0, max: fishong_poles.length })],
    preferred_technique:
      techniques[faker.random.number({ min: 0, max: techniques.length })],
  });
}

console.log(JSON.stringify(database));