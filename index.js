let formulario = document.querySelector('#formulario')

formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    let user = e.target[0].value
    let pass = e.target[1].value
    if(user.length == 0 || pass.length == 0) {
        alert('Los campos no deben estar vacíos')
        return 0
    } else {
        if (!/@/.test(user)) {
            alert('Falta el arroba en el usuario')
            return 0
        }
        
    }

    alert('Los datos ingresados son correctos')
})