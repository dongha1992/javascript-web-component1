interface IData<T> {
  [k: string]: T | undefined;
}

interface IView {
  on(event: string, handler: (e: CustomEvent) => void): this;
  emit(event: string, data?: IData<string>): this;
  hide(): this;
  show(): this;
}

export default class View implements IView {
  el: HTMLElement;
  constructor(el: HTMLElement) {
    if (!el) throw el;
    this.el = el;
    return this;
  }

  on(event: string, handler: (e: CustomEvent) => void): this {
    this.el.addEventListener(event, handler as EventListener);
    return this;
  }

  emit(event: string, data?: IData<string>): this {
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
