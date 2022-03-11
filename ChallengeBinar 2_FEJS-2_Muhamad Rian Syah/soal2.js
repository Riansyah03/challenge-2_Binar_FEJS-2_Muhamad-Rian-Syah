// soal No 2
function checkTypeNumber(givenNumber) {
    if (givenNumber == null) {
        givenNumber = "Error : Bro where is the parameter?";
    } else if (typeof givenNumber == "number") {
        if (givenNumber % 2 == 0) {
            givenNumber = "GENAP";
        } else {
            givenNumber = "GANJIL";
        }
    } else {
        givenNumber = "Error : Invalid data type";
    }
    return givenNumber;
}
// ketika functiom tersebut dipanggil
console.log(checkTypeNumber(10)); // Output yang akan keluar Genap
console.log(checkTypeNumber(3)); // Output yang akan keluar Ganjil
console.log(checkTypeNumber("3")); // Output yang keluar Error Invalid data type
console.log(checkTypeNumber({})); // Output yang keluar Error Invalid data type
console.log(checkTypeNumber([])); // Output yang keluar Error Invalid data type
console.log(checkTypeNumber()); // Output yang keluar Error Error: Bro where is the parameter?