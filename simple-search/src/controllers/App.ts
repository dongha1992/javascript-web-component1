import TabView, { ITabView } from "../views/TabView";
import KeywordView, { IKeywordView } from "../views/KeywordView";

import KeywordModel from "../models/KeywordModel";

export interface IList {
  keyword: string;
}
export default class App {
  selectedTab: string;
  tabView: ITabView;
  keywordView: IKeywordView;

  constructor() {
    const formViewEl = document.querySelector("form") as HTMLFormElement;
    const tabViewEl = document.querySelector("#tabs") as HTMLElement;
    const keywordViewEl = document.querySelector(
      "#search-keyword"
    ) as HTMLDivElement;
    const historyViewEl = document.querySelector(
      "#search-history"
    ) as HTMLDivElement;
    const resultViewEl = document.querySelector(
      "#search-result"
    ) as HTMLDivElement;

    this.tabView = new TabView(tabViewEl).on("@change", (e: CustomEvent) => {
      this.onChangeTab(e.detail.tabName);
    });

    this.keywordView = new KeywordView(keywordViewEl).on(
      "@click",
      (e: CustomEvent) => this.search(e.detail.keyword)
    );

    this.selectedTab = "추천 검색어";
    this.renderView();
  }

  async search(query: string) {
    //
  }

  // onSearchResult() {}
  // onSearchTab() {}

  onChangeTab(tabName: string) {
    this.selectedTab = tabName;
    this.renderView();
  }

  async renderView() {
    this.tabView.setActiveTab(this.selectedTab);
    const isRecommendKeyword = this.selectedTab === "추천 검색어";
    if (isRecommendKeyword) {
      const data: IList[] = await KeywordModel.list();
      this.keywordView.mount(data);
    } else {
      //
    }
  }

  // onRemoveHistory() {}
}
