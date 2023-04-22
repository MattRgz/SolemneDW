let palindromo = (palabra,e) =>{
    let palabraReversada = palabra.replace(/\s+/g, '').toLowerCase().split('').reverse().join('')
    if(palabra.toLowerCase().split('').length < 10){
        if(palabra.split('').length < 3){
            console.log('Error: Debe ingresar una de más de 2 letras')
            document.getElementById('textReturn').innerHTML = 'Error:  Debe ingresar una de más de 2 letras'
            document.getElementById('textReturn').style.color = 'red'
        }else{
            if(palabra.replace(/\s+/g, '').toLowerCase() == palabraReversada){
                console.log('ES UN PALíNDROMO')
                document.getElementById('textReturn').innerHTML = 'Es un palíndromo'
                document.getElementById('textReturn').style.color = 'black'
            }
            else{
                console.log('NO ES UN PALíNDROMO')
                document.getElementById('textReturn').innerHTML = 'No es un palíndromo'
                document.getElementById('textReturn').style.color = 'black'
            }
        }
    }
    else{
        console.log('Error: palabra ingresada excede las 10 letras')
        document.getElementById('textReturn').innerHTML = 'Error: palabra ingresada excede las 10 letras'
        document.getElementById('textReturn').style.color = 'red'
    }
}
let checkPalindromo = () =>{
    let palabra = document.getElementById('pal-entry').value
    palindromo(palabra)
}
document.getElementById('goButton').addEventListener('click',checkPalindromo())



