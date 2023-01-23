import View from "./View";
import "./TabView.scss";

export interface ITabView {
  mount(): void;
  bindEvents(): void;
  onClick(tabName: string): void;
  setActiveTab(tabName: string): void;
}

export default class TabView extends View implements ITabView {
  constructor(el: HTMLElement) {
    super(el);

    this.mount();
    this.bindEvents();
  }

  mount() {
    this.el.innerHTML = `<ul class="TabView">
    <li>추천 검색어</li>
    <li>최근 검색어</li>
    </ul>`;
  }

  get tabItems(): Element[] {
    return Array.from(this.el.children[0].children);
  }

  bindEvents() {
    this.tabItems.forEach((li: Element) => {
      li.addEventListener("click", () => this.onClick(li.innerHTML));
    });
  }

  onClick(tabName: string): void {
    this.setActiveTab(tabName);
  }

  setActiveTab(tabName: string): void {
    this.tabItems.forEach((li) => {
      li.className = li.innerHTML === tabName ? "active" : "";
    });
  }
}
