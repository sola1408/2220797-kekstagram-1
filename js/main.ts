function getRandomNumber(min: number, max: number) {
  if (min < 0) throw 'min < 0';
  if (min > max) {
    const tmp: number = min;
    min = max;
    max = tmp;
  }
  return Math.round(Math.random() * (max - min) + min);
}

const generatedNumbers: number[] = [];
function getUniqueRandomNumber(min: number, max: number): number {
  const n = getRandomNumber(min, max);
  if (generatedNumbers.includes(n)) 
    return getUniqueRandomNumber(min, max);
  else generatedNumbers.push(n);
  return n;
}


function checkString(str: string, maxLength: number): boolean {
  return str.length < maxLength;
}

interface IPhotoDescription{
  id: number;
  url: string;
  description: string;
  likes: number;
  comments: IComment[];
}

interface IComment {
  id: number;
  avatar: string;
  message: string;
  name: string;
}

const commentTexts: string[] = [
 " Всё отлично!",
"В целом всё неплохо. Но не всё.",
"Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.",
"Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.",
"Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.",
"Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!",
];

const names: string[] = [
  "A", 
  "B",
  "C"
]

const randomCount: number = 25;
const photoDescriptions: IPhotoDescription[] = []
for (let i = 1; i < randomCount; i++) {
  const photoDescription: IPhotoDescription = {
      description: "",
      id: i,
      likes: getRandomNumber(15, 200),
      url: 'photos/' + i + '.jpg',
      comments: generateComments(2)
  }
  photoDescriptions.push(photoDescription)
  
}
console.log(photoDescriptions);


function generateComments (count: number): IComment[] {
  const comments: IComment[] = []
  for (let i = 0; i < count; i++) {
    const comment: IComment = {
      id: getUniqueRandomNumber(0, 200),
      avatar: 'img/avatar-' + getRandomNumber(1, 6) + '.svg',
      message: commentTexts[getRandomNumber(0, commentTexts.length - 1)],
      name: names[getRandomNumber(0, names.length - 1)]
    }
    comments.push(comment)
  }
  return comments
}
