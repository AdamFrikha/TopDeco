import { createGlobalStyle } from 'styled-components';

import paytoneone from './paytoneone.woff';
import paytoneone2 from './paytoneone.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'monoton';
        src: local('monoton'), local('monoton'),
        url(${paytoneone}) format('woff2'),
        url(${paytoneone2}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;