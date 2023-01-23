import View from "./View";
import "./KeywordView.scss";
import { IList } from "../controllers/App";

export interface IKeywordView {
  mount(data: IList[]): void;
  getKeywordsHtml(data: IList[]): void;
  _bindClickEvent(): void;
  _onClickKeyword(e: Event): void;
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

  mount(data: IList[] = []) {
    this.el.innerHTML = data.length
      ? this.getKeywordsHtml(data)
      : this._messages.NO_KEYWORDS;
    return this;
  }

  getKeywordsHtml(data: IList[]) {
    //
    return "<div><div>";
  }
  _bindClickEvent() {
    //
  }

  _onClickKeyword(e: Event) {
    //
  }
}
