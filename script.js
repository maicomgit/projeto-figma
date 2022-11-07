let modotela = document.getElementById('escuroClaro')
let imgWats = document.getElementById('imgWats')
let li = document.querySelectorAll('li , a, .textReceitas2')

console.log(li)
modotela.addEventListener('click',() =>{
     trocaCorFonte()
     validaImgWats()
     let body = document.querySelector('body')
     let footer = document.querySelector('footer div p')
     footer.classList.toggle('fonteClara')
     let sectionCards = document.querySelector('.sectionCards')
     let section = document.querySelector('section')
     let quemSomos = document.querySelector('.divQuemSomos')
     body.classList.toggle('dark')
     quemSomos.classList.toggle('dark')
     sectionCards.classList.toggle('dark')
     section.classList.toggle('dark')
     validaNome()
})   

function validaNome(){
     const teste =  modotela.getAttribute('src')
     console.log(`valor da imagem ${teste}`)
     if (teste == 'lua.png'){
          modotela.setAttribute('src','brilho.png')
     } else 
          modotela.setAttribute('src','lua.png')
}
function validaImgWats (){
     const img =  imgWats.getAttribute('src')
     if(img == 'assets/images/whatsapp.png'){
          imgWats.setAttribute('src','WatsVerde.png')
     }else  imgWats.setAttribute('src','assets/images/whatsapp.png')
     
}

function trocaCorFonte(){
     li.forEach(function(elemento){
          elemento.classList.toggle('fonteClara')
     });
}