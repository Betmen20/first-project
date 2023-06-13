var ad = "Batuhan"; // Global


if(true){
    let ad = "Zehra" // if scpoe
    console.log(ad);
}

function çıktı(){ // function scopu 

    var ad = "Işıl";
    var memleket = "Kastamonu";
    console.log(ad,memleket);

}
çıktı();
console.log(ad);


// Block etiketleri kendi içlerinde scope oluşturmaz ama eğer (let) etiketi kullanılırsa oluşturur...
// Function yapısı kendi içinde scope oluşturur...