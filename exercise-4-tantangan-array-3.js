var input = [
  "0001",
  "Roman Alamsyah",
  "Bandar Lampung",
  "21/05/1989",
  "Membaca"
];

function dataHandling2(array) {
  input.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
  input.splice(4, 1, "Pria", "SMA Internasional Metro");
  console.log(input);
  var date = input[3].split("/");
  var bulan = date[1];
  switch (bulan) {
    case "01":
      console.log("Januari");
      break;
    case "02":
      console.log("Februari");
      break;
    case "03":
      console.log("Maret");
      break;
    case "04":
      console.log("April");
      break;
    case "05":
      console.log("Mei");
      break;
    case "05":
      console.log("Maret");
      break;
    case "06":
      console.log("Juni");
      break;
    case "07":
      console.log("Juli");
      break;
    case "08":
      console.log("Agustus");
      break;
    case "09":
      console.log("September");
      break;
    case "10":
      console.log("Oktober");
      break;
    case "11":
      console.log("November");
      break;
    case "12":
      console.log("Desember");
      break;
  }
  var dateSort = date.sort(function(a, b) {
    return b - a;
  });
  console.log(dateSort);
  var dateJoin = input[3].split("/").join("-");
  console.log(dateJoin);
  var nama = input[1];
  var batas = nama.slice(0, 15);
  console.log(batas);
}
dataHandling2(input);
