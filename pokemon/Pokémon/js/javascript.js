/* cette fonction permet de donner un nombre aléatoire entre les 2 chiffre donné */

function entierAleatoire(min, max)
{
 return Math.floor(Math.random() * (max - min + 1)) + min;
}


/* on attribut des valeurs au valiable */

var HP = 100;
var viveattaque = entierAleatoire(5, 10);
var flammèche = entierAleatoire(10, 15);
var lanceflamme = entierAleatoire(15, 20);
var déflagration = entierAleatoire(20, 25);
var va = 25;
var fl = 25;
var lf = 15;
var def = 5;
   
    
  



/* les attaques */

function attaquerapide() {
    HP = HP - viveattaque;
    va = va -1; 
    document.getElementById('truc').innerHTML =' PP : '+ va + '/25';
    document.getElementById('pointdevie').innerHTML = HP + ' PV';
    document.getElementById('pointdevie').style.width = HP + '%';
    viveattaque = entierAleatoire(5, 10);
     comparevie(); lesalertes(); viveallure();


}


function flammouille() {
    HP = HP - flammèche;
    fl = fl -1;
    document.getElementById('machin').innerHTML =' PP : '+ fl + '/25';
    document.getElementById('pointdevie').innerHTML = HP + ' PV';
    document.getElementById('pointdevie').style.width = HP + '%';
    flammèche = entierAleatoire(10, 15);
    comparevie(); lesalertes(); gertrude();
}


function lanceburne() {
    HP = HP - lanceflamme;
    lf = lf -1;
    document.getElementById('chose').innerHTML =' PP : '+ lf + '/15';
    document.getElementById('pointdevie').innerHTML = HP + ' PV';
    document.getElementById('pointdevie').style.width = HP + '%';
    lanceflamme = entierAleatoire(15, 20);
    comparevie(); lesalertes(); kamehameha();
}


function déflagrasion() {
    HP = HP - déflagration;
    def = def -1;
    document.getElementById('bidule').innerHTML =' PP : '+ def + '/5';
    document.getElementById('pointdevie').innerHTML = HP + ' PV';
    document.getElementById('pointdevie').style.width = HP + '%';
    déflagration = entierAleatoire(20, 25);
    comparevie(); lesalertes(); megabouledepoil();

}



/* jauges pour la vie*/


/*
function barrerouge() {
    var element = document.getElementById("pointdevie");
    element.classList.add("bg-danger");
}

function barreverte() {
    var element = document.getElementById("pointdevie");
    element.classList.add("bg-sucess");
}

function barrejaune() {
    var element = document.getElementById("pointdevie");
    element.classList.add("bg-warning");
}

*/



function comparevie() {
    if (HP > 50) {
   // couleurprogressbarre('bg-sucess');
    $( "#pointdevie" ).addClass( "bg-sucess" );
    } else if (HP > 25 && HP < 50) {
       // couleurprogressbarre("bg-warning");
        $( "#pointdevie" ).addClass( "bg-warning" );
    } else if (HP< 25) {
       // couleurprogressbarre("bg-danger");
        $( "#pointdevie" ).addClass( "bg-danger" );
    }


}




















function couleurprogressbarre(couleur) {
    var element = document.getElementById("pointdevie");
    element.classList.add(couleur);
}

/* annimation mort */

function lesalertes() {
    if (HP<=0) {
        
         mortalité();
        
       
    }
}



/* cette partie permet au java script de lancer l'annimation quand tu appui sur le bouton et quelle sarrete une fois terminer */

function kamehameha() {
    var element = document.getElementById("jeanbernard");
    var elm = element;
var newone = elm.cloneNode(true);
elm.parentNode.replaceChild(newone, elm);
    
  }

  function viveallure() {
    var element = document.getElementById("bob");
    
    var elm = element;
var newone = elm.cloneNode(true);
elm.parentNode.replaceChild(newone, elm);
  }


  function gertrude() {
    var element = document.getElementById("petiteflamme");
    var elm = element;
var newone = elm.cloneNode(true);
elm.parentNode.replaceChild(newone, elm);
    
  }

  function mortalité() {
    var element = document.getElementById("ennemi");
    element.classList.add("mort");
    
  }


  function megabouledepoil() {
    var element = document.getElementById("megafeu");
    var elm = element;
var newone = elm.cloneNode(true);
elm.parentNode.replaceChild(newone, elm);
    
  }


  function explosioncoup() {
    var element = document.getElementById("exlosionmec");
    var elm = element;
var newone = elm.cloneNode(true);
elm.parentNode.replaceChild(newone, elm);
    
  }
