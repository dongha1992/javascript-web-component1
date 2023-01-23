import request from "./request";

export default {
  async list() {
    const data = await request({ method: "get", url: "/api/keywords" });
    return data;
  },
};
