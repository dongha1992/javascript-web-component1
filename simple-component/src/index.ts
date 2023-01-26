import "./index.scss";

/* Functional */

// interface IState {
//   items: string[];
// }

// const App = (): void => {
//   const $app = document.querySelector("#app") as HTMLElement;

//   let state: IState = {
//     items: ["item1", "item2", "item3", "item4"],
//   };

//   const render = () => {
//     const { items } = state;
//     $app.innerHTML = items.reduce((html, item) => {
//       html += `<li>${item}</li>`;
//       return html;
//     }, "<ul>" + '</ul> <button id="append">추가</button>');
//     const appended = document.querySelector("#append") as HTMLHtmlElement;
//     appended.addEventListener("click", () => {
//       setState({ items: [...items, `item${items.length + 1}`] });
//     });
//   };

//   const setState = (newState: IState) => {
//     state = { ...state, ...newState };
//     render();
//   };

//   render();
// };

// document.addEventListener("DOMContentLoaded", App);

/* Class */

// interface IApp extends IComponent {
//   init(): void;
//   template(): string;
//   setEvent(): void;
// }

// interface IComponent {
//   render(): void;
//   template(): void;
// }

// class Component implements IComponent {
//   $target: HTMLElement;
//   $state: any;

//   constructor($target: HTMLElement) {
//     this.$target = $target;
//     this.init();
//     this.render();
//   }

//   init() {
//     //
//   }

//   template() {
//     return "";
//   }

//   setEvent() {
//     //
//   }

//   render() {
//     this.$target.innerHTML = this.template();
//     this.setEvent();
//   }

//   setState(newState: any) {
//     this.$state = { ...this.$state, ...newState };
//     this.render();
//   }
// }

// class App extends Component implements IApp {
//   init() {
//     this.$state = { items: ["item1", "item2"] };
//   }

//   template() {
//     const { items } = this.$state;
//     return `
//         <ul>
//           ${items.map((item: any) => `<li>${item}</li>`).join("")}
//         </ul>
//         <button>추가</button>
//     `;
//   }

//   setEvent() {
//     (this.$target.querySelector("button") as HTMLElement).addEventListener(
//       "click",
//       () => {
//         const { items } = this.$state;
//         this.setState({ items: [...items, `item${items.length + 1}`] });
//       }
//     );
//   }
// }

// document.addEventListener("DOMContentLoaded", () => {
//   const $app = document.querySelector("#app") as HTMLElement;
//   new App($app);
// });

/* 모듈화 */

import Items from "../src/components/Items";

class App {
  constructor() {
    const $app = document.querySelector("#app") as HTMLElement;
    new Items($app);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new App();
});
