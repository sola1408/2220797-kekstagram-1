import { generateComments } from "./comments";
import { getRandomNumber } from "./random";
export function getPhotoDescriptions(randomCount) {
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
    return photoDescriptions;
}
