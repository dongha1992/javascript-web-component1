import Component from "../core/Component";

export default class Items extends Component {
  init() {
    console.log("1 init");
    this.$state = { items: ["item1", "item2"] };
  }

  template() {
    console.log("? temppalte");
    const { items } = this.$state;
    return `<ul>
    ${items
      .map(
        (item: any, key: number) =>
          `<li>${item}<button class="deleteBtn" data-index="${key}"> </li>`
      )
      .join("")}
    <button>추가</button>
    </ul>`;
  }

  setEvent() {
    console.log("3 setEvent");

    this.addEvent({
      eventType: "click",
      selector: ".addBtn",
      callback: ({ target }: any) => {
        const { items } = this.$state;
        this.setState({ items: [...items, `item${items.length + 1}`] });
      },
    });

    this.addEvent({
      eventType: "click",
      selector: ".deleteBtn",
      callback: ({ target }: any) => {
        const items = [...this.$state.items];
        items.splice(target.dataset.index, 1);
        this.setState({ items });
      },
    });
  }

  addEvent({ eventType, selector, callback }: any) {
    const children = [...this.$target.querySelectorAll(selector)];
    const isTarget = (target: any) =>
      children.includes(target) || target.closet(selector);

    this.$target.addEventListener(eventType, (event: any) => {
      if (!isTarget(event.target)) return false;
      callback(event);
    });
  }
}
