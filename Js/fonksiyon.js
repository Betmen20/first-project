// function mesaj(ileti){
//     console.log(ileti);

// }

// mesaj("merhaba");

// mesaj("benim");

// mesaj("ismim");

// mesaj("Batuhan");

// mesaj("Ay");

function yas(doğum){
    return new Date().getFullYear() - doğum;
}
var Batuhan = yas(2002);
var Ömer = yas(2001);
var Furkan = yas(2000);
var Movance = yas(1998);
console.log(Batuhan,Ömer,Furkan,Movance);