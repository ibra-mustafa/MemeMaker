
const startCanvas =(id)=>{
   return new fabric.Canvas(id,{
        backgroundColor:'gray'
    })
}
const rawCanva = document.getElementById('canvas') 
const canvas = startCanvas('canvas')

function backGroundImage(src, canvas){
    fabric.Image.fromURL(src,(img)=>{
        canvas.add(img)
        
    })
}
canvas.requestRenderAll()

const reader = new FileReader()

function addTemp(e){
  const temp = document.getElementById('myImg').files[0]
  reader.readAsDataURL(temp)
}



const memeTemp = document.getElementById('myImg')
memeTemp.addEventListener('change', addTemp)
reader.addEventListener("load", ()=>{
    fabric.Image.fromURL(reader.result, img=>{
        canvas.add(img)
        canvas.requestRenderAll()
    })
})

const newText = document.getElementById('memeText')
newText.addEventListener('click', addtext )
function addtext() {
  canvas.add(new fabric.IText('Tap and Type', {
    left: 50,
    top: 100,
    fontFamily: 'impact',
    strokeText:'black',
    fill: 'white',
    fontSize: 50
  }));
}

const saveButton = document.getElementById('saveMeme') 

saveButton.addEventListener("click", saveMeme )
function saveMeme(e){
     var image = rawCanva.toDataURL("BestMeme/jpg");
    e.href = image;
}