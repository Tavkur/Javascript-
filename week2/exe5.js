function isShorsWeather(tem) {
    if(tem>=35){
        return true;
    } else {
        return false;
    }
}
console.log(isShorsWeather(40)); 
console.log(isShorsWeather(22));
console.log(isShorsWeather(37));