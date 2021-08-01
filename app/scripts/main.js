import {
    Website
} from './utils/website';
import {
    Header
} from './components/header';
import {
    Nav
} from './components/nav';
import {
    Search
} from './components/search';
import {
    Hero
} from './components/hero';
import {
    Portfolio
} from './components/portfolio';

const components = [{
        selector: '.js-header',
        classRef: Header
    },
    {
        selector: '.js-nav',
        classRef: Nav
    },
    {
        selector: '.js-search',
        classRef: Search
    },
    {
        selector: '.js-hero',
        classRef: Hero
    },
    {
        selector: '.js-portfolio',
        classRef: Portfolio
    }
];

new Website.Builder(components);