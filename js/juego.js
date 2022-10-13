const divMensaje = document.querySelector(".divMensaje")

let iconos = []
        let selecciones = []

        generarTablero()

        const mensajes = [
            "No todas las personas en internet son buenas",
            "No todas las personas en internet son buenas",
            "No mires ni descargues archivos o imagenes extraños o de sitios web sin supervision de un adulto",
            "No mires ni descargues archivos o imagenes extraños o de sitios web sin supervision de un adulto",
            "La gente se hace pasar por personas que no son para engañarte",
            "La gente se hace pasar por personas que no son para engañarte",
            "Siempre explora en internet con la supervicion de un adulto, es para que aprendas y seas ayudado",
            "Siempre explora en internet con la supervicion de un adulto, es para que aprendas y seas ayudado",
            "No ingreses en paginas peligrosas o raras, van a intentar engañarte",
            "No ingreses en paginas peligrosas o raras, van a intentar engañarte",
            "No compartas imagenes tuyas o de tu familia",
            "No compartas imagenes tuyas o de tu familia",
            "La informacion de tarjeta de tus padres es privada, nadie mas la necesita",
            "La informacion de tarjeta de tus padres es privada, nadie mas la necesita",
            "No aceptes videollamadas de gente que no conoces",
            "No aceptes videollamadas de gente que no conoces",
            "Habla con tus padres si estas en peligro, ellos pueden ayudarte, no estas solo",
            "Habla con tus padres si estas en peligro, ellos pueden ayudarte, no estas solo",
            "Tu informacion privada es solo para ti, nunca se la envies a nadie mas",
            "Tu informacion privada es solo para ti, nunca se la envies a nadie mas",
        ];

        function cargarIconos() {
            iconos = [
                '<img src="https://i.imgur.com/EC1aFti.png" width="100%">',
                '<img src="https://i.imgur.com/xwYW08t.png" width="100%">',
                '<img src="https://i.imgur.com/l95Hipf.png" width="100%">',
                '<img src="https://i.imgur.com/cFK5bpz.png" width="100%">',
                '<img src="https://i.imgur.com/NhrbODk.png" width="100%">',
                '<img src="https://i.imgur.com/yP5xC5s.png" width="100%">',
                '<img src="https://i.imgur.com/xVwniUH.png" width="100%">',
                '<img src="https://i.imgur.com/12UMOQ3.png" width="100%">',
                '<img src="https://i.imgur.com/TcwJXqg.png" width="100%">',
                '<img src="https://i.imgur.com/3SIpbR0.png" width="100%">',
            ]
        }

        function generarTablero() {
            divMensaje.innerHTML = ``;
            cargarIconos()
            let len = iconos.length
            selecciones = []
            let tablero = document.getElementById("tablero")
            let tarjetas = []
            
            for (let i = 0; i < len*2; i++) {
                tarjetas.push(`
                <div class="area-tarjeta" onclick="seleccionarTarjeta(${i})">
                    <div class="tarjeta" id="tarjeta${i}">
                        <div class="cara trasera" id="trasera${i}">
                            ${iconos[0]}
                        </div>
                        <div class="cara superior">
                            <i class="far fa-question-circle"></i>
                        </div>
                    </div>
                </div>        
                `)
                if (i % 2 == 1) {
                    iconos.splice(0, 1)
                }
            }
            tarjetas.sort(() => Math.random() - 0.5)
            tablero.innerHTML = tarjetas.join(" ")
        }

        function seleccionarTarjeta(i) {
    
            let tarjeta = document.getElementById("tarjeta" + i)
            if (tarjeta.style.transform != "rotateY(180deg)") {
                tarjeta.style.transform = "rotateY(180deg)"
                selecciones.push(i)
                if(mensajes[i] != undefined){
                    sendMensaje = mensajes[i]
                }
            }
            if (selecciones.length == 2) {
                deseleccionar(selecciones, sendMensaje)
                selecciones = []
            }
        }

        function deseleccionar(selecciones, mensaje='') {
            setTimeout(() => {
                let trasera1 = document.getElementById("trasera" + selecciones[0])
                let trasera2 = document.getElementById("trasera" + selecciones[1])
                if (trasera1.innerHTML != trasera2.innerHTML) {
                    let tarjeta1 = document.getElementById("tarjeta" + selecciones[0])
                    let tarjeta2 = document.getElementById("tarjeta" + selecciones[1])
                    tarjeta1.style.transform = "rotateY(0deg)"
                    tarjeta2.style.transform = "rotateY(0deg)"
                }else{
                    divMensaje.innerHTML = `<h1>${mensaje}</h1>`;
                    trasera1.style.background = "plum"
                    trasera2.style.background = "plum"
                }
            }, 1000);
        }