function getUrlRequest(type,from,to,exclude) {
    return "https://api.mapbox.com/directions/v5/mapbox/"+type+"/"+from+";"+to+"?"+exclude+"geometries=geojson&overview=full&access_token=pk.eyJ1IjoicG9kbzFza2lpIiwiYSI6ImNqcGE2Nno5bjFyamszcW40OHFwNmI5aG4ifQ.G24jGyn9ueY8JL2BHWDnuw"

}

function roadLayer(index,resp) {

    let json = {
        "id": "route-"+index,
        "type": "line",
        "source": {
            "type": "geojson",
            "lineMetrics": true,
            "data": {
                "type": "Feature",
                "properties": {},
                "geometry": {}
            }
        },
        "layout": {
            "line-join": "round",
            "line-cap": "round"
        },
        "paint": {
            "line-color": "#5181b8",
            "line-width": 4
            // "line-gradient": [
            //     'interpolate',
            //     ['linear'],
            //     ['line-progress'],
            //     0, "red",
            //     0.5, "yellow",
            //     1, "lime"]
        }
    }

    json.source.data.geometry = resp.routes[0].geometry;
    return json;
}

function roadTypeResponse(type,from, to, exclude) {
    let request = new XMLHttpRequest();
    request.open('GET', getUrlRequest(type,from,to,exclude), false);
    request.send();
    if (request.status != 200) {
        alert( request.status + ': ' + request.statusText );
    } else {
        let response = request.responseText;
        response = JSON.parse(response);
        return response;
    }
}

function roadResponse(from,to) {
    let walk = roadTypeResponse("walking",from,to,"");
    let drive = roadTypeResponse("driving",from,to,"exclude=toll&");
    if (walk.routes[0].distance>5000){
        drive.way  = "на машине";
        return drive;
    }else{
        walk.way = "пешком";
        return walk;
    }
}



