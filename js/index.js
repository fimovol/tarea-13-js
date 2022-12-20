let mostrar = document.getElementById("mostrar")
let distancia = document.getElementById("distancia")
let calcular = document.getElementById("calcular")

tarifa = 250
exeso = 0
total = 0

calcular.addEventListener("click",()=> {
    if(distancia.value < 300){
        tarifa = 250
        total = tarifa
    }else if(distancia.value > 300 && distancia.value < 1000){
        exeso = distancia.value - 300
        cobrar = exeso * 30
        total = cobrar + tarifa
    }else if(distancia.value > 1000){
        exeso1000 = distancia.value - 1000
        cobrar = exeso1000 * 20
        entre300y1000 = distancia.value - exeso1000
        entre300y1000 = entre300y1000 - 300
        cobrar2 = entre300y1000 * 30
        total = cobrar + cobrar2 + tarifa
    }
    if(distancia.value > 500){
        total = total-(total * 0.1)
    }
    mostrar.innerText= `el total es de ${total} soles`
})
