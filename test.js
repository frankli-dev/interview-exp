function removeDuplicates(arr) {
    // Create a new Set from the array to remove duplicates
    let uniqueSet = new Set(arr);
    // Convert the Set back to an array
    let uniqueArray = [...uniqueSet];
    return uniqueArray;
}

// Example usage
let stringArray = ["0x96b0C913AaAA3cd6267E44f55957A05C785Eb07b", "0xcd22783846868f5824905854b567ebff5785b60c", "0x6e07Debc3443aA4d7C534F6bE27f76f0c104F676"];
let uniqueStringArray = removeDuplicates(stringArray);
console.log(uniqueStringArray);
