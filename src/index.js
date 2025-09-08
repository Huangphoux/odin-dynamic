import './style.css';

import { dropDown } from './scripts/drop-down.js';
import { imageCarousel } from './scripts/image-carousel.js';
import { clock } from './scripts/clock.js';

dropDown.dropDownify('projects');
dropDown.dropDownify('demo');

imageCarousel.setUp();

// clock.setUp();
