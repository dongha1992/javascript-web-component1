import './index.scss';
import List from './model/List';
import ListItem from './model/ListItem';
import ListTemplate from './templates/ListTemplate';

const initApp = (): void => {
  const list = List.instance;
  const template = ListTemplate.instance;

  const itemForm = document.getElementById('itemForm') as HTMLFormElement;
  itemForm.addEventListener('submit', (event: SubmitEvent): void => {
    event.preventDefault();
  });

  const clearItems = document.getElementById(
    'cleatItemButton'
  ) as HTMLButtonElement;
  clearItems?.addEventListener('click', (): void => {
    list.clear();
    template.clear();
  });
  list.load();
  template.render(list);
};

document.addEventListener('DOMContentLoaded', initApp);
