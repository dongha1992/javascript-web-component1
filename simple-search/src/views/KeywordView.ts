import View from "./View";
import "./KeywordView.scss";
import { IList } from "../controllers/App";

export interface IKeywordView {
  mount(data: IList[]): this;
  getKeywordsHtml(data: IList[]): string;
  _bindClickEvent(): void;
  _onClickKeyword(e: MouseEvent): void;
}

export default class KeywordView extends View implements IKeywordView {
  _messages: { NO_KEYWORDS: string };

  constructor(el: HTMLElement) {
    super(el);

    this._messages = {
      NO_KEYWORDS: "추천 검색어가 없습니다",
    };

    return this;
  }

  mount(data: IList[] = []): this {
    this.el.innerHTML = data.length
      ? this.getKeywordsHtml(data)
      : this._messages.NO_KEYWORDS;
    this.show();
    this._bindClickEvent();
    return this;
  }

  getKeywordsHtml(data: IList[]): string {
    return (
      data.reduce((html, item, index) => {
        html += `<li data-keyword="${
          item.keyword
        }"><span class="number">${index + 1}</spam>${item.keyword}</li>`;
        return html;
      }, '<ul class="KeywordView">') + "</ul>"
    );
  }

  _bindClickEvent(): void {
    const nodeLiList: NodeListOf<HTMLElement> = this.el.querySelectorAll("li");
    nodeLiList.forEach((li: HTMLElement) => {
      li.addEventListener("click", (e: MouseEvent) => this._onClickKeyword(e));
    });
  }

  _onClickKeyword(e: MouseEvent): void {
    const { keyword } = (e?.currentTarget as HTMLInputElement).dataset;
    this.emit("@click", { keyword });
  }
}
