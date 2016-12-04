/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $(this).closest('.collapse').collapse('toggle');
});

// Google Maps Scripts
var map = null;
var lat_init = 0;
var lng_init = 0;
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);
google.maps.event.addDomListener(window, 'resize', function() {
    map.setCenter(new google.maps.LatLng(lat_init,lng_init));
});

// Google Maps Geocode
function codeAddress(loc) 
{
  geocoder.geocode( {address:loc.address}, function(results, status) 
  {
    if (status == google.maps.GeocoderStatus.OK) 
    {
      //map.setCenter(results[0].geometry.location);//center the map over the result
      ////place a marker at the location
      //var marker = new google.maps.Marker(
      //{
      //    map: map,
      //    position: results[0].geometry.location
      //});
      //append results
      loc.location = {  'lat': results[0].geometry.location.lat, 
                        'lng' : results[0].geometry.location.lng  }
      return loc
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
   }
  });
}

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 1,

        // The latitude and longitude to center the map (always required)
        //center: new google.maps.LatLng(40.6700, -73.9400),    // New York
        center: new google.maps.LatLng(lat_init,lng_init),      // Globe

        // Disables the default Google Maps UI components
        disableDefaultUI: true,
        scrollwheel: false,
        draggable: false,

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 29
            }, {
                "weight": 0.2
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 18
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 21
            }]
        }, {
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "elementType": "labels.text.fill",
            "stylers": [{
                "saturation": 36
            }, {
                "color": "#000000"
            }, {
                "lightness": 40
            }]
        }, {
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 19
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }, {
                "weight": 1.2
            }]
        }]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    map = new google.maps.Map(mapElement, mapOptions);

    // Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
    //var image = 'img/map-marker.png';
    //var kyLatLn  = new google.maps.LatLng(40.6700, -73.9400);
    //var beachMarker = new google.maps.Marker({
    //    position: myLatLng,
    //    map: map,
    //    icon: image
    //});

    // Create my Google Map
    var locations = [
                        {   'address': 'New York, NY',  
                            'styleUrl': 'img/marker-office.png' },
                        {   'address': 'Brooklyn, NY',
                            'styleUrl': 'img/marker-home.png' },
                        {   'address': 'San Diego, CA',
                            'styleUrl': 'img/marker-home.png' },
                        {   'address': 'Seattle, WA',
                            'styleUrl': 'img/marker-star.png' },
                            // Sail
                        {   'address': 'Jersey City, NJ',
                            'styleUrl': 'img/marker-boat1.png' },
                        {   'address': 'Port Washington, NY',
                            'styleUrl': 'img/marker-boat1.png' },
                            // MotoTrip2016-NXNE
                        {   'address': 'Minneapolis, MN',
                            'styleUrl': 'img/marker-moto1.png' },
                        {   'address': 'Hayward, WI',
                            'styleUrl': 'img/marker-moto1.png' },
                        {   'address': 'Grand Marais, MI',
                            'styleUrl': 'img/marker-moto1.png' },
                        {   'address': 'South Baymouth, ON',
                            'styleUrl': 'img/marker-moto1.png' },
                        {   'address': 'Elora, ON',
                            'styleUrl': 'img/marker-moto1.png' },
                        {   'address': 'Batavia, NY',
                            'styleUrl': 'img/marker-moto1.png' },
                        {   'address': 'Bainbridge, NY',
                            'styleUrl': 'img/marker-moto1.png' },
                        {   'address': 'Hartford, CT',
                            'styleUrl': 'img/marker-moto1.png' },
                        {   'address': 'Port Washington, NY',  
                            'styleUrl': 'img/marker-moto1.png' },
                            // MotoTrip2016-SXSW
                        {   'address': 'Cape May, NJ',
                            'styleUrl': 'img/marker-moto2.png' },
                        {   'address': 'Elizabeth City, NC',  
                            'styleUrl': 'img/marker-moto2.png' },
                        {   'address': 'Jacksonville, NC',
                            'styleUrl': 'img/marker-moto2.png' },
                        {   'address': 'Aiken, GA',
                            'styleUrl': 'img/marker-moto2.png' },
                        {   'address': 'Montgomery, AL',
                            'styleUrl': 'img/marker-moto2.png' },
                        {   'address': 'New Orleans, LA',
                            'styleUrl': 'img/marker-moto2.png' },
                        {   'address': 'Beaumont, TX',
                            'styleUrl': 'img/marker-moto2.png' },
                        {   'address': 'Austin, TX',
                            'styleUrl': 'img/marker-moto2.png' }
                    ];


    //declare marker call it 'i'
    var poi, i;

    //add marker to each location poi
    for (i = 0; i < locations.length; i++) {

        //testing
        //console.log(locations[i]['address']);

        //geocode location i w/ timeout .5s (for API key restriction)
        result = setTimeout(codeAddress(locations[i]),500};        
        //append results
        locations[i].lat = result.loc['lat']
        locations[i].lng = result.lng['lng']
 
        poi = new google.maps.Marker({
                    position: new google.maps.LatLng(locations[i]['lat'], locations[i]['lng']),
                    map: map,
                    icon: locations[i]['styleUrl']
                });
    }
}
