const genererNombreAleatoire = () =>{
    //Générer un nombre entre 1 et 100
    const nombreDecimal = (Math.random()*100) + 1
    const nombre = Math.trunc(nombreDecimal)

    //Retuourner ce nombre
    return nombre
}

// Récupérer le bouton
// lorsqu'il y a u click; effectuer une proposition de nombre

const bouton = document.getElementById('button-proposer')
bouton.addEventListener('click', proposerNombre)