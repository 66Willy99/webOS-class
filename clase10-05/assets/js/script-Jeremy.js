function obtenerDigimones() {
    return new Promise((resolve, reject) => {
      fetch('https://digimon-api.vercel.app/api/digimon')
        .then(response => {
          if (!response.ok) {
            throw new Error('No se pudo obtener la lista de Digimones');
          }
          return response.json();
        })
        .then(data => {
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
  
  // Uso de la promesa
  obtenerDigimones()
    .then(digimones => {
      console.log('Lista de Digimones:', digimones);
      // Aquí puedes hacer lo que necesites con la lista de Digimones
    })
    .catch(error => {
      console.error('Error al obtener Digimones:', error);
    });
  