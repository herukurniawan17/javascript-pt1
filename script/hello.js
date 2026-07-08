let userName = prompt('tuliskan username anda');
let usia = 24
let tinggiBadan = 169.8
let beratBadan
let mandi = 0

beratBadan = 86

if(mandi == null) {
  mandi = 'belum'
}else{
  mandi = 'sudah'
}

let saldoAwal = 100000
let saldoEwalet = 30000
let hutangBank = 70000

const totalSaldo = saldoAwal + saldoEwalet - hutangBank

alert(
  `nama kamu ${userName} usia anda ${usia} tinggi badan anda adalah ${tinggiBadan} cm dan berat badan saya ${beratBadan}kg dan saya ${mandi} mandi`
)

alert(
  `saldo awal saya adalah rp.${saldoAwal} tapi di e-walet ada uang rp.${saldoEwalet} tapi ada hutang sebesar ${hutangBank} jadi uang saya ada ${totalSaldo} `
)