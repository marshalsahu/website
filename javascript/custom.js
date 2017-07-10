/* ===== Google Map ====== */



    function initMap() {

        var location = new google.maps.LatLng(20.2961, 85.8245);

        var mapCanvas = document.getElementById('map');
        var mapOptions = {
            center: location,
            zoom: 5,
            mapTypeId: google.maps.MapTypeId.TERRAIN
        };
        var map = new google.maps.Map(mapCanvas, mapOptions);
        var marker= new google.maps.Marker({
            position: location,
            map: map,
            animation: google.maps.Animation.BOUNCE
        });

    }
