var Airtable = require('airtable');
var fs          = require('fs');
var yaml        = require('js-yaml');

function loadConfig() {
  var ymlFile = fs.readFileSync('_config.yml', 'utf8');
  return yaml.load(ymlFile);
}

var config = loadConfig().airtable;
var jsonfile = require('jsonfile');

var filewelcome = '_data/welcome.json';
var welcome = new Airtable({ apiKey: config.apikey }).base(config.newhebron);
var welcomeJson = [];
var welcomeJsonTest = [];
    welcome('Welcome').select({
        maxRecords: 1,
      
    }).eachPage(function page(records, fetchNextPage) {

        // This function (`page`) will get called for each page of records.

        records.forEach(function(record) {
          welcomeJson.push(record._rawJson.fields);
          
        });
        fetchNextPage();

    }, function done(error) {
        if (error) {
            console.log(error);
        }
      jsonfile.writeFile(filewelcome, welcomeJson, function (err) {
        console.error(err)
      });
      console.log('welcome worked');
    });
    
var filevisit = '_data/visit.json';
var visit = new Airtable({ apiKey: config.apikey }).base(config.newhebron);
var visitJson = [];
var visitJsonTest = [];
    visit('Plan A Visit').select({
        maxRecords: 10,
        view: 'Main View'
    }).eachPage(function page(records, fetchNextPage) {

        // This function (`page`) will get called for each page of records.

        records.forEach(function(record) {
          visitJson.push(record._rawJson.fields);
          
        });
        fetchNextPage();

    }, function done(error) {
        if (error) {
            console.log(error);
        }
      jsonfile.writeFile(filevisit, visitJson, function (err) {
        console.error(err)
      });
      console.log('visit worked');
    });

var filepastor = '_data/pastor.json';
var pastor = new Airtable({ apiKey: config.apikey }).base(config.newhebron);
var pastorJson = [];
var pastorJsonTest = [];
    pastor('Pastor').select({
        maxRecords: 1
    }).eachPage(function page(records, fetchNextPage) {

        // This function (`page`) will get called for each page of records.

        records.forEach(function(record) {
          pastorJson.push(record._rawJson.fields);
          
        });
        fetchNextPage();

    }, function done(error) {
        if (error) {
            console.log(error);
        }
      jsonfile.writeFile(filepastor, pastorJson, function (err) {
        console.error(err)
      });
      console.log('pastor worked');
    });

var fileimages = '_data/images.json';
var images = new Airtable({ apiKey: config.apikey }).base(config.newhebron);
var imagesJson = [];
var imagesJsonTest = [];
    images('Images').select({
        maxRecords: 12,
        view: 'Main View'
    }).eachPage(function page(records, fetchNextPage) {

        // This function (`page`) will get called for each page of records.

        records.forEach(function(record) {
          imagesJson.push(record._rawJson.fields);
          
        });
        fetchNextPage();

    }, function done(error) {
        if (error) {
            console.log(error);
        }
      jsonfile.writeFile(fileimages, imagesJson, function (err) {
        console.error(err)
      });
      console.log('images worked');
    });

var filecontact = '_data/contact.json';
var contact = new Airtable({ apiKey: config.apikey }).base(config.newhebron);
var contactJson = [];
var contactJsonTest = [];
    contact('Contact').select({
        maxRecords: 1
    }).eachPage(function page(records, fetchNextPage) {

        // This function (`page`) will get called for each page of records.

        records.forEach(function(record) {
          contactJson.push(record._rawJson.fields);
          
        });
        fetchNextPage();

    }, function done(error) {
        if (error) {
            console.log(error);
        }
      jsonfile.writeFile(filecontact, contactJson, function (err) {
        console.error(err)
      });
      console.log('contact worked');
    });

var fileservices = '_data/services.json';
var services = new Airtable({ apiKey: config.apikey }).base(config.newhebron);
var servicesJson = [];
var servicesJsonTest = [];
    services('Service Schedule').select({
        maxRecords: 1
    }).eachPage(function page(records, fetchNextPage) {

        // This function (`page`) will get called for each page of records.

        records.forEach(function(record) {
          servicesJson.push(record._rawJson.fields);
          
        });
        fetchNextPage();

    }, function done(error) {
        if (error) {
            console.log(error);
        }
      jsonfile.writeFile(fileservices, servicesJson, function (err) {
        console.error(err)
      });
      console.log('services worked');
    });

var fileevents = '_data/events.json';
var events = new Airtable({ apiKey: config.apikey }).base(config.newhebron);
var eventsJson = [];
var eventsJsonTest = [];
    events('Events').select({
        maxRecords: 10,
        sort: [{field: 'Date', direction: 'asc'}],
        view: 'normal events'


    }).eachPage(function page(records, fetchNextPage) {

        // This function (`page`) will get called for each page of records.

        records.forEach(function(record) {
          eventsJson.push(record._rawJson.fields);
          
        });
        fetchNextPage();

    }, function done(error) {
        if (error) {
            console.log(error);
        }
      jsonfile.writeFile(fileevents, eventsJson, function (err) {
        console.error(err)
      });
      console.log('events worked');
    });

var filefeaturedEvents = '_data/featuredEvents.json';
var featuredEvents = new Airtable({ apiKey: config.apikey }).base(config.newhebron);
var featuredEventsJson = [];
var featuredEventsJsonTest = [];
    featuredEvents('Events').select({
        maxRecords: 3,
        sort: [{field: 'Date', direction: 'asc'}],
        view: 'featured events'


    }).eachPage(function page(records, fetchNextPage) {

        // This function (`page`) will get called for each page of records.

        records.forEach(function(record) {
          featuredEventsJson.push(record._rawJson.fields);
          
        });
        fetchNextPage();

    }, function done(error) {
        if (error) {
            console.log(error);
        }
      jsonfile.writeFile(filefeaturedEvents, featuredEventsJson, function (err) {
        console.error(err)
      });
      console.log('featuredEvents worked');
    });