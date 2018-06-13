import { h, render } from 'preact';
import { Homepage } from './pages/Homepage';
import { api } from './api';

const root = document.createElement('div');

document.body.appendChild(root);

render(<Homepage api={api} />, root);
