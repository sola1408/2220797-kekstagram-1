let getRandom = function (min, max){
    if (min > 0 && max > min){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    return throwNewError("Неправильный диапазон")
}
