export interface MovieData {
  '#TITLE': string;
  '#YEAR': number;
  '#IMDB_ID': string;
  '#RANK': number;
  '#ACTORS': string;
  '#AKA': string;
  '#IMDB_URL': string;
  '#IMDB_IV': string;
  '#IMG_POSTER': string;
  'photo_width': number;
  'photo_height': number,
}

export interface MovieDetail {
  '@context': string
  '@type': string
  url: string
  name: string
  image: string
  description: string
  review: Review
  aggregateRating: AggregateRating
  contentRating: string
  genre: string[]
  datePublished: string
  keywords: string
  actor: Actor[]
  creator: Creator[]
  trailer: Trailer
}

export interface Review {
  '@type': string
  itemReviewed: ItemReviewed
  author: Author
  dateCreated: string
  inLanguage: string
  name: string
  reviewBody: string
  reviewRating: ReviewRating
}

export interface ItemReviewed {
  '@type': string
  url: string
}

export interface Author {
  '@type': string
  name: string
}

export interface ReviewRating {
  '@type': string
  worstRating: number
  bestRating: number
  ratingValue: number
}

export interface AggregateRating {
  '@type': string
  ratingCount: number
  bestRating: number
  worstRating: number
  ratingValue: number
}

export interface Actor {
  '@type': string
  url: string
  name: string
}

export interface Creator {
  '@type': string
  url: string
}

export interface Trailer {
  '@type': string
  name: string
  embedUrl: string
  thumbnail: Thumbnail
  thumbnailUrl: string
  url: string
  description: string
  duration: string
  uploadDate: string
}

export interface Thumbnail {
  '@type': string
  contentUrl: string
}
