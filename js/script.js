const teamContainer = document.querySelector('.team-container');

// CREO UN ARRAY DOVE INSERIRE I MEMBRI DEL TEAM
const team = [
    {
        'nome': 'Wayne Barnett',
        'ruolo': 'Founder & CEO',
        'img': 'wayne-barnett-founder-ceo.jpg',
    },

    {
        'nome': 'Angela Caroll',
        'ruolo': 'Chief Editor',
        'img': 'angela-caroll-chief-editor.jpg',
    },

    {
        'nome': 'Walter Gordon',
        'ruolo': 'Office Manager',
        'img': 'walter-gordon-office-manager.jpg',
    },

    {
        'nome': 'Angela Lopez',
        'ruolo': 'Social Media Manager',
        'img': 'angela-lopez-social-media-manager.jpg',
    },

    {
        'nome': 'Scott Estrada',
        'ruolo': 'Developer',
        'img': 'scott-estrada-developer.jpg',
    },

    {
        'nome': 'Barbara Ramos',
        'ruolo': 'Graphic Designer',
        'img': 'barbara-ramos-graphic-designer.jpg',
    }

];

const btnAdd = document.getElementById("addMemberButton");

console.log("Membri del team:");
stampaCard(team, teamContainer);

function stampaCard(array, container) {
    container.innerHTML = "";
    for (i = 0; i < array.length; i++) {
        container.innerHTML += `<div class="team-card">
        <div class="card-image">
          <img
            src="img/${array[i].img}"
            alt="Wayne Barnett"
          />
        </div>
        <div class="card-text">
          <h3>${array[i].nome}</h3>
          <p>${array[i].ruolo}</p>
        </div>
      </div>`;

        console.log(`${array[i].nome} - ${array[i].ruolo}`);
    }
}
