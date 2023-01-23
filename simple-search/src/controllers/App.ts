import TabView from "../views/TabView";

import KeywordModel from "../models/KeywordModel.js";
export default class App {
  selectedTab: string;
  tabView: any;

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
      console.log("1");
      this.onChangeTab(e.detail.tabName);
    });

    this.selectedTab = "추천 검색어";

    this.renderView();
  }

  // search() {}
  // onSearchResult() {}
  // onSearchTab() {}

  onChangeTab(tabName: string) {
    this.selectedTab = tabName;
    this.renderView();
  }

  renderView() {
    this.tabView.setActiveTab(this.selectedTab);
    const isRecommendKeyword = this.selectedTab === "추천 검색어";
    if (isRecommendKeyword) {
      const data = KeywordModel.list();
    } else {
      //
    }
  }

  // onRemoveHistory() {}
}
