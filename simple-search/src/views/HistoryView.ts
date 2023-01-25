import KeywordView from "./KeywordView";

export default class HistoryView extends KeywordView {
  constructor(el: any) {
    super(el);
    this._messages.NO_KEYWORDS = "검색 이력이 없습니다";
    return this;
  }

  getKeywordsHtml(data: any) {
    return (
      data.reduce((html: any, item: any) => {
        html += `<li data-keyword="${item.keyword}">
        ${item.keyword} 
        <span class="date">${item.date}</span>
        <button class="btn-remove"></button>
        </li>`;
        return html;
      }, '<ul class="HistoryView">') + "</ul>"
    );
  }

  bindRemoveBtn() {
    Array.from(this.el.querySelectorAll("button.btn-remove")).forEach(
      (btn: any) => {
        btn.addEventListener("click", (e: any) => {
          e.stopPropagation();
          this.onRemove(btn?.parentElement.dataset.keyword);
        });
      }
    );
  }

  onRemove(keyword: any) {
    this.emit("@remove", { keyword });
  }
}
