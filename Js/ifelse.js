//if : Eğer
// else : değilse / Eğer olmaz ise devreye girer
//prompt : Tarayıcıda bildirim sağlar.
//length : Sonucu almayı sağlar.

var kullanıcıadı = prompt("Lütfen İsminizi Giriniz.")

//Eğer kullanıcı adını girmiş ise bunu ekrana ver.
if(kullanıcıadı.length){
    console.log('İsminiz ${kullanıcıadı}')
    
}else{
    console.log("kayıt yok")
}