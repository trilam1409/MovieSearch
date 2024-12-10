"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomCharacter = void 0;
function getRandomCharacter() {
    return Array(1)
        .fill(null)
        .map(function () { return (Math.random() * 36 | 0).toString(36); })
        .join('');
}
exports.getRandomCharacter = getRandomCharacter;
