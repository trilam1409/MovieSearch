declare function fetchRandomMovies(): Promise<import("axios").AxiosResponse<any, any>>;
declare function fetchMoviesByKeyword(keyword: string): Promise<import("axios").AxiosResponse<any, any>>;
declare function fetchMovieDetail(id: string): Promise<import("axios").AxiosResponse<any, any>>;
export { fetchRandomMovies, fetchMoviesByKeyword, fetchMovieDetail };
