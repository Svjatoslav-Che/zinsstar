const host = 'http://127.0.0.1:3000';
export const environment = {
  production: false,
  api: `${host}/api`,
  emails: {
    support: {
      href: 'mailto:service@mail-zinsunion.com',
      template: 'service@mail-zinsunion.com',
    },
    service: {
      href: 'mailto:service@mail-zinsunion.com',
      template: 'service@mail-zinsunion.com',
    },
    companies: {
      href: 'mailto:service@mail-zinsunion.com',
      template: 'service@mail-zinsunion.com',
    },
  },
  contact: {
    customer: {
      phone: '+4991114897934',
      href: 'tel:+4991114897934',
      template: '0911-14897934',
    },
    business: {
      phone: '+4991114897934',
      href: 'tel:+4991114897934',
      template: '0911-14897934',
    },
  },
  address: {
    city: 'Kiel',
    country: 'Deutschland',
    zip: '24103',
    street: 'Klopstockstraße 17',
  },
  googlePlaces:{
    apiKey: 'AIzaSyBUdct_TPYmM0iL5zMXONM53JVKS6F4SMA',
    placeId: 'ChIJJ5HJJ1nO1EAR7pKaHe4ymnk'
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
