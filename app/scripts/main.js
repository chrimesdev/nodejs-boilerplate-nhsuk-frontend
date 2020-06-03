// NHS.UK frontend components
import Checkboxes from '../../node_modules/nhsuk-frontend/packages/components/checkboxes/checkboxes';
import Details from '../../node_modules/nhsuk-frontend/packages/components/details/details';
import Header from '../../node_modules/nhsuk-frontend/packages/components/header/header';
import Radios from '../../node_modules/nhsuk-frontend/packages/components/radios/radios';
import SkipLink from '../../node_modules/nhsuk-frontend/packages/components/skip-link/skip-link';

// NHS.UK frontend polyfills
import '../../node_modules/nhsuk-frontend/packages/polyfills';

// Initialize components
document.addEventListener('DOMContentLoaded', () => {
  Details();
  Header();
  SkipLink();
  Radios();
  Checkboxes();
});

// Application JS
