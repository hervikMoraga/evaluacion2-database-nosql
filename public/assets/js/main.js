
// ELIMINAR ESTUDIANTE
async function eliminarEstudiante(id_estudiante) {
  let id = id_estudiante;
  try {
    const data = await fetch(`/${id}`, { method: "delete" });
    const res = await data.json();

    if (res.estado) {
      window.location.href = "/";
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
      const data = await fetch(`/${id}`, { method: "get" });
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
      const data = await fetch(`/${id}`, { method: "get" });
      const res = await data.json();

      if (res.estado) {
        id_student_input.textContent = res.estudiante._id
        name_student_input.value = res.estudiante.nombre
        career_student_input.value = res.estudiante.carrera
        date_student_input.value = res.estudiante.fecha_nacimiento.split("T")[0]
      }


      btnEdit.addEventListener('click', async () =>{
        const newData = await fetch(`/${id}`, {method: "put",
        headers:{
          'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({
          nombre: name_student_input.value,
          carrera: career_student_input.value,
          fecha_nacimiento: date_student_input.value
        }) })
  
        const newRes = await newData.json()
        if (newRes.estado){
            window.location.href = "/"
        }
        else{
            console.log(newRes)
        }
      })





      
    } catch (error) {
      console.log("ERROR ", error);
    }
}

