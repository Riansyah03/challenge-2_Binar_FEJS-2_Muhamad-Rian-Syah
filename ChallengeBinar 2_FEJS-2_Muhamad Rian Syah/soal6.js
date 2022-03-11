// Soal No 6
function getAngkaTerbesarKedua(personName){
    let max = -Infinity, hasil = -Infinity;
  
    if (Array.isArray(personName)){
        for (const value of personName) {
        const nr = Number(value)
  
        if (nr > max) {
          [hasil, max] = [max, nr]
        } else if (nr < max && nr > hasil) {
          hasil = nr;
        }
      }
    }else if(personName == null){
      hasil = "Jangan Kosong";
    }else{
      hasil = "Harus Array";
    }
  
    return hasil;
  
  }
  
  const dataAngka = [9,4,7,7,4,3,2,2,8]
  
  console.log(getAngkaTerbesarKedua(dataAngka));
  console.log(getAngkaTerbesarKedua(0));
  console.log(getAngkaTerbesarKedua());