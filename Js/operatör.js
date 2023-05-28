var a = 20;
var b = 30;
var c = 43;

let sonuc;

// Aritmatik


sonuc = b + c;
sonuc = b - c;
sonuc = b / c;
sonuc = b * c;
sonuc = c % a; // bölmeden kalanı ekrana verir.
sonuc = ++c; // +1 ekliyor.
sonuc = c++; // işlemden sonra +1 ekler.
sonuc = --b;
sonuc = b--;

// Karşılaştırma

sonuc = (b == a);
sonuc = (b != a);
sonuc = (b === a); // Hem değerine hemde tipine bakar
sonuc = (b < a);
sonuc = (b > a);

// Atama

sonuc = b;
sonuc -= a;
sonuc += a;
sonuc *= a;
sonuc /= a;
sonuc %= a;

// Genel olarak  : Sonuç = Sonuç "operatör(+,-,*,/,%)" değişken





console.log(sonuc);
