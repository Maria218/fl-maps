if(Meteor.isClient) {

    var defaults = {
        title: 'Events for Focallocal - A Worldwide Movement for Positive Social Action', // Will apply to <title>, Twitter and OpenGraph.
        suffix: 'Events for Focallocal ',
        separator: '·',

        // Will apply to meta, Twitter and OpenGraph.
        description: 'Create an account or log into Events for Focallocal. ' +
        'Create positive events and share them with friends, family and other people you know.',
        // Will apply to Twitter and OpenGraph.
        image: 'http://focallocal.org/wp-content/uploads/2015/11/focallocal-logo-transparent-lowres.png',

        meta: {
            keywords: ['focallocal', 'positive', 'events']
        },

        twitter: {
            card: 'Join the event',
            creator: '@focallocal'
            // etc.
        },

        og: {
            site_name: 'Events for focallocal',
            image: 'http://focallocal.org/wp-content/uploads/2015/11/focallocal-logo-transparent-lowres.png'
            // etc.
        }
    };
    var options = {
        //only: ['someRoute'],
        //except: ['someOtherRoute'],
        defaults: defaults
    };
    Router.plugin('seo', options);
  //Meta.config({
  //    options: {
  //      //Meteor.settings[Meteor.settings.environment].public.meta.title
  //      title: 'Welcome | Events for Focallocal',
  //      suffix: 'Events for Focallocal'
  //    }
  //});
}
