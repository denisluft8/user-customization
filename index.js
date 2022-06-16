const submit = document.getElementById('submit')


function submitCustom(){
    const resultPage = document.getElementById('result')
    resultPage.setAttribute('style', 'position: fixed;')
    
    //parâmetros para alteração do título
    const title = document.getElementById('title-input').value
    document.getElementById('title').innerHTML = title,
    titleColor = document.getElementById('title-color').value
    document.getElementById('title').style.color = titleColor
    const titleFont = document.getElementById('title-font').value
    document.getElementById('title').style.fontFamily = titleFont
    const titleSize = document.querySelector('input[name="title-size"]:checked').value
    document.getElementById('title').style.fontSize = titleSize
    
    //parâmetros para alteração do texto
    const text = document.getElementById('text-input').value
    document.getElementById('text').innerHTML = text
    const textColor = document.getElementById('text-color').value
    document.getElementById('text').style.color = textColor
    const textFont = document.getElementById('text-font').value
    document.getElementById('text').style.fontFamily = textFont
    const textSize = document.querySelector('input[name="text-size"]:checked').value
    document.getElementById('text').style.fontSize = textSize

    //alteração do background
    const backgroundColor = document.getElementById('background-color').value
    document.getElementById('result').style.backgroundColor = backgroundColor
    const submitPage = document.getElementById('submit-page')
    submitPage.setAttribute('style', 'visibility: hidden;')
}

submit.addEventListener('click', submitCustom)