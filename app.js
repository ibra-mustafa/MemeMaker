const canva = document.getElementById('canva')
const contex = canva.getContext('2d')
// let image =  new Image()
image.onload=()=>{
    contex.drawImage(image ,0 ,0 ,canva.width ,canva.height)
}
// image.src= "images.jpg"

