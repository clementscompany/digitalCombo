const btn = document.querySelector(".voltar");
btn.onclick = ()=>{
    location.href = "";
}
const visializeBtn = document.querySelector(".visializeBtn");
visializeBtn.onclick = ()=>{
   var containerOn =  document.querySelector(".container");
   var containerOff = document.querySelector(".dataUsers");
   containerOn.classList.add('active');
   containerOff.classList.add('active');
}
//////////////////////////////// editar btn editarBtn
const  editarBtn = document.querySelector(".editarBtn");
editarBtn.onclick = ()=>{
   var containerOn =  document.querySelector(".container");
   var containerOff = document.querySelector(".dataUsers");
   containerOn.classList.remove('active');
   containerOff.classList.remove('active');
}

//////////////////////// download 

const button = document.querySelector("#DownloadButton");
button.onclick = ()=>{
   var containerOn =  document.querySelector(".container");
   var containerOff = document.querySelector(".dataUsers");
   containerOn.classList.add('active');
   containerOff.classList.add('active');
}