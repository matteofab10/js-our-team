// - Creiamo il nostro array di oggetti che rappresentano ciascun membro del team. Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo tutte le card del nostro team.
// - Utilizziamo poi gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team. (se non fate tempo a realizzare questa parte va bene ugualmente e pensateci in ogni caso solo una volta stampata correttamente tutta la pagina)

const container = document.querySelector('.team-container');
// const btn = document.getElementById("addMemberButton");

const profiles = [
{
  img : 'img/angela-caroll-chief-editor.jpg',
  name : 'Angela Caroll',
  role : 'Chief Editor'
},
{
  img : 'img/walter-gordon-office-manager.jpg',
  name : 'Walter Gordon',
  role : 'Office Manager'
},
{
  img : 'img/angela-lopez-social-media-manager.jpg',
  name : 'Angela Lopez',
  role : 'Social Media Manager'
},
{
  img : 'img/scott-estrada-developer.jpg',
  name : 'Scott Estrada',
  role : 'Developer'
},
{
  img : 'img/barbara-ramos-graphic-designer.jpg',
  name : 'Barbara Ramos',
  role : 'Graphic Designer'
}]

console.log('array profili', profiles);

for(let index in profiles){
  const user = profiles[index];

  const userImg = user.img;
  const userName = user.name;
  const userRole = user.role;

  container.innerHTML +=
  `
  <div class="team-card">
    <div class="card-image">
      <img
        src="${userImg}"
      />
    </div>
    <div class="card-text">
      <h3>${userName}</h3>
      <p>${userRole}</p>
    </div>
  </div>
  `
}
