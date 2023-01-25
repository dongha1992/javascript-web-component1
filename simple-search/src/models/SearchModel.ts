import request from "./request";

export default {
  async list() {
    return await request({ method: "get", url: "/api/search" });
  },
};
