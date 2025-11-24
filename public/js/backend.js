document.addEventListener("DOMContentLoaded", () => {
  const Validator = window.plazaGardenApi?.validator;
  const forms = Array.from(document.querySelectorAll(".js-form"));
  forms.forEach((form) => {
    const validator = new Validator(form);
    form.addEventListener("submit", (event) => {
      validator.validate();

      if (!validator.valid) {
        event.preventDefault();
      }
    });
  });
});
