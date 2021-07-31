import {
    Website
} from './utils/website';
import {
    Nav
} from './components/nav';

const components = [{
    selector: '.js-nav',
    classRef: Nav
}];

new Website.Builder(components);