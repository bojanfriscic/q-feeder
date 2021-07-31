import {
    Website
} from './utils/website';
import {
    Nav
} from './components/nav';
import {
    Search
} from './components/search';
import {
    Hero
} from './components/hero';

const components = [{
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
    }
];

new Website.Builder(components);