const canvas = document.getElementById('prueba')
const ctx = canvas.getContext('2d')


//ctx.fillRect(0,0,50,50) //Pintar un rectangulo con el interior coloreados
//ctx.clearRect(1,1,48,48) // Borrar todo lo que haya en el rectangulo
//ctx.strokeRect(0,0,50,50) //Pintar un rectangulo solo con los bordes coloreados

//ctx.fillRect(0,0,canvas.width, canvas.height)

//ctx.beginPath() //Empieza a pintar una figura
//ctx.arc(50,50,50,0,(Math.PI/180)*180) //hace el trazo de un arco
//ctx.closePath() //Cierra la figura
//ctx.fillStyle = 'green' //cambia el color con el que rellenaremos una figura
//ctx.fill() //Rellena la figura

//ctx.beginPath()
//ctx.arc(250,250,50,0,(Math.PI/180)*360)
//ctx.closePath()
//ctx.strokeStyle = 'red'
//ctx.stroke()

//ctx.beginPath()
//ctx.arc(400,400,50,0,(Math.PI/180)*360)
//ctx.closePath()
//ctx.strokeStyle = 'black' //cambia el color con el que pintaremos el contorno de la figura
//ctx.fill() //Pinta el contorno de la figura


//ancho del contenedor => canvas.width
//alto del contendor => canvas.height

const castor = new Image() //Crea un elemento imagen pero todavía no tiene una imagen "asignada"
castor.src = "/como-es-el-castor.jpg" // Le asigna la imagen a ese elemento

let castorX = 50
let castorY = 50
let isMovingLeft = false
let isMovingRight = true

setTimeout(() => {ctx.drawImage(castor, castorX, castorY, 50, 50)},1000)

const move = (()=>{
    if(isMovingRight){
        castorX++
    }else if(isMovingLeft){
        castorX--
    }
})

addEventListener('keydown', e => console.log(e.key))

const refresh = (()=>{
    ctx.clearRect(castorX,castorY,50, 50)
    move()
    if(castorX === canvas.width-50){
        isMovingRight = false
        isMovingLeft = true
    }else if(castorX === 0){
        isMovingLeft = false
        isMovingRight = true
    }
    ctx.drawImage(castor, castorX, castorY, 50, 50)
    requestAnimationFrame(refresh) //este metodo crea un bucle que actualiza la pantalla según los Hz de tu pantalla
})

refresh()




/* const canvas = document.getElementById('prueba')
const ctx = canvas.getContext('2d')

function radians(degrees){
    return (Math.PI/180)*degrees
  }

ctx.beginPath()
ctx.arc(150,170,15,0,radians(360))
ctx.closePath()
ctx.fill()

ctx.beginPath()
ctx.arc(150,170,40,0,radians(270), true)
ctx.lineWidth = 20;
ctx.stroke()
ctx.closePath()

ctx.beginPath()
ctx.arc(150,170,80,0,radians(270), true)
ctx.lineWidth = 20;
ctx.stroke()
ctx.closePath()
 */

//Todo este codigo comentado es el logo que hemos hecho del logo de conectividad