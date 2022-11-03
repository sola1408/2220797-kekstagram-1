"use strict";
function getRandomNumber(min, max) {
    if (min < 0)
        throw 'min < 0';
    if (min > max) {
        const tmp = min;
        min = max;
        max = tmp;
    }
    return Math.round(Math.random() * (max - min) + min);
}
const generatedNumbers = [];
function getUniqueRandomNumber(min, max) {
    const n = getRandomNumber(min, max);
    if (generatedNumbers.includes(n))
        return getUniqueRandomNumber(min, max);
    else
        generatedNumbers.push(n);
    return n;
}
function checkString(str, maxLength) {
    return str.length < maxLength;
}
const commentTexts = [
    " Всё отлично!",
    "В целом всё неплохо. Но не всё.",
    "Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.",
    "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.",
    "Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.",
    "Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!",
];
const names = [
    "A",
    "B",
    "C"
];
const randomCount = 25;
const photoDescriptions = [];
for (let i = 1; i < randomCount; i++) {
    const photoDescription = {
        description: "",
        id: i,
        likes: getRandomNumber(15, 200),
        url: 'photos/' + i + '.jpg',
        comments: generateComments(2)
    };
    photoDescriptions.push(photoDescription);
}
console.log(photoDescriptions);
function generateComments(count) {
    const comments = [];
    for (let i = 0; i < count; i++) {
        const comment = {
            id: getUniqueRandomNumber(0, 200),
            avatar: 'img/avatar-' + getRandomNumber(1, 6) + '.svg',
            message: commentTexts[getRandomNumber(0, commentTexts.length - 1)],
            name: names[getRandomNumber(0, names.length - 1)]
        };
        comments.push(comment);
    }
    return comments;
}
