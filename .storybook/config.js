import { configure } from '@storybook/react';
import './storybook.css';

function loadStories() {
  require('../test/stories/index.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);