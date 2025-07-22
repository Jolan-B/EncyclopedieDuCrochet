function couleur() {

    let compte = parseInt(document.getElementById("compte").value);

    if (!(compte == "" || isNaN(compte))) {

        if (compte == 0) {
            document.getElementById("compte").style.color = "blue"
        }
        else if (compte > 0) {
            document.getElementById("compte").style.color = "green"
        }
        else {
            document.getElementById("compte").style.color = "red"
        }

    }
}

function affiche() {
    let appli = document.getElementById("appli").style.display;

    console.log(appli)
    if (appli == "") {
        document.getElementById("compte").style.color = "blue"
        document.getElementById("compte").value = 0;
        document.getElementById("appli").style.display = "flex";
        document.getElementById("compteur").style.display = "none";
    }
    else if (appli == "flex") {
        document.getElementById("appli").style.display = "";
        document.getElementById("compteur").style.display = "flex";
    }

}

function incremente() {
    let compte = parseInt(document.getElementById("compte").value);

    if (compte == "" || isNaN(compte)) {
        compte = 0;
    }
    compte += 1;

    if (compte == 0) {
        document.getElementById("compte").style.color = "blue"
    }
    else if (compte == 1) {
        document.getElementById("compte").style.color = "green"
    }

    document.getElementById("compte").value = compte;

}

function decremente() {
    let compte = parseInt(document.getElementById("compte").value);

    if (compte == "" || isNaN(compte)) {
        compte = 0;
    }

    compte -= 1;

    if (compte == 0) {
        document.getElementById("compte").style.color = "blue"
    }
    else if (compte == -1) {
        document.getElementById("compte").style.color = "red"
    }

    document.getElementById("compte").value = compte;
}

function zero() {
    document.getElementById("compte").style.color = "blue"
    document.getElementById("compte").value = 0;
}