// ===== Домашнє завдання 23 =====
// Теми: стрілкові функції, контекст this, методи call / apply / bind

// ---------- Завдання 1 ----------
// Переписати функції-вирази на стрілкові.

const getArea = (width, height) => {
  return width * height;
};

const createUser = (name, surname, city) => {
  return {
    name: name,
    surname: surname,
    city: city,
  };
};

const getDiscountPrice = (price, discount) => {
  const finalPrice = Math.round(price - (price * discount) / 100);

  if (discount > 50) {
    return `Big sale! ${finalPrice}$`;
  }

  return `${finalPrice}$`;
};

console.log(getArea(4, 5));
console.log(createUser("John", "Smith", "Kyiv"));
console.log(getDiscountPrice(320, 15));
console.log(getDiscountPrice(320, 70));

// ---------- Вихідні дані ----------

const manager = {
  name: "Jack",
  surname: "Smith",
};

const seller = {
  name: "Emma",
  surname: "Brown",
};

const developer = {
  name: "Tom",
  surname: "Wilson",
};

console.log(" ")

// Увага: усі функції нижче оголошуються ПОЗА об'єктами і звертаються до даних через this.
// Стрілкові функції тут не підходять — вони не мають власного this.

// ---------- Завдання 2 ----------
// Написати функцію getFullName, яка повертає рядок виду "Jack Smith".
// Вивести повне ім'я для manager, seller і developer, викликавши її через call.



function getFullName() {
    
  return `${this.name} ${this.surname}.`;

}

console.log(getFullName.call(manager));
console.log(getFullName.call(seller));
console.log(getFullName.call(developer));

console.log(" ")

// ---------- Завдання 3 ----------
// Написати функцію getPosition(company, city), яка повертає рядок виду
// "Jack Smith works at Google, Kyiv".
// Вивести посаду для manager, викликавши її через call і через apply:
// у call аргументи company і city передаються окремо, в apply — одним масивом.

function getPosition(company, city){
  return `${this.name} ${this.surname} works at ${company}, ${city}.`
}

const managerInfo = getPosition.apply(manager,['Google', 'Kyiv']);

console.log(managerInfo);

console.log(" ")

// ---------- Завдання 4 ----------
// 1. Створити getManagerPosition — bind функції getPosition з прив'язаним manager.
//    Викликати двічі з різними компаніями та містами.
// 2. Створити getDeveloperPosition — bind з прив'язаним developer
//    і зафіксованим першим аргументом company. Викликати двічі з різними містами.


const getManagerPosition = getPosition.bind(manager);
const getDeveloperPosition = getPosition.bind(developer, 'Google');

console.log(getManagerPosition('Google', 'Kyiv'));
console.log(getDeveloperPosition('Odessa'));
