export default class View {
  el: HTMLElement;
  constructor(el: HTMLElement) {
    if (!el) throw el;
    this.el = el;
    return this;
  }

  on(event: string, handler: (e: CustomEvent) => void): this {
    console.log("7");
    this.el.addEventListener(event, handler as EventListener);
    return this;
  }

  emit(event: string, data: any): this {
    const evt = new CustomEvent(event, {
      detail: data,
    });
    this.el.dispatchEvent(evt);
    return this;
  }

  hide(): this {
    this.el.style.display = "none";
    return this;
  }

  show(): this {
    this.el.style.display = "";
    return this;
  }
}
