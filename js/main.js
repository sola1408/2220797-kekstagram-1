import { getPhotoDescriptions } from "./photo.js";
import { getRandomNumber, getUniqueRandomNumber } from "./random.js";
import { checkString } from "./utils.js";
console.log(1);
const randomCount = 25;
const maxLenght = 10;
const str = 'В этой строке точно больше 10 символов';
const min = 12;
const max = 20;
const photoDescriptions = getPhotoDescriptions(randomCount);
console.log(photoDescriptions);
const isCorrectly = checkString(str, maxLenght);
console.log(isCorrectly);
const randomNumber = getRandomNumber(min, max);
console.log('Случайное число от ' + min + ' до ' + max + ' = ' + randomNumber);
const uniqueRandomNumbers = [];
for (let i = 0; i < 7; i++) {
    const uniqueRandomNumber = getUniqueRandomNumber(min, max);
    uniqueRandomNumbers.push(uniqueRandomNumber);
}
console.log('Случайные и уникальные числа от ' + min + ' до ' + max + ' = ' + uniqueRandomNumbers);
