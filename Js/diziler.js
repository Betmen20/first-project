var ülke1 = "Türkiye";
var ülke2 = "Almanya";
var ülke3 = "Belçika";


let ülkeler = ["Türkiye", "Almanya", "Belçika"]; // hepsini bir arada toplayıp yazdırma
let ekonomikdurum = ["2","1","3"];
let ırk = ["Türk","Alman","Belçikalı"];

let ülke1 = ["Türkiye","2","Türk"];
let ülke2 = ["Almanya","1","Alman"];
let ülke3 = ["Belçika","3","Belçikalı"];

ülkeler = [ülke1,ülke2,ülke3]

console.log(ülkeler);


let NatoÜlkeleri = ["Abd","Türkiye","Belçika","İtalya","Yunanistan"]

sonuc = NatoÜlkeleri.length; // kaçtane var onu söyler

sonuc = NatoÜlkeleri.toString(); // sırasıyla yazar

sonuc = NatoÜlkeleri.pop(); // son yazıyı siler

sonuc = NatoÜlkeleri.shift(); // baş yazıyı siler

sonuc = NatoÜlkeleri.push("Uruguay"); // sonuna yazı ekler

sonuc = NatoÜlkeleri.unshift("Jameika"); // başına yazı ekler

var dersler1 = ["Sosyal Bilgiler","Türkçe"];
var dersler2 = ["Tarih","Felsefe"];
var dersler3 = ["Matematik Tarihi","Fıkıh"];

sonuc = dersler1.concat(dersler2,dersler3); // birleştirerek ekrana yazıyor
sonuc = dersler1.splice(0,3,"Kimya","Fizik",); // yeni bir yer ekliyor

console.log(sonuc);
console.log(NatoÜlkeleri);
console.log(dersler1);
