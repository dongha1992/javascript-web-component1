import './index.scss';
import App from './components/App';

document.addEventListener('DOMContentLoaded', () => {
  new App(document.querySelector('#app') as HTMLDivElement);
});
