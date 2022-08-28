const genererNombreAleatoire = () =>{
    //Générer un nombre entre 1 et 100
    const nombreDecimal = (Math.random()*100) + 1
    const nombre = Math.trunc(nombreDecimal)

    //Retuourner ce nombre
    return nombre
}

const nombreATrouver = genererNombreAleatoire()
console.log(nombreATrouver)

const proposerNombre = () => {
    // recuperer le champs avec le nombre 
    const input = document.getElementById('input-nombre')
    const valeur = input.value

    console.log(valeur, typeof valeur)

    //transformer la valeur texte en nombre
    const nombrePropose = parseInt(valeur,10)
    
    console.log(nombrePropose, typeof nombrePropose)

    // comparer le nombre avec le nombre a trouver
    if (nombrePropose === nombreATrouver){
        console.log('BRAVO!!!!')
    }else{
        if(nombreATrouver > nombrePropose){
            console.log('le nombre est plus grand ')
        }else{
            console.log('le nombre est plus petit')
        }
    }

}

// Récupérer le bouton
// lorsqu'il y a u click; effectuer une proposition de nombre

const bouton = document.getElementById('button-proposer')
bouton.addEventListener('click', proposerNombre)
