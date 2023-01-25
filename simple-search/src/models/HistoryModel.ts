import request from "./request";

export default {
  data: [],

  async list() {
    if (this.data.length) return this.data;

    this.data = (await request({ method: "get", url: "/api/history" })) as any;
    return this.data;
  },

  add(keyword = "") {
    keyword = keyword.trim();
    if (!keyword) return;
    if (this.data.some((item: any) => item.keyword === keyword)) {
      this.remove(keyword);
    }

    const date = "12.31";
    this.data = [
      {
        keyword,
        date,
      },
      ...this.data,
    ] as any;
  },

  remove(keyword: any) {
    this.data = this.data.filter((item: any) => item.keyword !== keyword);
  },
};
