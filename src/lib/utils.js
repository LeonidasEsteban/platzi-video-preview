export const leftPad = function(number) {
  const pad = '00';
  return pad.substr(0, pad.length - number.length) + number;
}
export const formattedTime = function(secs) {
  const secondsRounded = Math.round(secs, 10);
  const minutes = parseInt(secondsRounded / 60, 10);
  const seconds = parseInt(secondsRounded % 60, 10);
  return `${minutes}:${leftPad(seconds.toString())}`;
}
