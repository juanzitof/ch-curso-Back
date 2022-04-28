document.addEventListener('submit',enviarFormulario);

function enviarFormulario(event){
    event.preventDefault();
    let form= document.getElementById('productForm');
    let data = new FormData(form);
    fetch('/api/product',{
        method:'POST',
        body:data
    }).then(result=>{
        return result.json();
    }).then(json=>{
           console.log(json)
        })
      .then(result=>{
        location.href='/'
      })

}

document.getElementById("image").onchange = (e)=>{
    let read = new FileReader();
    read.onload = e =>{
        document.getElementById("preview").src = e.target.result;
    }
    
    read.readAsDataURL(e.target.files[0])
}