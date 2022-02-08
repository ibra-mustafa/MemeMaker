function userText(){

}

function memeResponse(image, upper, lower){
    const canva = document.getElementById('canva')
    const contex = canva.getContext('2d')
    contex.drawImage(image, 0, 0, canva.width, canva.height)
}

function textHasChanged(e){
    let targetId = e.target.id
    let text = e.target.value

    if(targetId == "upperText"){
        window.upperText = text
    }else{
        window.lowerText = text
    }
    
    memeResponse(window.imageSrc, window.upperText, widow,lowerText)

}

