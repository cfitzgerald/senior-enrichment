const db = require('./db');
const Campus = require('./db/models/Campus');
const Student = require('./db/models/Student');

// You know the universe is a little bit like the human hand.
// For example, you have Grauman's Center right here,
// and then you have Undiscovered Worlds,
// and uh, um, Sector 8,
// and up here, it's the, uh, Tittleman's Crest.

const campuses = [
  { name: "Grauman's Center" },
  { name: "Undiscovered Worlds" },
  { name: "Sector 8" },
  { name: "Tittleman's Crest" }
];

const students = [
  { name: "Uncle Steve", email: "01@rm.com", campusId: 1 },
  { name: "Cousin Nicky", email: "02@rm.com", campusId: 2 },
  { name: "Mr. Beauregard", email: "03@rm.com", campusId: 3 },
  { name: "Frankenstein's Monster", email: "04@rm.com", campusId: 4 },
  { name: "Sleepy Gary", email: "05@rm.com", campusId: 1 },
  { name: "Photography Raptor", email: "06@rm.com", campusId: 2 },
  { name: "Pencilvester", email: "07@rm.com", campusId: 3 },
  { name: "Tinkles", email: "08@rm.com", campusId: 4 },
  { name: "Hamurai", email: "09@rm.com", campusId: 1 },
  { name: "Amish Cyborg", email: "10@rm.com", campusId: 2 },
  { name: "Reverse Giraffe", email: "11@rm.com", campusId: 3 },
  { name: "Baby Wizard", email: "12@rm.com", campusId: 4 },
  { name: "Mrs. Refrigerator", email: "13@rm.com", campusId: 1 },
  { name: "William Shakespeare", email: "14@rm.com", campusId: 2 },
  { name: "Cleopatra", email: "15@rm.com", campusId: 3 },
  { name: "Bigfoot", email: "16@rm.com", campusId: 4 },
];

const seed = () => {
  Promise.all(campuses.map(campus =>
    Campus.create(campus))
  )
  .then(() =>
  Promise.all(students.map(student =>
    Student.create(student))
  ))
};

const main = () => {
  console.log('Syncing db...');
  db.sync({ force: true })
    .then(() => {
      console.log('Seeding databse...');
      return seed();
    })
    .catch(err => {
      console.log('Error while seeding!');
      console.log(err.stack);
    })
    // .then(() => {
    //   db.close();
    //   return null;
    // });
};

main();
