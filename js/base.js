const toogleBtn =  document.getElementById('toogleBtn');


function toggleBar(){
 const   toggleBar =  document.getElementById('left');
    toggleBar.classList.add('active');
    toggleBar.addEventListener("click", (e) =>{
      if(e.target.id == 'close'){
        toggleBar.classList.remove('active');
      }
      
    });
}
function cardSearch(){
 const searsBar = document.getElementById('cardSearch');
 searsBar.classList.add('active');
 searsBar.addEventListener("click", (event)=>{
  if(event.target.id == 'closeSearch');
  searsBar.classList.remove('active');
 });
 }