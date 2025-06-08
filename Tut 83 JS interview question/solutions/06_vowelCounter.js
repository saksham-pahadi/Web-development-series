function vowelCounter(str){
const length=str.length;
const vowel="a, e, i, o, u,A,E,I,O,U";
let count=0;
    for(i=0;i<length;i++){
        for (const element of vowel) {
            if(element==str[i]){
            count+=1;
            }
        }
    }
    return count;
}

let username="Institute";
console.log(vowelCounter(username));//output:4

