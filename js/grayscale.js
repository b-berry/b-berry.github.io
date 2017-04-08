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
var lat_init = 39.51;
var lng_init = -98.17;
//var lat_init = 40.7127837;
//var lng_init = -74.0059413;
// When the window has finished loading create our google map below
//google.maps.event.addDomListener(window, 'load', initMap);
//google.maps.event.addDomListener(window, 'resize', function() {
//    map.setCenter(new google.maps.LatLng(lat_init,lng_init));
//});

function initMap() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 4,

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
    //var locations = require('../rb/poi.json'); 
    var locations = [
        { id: 'office', 
          data: { name: 'EPHQ',
                  lat: 40.7127837,
                  lng: -74.0059413,
                  zindex: 10
                 }, 
        },
        { id: 'star', 
          data: { name: 'Seattle',
                  lat: 47.6062095,
                  lng: -122.3320708,
                  zindex: 10
                 }, 
        },
        { id: 'human', 
          data: { name: 'Austin',
                  lat: 30.267153,
                  lng: -97.7430608,
                  zindex: 9 
                 }, 
        },
        { id: 'human', 
          data: { name: 'Minneapolis',
                  lat: 44.977753,
                  lng: -93.2650108,
                  zindex: 9 
                 }, 
        },
        { id: 'human', 
          data: { name: 'San Diego',
                  lat: 32.715738,
                  lng: -117.1610838,
                  zindex: 9 
                 }, 
        }
    ]

    // Set Pin Styles
    var styles = {};
    styles['human'] = { url: 'img/pins/human.png', 
                        size: new google.maps.Size(20, 34),
                        origin: new google.maps.Point(0, 0),
                        anchor: new google.maps.Point(10, 34)
                      }
    styles['office'] = { url: 'img/pins/office.png', 
                        size: new google.maps.Size(20, 34),
                        origin: new google.maps.Point(0, 0),
                        anchor: new google.maps.Point(10, 34)
                      }
    styles['star'] = { url: 'img/pins/star.png', 
                        size: new google.maps.Size(20, 34),
                        origin: new google.maps.Point(0, 0),
                        anchor: new google.maps.Point(10, 34)
                      }

    // Shapes define the clickable region of the icon. The type defines an HTML
    // <area> element 'poly' which traces out a polygon as a series of X,Y points.
    // The final coordinate closes the poly by connecting to the first coordinate.
    var shape = { coords: [1, 1, 1, 20, 18, 20, 18, 1],
                  type: 'poly'
                };


    for (var i = 0; i < locations.length; i++) {
      var poi = locations[i];
      var marker = new google.maps.Marker({
        position: { lat: poi['data']['lat'], lng: poi['data']['lng'] },
        map: map,
        icon: styles[ poi['id'] ],
        shape: shape,
        title: poi['data']['name'],
        zIndex: poi['data']['zindex']
      });
    }
}
