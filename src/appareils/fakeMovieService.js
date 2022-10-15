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
var myformatDate = formatDate(myDate);
const period = 2
var movies = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    date_de_derniere: myformatDate,
    date_de_prochaine: myformatDate + period,
    title: "moteur du dentifizeur",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Electrique", type:"conditionelle" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809Z"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    date_de_derniere: myformatDate,
    date_de_prochaine: myformatDate + period,
    title: "moteur du moule",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Electrique", type: "systhematique" },
    numberInStock: 5,
    dailyRentalRate: 2.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    date_de_derniere: myformatDate,
    date_de_prochaine: myformatDate + period,
    title: "Verin",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Hydraulique" , type: "systhematique"},
    numberInStock: 8,
    dailyRentalRate: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    date_de_derniere: myformatDate,
    date_de_prochaine: myformatDate + period,
    title: "Distributeur",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Hydraulique" , type: "systhematique"},
    numberInStock: 7,
    dailyRentalRate: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    date_de_derniere: myformatDate,
    date_de_prochaine: myformatDate + period,
    title: "Tapis roulant",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Mecanique", type:"conditionelle"  },
    numberInStock: 7,
    dailyRentalRate: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    date_de_derniere: myformatDate,
    date_de_prochaine: myformatDate + period,
    title: "Roulement",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Mecanique", type:"conditionelle"  },
    numberInStock: 7,
    dailyRentalRate: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    date_de_derniere: myformatDate,
    date_de_prochaine: myformatDate + period,
    title: "Transformateur",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "electrique" , type: "systhematique"},
    numberInStock: 7,
    dailyRentalRate: 4.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    date_de_derniere: myformatDate,
    date_de_prochaine: myformatDate + period,
    title: "Filtre",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Hydraulique", type: "conditionelle" },
    numberInStock: 4,
    dailyRentalRate: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    date_de_derniere: myformatDate,
    date_de_prochaine: myformatDate + period,
    title: "Engrnage",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Mecanique", type: "systhematique" },
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
