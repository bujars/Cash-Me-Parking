var map;
var infoWindow;
var markerImage = 'marker.png';


  var markersData = [
		     {
			 lat: 40.733485,
			 lng: -73.987933,
			 name: "Bujar Sefa",
			 address1:"Leaving in 10 minutes.",
			 address2: "Cost: 10 dollars.",
			 postalCode: "5.0 average based on 127 reviews" },
		     {
			 lat: 40.735889,
			 lng: -73.985909,
			 name: "Christina Sarcone",
			 address1:"Leaving in an hour.",
			 address2: "Cost: 5 dollars.",
			 postalCode: "4.1 average based on 254 reviews."  },
		     {
			 lat: 40.736108,
			 lng: -73.987529,
			 name: "Donjeta Sefa",
			 address1:"Leaving at 10 am. Monday 11/13/17",
			 address2: "Cost: 12 dollars.",
			 postalCode: "3.9 average based on 634 reviews" 
		     } // don't insert comma in the last item
		     ];

function initialize() {
    var mapOptions = {
        center: new google.maps.LatLng(40.734902, -73.986848),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // a new Info Window is created
    infoWindow = new google.maps.InfoWindow();

    // Event that closes the Info Window with a click on the map
    google.maps.event.addListener(map, 'click', function() {
	    infoWindow.close();
	});

    // Finally displayMarkers() function is called to begin the markers creation
    displayMarkers();
}
google.maps.event.addDomListener(window, 'load', initialize);


// This function will iterate over markersData array
// creating markers with createMarker function
function displayMarkers(){

    // this variable sets the map bounds according to markers position
    var bounds = new google.maps.LatLngBounds();

    // for loop traverses markersData array calling createMarker function for each marker
    for (var i = 0; i < markersData.length; i++){

        var latlng = new google.maps.LatLng(markersData[i].lat, markersData[i].lng);
        var name = markersData[i].name;
        var address1 = markersData[i].address1;
        var address2 = markersData[i].address2;
        var postalCode = markersData[i].postalCode;

        createMarker(latlng, name, address1, address2, postalCode);

        // marker position is added to bounds variable
        bounds.extend(latlng);
    }

    // Finally the bounds variable is used to set the map bounds
    // with fitBounds() function
    map.fitBounds(bounds);
}

// This function creates each marker and it sets their Info Window content
function createMarker(latlng, name, address1, address2, postalCode){
    var marker = new google.maps.Marker({
	    map: map,
	    position: latlng,
	    icon: markerImage
	});

    var marker2 = new google.maps.Marker({
       map: map,
       position: new google.maps.LatLng(40.734872, -73.986242),
       icon: 'marker2.png'
     
    });
    /*    var iwContent2 = '<div id="iw_container">' +
              '<div class="iw_title">' + "You" + '</div>' +
           '<div class="iw_content">' + "are" + '<br />' +
           "Here" + '<br />' +
	"" + '</div></div>';*/


    /*var cityCircle = new google.maps.Circle({
            strokeColor: '#FF0022',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#FF0032',
            fillOpacity: 0.35,
            map: map,
            center: new google.maps.LatLng(40.730610, -73.935242),
            radius: 5
	});*/

    // This event expects a click on a marker
    // When this event is fired the Info Window content is created
    // and the Info Window is opened.
    google.maps.event.addListener(marker, 'click', function() {

	    // Creating the content to be inserted in the infowindow
        var iwContent = '<div id="iw_container">' +
              '<div class="iw_title">' + name + '</div>' +
           '<div class="iw_content">' + address1 + '<br />' +
           address2 + '<br />' +
	    postalCode + '</div></div>';
        // including content to the Info Window.
        infoWindow.setContent(iwContent);
        // opening the Info Window in the current map and at the current marker location.
        infoWindow.open(map, marker);
	});



    google.maps.event.addListener(marker2, 'click', function() {
      var iwContent2 = '<div id="iw_container">' +
              '<div class="iw_title">' + "You" + '</div>' +
           '<div class="iw_content">' + "are" + '<br />' +
           "Here" + '<br />' +
	  "" + '</div></div>';
       infoWindow.setContent(iwContent2);
       infowindow.open(map, marker2);
	});

}
/* Side Navigation */ 

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


