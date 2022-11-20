document.getElementById("formulario").addEventListener("submit", crear)

function crear(e){
    tipoid = document.getElementById("tipoid").value
    numero = document.getElementById("numero").value
    paciente = document.getElementById("paciente").value;
    fecha = document.getElementById("fecha").value
    espe = document.getElementById("espe").value

    let affiliate =  {
        tipoid,numero,paciente,fecha,espe
    }
  
   if(localStorage.getItem("Afiliados") === null){
        let afiliados = [];
        afiliados.push(affiliate);
        localStorage.setItem("Afiliados", JSON.stringify(afiliados))
    } else{
        let afiliados = JSON.parse(localStorage.getItem("Afiliados"))
        afiliados.push(affiliate)
        localStorage.setItem("Afiliados", JSON.stringify(afiliados))
      
    }
    
    leer();
    document.getElementById("formulario").reset();
    e.preventDefault();
    
    console.log("PACIENTE REGISTRADO SATISFACTORIAMENTE")
}

function leer(){
let afiliados = JSON.parse(localStorage.getItem("Afiliados"));
document.getElementById("tbody").innerHTML ="";
for(let i=0; i < afiliados.length; i++){
let tipoid = afiliados[i].tipoid;
let numero = afiliados[i].numero;
let paciente = afiliados[i].paciente;
let fecha = afiliados[i].fecha;
let espe = afiliados[i].espe;
document.getElementById("tbody").innerHTML +=
`<tr>
<td>${tipoid}</td>
<td>${numero}</td>
<td>${paciente}</td>
<td>${fecha}</td>
<td>${espe}</td>
<td><button class="btn btn-success" onclick="Editar('${numero}')">Edit</button></td>
<td><button class="btn btn-danger" onclick="eliminar('${numero}')">Delete</button></td>
`
}
}
leer();

function Editar(numero){
var div = document.getElementById("body");
let afiliados = JSON.parse(localStorage.getItem("Afiliados"));
for(let i= 0; i < afiliados.length; i++){
    if(afiliados[i].numero === numero){
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
              <label for="">TIPO DE DOCUMENTO</label>
              <select class="form-select "  id= "ntipoid" aria-label="Default select example" value="${afiliados[i].tipoid}">        
              <option value="CC">CC</option>
              <option value="TI">TI</option>
              <option value="PP">PP</option>
              <option value="RC">RC</option>
              <option value="OTRO">OTRO</option>                     
              </select>
          </div>             
          </div>
          <div class="mb-3">
            <label for="numero" class="form-label">NUMERO</label>
            <input type="text" class="form-control" id="nnumero" value="${afiliados[i].numero}">
          </div>
          <div class="mb-3">
            <label for="paciente" class="form-label">PACIENTE</label>
            <input type="text" class="form-control" id="npaciente" value="${afiliados[i].paciente}">
          </div>
          <div class="mb-3">
            <label for="fecha" class="form-label">FECHA</label>
            <input type="date" class="form-control" id="nfecha" value="${afiliados[i].fecha}">
          </div>
          <div class="mb-3">
            <div class="form-gloup col-12">
              <label for="">ESPECIALIDAD</label>
              <select class="form-select "  id="nespe" aria-label="Default select example" value="${afiliados[i].espe}  >
               <option value="PEDI">PEDIATRIA</option>
               <option value="MED GEN">MEDICO GENRAL</option>
               <option value="OFT">OFTANMOLOGIA</option>
               <option value="GINE">GINECOLOGIA</option>
               <option value="ODON">ODONTOLOGIA</option>
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
  
    let afiliados = JSON.parse(localStorage.getItem("Afiliados"));
    afiliados[i].tipoid = document.getElementById('ntipoid').value;
    afiliados[i].numero = document.getElementById('nnumero').value;
    afiliados[i].paciente = document.getElementById('npaciente').value;
    afiliados[i].fecha = document.getElementById('nfecha').value;
    afiliados[i].espe = document.getElementById('nespe').value;
    localStorage.setItem("Afiliados", JSON.stringify(afiliados));
}



function eliminar(numero){
 
    let afiliados = JSON.parse(localStorage.getItem("Afiliados"));
    for(let i= 0; i < afiliados.length; i++){
        if(afiliados[i].numero == numero){
            afiliados.splice(i,1);
            alert('REGISTRO ELIMINADO SATISFACTORIAMENTE')
        }
    } 
    localStorage.setItem("Afiliados", JSON.stringify(afiliados));
    leer();
}

