/* eslint-disable @typescript-eslint/no-var-requires */

import Rails from '@rails/ujs';
import * as ActiveStorage from '@rails/activestorage';
import 'channels';

Rails.start();
ActiveStorage.start();

// By default, this pack is loaded for server-side rendering.
// It must expose react_ujs as `ReactRailsUJS` and prepare a require context.
var componentRequireContext = require.context('react_side', true);
var ReactRailsUJS = require('react_ujs');
ReactRailsUJS.useContext(componentRequireContext);
