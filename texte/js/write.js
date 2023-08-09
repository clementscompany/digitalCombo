function gerarBoletim(){
    
}

const contain = document.querySelector(".formContainer")
contain.onsubmit = (e)=>{
    e.preventDefault();
}
function write(){
    var nome = document.getElementById
}
///////////////////////////////////////////////////// nome completo
var inputNomecompleto = document.getElementById('inputNomecompleto');
inputNomecompleto.onkeyup = ()=>{
   var dadosNome =  inputNomecompleto.value;
   var campoNome = document.getElementById('nome');
   campoNome.innerHTML = dadosNome;
}
//////////////////////////////////////////////////////// nome do pai
var filcaCao = document.getElementById('filcaCao');
filcaCao.onkeyup = ()=>{
    var dadosFilha =  filcaCao.value;
    var campoFilha = document.getElementById('nomePai');
    campoFilha.innerHTML = dadosFilha;
}

/////////////////////////////////////////////// nome da mae 
var maeInput = document.getElementById('maeInput');
maeInput.onkeyup = ()=>{
    var dadosFilha =  maeInput.value;
    var campoFilha = document.getElementById('nomeMae');
    campoFilha.innerHTML = dadosFilha;
}
//////////////////////////////////// naturalidade
var naturalidadeInput = document.getElementById('naturalidadeInput');
naturalidadeInput.onkeyup = ()=>{
    var dados =  naturalidadeInput.value;
    var campo = document.getElementById('natralidade');
    campo.innerHTML = dados;
}
//////////////////////////////////// data de nascimento
var dataNascInput = document.getElementById('dataNascInput');
dataNascInput.onkeyup = ()=>{
    var dados =  dataNascInput.value;
    var campo = document.getElementById('dataNasc');
    campo.innerHTML = dados;
}
//////////////////////////////////////////////////////// documento de ordem
var origemDocinput = document.getElementById('origemDocinput');
origemDocinput.onkeyup = ()=>{
    var dados =  origemDocinput.value;
    var campo = document.getElementById('docOrdem');
    campo.innerHTML = dados;
}

var cnInput = document.getElementById('cnInput');
cnInput.onkeyup = ()=>{
    var dados =  cnInput.value;
    var campo = document.getElementById('cn');
    campo.innerHTML = dados;
}
///////////////////////////////// cpfInput 
var cpfInput = document.getElementById('cpfInput');
cpfInput.onkeyup = ()=>{
    var dados =  cpfInput.value;
    var campo = document.getElementById('cpf');
    campo.innerHTML = dados;
}
/////////////////////////////////data da expedição
var expeditionInput = document.getElementById('expeditionInput');
expeditionInput.onkeyup = ()=>{
    var dados =  expeditionInput.value;
    var campo = document.getElementById('dataExpedi');
    campo.innerHTML = dados;
}
//////////////////////////////////////////////////id documento
var idDocumento = document.getElementById('idDocumento');
idDocumento.onkeyup = ()=>{
    var dados =  idDocumento.value;
    var campo = document.getElementById('id');
    campo.innerHTML = dados;
}

//////////////////////imagens do user

const fotoUser = document.getElementById('fotoUser');
fotoUser.onchange = ()=>{
    const userdataImage = document.getElementById('perfilImage');
    const [file]  = fotoUser.files; 
    userdataImage.src = URL.createObjectURL(file);
}
///////////////////////////////////////////// perfil user image

const inputImageUser = document.getElementById('inputImageUser');
inputImageUser.onchange = ()=>{
    const [file] = inputImageUser.files;
    const persinImage = document.getElementById('perfilImageUser')
    persinImage.src = URL.createObjectURL(file);
}

/////////////////////////assinarura
const assinatura = document.getElementById('assinaturaInput');
assinatura.onchange = ()=>{
    const [fileAss] = assinaturaInput.files;
    const placeholder = document.getElementById('placeholderAss');
    placeholder.src = URL.createObjectURL(fileAss);
}