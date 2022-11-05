import { generateComments } from "./comments";
import { IPhotoDescription } from "./interfaces";
import { getRandomNumber } from "./random";

export function getPhotoDescriptions(randomCount: number): IPhotoDescription[] {
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
    return photoDescriptions;
}
