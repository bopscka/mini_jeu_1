const genererNombreAleatoire = () =>{
    //Générer un nombre entre 1 et 100
    const nombreDecimal = (Math.random()*100) + 1
    const nombre = Math.trunc(nombreDecimal)

    //Retuourner ce nombre
    return nombre
}

let numeroTentative = 1
const nombreATrouver = genererNombreAleatoire()
console.log(nombreATrouver)

const proposerNombre = () => {
    // recuperer le champs avec le nombre 
    const input = document.getElementById('input-nombre')
    const valeur = input.value

    console.log(valeur, typeof valeur)

    //transformer la valeur texte en nombre
    const nombrePropose = parseInt(valeur,10)

    const divProposition = document.createElement('div')
    divProposition.textContent = 'Tentative ' + numeroTentative

    const container = document.getElementById('container')
    container.appendChild(divProposition)
    
    console.log(nombrePropose, typeof nombrePropose)

    // comparer le nombre avec le nombre a trouver
    if (nombrePropose === nombreATrouver){
        console.log('BRAVO!!!!')

        const divEgal = document.createElement('div')
        divEgal.textContent = 'Bravo!!!! (*-*)'

        container.appendChild(divEgal)

    }else{
        if(nombreATrouver > nombrePropose){
            console.log('le nombre est plus grand ')

            const divPlusG = document.createElement('div')
            divPlusG.textContent = 'plus grand :-)'

        container.appendChild(divPlusG)

        }else{
            console.log('le nombre est plus petit')

            const divPlusP = document.createElement('div')
            divPlusP.textContent = 'il est plus petit :-/ ' + numeroTentative

        container.appendChild(divPlusP)

        }

        numeroTentative += 1
    }

}

// Récupérer le bouton
// lorsqu'il y a u click; effectuer une proposition de nombre

const bouton = document.getElementById('button-proposer')
bouton.addEventListener('click', proposerNombre)
