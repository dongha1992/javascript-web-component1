import View from "./View";

export interface IFormView {
  showResetBtn(show: boolean): void;
  bindEvents(): void;
  onKeyup(e: Event): void;
  onClickReset(): void;
  setValue(value: string): void;
}

export default class FormView extends View implements IFormView {
  _inputEl: HTMLInputElement;
  _resetEl: HTMLButtonElement;
  constructor(el: HTMLElement) {
    super(el);
    this._inputEl = el.querySelector("[type=text]") as HTMLInputElement;
    this._resetEl = el.querySelector("[type=reset]") as HTMLButtonElement;
    this.showResetBtn(false);
    this.bindEvents();

    return this;
  }

  showResetBtn(show = true): void {
    if (this._resetEl) this._resetEl.style.display = show ? "block" : "none";
    else return;
  }

  bindEvents() {
    this.on("submit", (e: Event) => e.preventDefault());
    this._inputEl?.addEventListener("keyup", (e: KeyboardEvent) =>
      this.onKeyup(e)
    );
    this._resetEl?.addEventListener("click", () => this.onClickReset());
  }

  onKeyup(e: KeyboardEvent) {
    const { value } = this._inputEl as HTMLInputElement;
    const enter = 13;
    this.showResetBtn(value.length > 0);
    if (!value.length) this.emit("@reset");
    if (e.keyCode !== enter) return;
    this.emit("@submit", { input: value });
  }

  onClickReset() {
    this.emit("@reset");
    this.showResetBtn(false);
  }

  setValue(value = "") {
    this._inputEl.value = value;
  }
}
