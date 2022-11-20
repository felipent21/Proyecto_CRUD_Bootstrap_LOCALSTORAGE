function crear(){
    let usuario = document.getElementById('username').value,
        contra = document.getElementById('password').value;
       

    let myArreglo = JSON.parse(localStorage.getItem('myArreglo')) || [];

    let existe = myArreglo.length && 
        JSON.parse(localStorage.getItem('myArreglo')).some(data => 
            data.usuario.toLowerCase() == usuario.toLowerCase() && 
            data.contra.toLowerCase() == contra.toLowerCase()
        );

    if(!existe){
        myArreglo.push({ usuario, contra });
        localStorage.setItem('myArreglo', JSON.stringify(myArreglo));
        
        
        alert("USUARIO CREADO SATISFACTORIAMENTE INTENTA INGRESAR");
    }
    else{
        alert("SU REGISTRO ESTA DUPLICADO");
    }

    console.log(myArreglo);
}

function validar(){

    
        let usuario = document.getElementById('username').value, contra = document.getElementById('password').value;
        let myArreglo = JSON.parse(localStorage.getItem('myArreglo')) || [];
        let existe = myArreglo.length && 
        JSON.parse(localStorage.getItem('myArreglo')).some(data => data.usuario.toLowerCase() == usuario && data.contra.toLowerCase() == contra);
        if(!existe){
            alert("DATOS INCORRECTOS O ESTAS SIN REGISTRO");
        }
        else{
            location.href = "menu.html";
        } 


}

