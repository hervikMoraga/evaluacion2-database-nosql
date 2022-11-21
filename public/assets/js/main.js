
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
    console.log("Editar estudiante: ", id_estudiante)
}

