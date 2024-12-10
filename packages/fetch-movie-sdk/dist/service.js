"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchMovieDetail = exports.fetchMoviesByKeyword = exports.fetchRandomMovies = void 0;
var axios_instance_1 = require("./axios-instance");
var utils_1 = require("./utils");
function fetchRandomMovies() {
    return axios_instance_1.default.request({
        url: "/search?q=".concat((0, utils_1.getRandomCharacter)()),
    });
}
exports.fetchRandomMovies = fetchRandomMovies;
function fetchMoviesByKeyword(keyword) {
    return axios_instance_1.default.request({
        url: "/search?q=".concat(keyword),
    });
}
exports.fetchMoviesByKeyword = fetchMoviesByKeyword;
function fetchMovieDetail(id) {
    return axios_instance_1.default.request({
        url: "/search?tt=".concat(id),
    });
}
exports.fetchMovieDetail = fetchMovieDetail;
