"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var axiosInstance = axios_1.default.create({
    baseURL: 'https://imdb.iamidiotareyoutoo.com',
    timeout: 3000,
    headers: { 'Content-Type': 'application/json' },
});
// Add a request interceptor
axiosInstance.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});
// Add a response interceptor
axiosInstance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    var _a;
    if ((_a = error === null || error === void 0 ? void 0 : error.message) === null || _a === void 0 ? void 0 : _a.includes('timeout')) {
        return Promise.reject(error);
    }
    var response = error === null || error === void 0 ? void 0 : error.response;
    switch (response === null || response === void 0 ? void 0 : response.status) {
        case 500:
            // TODO: Add necessary actions
            return Promise.reject(error);
    }
    return Promise.reject(error);
});
exports.default = axiosInstance;
