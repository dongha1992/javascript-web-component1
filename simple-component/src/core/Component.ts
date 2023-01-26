export default class Component {
  $target: any;
  $state: any;
  constructor($target: any) {
    this.$target = $target;
    this.init();
    this.setEvent();
    this.render();
  }

  init(): void {
    //
  }

  template() {
    return "";
  }

  render() {
    console.log("2 render");
    this.$target.innerHTML = this.template();
  }

  setEvent() {
    //
  }

  setState(newState: any) {
    console.log("4 setState");
    this.$state = { ...this.$state, ...newState };
    this.render();
  }
}
