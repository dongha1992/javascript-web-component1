import List from '../model/List';

interface DOMList {
  ul: HTMLUListElement;
  clear(): void;
  render(list: List): void;
}

export default class ListTemplate implements DOMList {
  ul: HTMLUListElement;

  static instance: ListTemplate = new ListTemplate();

  private constructor() {
    this.ul = document.getElementById('listItems') as HTMLUListElement;
  }

  clear(): void {
    this.ul.innerHTML = '';
  }

  render(list: List): void {
    this.clear();
    list.list.forEach(item => {
      const li = document.createElement('li') as HTMLElement;
      li.className = 'item';
      const check = document.createElement('input') as HTMLInputElement;
      check.type = 'checkbox';
      check.id = item.id;
      check.tabIndex = 0;
      check.checked = item.checked;
      li.append(check);

      check.addEventListener('change', () => {
        item.checked = !item.checked;
        list.save();
      });

      const label = document.createElement('label') as HTMLLabelElement;
      label.htmlFor = item.id;
      label.textContent = item.item;
      li.append(label);

      const button = document.createElement('button') as HTMLButtonElement;
      button.className = 'button';
      button.textContent = 'X';
      li.append(button);

      button.addEventListener('click', () => {
        list.removeItem(item.id);
        this.render(list);
      });

      this.ul.append(li);
    });
  }
}
