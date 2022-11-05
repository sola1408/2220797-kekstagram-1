export function getUniqueRandomNumber(min: number, max: number): number {
    const n = getRandomNumber(min, max);
    if (generatedNumbers.includes(n))
        return getUniqueRandomNumber(min, max);
    else generatedNumbers.push(n);
    return n;
}

export function getRandomNumber(min: number, max: number) {
    if (min < 0) throw 'min < 0';
    if (min > max) {
        const tmp: number = min;
        min = max;
        max = tmp;
    }
    return Math.round(Math.random() * (max - min) + min);
}

const generatedNumbers: number[] = [];