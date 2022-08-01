console.log('test 1...2...1...2');

//Etape 2 - Objet
//On va creer l'objet Hercule
//On va lui ajouter les entites necessaire
//On le nommer profil pour qu'il puisse se faire executer
let profil = {
    name:'Hercule',
    job: 'Demi-dieu',
    age: 35,
    department: 75,
    arm: 60.5 ,
    inRelationship: true
}

let friends = [
    'Jupiter',
    'Junon',
    "Alcmene",
    'Dejanire'
]

base.fillProfil(profil);
base.printFriends(friends);
base.setBestFriend(friends[0]);

//On cree une balise h1
var banner = document.createElement('h1');
//On lui donne une classe
banner.classList.add('banner__title');
//Lui inserer du texte
banner.textContent = 'Vous consultez le profil de Hercule';
//L'inserer dans l'element ayant l'id header-banner
document.getElementById('header-banner').appendChild(banner);

for(let number = 0; number < 12; number++) {
    base.displayWork(number);
};

//Etape 6
//On va creer une var pour l'id availability
let availability = document.getElementById('availability');
//On va creer une condition avec If
//On va lui integrer une double variable
if(base.getHour() < 8 || base.getHour() >20) {
    availability.classList.add('off');
} else {
    availability.textContent = 'Disponible';
}
//Si avant 8h et apres 20h, on ajoute une classe a l' id availability
//Sinon, on change le texte de la div

//Etape 7
//Creer une fonction avec comme parametre name et department
function createUserName(name, department) {
    //Celle-ci doit generer et inserer un pseudo dans la div profil-name
    let userName = document.getElementById('profil-name');
    userName.textContent = `${name}-du-${department}`
};

//On doit appeler la fonction
//en lui faisant prendre les valeurs de l'objet profil
createUserName(profil['name'],profil['department']);

//Etape 8
//On cree un addEventListener avec une function anonyme
//Dans cette fonction anonyme, on ajoute une condition
//qui precise quoi faire si banner--open est present lors du click

document.getElementById('menu-toggler')
        .addEventListener('click', function(){
            var headerBanner = document.getElementById('header-banner')
            headerBanner.classList.toggle('banner--open');
});

//Etape 9
//On ajoute un addEventListener sur le submit
//Afin de mettre une function annulant l' actualisation
//Et remplacant cela par une alerte
document.getElementById('contact')
        .addEventListener('submit', function(event) {
            event.preventDefault();
            alert(`${profil['name']} ne souhaite pas être dérangé`)
        })

//Etape 10
let voteHercule = Math.round(base.vote['hercule'] / (base.vote['hercule'] + base.vote['cesar']) * 100)
let voteCesar = Math.round(base.vote['cesar'] / (base.vote['hercule'] + base.vote['cesar']) * 100)
