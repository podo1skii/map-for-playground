function getUrlRequest(type,from,to) {
    return "https://api.mapbox.com/directions/v5/mapbox/"+type+"/"+from+";"+to+"?geometries=geojson&overview=full&access_token=pk.eyJ1IjoicG9kbzFza2lpIiwiYSI6ImNqcGE2Nno5bjFyamszcW40OHFwNmI5aG4ifQ.G24jGyn9ueY8JL2BHWDnuw"

}

function jsonLayer(index,resp) {

    var json = {
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
            "line-color": "#58DFC5",
            "line-width": 6,
            "line-gradient": [
                'interpolate',
                ['linear'],
                ['line-progress'],
                // 0, "blue",
                // 0.1, "royalblue",
                // 0.3, "cyan",
                0, "red",
                0.5, "yellow",
                1, "lime"]
        }
    }

    json.source.data.geometry = resp.routes[0].geometry;
    return json;
}

function responseRoad(from, to) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', getUrlRequest("walking",from,to), false);
    xhr.send();
    if (xhr.status != 200) {
        // обработать ошибку
        alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
    } else {
        // вывести результат
        let resp = xhr.responseText; // responseText -- текст ответа.
        resp = JSON.parse(resp);
        return resp;
    }
}



