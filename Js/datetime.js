var anlıktarih = new Date(2003,1,1);
let tarih = new Date();


//değiştirme

tarih.setFullYear(2018);
tarih.setDate(11);



//gösterge


console.log(tarih.getDate());
console.log(tarih.getDay());
console.log(tarih.getFullYear());
console.log(tarih.getHours());
console.log(tarih.getMonth());
console.log(tarih.getTime());

console.log(anlıktarih.getFullYear());


console.log(tarih.getFullYear()-anlıktarih.getFullYear());
console.log(tarih.getDay()-anlıktarih.getDay());

console.log(typeof tarih);
