import { h, render, Component } from 'preact';
import Admin from './view/index';

const root = document.createElement('div');

document.body.appendChild(root);

render(<Admin />, root);
