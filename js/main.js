console.log('Starting up');

function onInit() {
  renderPortFolio();
}

gProjects = [
  {
    id: 'robofriends',
    name: 'RoboFriends',
    title: 'Robot Friends',
    desc:
      'My first project at react, I focused on API and react components to create an interactive website',
    url: 'https://eransevil.github.io/RoboFriends/',
    code: 'https://github.com/eransevil/RoboFriends',
    publishedAt: 2020,
    labels: 'react.js and API',
  },
  {
    id: 'LectureMe',
    name: 'LectureMe',
    title: 'LectureMe',
    desc:
      'The first project I built during my degree, in which I first combined HTML, CSS, and JS, The project simulates an app for inviting lecturers home on various topics',
    url: 'https://eransevil.github.io/LectureMe/',
    code: 'https://github.com/eransevil/LectureMe',
    publishedAt: 2019,
    labels: 'HTML, CSS and JS',
  },

  {
    id: 'BookShop',
    name: 'BookShop',
    title: 'Book Shop',
    desc: 'Simple CRUD app that can create, read, update and delete data',
    url: 'https://eransevil.github.io/BooksShop/',
    code: 'https://github.com/eransevil/BooksShop',
    publishedAt: '2021',
    labels: 'MVC',
  },

  {
    id: 'minesweeper',
    name: 'Mine-sweeper',
    title: 'Mine sweeper',
    desc: 'My upgrade version for the mythological game - Mine sweeper',
    url: 'https://eransevil.github.io/sprint1/',
    code: 'https://github.com/eransevil/sprint1',
    publishedAt: '2021',
    labels: 'Matrixes and DOM manipulation',
  },

  {
    id: 'Pacman',
    name: 'Pacman',
    title: 'pacman 2021 version',
    desc:
      'My first geam at JS',
    url: 'https://eransevil.github.io/pacmen/index.html',
    code: 'https://github.com/eransevil/pacmen',
    publishedAt: 2021,
    labels: 'HTML and JS',
  },
];

function renderPortFolio() {
  var strHTML = '';
  gProjects.forEach(function (project) {
    strHTML += `<div class="col-md-4 col-sm-6 portfolio-item">
        <a onclick="renderModal('${project.id}')"
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

function renderModal(projectId) {
  var project = gProjects.find(function (project) {
    return projectId === project.id;
  });

  document.querySelector('.modal-body h2').innerHTML = project.title;
  document.querySelector(
    '.modal-body img'
  ).src = `img/portfolio/${project.name}.jpg`;
  document.querySelector('.description').innerHTML = project.desc;
  document.querySelector(
    '.site-link'
  ).innerHTML = ` <a class="site-link link to code item-intro text-secondary " href="${project.url}" target="_blank">
     click here to view site
    </a>`;
  document.querySelector(
    '.site-code'
  ).innerHTML = ` <a class="site-link link to code item-intro text-secondary" href="${project.code}" target="_blank">
   click here to view site code`;
  document.querySelector('.date').innerHTML = `Date: ${project.publishedAt}`;
  document.querySelector('.lable').innerHTML = `Lables: ${project.labels}`;
}

function navToEmail(ev) {
  ev.preventDefault();

  // const EMAIL = document.querySelector('input[name=SUBJECT]').value;
  const SUBJECT = document.querySelector('input[name=SUBJECT]').value;
  const BODY = document.querySelector('textarea[name=BODY]').value;
  window.open(
    `https://mail.google.com/mail/?view=cm&fs=1&to=eransevil2@gmail.com&su=${SUBJECT}&body=${BODY}`,
    '_blank'
  );
}
