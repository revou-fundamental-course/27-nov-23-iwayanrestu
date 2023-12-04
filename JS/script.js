function luasSegitiga() {
  var alas = parseFloat(document.getElementById("input-alas").value);
  var tinggi = parseFloat(document.getElementById("input-tinggi").value);

  if (isNaN(alas) || isNaN(tinggi) || alas <= 0 || tinggi <= 0) {
    alert("Masukkan Nilai yang Sesuai untuk Panjang Alas dan Tinggi");
    return;
  }

  let hasilLuas = 0.5 * alas * tinggi;
  var elemenHasil = document.getElementById("hasil");
  elemenHasil.innerHTML = `
  <p class = "text-output">${hasilLuas.toFixed(2)} cm²</p>`;
}

function kelilingSegitiga() {
  var sisiA = parseFloat(document.getElementById("input-sisiA").value);
  var sisiB = parseFloat(document.getElementById("input-sisiB").value);
  var sisiC = parseFloat(document.getElementById("input-sisiC").value);

  if (
    isNaN(sisiA) ||
    isNaN(sisiB) ||
    isNaN(sisiC) ||
    sisiA <= 0 ||
    sisiB <= 0 ||
    sisiC <= 0
  ) {
    alert("Masukkan Nilai yang Sesuai untuk tiap-tiap Panjang Sisi");
    return;
  }

  let hasilKeliling = sisiA + sisiB + sisiC;
  var elemenHasil = document.getElementById("hasil");
  elemenHasil.innerHTML = `
  <p class = "text-output">${hasilKeliling.toFixed(2)} cm</p>`;
}

function resetLuas() {
  document.getElementById("input-alas").value = " ";
  document.getElementById("input-tinggi").value = " ";
  document.getElementById("hasil").innerHTML = " ";
}
function resetKeliling() {
  document.getElementById("input-sisiA").value = " ";
  document.getElementById("input-sisiB").value = " ";
  document.getElementById("input-sisiC").value = " ";
  document.getElementById("hasil").innerHTML = " ";
}
