
const open_and_close_Speed = 10
const screenBGcolor = 'rgb(230,230,230)'
const optionsFontColor = 'black'
const optionsSelectedFontColor = 'white'
const optionsSelectedBGColor = 'rgb(74, 145, 211)'
const font = 'Monospace'



function phoneIsClosed() {
    //run after phone are fully closed 
    //try console.log('closed') to see how works
    console.log('fully closed')
}
function phoneIsOpened() {
    //run after phone are fully loaded and on screen 
    //try console.log('opened') to see how works
    console.log('fully opened')
}


function createPhone() {

    if (document.getElementById('celular')) {
        document.getElementById('celular').remove()
    }
    const estilo = document.createElement('style')
    estilo.innerText = `.celular-tela::-webkit-scrollbar { width: 0px;}
    .apk {
        min-width: 32%;
        max-width: 32%;
        border-radius: 15px;
        scale: 0.0;
        transition: all 0.4s ease;
    }
    .option {
        transition: all 0.4s ease;
        font-family: ${font};
        padding: 3px;
        font-weight: bolder;
    }
    .break {
        transition: all 0.4s ease;
        font-family: ${font};
        padding: 3px;
        font-weight: bolder;
    }
    .option:hover {
        background-color: ${optionsSelectedBGColor};
        color: ${optionsSelectedFontColor};
    }`
    document.head.appendChild(estilo)

    const celular = document.createElement('div')
    celular.id = 'celular'
    celular.className = 'celular-corpo'
    celular.style.position = 'fixed'
    celular.style.right = '10px'
    celular.style.bottom = '-1000px'
    celular.style.width = '200px'
    celular.style.height = '350px'
    celular.style.backgroundColor = 'black'
    celular.style.borderRadius = '10px'
    celular.style.padding = '10px'
    celular.style.cursor = 'pointer'
    document.body.appendChild(celular)

    const tela = document.createElement('div')
    tela.id = 'tela'
    tela.className = 'celular-tela'
    tela.style.backgroundColor = screenBGcolor
    tela.style.minHeight = '90%'
    tela.style.maxHeight = '100%'
    tela.style.minWidth = '90%'
    tela.style.maxWidth = '100%'
    tela.style.paddingTop = '5%'
    tela.style.overflowY = 'auto'
    tela.style.color = optionsFontColor
    celular.appendChild(tela)

    celular.addEventListener('click', () => {
        descer(30)
        function descer(v) {
            setTimeout(() => {
                if (v >= -370) {
                    celular.style.bottom = v + 'px'
                    var v2 = v -= open_and_close_Speed
                    descer(v2);
                } else {
                    phoneIsClosed()
                }
            }, 1);
        }
    })

}


function createMenu(voids) {
    document.getElementById('tela').innerHTML = ''
    voids()
}

function addAPK(img, on_click) {
    const i = document.createElement('img')
    i.src = img
    i.className = 'apk'
    document.getElementById('tela').appendChild(i)

    setTimeout(() => {
        i.style.scale = '0.8'
        i.addEventListener('mouseover', () => {
            i.style.scale = '0.9'
        })
        i.addEventListener('mouseleave', () => {
            i.style.scale = '0.8'
        })
        i.addEventListener('click', (e) => {
            e.stopPropagation()
            on_click()
        })
        return i;
    }, 500);
}


function addOption(text, rightText, on_click) {
    const d = document.createElement('div')
    d.className = 'option'
    d.innerHTML = '<span style="margin-left: 5px">' + text + '</span><span style="float:right;margin-right:5px">' + rightText + '</span>'
    document.getElementById('tela').appendChild(d)

    setTimeout(() => {
        d.addEventListener('mouseover', () => {
            d.style.scale = '1.05'
        })
        d.addEventListener('mouseleave', () => {
            d.style.scale = '1.0'
        })
        d.addEventListener('click', (e) => {
            e.stopPropagation()
            on_click()
        })
        return d;
    }, 200);
}


function addRangeOption(text, on_click) {
    const d = document.createElement('div')
    d.className = 'option'
    d.innerHTML = '<span style="margin-left: 5px">' + text + '</span>'
    document.getElementById('tela').appendChild(d)

    const i = document.createElement('input')
    i.type = 'range'
    i.style.float = 'right'
    i.style.width = '50%'
    d.appendChild(i)

    setTimeout(() => {
        d.addEventListener('mouseover', () => {
            d.style.scale = '1.05'
        })
        d.addEventListener('mouseleave', () => {
            d.style.scale = '1.0'
        })
        d.addEventListener('input', (e) => {
            e.stopPropagation()
            on_click(i.value)
        })
        d.addEventListener('click', (e) => {
            e.stopPropagation()
        })
        return d;
    }, 200);
}


function addBreak(text='') {
    const d = document.createElement('div')
    d.className = 'break'
    d.innerHTML = '<center>&nbsp;' + text + '</center>'
    document.getElementById('tela').appendChild(d)

    setTimeout(() => {
         
        return d;
    }, 200);
}




function showPhone() {
    subir(-370)
    function subir(v) {
        setTimeout(() => {
            if (v <= 30) {
                document.getElementById('celular').style.bottom = v + 'px'
                var v2 = v += open_and_close_Speed
                subir(v2);
            } else {
                phoneIsOpened()
            }
        }, 1);
    }
}
