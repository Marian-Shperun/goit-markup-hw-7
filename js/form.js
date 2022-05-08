// console.log('jsform');
// form send demo
  document.querySelector(".js-speaker-form").addEventListener("submit", (e) => {
    e.preventDefault();

    new FormData(e.currentTarget).forEach((value, name) =>
      console.log(`${name}: ${value}`)
    );
    e.currentTarget.reset();
  });

// form footer placeholder
const placeholderInput = document.querySelector(".form__input");
placeholderInput.addEventListener("focusin", (e) => {
  e.currentTarget.placeholder = e.currentTarget.dataset.placeholder;
  // console.log(placeholderInput);
});
placeholderInput.addEventListener("focusout", (e) => {
  e.currentTarget.placeholder = " ";
});