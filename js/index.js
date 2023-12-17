crearOperador = () => {
  const orador = {
       nombre:  document.getElementById("nombre").value,
       apellido: document.getElementById("apellido").value,
       mail: document.getElementById("email").value,
       tema: document.getElementById("tema").value
  };
  fetch(`http://localhost:8080/crud/api/orador`, {
      method: "POST",
      body: JSON.stringify(orador),
  })
  .then(response => response.json()) 
  .then(json => {
      alert(`alta de orador id:${json.id}] ok`);
  })
  .catch(err => console.log(err));
}

document.getElementById("btnCrear").addEventListener('click',crearOperador);