var tanım = "Merhabalar Benim Adım Batuhan Ay Bu Benim Hayatım";


let sonuç; 

sonuç = tanım.length;
sonuç = tanım.toUpperCase();
sonuç = tanım.toLowerCase();
sonuç = tanım.slice(5,20);
sonuç = tanım.slice(4);
sonuç = tanım.substring(0,6);
sonuç = tanım.substring(5);
sonuç = tanım.replace("Batuhan","Tuğba")

sonuç = tanım.indexOf("Benim");

sonuç = tanım.split(" ")[2];
sonuç = tanım.split(" ")[6];


let isim = "Batuhan";
var meslek = "Yazılımcı";
let şehir = "İstanbul";

let sonuc = "Benim İsmim " + isim + " Ve Benim Mesleğim: " + meslek + ". " + "Ve Ben " + şehir +  "'da Yaşıyorum ";

sonuc = `Benim İsmim ${isim} Ve Benim Mesleğim: ${meslek} Ve Ben ${şehir}'da Yaşıyorum.`;


// `` = Backtick (ALTGR ile enterrin üstündeki tuş var ona bas)
console.log(sonuc);







// console.log(sonuç);