// from data.js
var tableData = data;

// YOUR CODE HERE!
// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select(".form-control");

// Create event handlers 
button.on("click",ufoSightings);
form.on("submit",ufoSightings);

// create a function for the event handler for the form
function ufoSightings() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputdate = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputdate.property("value");

    // console.log(inputValue);
    // console.log(tableData);

    var filteredSightings = tableData.filter(sighting => sighting.datetime === inputValue);

    console.log(filteredSightings);

    // Unpack the data into variables to build the table
    var sightingDate = filteredSightings.map(sighting => sighting.datetime);
    //console.log("Dates: ", sightingDate);
    var sightingCity = filteredSightings.map(sighting => sighting.city);
    //console.log("City: ", sightingCity);
    var sightingState = filteredSightings.map(sighting => sighting.state);
    //console.log("State: ", sightingState);
    var sightingCountry = filteredSightings.map(sighting => sighting.country);
    //console.log("Country: ", sightingCountry);
    var sightingDuration = filteredSightings.map(sighting => sighting.durationMinutes);
    //console.log("Duration: ", sightingDuration);
    var sightingShape = filteredSightings.map(sighting => sighting.shape);
    //console.log("shape: ", sightingShape);
    var sightingComments = filteredSightings.map(sighting => sighting.comments);
    //console.log("comments: ", sightingComments);

    ufoBuildTable(sightingDate, sightingCity, sightingState, sightingCountry, sightingDuration, sightingShape, sightingComments);
}

function ufoBuildTable(sightingDate, sightingCity, sightingState, sightingCountry, sightingDuration, sightingShape, sightingComments) {

    var table = d3.select("#ufo-table");
    var tbody = table.select("tbody");
    var trow;

    // clear the table
    tbody.html("");

    // For loop to append the data in the table
    for (var i =0; i < sightingDate.length; i++) {

        trow = tbody.append("tr");
        trow.append("td").text(sightingDate[i]);
        trow.append("td").text(sightingCity[i]);
        trow.append("td").text(sightingState[i]);
        trow.append("td").text(sightingCountry[i]);
        trow.append("td").text(sightingDuration[i]);
        trow.append("td").text(sightingShape[i]);
        trow.append("td").text(sightingComments[i]);
    }

}
