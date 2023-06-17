export interface IPopular {
    adult: boolean
    backdrop_path: string
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}

export interface IDetails {
    id: number
    poster_path: string
    backdrop_path: string
    title: string
    overview: string
    vote_average: any | number
    profile_path: string
    release_date: string
    runtime: any
    genres: [
        name: any
    ]
}

export interface IActors {
    adult: boolean
    cast_id: number
    character: string
    credit_id: string
    gender: number
    id: number
    known_for_department: string
    name: string
    order: number
    original_name: string
    popularity: number
    profile_path: string
}

export interface ITrailer {
    id: string
    iso_639_1: string
    iso_3166_1: string
    key: string
    name: string
    official: boolean
    published_at: string
    site: string
    size: number
    type: string
}

export interface IActorDetails {
    adult: boolean
    also_known_as: string[]
    biography: string
    birthday: string
    deathday: object
    gender: number
    homepage: object
    id: number
    imdb_id: string
    known_for_department: string
    name: string
    place_of_birth: string
    popularity: number
    profile_path: string
}

export interface IActorMovie {
    adult: boolean
    backdrop_path: string
    character: string
    credit_id: string
    genre_ids: number[]
    id: number
    order: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number

}

