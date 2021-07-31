import {
    Website
} from './utils/website';
import {
    Nav
} from './components/nav';
import {
    Search
} from './components/search';

const components = [{
        selector: '.js-nav',
        classRef: Nav
    },
    {
        selector: '.js-search',
        classRef: Search
    }
];

new Website.Builder(components);