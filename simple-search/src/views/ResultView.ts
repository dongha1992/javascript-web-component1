import View, { IView } from "./View";
import { IList } from "../controllers/App";

export interface IResultView extends IView {
  mount(data: any): void;
  getSearchResultsHtml(data: any): string;
  getSearchItemHtml(item: any): string;
}

export default class ResultView extends View implements IResultView {
  messages: { NO_RESULT: string };
  constructor(el: HTMLElement) {
    super(el);

    this.messages = {
      NO_RESULT: "검색 결과가 없습니다",
    };
  }

  mount(data: any = []): void {
    this.el.innerHTML = `<div class="ResultView">
    ${
      data.length > 0
        ? this.getSearchResultsHtml(data)
        : this.messages.NO_RESULT
    }
    <div>`;
    this.show();
  }

  getSearchResultsHtml(data: any): string {
    return (
      data.reduce((html: any, item: any) => {
        html += this.getSearchItemHtml(item);
        return html;
      }, "<ul>") + "</ul>"
    );
  }

  getSearchItemHtml(item: any): string {
    return `<li>
    <img src="${item.image}" onerror="this.src='${""}'"/>
    <p>${item.name}</p>
  </li>`;
  }
}
