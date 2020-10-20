import App from './controllers/App';
import './style.css';

const app = new App();

app.start();
app.reload();

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  app.reload(form.elements.value.value);
});
