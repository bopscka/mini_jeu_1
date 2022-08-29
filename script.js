const genererNombreAleatoire = () =>{
    //Générer un nombre entre 1 et 100
    const nombreDecimal = (Math.random()*100) + 1
    const nombre = Math.trunc(nombreDecimal)

    //Retuourner ce nombre
    return nombre
}

let numeroTentative = 1
let nombreBas = 1
let nombreHaut = 100

const nombreATrouver = genererNombreAleatoire()
console.log(nombreATrouver)

const ajouterAuContainer = texte => {
    const divText = document.createElement('div')
    divText.textContent = texte

    const container = document.getElementById('container')
    container.insertBefore(divText,container.firstChild)

}

const proposerNombre = () => {
    // recuperer le champs avec le nombre 
    const input = document.getElementById('input-nombre')
    const valeur = input.value

    console.log(valeur, typeof valeur)

    //transformer la valeur texte en nombre
    const nombrePropose = parseInt(valeur,10)

        //Vérifier que la valeur n'est ni vide, ni supérieur à 100
        if (valeur === '' || nombrePropose > 100 || nombrePropose === 0 ){
            //si elle est vide ,ne rien faire
            // alert('Veuillez entrer une saisie valide!')
            Swal.fire(
                'Oups 😥️!',
                'tu dois entrer une saisie valide!',
                'error'
              )
            return
        }

    ajouterAuContainer('Tentative ' + numeroTentative)
    
    console.log(nombrePropose, typeof nombrePropose)

    // comparer le nombre avec le nombre a trouver
    if (nombrePropose === nombreATrouver){
        console.log('BRAVO!!!! ')

        ajouterAuContainer('Bravo!!!! (*-*)👏️😉️')

        const elementCentre = document.getElementById('centre')
        elementCentre.textContent = nombrePropose + '💡️'

    }else{
        if(nombreATrouver > nombrePropose){
            console.log('le nombre est plus grand ')

            ajouterAuContainer('il est plus grand 😊️:-)')

            //si le nombre est supérieur au plus bas:
            if(nombrePropose > nombreBas){
                const elementBas = document.getElementById('bas')
                elementBas.textContent = nombrePropose + '📈️'
                nombreBas = nombrePropose
            }

        }else{
            console.log('le nombre est plus petit')
            ajouterAuContainer('il est plus petit 😅️ ')

            //si le nombre est inférieur au plus Haut:
            if(nombrePropose < nombreHaut){
                const elementHaut = document.getElementById('haut')
                elementHaut.textContent = nombrePropose + '📉️'
                nombreHaut = nombrePropose
            }

        }

        numeroTentative += 1
    }

}

// Récupérer le bouton
// lorsqu'il y a u click; effectuer une proposition de nombre

const bouton = document.getElementById('button-proposer')
bouton.addEventListener('click', proposerNombre)
