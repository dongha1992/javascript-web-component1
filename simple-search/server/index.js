const express = require("express");
const morgan = require("morgan");
const path = require("path");

const app = express();
app.use(morgan("dev"));

const port = process.env.PORT || 8081;

const keywords = [
  { keyword: "이탈리아" },
  { keyword: "세프의요리" },
  { keyword: "제철" },
  { keyword: "홈파티" }
];

const search = [
  {
    id: 1,
    name: "[버거] 치즈버거처럼 생긴 새우버거",
    image:
      "https://images.unsplash.com/photo-1547584370-2cc98b8b8dc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  },
  {
    id: 2,
    name: "[샐러드] 맛있는 색깔의 콥셀러드",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  },
  {
    id: 3,
    name: "[피자] 썸네일 주소가 잘못된 상품",
    image: "http://foo.bar/image.jpg"
  }
];

let history = [
  { keyword: "검색기록2", date: "12.03" },
  { keyword: "검색기록1", date: "12.02" },
  { keyword: "검색기록0", date: "12.01" }
];


app.listen(port, () => {
  console.log(`서버가 구동되었습니다. localhost:${port}`);
});