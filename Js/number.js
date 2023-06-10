var sonuç;


sonuç = 5; // sayı değerinde yazar
sonuç = "5"; // string değerinde yazar
sonuç = Number(5); // istersen string biçiminde yazar istersen number
sonuç = parseFloat("5.4"); //direk 5.4 olarak yazar

let sayısı = 5.56156156621561;

sonuç = sayısı.toFixed(5); // 5 haneli bir yer almış olur
sonuç = sayısı.toPrecision(5); // baştaki sayıyı kapsayarak 5 hanelir bir yeri alır


sonuç = Math.round(5.6); // en yakın sayıya yuvarlar
sonuç = Math.floor(6.6); // en yakın sayıya sabit tutar
sonuç = Math.min(1,6,7,4,9,0); // en küçük sayıyı ekrana verir
sonuç = Math.max(1,6,7,4,9,0); // en büyük sayıyı ekrana verir
sonuç = Math.random(); // random sayı üretir
sonuç = Math.ceil(6.4); // sayıyı tamamlar 
sonuç = Math.sqrt(49); // sayının karekökünü alır





console.log(sonuç);
console.log(typeof sonuç);