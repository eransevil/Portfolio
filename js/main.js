console.log('Starting up');

function onInit() {
  renderPortFolio();
}

gProjects = [
  {
    id: 'minesweeper',
    name: 'Mine-sweeper',
    title: 'Mine sweeper',
    desc: 'My upgraded version for the mythological game - Mine sweeper',
    url: 'https://eransevil.github.io/sprint1/',
    code: 'https://github.com/eransevil?tab=repositories',
    publishedAt: 1448693940000,
    labels: 'Matrixes and DOM manipulation',
  },
  {
    id: 'robofriends',
    name: 'RoboFriends',
    title: 'Robot Friends',
    desc:
      'My first project at react, I focused on using API and using react components to create an interactive website',
    url: 'https://eransevil.github.io/RoboFriends/',
    code: 'https://github.com/eransevil/RoboFriends',
    publishedAt: 1448693940000,
    labels: 'react.js and API',
  },
  {
    id: 'LectureMe',
    name: 'LectureMe',
    title: 'LectureMe',
    desc:
      'The first project I built during my degree, in which I first combined HTML, CSS, and JS, The project simulates an app for inviting lecturers home on various topics',
    url: 'https://eransevil.github.io/RoboFriends/',
    code: 'https://github.com/eransevil/RoboFriends',
    publishedAt: 1448693940000,
    labels: 'HTML, CSS and JS',
  },
];

function renderPortFolio() {
  var strHTML = '';
  gProjects.forEach(function (project) {
    strHTML += `<div class="col-md-4 col-sm-6 portfolio-item">
        <a
          class="portfolio-link"
          data-toggle="modal"
          href="#portfolioModal1"
        >
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fa fa-plus fa-3x"></i>
            </div>
          </div>
          <img
            class="img-fluid"
            src="img/portfolio/${project.name}.jpg"
            alt=""
          />
        </a>
        <div class="portfolio-caption">
          <h4>${project.title}</h4>
          <p class="text-muted">${project.labels}</p>
        </div>
        </div>`;
  });

  var elPortfolio = document.querySelector('.portfolio-gallery');
  elPortfolio.innerHTML = strHTML;
}
