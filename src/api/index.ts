import { delay } from "../helpers/delay";

export const MovieDetailsJSON:any = {
  1: {
    title: "Lady Bird",
    rating: 99,
    fresh: true,
    gross: "$52.9M",
    audience: 81,
    consensus: "Lady Bird delivers fresh insights about the turmoil of adolescence -- and reveals writer-director Greta Gerwig as a fully formed filmmaking talent.",
    poster: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR9MKa_VJisgYu0NE2vnbuuE2Ne4yWVuDr5VEfHBERhMFlwde_X",
  },
  2: {
    title: "Downsizing",
    rating: 51,
    fresh: true,
    gross: "$24.5M",
    audience: 81,
    consensus: "Downsizing assembles a talented cast in pursuit of some truly interesting ideas -- which may be enough for some audiences to forgive the final product's frustrating shortcomings.",
    poster: "https://m.media-amazon.com/images/M/MV5BNmNkMThkNTctYTEyNC00N2NlLThjM2YtMmJhZThhYThjYTY3XkEyXkFqcGdeQXVyMjgyNjk3MzE@._V1_.jpg",
  },
  3: {
    title: "Black Panther",
    rating: 98,
    fresh: true,
    gross: "$403.6M",
    audience: 81,
    consensus: "Black Panther elevates superhero cinema to thrilling new heights while telling one of the MCU's most absorbing stories -- and introducing some of its most fully realized characters.",
    poster: "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_.jpg",
  },
  4: {
    title: "A Fantastic Woman",
    rating: 93,
    gross: "$0.6M",
    audience: 81,
    consensus:
      "Subtle and tender, A Fantastic Woman handles its timely, sensitive subject matter with care.",
    poster: "https://m.media-amazon.com/images/M/MV5BNGJhNWM4ZjItYWRhYS00N2UzLTg3OWItOGEzOWFmMGQ1ZjlkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
  },
  5: {
    title: "Father Figures",
    rating: 22,
    audience: 81,
    gross: "$17.5M",
    consensus: "No consensus yet.",
    poster: "https://m.media-amazon.com/images/M/MV5BMjA3MDQ4MDI1M15BMl5BanBnXkFtZTgwMDYxMjcxNDM@._V1_FMjpg_UX1000_.jpg",
  },
  6: {
    title: "Early Man",
    rating: 81,
    audience: 81,
    gross: "$6.8M",
    consensus:
      "Early Man isn't quite as evolved as Aardman's best work, but still retains the unique visuals and sweet humor that have made the studio a favorite among animation enthusiasts.",
    poster: "https://m.media-amazon.com/images/M/MV5BOWVkMzhlMmItMDY0NC00NDY5LWIzZjctMzdmNGEwNGY2YmVmXkEyXkFqcGdeQXVyNTUxNDUxOTI@._V1_.jpg",
  },
};

export const movieListJSON:any = [
  {
    id: 1, title: "Lady bird", rating: 99, gross: "$52.9M",
  },
  {
    id: 2, title: "Downsizing", rating: 51, gross: "$24.5M",
  },
  {
    id: 3, title: "Black Panter", rating: 98, gross: "$403.6M",
  },
  {
    id: 4, title: "A Fantastic Woman", rating: 93, gross: "$0.6M",
  },
  {
    id: 5, title: "Father Figures", rating: 22, gross: "$17.5M",
  },
  {
    id: 6, title: "Early Man", rating: 81, gross: "$6.8M",
  },
];

export const movieReviewsJSON:any = {
  1: {
    1: [
      {
        summary:
        "Lady Bird is a brilliant little movie that deals with ideas both big and small. But, most powerful is the relationship between Lady Bird and Marion. It is harsh and funny and sometimes hard to watch. But it is undeniably and eternally there.",
        author: "Alexandra MacAaron, Women's Voices for Change",
      },
    ],
    2: [
      {
        summary:
        "The film, having launched a sprightly comic conceit, lets it glide away.",
        author: "Anthony Lane, New Yorker",
      },
    ],
    3: [
      {
        summary:
        "When it comes to creative visuals, engaging action and likable characters, \"Black Panther\" stands confidently next to the best fare offered up by the Marvel Cinematic Universe.",
        author: "Matthew Rozsa, Salon.com",
      },
    ],
    4: [
      {
        summary: "Fantastic is one word for it, another would be outstanding.",
        author: "Adam Graham, Detroit News",
      },
    ],
    5: [
      {
        summary:
        "Father Figures is not just painfully anti-charming, it is transparently desperate.",
        author: "Nick Allen, RogerEbert.com",
      },
    ],
    6: [
      {
        summary:
        "The story is thin, allowing little room for imaginative engagement, and the comedy uninspired. Early Man contains a nice anti-sexism message, but delivers it half-heartedly.",
        author: "Ben Sachs, Chicago Reader",
      },
    ],
  },
};

export const fetchMovieDetails = async (id:string) => {
  await delay();
  return MovieDetailsJSON[id];
};

// Reviews remain the same for every movie.
// The original data can be extended, but not being the focus of this demo, it has been delayed to
// future developments.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const fetchMovieReviews = async (id:string) => {
  await delay(3000);
  return movieReviewsJSON[1];
};
