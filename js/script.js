function mostrarDescripcion(id) {
    if (id === "Info"){
        var descripcion = document.getElementById("TodaLaInfo");
    }
    else if (id == "Info2"){
        var descripcion = document.getElementById("TodaLaInfo2");
    }
    if (descripcion.style.display === "none") {
      descripcion.style.display = "block";
    } else {
      descripcion.style.display = "none";
    }
  }