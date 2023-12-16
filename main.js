const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const PURPLE_CONTETN = "선한 영향을 주는".split("");
const MAIN_TITLE =
  "안녕하세요.\n 선한 영향을 주는 \n 프론트엔드 개발자 홍서희입니다.";
const main_title = $(".main_title");
let idx = 0;

const typing = () => {
  if (idx < MAIN_TITLE.length) {
    let main_title_txt = MAIN_TITLE[idx++];
    main_title.innerHTML +=
      (main_title_txt === "\n" && "<br/>") ||
      (PURPLE_CONTETN.includes(main_title_txt) &&
        `<span class='purple'>${main_title_txt}<span>`) ||
      main_title_txt;
  }
};
setInterval(typing, 200);
