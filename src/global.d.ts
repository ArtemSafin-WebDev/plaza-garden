import Validator from "./js/classes/Validator";

declare global {
  interface Window {
    plazaGardenApi: {
      validator?: typeof Validator;
    };
  }
}
