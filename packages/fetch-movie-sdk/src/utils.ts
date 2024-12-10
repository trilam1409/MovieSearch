export function getRandomCharacter() {
  return Array(1)
    .fill(null)
    .map(() => (Math.random() * 36 | 0).toString(36))
    .join('');
}
