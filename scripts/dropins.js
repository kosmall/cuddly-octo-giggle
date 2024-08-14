/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */

// Drop-in Tools
import { events } from '@dropins/tools/event-bus.js';
import {
  removeFetchGraphQlHeader,
  setEndpoint,
  setFetchGraphQlHeader,
} from '@dropins/tools/fetch-graphql.js';
import { initializers } from '@dropins/tools/initializer.js';

// Drop-ins
import * as authApi from '@dropins/storefront-auth/api.js';
import * as cartApi from '@dropins/storefront-cart/api.js';

// Recaptcha
import * as recaptcha from '@dropins/tools/recaptcha.js';

// Libs
import { getConfigValue, getCookie } from './configs.js';

export const getUserTokenCookie = () => getCookie('auth_dropin_user_token');

export default async function initializeDropins() {
  events.enableLogger(true);

  // Set Fetch Endpoint (Global)
  setEndpoint(await getConfigValue('commerce-core-endpoint'));

  // Recaptcha
  recaptcha.setConfig();

  // Initializers (Global)
  initializers.register(authApi.initialize, {});
  initializers.register(cartApi.initialize, {});

  // Handle page load
  const mount = () => {
    // Set auth headers
    events.on('authenticated', (isAuthenticated) => {
      if (isAuthenticated) {
        const token = getUserTokenCookie();
        setFetchGraphQlHeader('Authorization', `Bearer ${token}`);
      } else {
        removeFetchGraphQlHeader('Authorization');
      }
    });

    // Cache cartId in session storage
    events.on(
      'cart/data',
      (data) => {
        if (data?.id) {
          sessionStorage.setItem('DROPINS_CART_ID', data.id);
        } else {
          sessionStorage.removeItem('DROPINS_CART_ID');
        }
      },
      { eager: true },
    );

    // After load or reload page we check token
    const token = getUserTokenCookie();

    initializers.mount();
    events.emit('authenticated', !!token);
  };

  // Mount all registered drop-ins
  if (document.readyState === 'complete') {
    mount();
  } else {
    // Handle on prerendering document activated
    document.addEventListener('prerenderingchange', mount);
    // Handle on page load
    window.addEventListener('load', mount);
  }
}

export function getCartDataFromCache() {
  return cartApi.getCartDataFromCache();
}
