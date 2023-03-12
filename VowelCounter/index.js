const vowelCounter = (str) => {
    let vowelCount = 0;
    const word = str.toLowerCase();

    for(let i = 0; i < word.length; i++) {
        if(word[i].match(/([a,e,i,o,u])/)) {
            vowelCount += 1;
        }
    }

    return vowelCount;
}

const check = vowelCounter("hfaaaasdbnsweq");
console.log(check)