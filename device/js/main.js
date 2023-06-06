import modals from './modules/modals.js';
import tabs from './modules/tabs.js';
import accordion from './modules/accordion.js';
import burger from './modules/burger.js';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    
    modals();
    tabs();
    accordion();
    burger();
})