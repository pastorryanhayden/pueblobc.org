var Airtable = require('airtable');
var fs          = require('fs');
var yaml        = require('js-yaml');

function loadConfig() {
  var ymlFile = fs.readFileSync('_config.yml', 'utf8');
  return yaml.load(ymlFile);
}

var config = loadConfig().airtable;
var jsonfile = require('jsonfile');

var fileheader = '_data/header.json';
var header = new Airtable({ apiKey: config.apikey }).base(config.newhebron);
var headerJson = [];
var headerJsonTest = [];
    header('Header').select({
        maxRecords: 1,
      
    }).eachPage(function page(records, fetchNextPage) {

        // This function (`page`) will get called for each page of records.

        records.forEach(function(record) {
          headerJson.push(record._rawJson.fields);
          
        });
        fetchNextPage();

    }, function done(error) {
        if (error) {
            console.log(error);
        }
      jsonfile.writeFile(fileheader, headerJson, function (err) {
        console.error(err)
      });
      console.log('header worked');
    });


var fileintro = '_data/intro.json';
var intro = new Airtable({ apiKey: config.apikey }).base(config.newhebron);
var introJson = [];
var introJsonTest = [];
    intro('Find').select({
        maxRecords: 6,
        view: 'Main View'
      
    }).eachPage(function page(records, fetchNextPage) {

        // This function (`page`) will get called for each page of records.

        records.forEach(function(record) {
          introJson.push(record._rawJson.fields);
          
        });
        fetchNextPage();

    }, function done(error) {
        if (error) {
            console.log(error);
        }
      jsonfile.writeFile(fileintro, introJson, function (err) {
        console.error(err)
      });
      console.log('intro worked');
    });

var fileintro2 = '_data/intro2.json';
var intro2 = new Airtable({ apiKey: config.apikey }).base(config.newhebron);
var intro2Json = [];
var intro2JsonTest = [];
    intro2('Find2').select({
        maxRecords: 1
    }).eachPage(function page(records, fetchNextPage) {

        // This function (`page`) will get called for each page of records.

        records.forEach(function(record) {
          intro2Json.push(record._rawJson.fields);
          
        });
        fetchNextPage();

    }, function done(error) {
        if (error) {
            console.log(error);
        }
      jsonfile.writeFile(fileintro2, intro2Json, function (err) {
        console.error(err)
      });
      console.log('intro2 worked');
    });

var filetestimonials = '_data/testimonials.json';
var testimonials = new Airtable({ apiKey: config.apikey }).base(config.newhebron);
var testimonialsJson = [];
var testimonialsJsonTest = [];
    testimonials('Testimonials').select({
        maxRecords: 6,
        view: 'Main View'
    }).eachPage(function page(records, fetchNextPage) {

        // This function (`page`) will get called for each page of records.

        records.forEach(function(record) {
          testimonialsJson.push(record._rawJson.fields);
          
        });
        fetchNextPage();

    }, function done(error) {
        if (error) {
            console.log(error);
        }
      jsonfile.writeFile(filetestimonials, testimonialsJson, function (err) {
        console.error(err)
      });
      console.log('testimonials worked');
    });

var fileimages = '_data/images.json';
var images = new Airtable({ apiKey: config.apikey }).base(config.newhebron);
var imagesJson = [];
var imagesJsonTest = [];
    images('Photos').select({
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

var filevisit1 = '_data/visit1.json';
var visit1 = new Airtable({ apiKey: config.apikey }).base(config.newhebron);
var visit1Json = [];
var visit1JsonTest = [];
    visit1('Plan_A_Visit').select({
        maxRecords: 12,
        view: 'Main View'
    }).eachPage(function page(records, fetchNextPage) {

        // This function (`page`) will get called for each page of records.

        records.forEach(function(record) {
          visit1Json.push(record._rawJson.fields);
          
        });
        fetchNextPage();

    }, function done(error) {
        if (error) {
            console.log(error);
        }
      jsonfile.writeFile(filevisit1, visit1Json, function (err) {
        console.error(err)
      });
      console.log('visit1 worked');
    });

var filevisit2 = '_data/visit2.json';
var visit2 = new Airtable({ apiKey: config.apikey }).base(config.newhebron);
var visit2Json = [];
var visit2JsonTest = [];
    visit2('Plan_A_Visit_2').select({
        maxRecords: 1
    }).eachPage(function page(records, fetchNextPage) {

        // This function (`page`) will get called for each page of records.

        records.forEach(function(record) {
          visit2Json.push(record._rawJson.fields);
          
        });
        fetchNextPage();

    }, function done(error) {
        if (error) {
            console.log(error);
        }
      jsonfile.writeFile(filevisit2, visit2Json, function (err) {
        console.error(err)
      });
      console.log('visit2 worked');
    });

var filepastor = '_data/pastor.json';
var pastor = new Airtable({ apiKey: config.apikey }).base(config.newhebron);
var pastorJson = [];
var pastorJsonTest = [];
    pastor('About_Pastor').select({
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

var fileevents = '_data/events.json';
var events = new Airtable({ apiKey: config.apikey }).base(config.newhebron);
var eventsJson = [];
var eventsJsonTest = [];
    events('Events').select({
        maxRecords: 15,
        filterByFormula: 'AND(NOT(Is_Featured), Future)',
        sort: [{field: "Date", direction: "asc"}]
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

var filefeaturedevent = '_data/featuredevent.json';
var featuredevent = new Airtable({ apiKey: config.apikey }).base(config.newhebron);
var featuredeventJson = [];
var featuredeventJsonTest = [];
    featuredevent('Events').select({
        maxRecords: 1,
        view: 'Featured',
        sort: [{field: "Date", direction: "asc"}]
    }).eachPage(function page(records, fetchNextPage) {

        // This function (`page`) will get called for each page of records.

        records.forEach(function(record) {
          featuredeventJson.push(record._rawJson.fields);
          
        });
        fetchNextPage();

    }, function done(error) {
        if (error) {
            console.log(error);
        }
      jsonfile.writeFile(filefeaturedevent, featuredeventJson, function (err) {
        console.error(err)
      });
      console.log('featuredevent worked');
    });

var filecontact = '_data/contact.json';
var contact = new Airtable({ apiKey: config.apikey }).base(config.newhebron);
var contactJson = [];
var contactJsonTest = [];
    contact('Contact_Info').select({
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

