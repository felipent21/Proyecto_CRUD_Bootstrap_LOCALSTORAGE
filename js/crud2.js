document.getElementById("formulario").addEventListener("submit", crear)

function crear(e){
    tipoid = document.getElementById("tipoid").value
    numero = document.getElementById("numero").value
    empresa = document.getElementById("empresa").value;
    direccion = document.getElementById("direccion").value
    ciudad = document.getElementById("ciudad").value
    postal = document.getElementById("postal").value    
    correo = document.getElementById("correo").value;
    regimen = document.getElementById("regimen").value
    

    let employer =  {
        tipoid,numero,empresa,direccion,ciudad,postal,correo,regimen
    }
  
   if(localStorage.getItem("Empleadores") === null){
        let empleadores = [];
        empleadores.push(employer);
        localStorage.setItem("Empleadores", JSON.stringify(empleadores))
    } else{
        let empleadores = JSON.parse(localStorage.getItem("Empleadores"))
        estudiantes.push(employer)
        localStorage.setItem("Empleadores", JSON.stringify(empleadores))
      
    }
    
    leer();
    document.getElementById("formulario").reset();
    e.preventDefault();
    
    console.log("EMPLEADOR REGISTRADO SATISFACTORIAMENTE")
}

function leer(){
let empleadores = JSON.parse(localStorage.getItem("Empleadores"));
document.getElementById("tbody").innerHTML ="";
for(let i=0; i < empleadores.length; i++){
let tipoid = empleadores[i].tipoid;
let numero = empleadores[i].numero;
let empresa= empleadores[i].empresa;
let direccion = empleadores[i].direccion;
let ciudad = empleadores[i].ciudad;
let postal = empleadores[i].postal;
let correo= empleadores[i].correo;
let regimen = empleadores[i].regimen;
document.getElementById("tbody").innerHTML +=
`<tr>
<td>${tipoid}</td>
<td>${numero}</td>
<td>${empresa}</td>
<td>${direccion}</td>
<td>${ciudad}</td>
<td>${postal}</td>
<td>${correo}</td>
<td>${regimen}</td>
<td><button class="btn btn-success" onclick="Editar('${numero}')">Edit</button></td>
<td><button class="btn btn-danger" onclick="eliminar('${numero}')">Delete</button></td>
`
}
}
leer();

function Editar(numero){
var div = document.getElementById("body");
let empleadores = JSON.parse(localStorage.getItem("Empleadores"));
for(let i= 0; i < empleadores.length; i++){
    if(empleadores[i].numero === numero){
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
          <label for="tipoid">TIPO DE DOCUMENTO</label>
          <select class="form-select "  id= "ntipoid" aria-label="Default select example" value="${empleadores[i].tipoid}">        
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
          <input type="text" name="" id="nnumero" required class="form-control"value="${empleadores[i].numero}">
      </div>
      </div>

      <div class="mb-3">
        <div class="form-group col-12">
          <label for="nempresa"  class="classValidate hide">EMPRESA</label>
          <input type="text" name="" id="nempresa" required class="form-control"value="${empleadores[i].empresa}">
      </div>
      </div>          

      <div class="mb-3">
        <div class="form-group col-12">
          <label for="ndireccion">DIRECCION</label>
          <input type="text" name="" id="ndireccion" required class="form-control"value="${empleadores[i].direccion}">
      </div>
      </div>

      <div class="mb-3">
        <div class="form-group col-12">
        <label for="nciudad">CIUDAD</label>
        <select class="form-select "  id= "nciudad" aria-label="Default select example"value="${empleadores[i].ciudad}">        
          <option value="CALI">CALI</option>
          <option value="B/QUILLA">BARRANQUILLA</option>
          <option value="BOGOTA">BOGOTA</option>                     
        </select>
      </div>             
      </div>

      <div class="mb-3">
        <div class="form-group col-12 " >
          <label for="npostal">CODIGO POSTAL </label>
          <input type="text"  name="" id="npostal" required class="form-control"value="${empleadores[i].postal}">
      </div>
      </div>
      <!--LA OTRA PARTE DEL FORM-->   

     
    <div class="mb-3">
      <div class="form-group col-12">
        <label for="ncorreo"  class="classValidate hide">CORREO</label>
        <input type="text" name="" id="ncorreo" required class="form-control"placeholder="name@example.com"value="${empleadores[i].correo}">
    </div>
    </div>

    <div class="mb-3">
      <div class="form-group col-12">
      <label for="nregimen">REGIMEN</label>
      <select class="form-select "  id= "nregimen" aria-label="Default select example"value="${empleadores[i].regimen}">        
        <option value="RESP IVA">RESPONSABLE DE IVA</option>
        <option value="NAT RESP IVA">NATURAL RESP IVA</option>
        <option value="REG ESPECIAL">REGIMEN ESPECIAL</option>  
        <option value="NAT NO RESP IVA">NAT NO RESP IVA</option>                    
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
  
    let empleadores = JSON.parse(localStorage.getItem("Empleadores"));
    empleadores[i].tipoid = document.getElementById('ntipoid').value;
    empleadores[i].numero = document.getElementById('nnumero').value;
    empleadores[i].empresa = document.getElementById('nempresa').value;
    empleadores[i].direccion = document.getElementById('ndireccion').value;
    empleadores[i].ciudad = document.getElementById('nciudad').value;
    empleadores[i].postal = document.getElementById('npostal').value;
    empleadores[i].correo = document.getElementById('ncorreo').value;
    empleadores[i].regimen = document.getElementById('nregimen').value;
    localStorage.setItem("Empleadores", JSON.stringify(empleadores));
}

//Eliminar

function eliminar(numero){
 
    let empleadores = JSON.parse(localStorage.getItem("Empleadores"));
    for(let i= 0; i < empleadores.length; i++){
        if(empleadores[i].numero == numero){
            empleadores.splice(i,1);
            alert('EMPLEADOR ELIMINADO SATISFACTORIAMENTE')
        }
    } 
    localStorage.setItem("Empleadores", JSON.stringify(empleadores));
    leer();
}

