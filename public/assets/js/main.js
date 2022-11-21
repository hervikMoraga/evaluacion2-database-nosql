
// ELIMINAR ESTUDIANTE
async function eliminarEstudiante(id_estudiante) {
  let id = id_estudiante;
  try {
    const data = await fetch(`/estudiantes/${id}`, { method: "delete" });
    const res = await data.json();

    if (res.estado) {
      window.location.href = "/estudiantes";
    }
  } catch (error) {
    console.log("ERROR ", error);
  }
}

// OBTENER ESTUDIANTE ESPECIFICO
async function getEstudiante (id_estudiante){

    const id_student_input = document.querySelector("#idDetalle")
    const name_student_input = document.querySelector("#nombreDetalle")
    const date_student_input = document.querySelector("#nacimientoDetalle")
    const career_student_input = document.querySelector("#carreraDetalle")

    const id = id_estudiante;

    try {
      const data = await fetch(`/estudiantes/${id}`, { method: "get" });
      const res = await data.json();

      if (res.estado) {
        id_student_input.textContent = res.estudiante._id
        name_student_input.textContent = res.estudiante.nombre
        career_student_input.textContent = res.estudiante.carrera
        date_student_input.textContent = res.estudiante.fecha_nacimiento.split("T")[0]
      }

    } catch (error) {
      console.log("ERROR ", error);
    }
}


// EDITAR ESTUDIANTE
async function editEstudiante(id_estudiante){

    const id_student_input = document.querySelector("#idEditar")
    const name_student_input = document.querySelector("#nombreEditar")
    const date_student_input = document.querySelector("#nacimientoEditar")
    const career_student_input = document.querySelector("#carreraEditar")
    const btnEdit = document.querySelector("#btnEdit")


    const id = id_estudiante;

    try {
      const data = await fetch(`/estudiantes/${id}`, { method: "get" });
      const res = await data.json();

      if (res.estado) {
        id_student_input.textContent = res.estudiante._id
        name_student_input.value = res.estudiante.nombre
        career_student_input.value = res.estudiante.carrera
        date_student_input.value = res.estudiante.fecha_nacimiento.split("T")[0]
      }

        body = JSON.stringify({
        nombre: name_student_input.value,
        carrera: career_student_input.value,
        fecha_nacimiento: date_student_input.value
        }) 

        btnEdit.addEventListener("click", () => enviar_update(body, id_estudiante))


    } catch (error) {
      console.log("ERROR ", error);
    }
}

async function enviar_update(body, id_estudiante){
  const name_student_input = document.querySelector("#nombreEditar")
  const date_student_input = document.querySelector("#nacimientoEditar")
  const career_student_input = document.querySelector("#carreraEditar")
  const oldBody = body

  addEventListener("click", async e => {
    e.preventDefault()

  newBody = JSON.stringify({
    nombre: name_student_input.value,
    carrera: career_student_input.value,
    fecha_nacimiento: date_student_input.value
    }) 

    if( oldBody != newBody){

      const newData = await fetch(`/estudiantes/${id_estudiante}`, {
        method: "put",
        headers:{
          'Content-Type': 'application/json'
        }, 
        body: newBody })

        const newRes = await newData.json()
        if (newRes.estado){
            window.location.href = "/estudiantes"
            
        }
        else{
            console.log("ERROR -> ",newRes)
        }

    }
    else{

      console.log("No se han realizado cambios")
      window.location.href = "/estudiantes"

    }
  });







  }