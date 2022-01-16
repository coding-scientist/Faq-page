const faq_More_Info_Btn = document.querySelectorAll(`.faq-more-info-btn`);
const faq__Articles = document.querySelectorAll(`.faq-article`);

faq__Articles.forEach((article) => {
  const btn = article.querySelector(`.faq-more-info-btn`);
  btn.addEventListener(`click`, () => {
    faq__Articles.forEach((item) => {
      const articleBody = item.querySelector(`.faq-article-body`);
      if (item === article) {
        articleBody.classList.toggle(`display-defualt`);
        articleBody.classList.toggle(`display-none`);
        return;
      }
      articleBody.classList.add(`display-none`);
      articleBody.classList.remove(`display-defualt`);
    });
    faq_More_Info_Btn.forEach((currentBtn) => {
      if (currentBtn === btn) {
        btn.classList.toggle(`fa-minus-square`);
        btn.classList.toggle(`fa-plus-square`);
        btn.classList.toggle(`rotate`);
        return;
      }
      if (currentBtn.classList.contains(`fa-minus-square`)) {
        currentBtn.classList.remove(`fa-minus-square`);
        currentBtn.classList.add(`fa-plus-square`);
        currentBtn.classList.toggle(`rotate`);
      }
    });
  });
});
