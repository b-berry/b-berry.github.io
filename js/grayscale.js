/*!
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
var lat_init = 23;
var lng_init = -7;

function initMap() {

    var mapOptions = {

        zoom: 2,
        center: new google.maps.LatLng(lat_init,lng_init),      // Globe

        // Disables the default Google Maps UI components
        disableDefaultUI: true,
        scrollwheel: true,
        draggable: false,

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
    var mapElement = document.getElementById('map');
    map = new google.maps.Map(mapElement, mapOptions);

    // Create my Google Map locations
    //var locations = require('../rb/poi.json'); 
    var locations = [
        { id: 'office', 
          data: { name: 'EPHQ',
                  lat: 40.7127837,
                  lng: -74.0059413,
                  zindex: 10
                 }, 
        },
        { id: 'office', 
          data: { name: 'Denver',
                  lat: 39.7392358,
                  lng: -104.990251,
                  zindex: 10
                 }, 
        },
        { id: 'office', 
          data: { name: 'La Serena',
                  lat: -29.9026691,
                  lng: -71.2519374,
                  zindex: 10
                 }, 
        },
        { id: 'office', 
          data: { name: 'Los Angeles',
                  lat: 34.0522342,
                  lng: -118.2436849,
                  zindex: 10
                 }, 
        },
        { id: 'office', 
          data: { name: 'Miami',
                  lat: 25.7616798,
                  lng: -80.1917902,
                  zindex: 10
                 }, 
        },
        { id: 'office', 
          data: { name: 'San Fransisco',
                  lat: 37.7749295,
                  lng: -122.4194155,
                  zindex: 10
                 }, 
        },
        { id: 'office', 
          data: { name: 'Ottawa',
                  lat: 45.4215296,
                  lng: -75.697193099,
                  zindex: 10
                 }, 
        },
        { id: 'office', 
          data: { name: 'Paris',
                  lat: 48.856614,
                  lng: 2.3522219,
                  zindex: 10
                 }, 
        },
        { id: 'office', 
          data: { name: 'Seoul',
                  lat: 37.566535,
                  lng: 126.9779692,
                  zindex: 10
                 }, 
        },
        { id: 'office', 
          data: { name: 'Warsaw',
                  lat: 52.2296756,
                  lng: 21.0122287,
                  zindex: 9 
                 }, 
        },
        { id: 'office', 
          data: { name: 'Warsaw',
                  lat: 50.06465009999999,
                  lng: 19.9449799,
                  zindex: 9 
                 }, 
        },
        { id: 'motorcycle', 
          data: { name: 'Seattle',
                  lat: 47.6062095,
                  lng: -122.3320708,
                  zindex: 10
                 }, 
        },
        //{ id: 'human', 
        //  data: { name: 'San Diego',
        //          lat: 32.715738,
        //          lng: -117.1610838,
        //          zindex: 9 
        //         }, 
        //},
        { id: 'human', 
          data: { name: 'Berlin',
                  lat: 52.52000659,
                  lng: 13.404954,
                  zindex: 9 
                 }, 
        },
        // Mototrip 
        { id: 'start', 
          data: { name: 'Minneapolis',
                  lat: 44.977753,
                  lng: -93.2650108,
                  zindex: 9 
                 }, 
        },
        { id: 'office', 
          data: { name: 'Austin',
                  lat: 30.267153,
                  lng: -97.7430608,
                  zindex: 9 
                 }, 
        },
        // SailingEffie
        { id: 'start', 
          data: { name: 'WPB',
                  lat: 26.77328260042703,
                  lng:-80.04720529999273,
                  zindex: 9 
                 }, 
        },
        { id: 'sailing', 
          data: { name: 'Niantic',
                  lat: 41.31134038637335,
                  lng:-72.19986787822916,
                  //lat: 41.04358728591249,
                  //lng:-71.76097088664596,
                  zindex: 9 
                 }, 
        }
    ]

    // Set Pin Styles
    var styles = {};
    styles['human'] = { url: 'img/pins/human.png', 
                        size: new google.maps.Size(28, 34),
                        origin: new google.maps.Point(0, 0),
                        anchor: new google.maps.Point(14, 34)
                      }
    styles['motorcycle'] = { url: 'img/pins/motorcycle.png', 
                        size: new google.maps.Size(28, 34),
                        origin: new google.maps.Point(0, 0),
                        anchor: new google.maps.Point(14, 34)
                      }
    styles['office'] = { url: 'img/pins/office.png', 
                        size: new google.maps.Size(28, 34),
                        origin: new google.maps.Point(0, 0),
                        anchor: new google.maps.Point(14, 34)
                      }
    styles['sailing'] = { url: 'img/pins/sailing.png', 
                        size: new google.maps.Size(28, 34),
                        origin: new google.maps.Point(0, 0),
                        anchor: new google.maps.Point(14, 34)
                      }
    styles['star'] = { url: 'img/pins/star.png', 
                        size: new google.maps.Size(28, 34),
                        origin: new google.maps.Point(0, 0),
                        anchor: new google.maps.Point(14, 34)
                      }
    styles['start'] = { url: 'img/pins/start.png', 
                        size: new google.maps.Size(28, 34),
                        origin: new google.maps.Point(0, 0),
                        anchor: new google.maps.Point(14, 34)
                      }

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

    // Create my polyline routes
    var motoRideCoordinates = [
        {lat: 44.9777530, lng: -93.26501080},
        {lat: 46.0130060, lng: -91.48462080},
        {lat: 46.6717890, lng: -85.98412340},
        {lat: 45.5601370, lng: -82.00998799},
        {lat: 43.6837150, lng: -80.43054269},
        {lat: 42.9981150, lng: -78.18751670},
        {lat: 42.2934130, lng: -75.47934769},
        {lat: 41.7637110, lng: -72.68509329},
        {lat: 40.8256560, lng: -73.69818579},
        {lat: 38.9351125, lng: -74.90600529},
        {lat: 36.2946008, lng: -76.25104610},
        {lat: 34.7540524, lng: -77.43024140},
        {lat: 33.5604168, lng: -81.71955330},
        {lat: 32.3668052, lng: -86.29996890},
        {lat: 29.9510657, lng: -90.07153230},
        {lat: 30.0801740, lng: -94.12655620},
        {lat: 30.2671530, lng: -97.74306080},
        {lat: 32.7026116, lng: -103.1360403},
        {lat: 34.1167305, lng: -107.2439251},
        {lat: 35.1982836, lng: -111.6513020},
        {lat: 36.8162350, lng: -111.6373384},
        {lat: 40.2338438, lng: -111.6585337},
        {lat: 43.6187102, lng: -116.2146068},
        {lat: 45.6720750, lng: -118.7885967},
        {lat: 47.6062095, lng: -122.3320708}

    ];

    var sailingEffieCoordinates = [
        {lat: 26.77328260042703, lng:-80.04720529999273},
        {lat: 29.17884640999912, lng:-78.56192109218463},
        {lat: 32.16400515230616, lng:-77.35188138375925},
        {lat: 34.20228175473438, lng:-77.80360629428668},
        {lat: 34.68615427398423, lng:-77.1172477389873},
        {lat: 34.71538035879805, lng:-76.66642247879238},
        {lat: 34.4877410951723, lng:-76.56502875340905},
        {lat: 34.99533156562151, lng:-75.31472067167815},
        {lat: 37.05558465770837, lng:-73.79484488080961},
        {lat: 41.04358728591249, lng:-71.76097088664596},
        {lat: 41.31134038637335, lng:-72.19986787822916}
    ];

    // Set Polyline Styles
    var motoPath = new google.maps.Polyline({
        path: motoRideCoordinates,
        geodesic: true,
        strokeColor: '#42DCA3',
        strokeOpacity: 1.0,
        strokeWeight: 3 
    });

    motoPath.setMap(map);

    var sailingPath = new google.maps.Polyline({
        path: sailingEffieCoordinates,
        geodesic: true,
        strokeColor: '#dca342',
        strokeOpacity: 1.0,
        strokeWeight: 3 
    });

    sailingPath.setMap(map);

}
