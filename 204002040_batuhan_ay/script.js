var buton = document.getElementById("gonder");
var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var isimi = document.getElementById("isimh1");
var numarai = document.getElementById("numarah1");
var azamibitişi = document.getElementById("azamibitişh1");
var temizle = document.getElementById("temizle");

buton.addEventListener("click", () => {
  var input1d = input1.value;
  var input2d = input2.value;

  if (/\s/.test(input1d)) {
    isimi.textContent = `İsim: ${input1d}`;
  } else {
    alert("Lütfen geçerli bir isim giriniz.");
    return;
  }

  if (/^\d{9}$/.test(input2d)) {
    var azamibitiş = parseInt(input2d.slice(0, 2)) + 4;
    var yearnow = new Date().getFullYear().toString().slice(-2);

    numarai.textContent = `Numaranız: ${input2d}`;

    azamibitişi.textContent = `Azami bitiş: ${azamibitiş}`;

    setTimeout(() => {
      yearnow >= azamibitiş && alert("Azami bitiş yılı aşılmıştır.");
    }, 1);
  } else {
    alert("Lütfen 9 haneli bir öğrenci numarası giriniz.");
    return;
  }
});

temizle.addEventListener("click", () => {
  numarai.textContent = "";
  azamibitişi.textContent = "";
  isimi.textContent = "";
});
