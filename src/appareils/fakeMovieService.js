import * as genresAPI from "./fakeGenreService";

function formatDate(dateObject){
  const parts = {
    date: dateObject.getDate(),
    month: dateObject.getMonth() + 1,
    year: dateObject.getFullYear()
  };

  return `${parts.date}/${parts.month}/${parts.year}`;

}
var myDate = new Date()
// var myformatDate = formatDate(myDate);
var date = myDate.getDate();
var month = myDate.getMonth();
var year = myDate.getFullYear();
var movies = [
  {
    _id: "5b20",
    date_de_derniere: `${date}/${month}/${year}`,
    date_de_prochaine: `${date}/${month + 2}/${year}`,
    title: "moteur du dentifizeur",
    vitesse: 20,
    courant: 30,
    tension: 420,
    genre: { _id: "5b20", name: "Electrique", type:"conditionelle" },
    etat: true,
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809Z"
  },
  {
    _id: "5b21",
    date_de_derniere: `${date}/${month}/${year}`,
    date_de_prochaine: `${date}/${month + 2}/${year}`,
    title: "moteur du moule",
    genre: { _id: "5b21", name: "Electrique", type: "systhematique" },
    etat: true,
    numberInStock: 5,
    dailyRentalRate: 2.5
  },
  {
    _id: "5b22",
    date_de_derniere: `${date}/${month}/${year}`,
    date_de_prochaine: `${date}/${month + 2}/${year}`,
    title: "Verin",
    genre: { _id: "5b22", name: "Hydraulique" , type: "systhematique"},
    etat: true,
    numberInStock: 8,
    dailyRentalRate: 3.5
  },
  {
    _id: "5b23",
    date_de_derniere: `${date}/${month}/${year}`,
    date_de_prochaine: `${date}/${month + 2}/${year}`,
    title: "Distributeur",
    genre: { _id: "5b23", name: "Hydraulique" , type: "systhematique"},
    etat: true,
    numberInStock: 7,
    dailyRentalRate: 3.5
  },
  {
    _id: "5b24",
    date_de_derniere: `${date}/${month}/${year}`,
    date_de_prochaine: `${date}/${month + 2}/${year}`,
    title: "Tapis roulant",
    vitesse: 20,
    courant: 30,
    tension: 420,
    genre: { _id: "5b24", name: "Mecanique", type:"conditionelle"  },
    etat: true,
    numberInStock: 7,
    dailyRentalRate: 3.5
  },
  {
    _id: "5b25",
    date_de_derniere: `${date}/${month}/${year}`,
    date_de_prochaine: `${date}/${month + 2}/${year}`,
    title: "Roulement",
    presion: 20,
    debit: 20,
    genre: { _id: "5b25", name: "Mecanique", type:"conditionelle"  },
    etat: true,
    numberInStock: 7,
    dailyRentalRate: 3.5
  },
  {
    _id: "5b26",
    date_de_derniere: `${date}/${month}/${year}`,
    date_de_prochaine: `${date}/${month + 2}/${year}`,
    title: "Transformateur",
    genre: { _id: "5b26", name: "electrique" , type: "systhematique"},
    etat: true,
    numberInStock: 7,
    dailyRentalRate: 4.5
  },
  {
    _id: "5b27",
    date_de_derniere: `${date}/${month}/${year}`,
    date_de_prochaine: `${date}/${month + 2}/${year}`,
    title: "Filtre",
    vitesse: 20,
    courant: 30,
    tension: 420,
    genre: { _id: "5b27", name: "Hydraulique", type: "conditionelle" },
    etat: true,
    numberInStock: 4,
    dailyRentalRate: 3.5
  },
  {
    _id: "5b28",
    date_de_derniere: `${date}/${month}/${year}`,
    date_de_prochaine: `${date}/${month + 2}/${year}`,
    title: "Engrnage",
    genre: { _id: "5b28", name: "Mecanique", type: "systhematique" },
    etat: true,
    numberInStock: 7,
    dailyRentalRate: 3.5
  }
];

export function getAppareils() {
  return movies;
}

export function getAppareil(id) {
  return movies.find(m => m._id === id);
}

export function sauveAppareil(movie) {
  let movieInDb = movies.find(m => m._id === movie._id) || {};
  movieInDb.name = movie.name;
  movieInDb.genre = genresAPI.genres.find(g => g._id === movie.genreId);
  movieInDb.numberInStock = movie.numberInStock;
  movieInDb.dailyRentalRate = movie.dailyRentalRate;

  if (!movieInDb._id) {
    movieInDb._id = Date.now();
    movies.push(movieInDb);
  }

  return movieInDb;
}

export function suppAppareil(id) {
  let movieInDb = movies.find(m => m._id === id);
  movies.splice(movies.indexOf(movieInDb), 1);
  return movieInDb;
}

export function modifAppareil(data){
  let  id  = data.identification;
  let movieInDb = movies.find(m => m._id === id);
  let idx = movies.indexOf(movieInDb);

  movies[idx].courant = data.courant;
  movies[idx].presion = data.presion;
  movies[idx].tension = data.tension;
  movies[idx].vitesse = data.vitesse;
  movies[idx].date_de_derniere = data.date;

}
