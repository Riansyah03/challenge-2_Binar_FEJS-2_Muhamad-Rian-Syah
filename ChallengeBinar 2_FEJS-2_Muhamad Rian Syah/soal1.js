// Awal soal No 1
function changeWord (selectedText, changeText, text){
    const klmt = text.replace(selectedText, changeText);
    return klmt;
}
const kalimat1 = "Andini sangat mencintai kamu selamanya";
const kalimat2 = "Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu";

console.log('kalimat 1 =', changeWord('mencintai', 'membenci', kalimat1));
console.log('kalimat 2 =', changeWord('bromo', 'semeru', kalimat2));