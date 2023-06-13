let ülke1 ={
    "isim" : "Türkiye",
    "baskent" : "Ankara",
    "enkalabalıksehri" : "İstanbul",
    "nüfus" : {
        "gerçeknüfus" : 83,
        "değişkennüfus" : 90,
    }
}

let sonuc;

sonuc = ülke1.isim;
sonuc = ülke1.enkalabalıksehri;
sonuc = ülke1.nüfus.değişkennüfus;
sonuc = ülke1.nüfus["gerçeknüfus"];


var telefonlar =[
    {
        "telefonadı" : "Samsung",
        "ram" : "3"
    },
    {
        "telefonadı" : "Apple",
        "ram" : "3"
    },
    {
        "telefonadı" : "Xiaomi",
        "ram" : "3"
    }
]


console.log(sonuc);
console.log(telefonlar)