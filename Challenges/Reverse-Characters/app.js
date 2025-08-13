function ReverseCharacters(input) {
    let reversed = "";

    for (let i = input.length - 1; i >= 0; i--) {
        reversed += input[i];
    }

    return reversed;
}

console.log(ReverseCharacters("Duha")); 
console.log(ReverseCharacters("Reverse")); 
console.log(ReverseCharacters("abc123")); 
