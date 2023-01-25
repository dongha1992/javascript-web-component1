import ListItem from './ListItem';

const MY_LIST = 'myList';

interface IList {
  list: ListItem[];
  load(): void;
  save(): void;
  clear(): void;
  addItem(itemObj: ListItem): void;
  removeItem(id: string): void;
}

interface _IListItem {
  _id: string;
  _item: string;
  _checked: boolean;
}

export default class List implements IList {
  static instance: List = new List();

  constructor(private _list: ListItem[] = []) {}

  get list(): ListItem[] {
    return this._list;
  }

  load(): void {
    const storedList: string | null = localStorage.getItem(MY_LIST);
    if (typeof storedList !== 'string') return;

    const parsedList: _IListItem[] = JSON.parse(storedList);

    parsedList.forEach(({ _id, _item, _checked }: _IListItem) => {
      const newListItem = new ListItem(_id, _item, _checked);
      List.instance.addItem(newListItem);
    });
  }

  save(): void {
    localStorage.setItem(MY_LIST, JSON.stringify(this._list));
  }

  clear(): void {
    this._list = [];
    this.save();
  }

  addItem(itemObj: ListItem): void {
    this._list.push(itemObj);
    this.save();
  }

  removeItem(id: string): void {
    this._list = this._list.filter(item => item.id !== id);
    this.save();
  }
}
