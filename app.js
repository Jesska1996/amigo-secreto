// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Lista de amigos
let amigos = ["Ana", "Rocio", "Bere", "Lupita"];       

// Función para agregar amigos
        function agregarAmigo() {
            let input = document.getElementById("nombreAmigo"); 
            let nombre = input.value.trim(); // Obtener y limpiar espacios en blanco

            if (nombre === "") {
                alert("Por favor, inserte un nombre.");
                return; // Detener la ejecución si el campo está vacío
            }

            amigos.push(nombre); // Agregar al array
            actualizarLista(); // Actualizar la lista en pantalla
            input.value = ""; // Limpiar el campo de entrada
        }

        // Función para mostrar la lista actualizada
        function actualizarLista() {
            let lista = document.getElementById("listaAmigos");
            lista.innerHTML = ""; // Limpiar la lista antes de actualizar

            amigos.forEach((amigo) => {
                let li = document.createElement("li");
                li.textContent = amigo;
                lista.appendChild(li);
            });
        }

        // Mostrar lista inicial
        actualizarLista();

        function actualizarLista() {
            let lista = document.getElementById("listaAmigos"); // 1. Obtener el elemento de la lista
            lista.innerHTML = ""; // 2. Limpiar la lista existente
        
            // 3. Iterar sobre el arreglo amigos
            for (let i = 0; i < amigos.length; i++) {
                let li = document.createElement("li"); // Crear un nuevo elemento <li>
                li.textContent = amigos[i]; // Asignar el nombre del amigo
                lista.appendChild(li); // 4. Agregar el <li> a la lista
            }
        }

        function sortearAmigo() {
            // 1. Validar que haya amigos en la lista
            if (amigos.length === 0) {
                alert("No hay amigos en la lista para sortear.");
                return;
            }
        
            // 2. Generar un índice aleatorio
            let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        
            // 3. Obtener el nombre sorteado
            let amigoSorteado = amigos[indiceAleatorio];
        
            // 4. Mostrar el resultado en la página
            document.getElementById("resultadoSorteo").innerHTML = `🎉 El amigo sorteado es: <b>${amigoSorteado}</b>`;
        }
        