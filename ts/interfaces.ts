export interface IPhotoDescription {
    id: number;
    url: string;
    description: string;
    likes: number;
    comments: IComment[];
}

export interface IComment {
    id: number;
    avatar: string;
    message: string;
    name: string;
}