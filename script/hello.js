//for loop

//3 statment

for(let i = 0; i <= 10; i = i+1) {
  console.log('heru kurniawan')
}

const nickName = Symbol("nickName");

let namaGamer = {
  nama: "heru",
  [nickName]: "RainbowOne"
};

namaGamer.nickName =  "devilkids";

console.log(namaGamer.nickName);
console.log(namaGamer[nickName])