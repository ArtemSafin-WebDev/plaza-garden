export default function isTouch() {
  return !window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}
