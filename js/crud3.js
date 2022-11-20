document.getElementById("formulario").addEventListener("submit", crear)

function crear(e){
    tipoid = document.getElementById("tipoid").value
    numero = document.getElementById("numero").value
    nombre = document.getElementById("nombre").value;
    direccion = document.getElementById("direccion").value
    barrio = document.getElementById("barrio").value
    ciudad = document.getElementById("ciudad").value    
    correo = document.getElementById("correo").value;
    sede = document.getElementById("sede").value
    

    let independent =  {
        tipoid,numero,nombre,direccion,barrio,ciudad,correo,sede
    }
  
   if(localStorage.getItem("Independientes") === null){
        let independientes = [];
        independientes.push(independent);
        localStorage.setItem("Independientes", JSON.stringify(independientes))
    } else{
        let independientes = JSON.parse(localStorage.getItem("Independientes"))
        independientes.push(independent)
        localStorage.setItem("Independientes", JSON.stringify(independientes))
      
    }
    
    leer();
    document.getElementById("formulario").reset();
    e.preventDefault();
    
    console.log("INDEPENDIENTE REGISTRADO SATISFACTORIAMENTE")
}

function leer(){
let independientes = JSON.parse(localStorage.getItem("Independientes"));
document.getElementById("tbody").innerHTML ="";
for(let i=0; i < independientes.length; i++){
let tipoid = independientes[i].tipoid;
let numero = independientes[i].numero;
let nombre= independientes[i].nombre;
let direccion = independientes[i].direccion;
let barrio= independientes[i].barrio;
let ciudad = independientes[i].ciudad;
let correo= independientes[i].correo;
let sede = independientes[i].sede;
document.getElementById("tbody").innerHTML +=
`<tr>
<td>${tipoid}</td>
<td>${numero}</td>
<td>${nombre}</td>
<td>${direccion}</td>
<td>${barrio}</td>
<td>${ciudad}</td>
<td>${correo}</td>
<td>${sede}</td>
<td><button class="btn btn-success" onclick="Editar('${numero}')">Edit</button></td>
<td><button class="btn btn-danger" onclick="eliminar('${numero}')">Delete</button></td>
`
}
}
leer();



function Editar(numero){
var div = document.getElementById("body");
let independientes = JSON.parse(localStorage.getItem("Independientes"));
for(let i= 0; i < independientes.length; i++){
    if(independientes[i].numero === numero){
        document.getElementById("body").innerHTML = `
        <div class="container mt-4" id="body">
        <div class="card col-6 d-flex justify-content-center">
            <div class="card-body">
        <div class="card-body">
            <form id="formulario">
          <h5 class="card-title">Editar Estudiantes</h5>
          <p class="card-text">Insertar</p>
          <div class="mb-3">
          <div class="form-group col-12">
          <label for="ntipoid">TIPO DE DOCUMENTO</label>
          <select class="form-select "  id= "ntipoid" aria-label="Default select example"value="${independientes[i].tipoid}">        
          <option value="CC">CC</option>
          <option value="TI">TI</option>
          <option value="PP">PP</option>
          <option value="RC">RC</option>
          <option value="OTRO">OTRO</option>                     
          </select>
      </div>             
      </div>

      <div class="mb-3">
        <div class="form-group col-12">
          <label for="nnumero"  class="classValidate hide">NUMERO</label>
          <input type="text" name="" id="nnumero" required class="form-control"value="${independientes[i].numero}">
      </div>
      </div>

      <div class="mb-3">
        <div class="form-group col-12">
          <label for="nnombre"  class="classValidate hide">NOMBRE</label>
          <input type="text" name="" id="nnombre" required class="form-control"value="${independientes[i].nombre}">
      </div>
      </div>          

      <div class="mb-3">
        <div class="form-group col-12">
          <label for="ndireccion">DIRECCION</label>
          <input type="text" name="" id="ndireccion" required class="form-control"value="${independientes[i].direccion}">
      </div>
      </div>

      <div class="mb-3">
        <div class="form-group col-12 " >
          <label for="nbarrio">BARRIO</label>
          <input type="text"  name="" id="nbarrio" required class="form-control"value="${independientes[i].barrio}">
      </div>
      </div>


      <div class="mb-3">
        <div class="form-group col-12">
        <label for="nciudad">CIUDAD</label>
        <select class="form-select "  id= "nciudad" aria-label="Default select example"value="${independientes[i].ciudad}">        
          <option value="CALI">CALI</option>
          <option value="B/QUILLA">BARRANQUILLA</option>
          <option value="BOGOTA">BOGOTA</option>                     
        </select>
      </div>             
      </div>

      
      <!--LA OTRA PARTE DEL FORM-->   

     
    <div class="mb-3">
      <div class="form-group col-12">
        <label for="ncorreo"  class="classValidate hide">CORREO</label>
        <input type="text" name="" id="ncorreo" required class="form-control"placeholder="name@example.com"value="${independientes[i].correo}">
    </div>
    </div>

    <div class="mb-3">
      <div class="form-group col-12">
      <label for="nsede">SEDE</label>
      <select class="form-select "  id= "nsede" aria-label="Default select example"value="${independientes[i].sede}">        
        <option value="NORTE">NORTE</option>
        <option value="SUR">SUR</option>
        <option value="ESTE">ESTE</option>  
        <option value="OESTE">OESTE</option> 
        <option value="CENTRO">CENTRO</option>              
       </select>
      </div>             
       </div>
          <div class="mb-3">
          <td><button class="btn btn-success" onclick="actualizar('${i}')">Actualizar</button></td>
          <td><button class="btn btn-danger">Cancelar</button></td> 
          </div>
        </form>
        </div>
      </div>
    </div>
        `
        }
        div.style = 'block';
}
}

function actualizar(i){  
  
    let independientes = JSON.parse(localStorage.getItem("Independientes"));
    independientes[i].tipoid = document.getElementById('ntipoid').value;
    independientes[i].numero = document.getElementById('nnumero').value;
    independientes[i].nombre = document.getElementById('nnombre').value;
    independientes[i].direccion = document.getElementById('ndireccion').value;
    independientes[i].barrio= document.getElementById('nbarrio').value;
    independientes[i].ciudad = document.getElementById('nciudad').value;
    independientes[i].correo = document.getElementById('ncorreo').value;
    independientes[i].sede = document.getElementById('nsede').value;
    localStorage.setItem("Independientes", JSON.stringify(independientes));
}

//Eliminar

function eliminar(numero){
 
    let independientes = JSON.parse(localStorage.getItem("Independientes"));
    for(let i= 0; i < independientes.length; i++){
        if(independientes[i].numero == numero){
            independientes.splice(i,1);
            alert('INDEPENDIENTES ELIMINADO SATISFACTORIAMENTE')
        }
    } 
    localStorage.setItem("Independientes", JSON.stringify(independientes));
    leer();
}
