interface IState {
  items: string[];
}

interface IComponent {
  template(): void;
  render(): void;
  setState(state?: IState): state;
}

class Component implements IComponent {
  $target: HTMLDivElement;
  $state?: IState;

  constructor($target: HTMLDivElement) {
    this.$target = $target;
    this.render();
  }

  template() {
    return '';
  }

  render() {
    this.$target.innerHTML = this.template();
  }

  setState(newState: IState) {
    this.$state = { ...this.$state, ...newState };
    this.render();
  }
}

export default class App extends Component {
  init() {
    this.$state = { items: ['item1', 'item2'] };
  }
}
