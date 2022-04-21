function findLink() {
    /*
    Finds the link to the departure board using the inputs
    from the user
    */

    // Find the values inputted
    station = document.getElementById("station").value
    content = document.getElementById("content").value
    layout = document.getElementById("layout").value
    notice = document.getElementById("notice").value

    // If no station is given, assume that they want the placeholder (OSL)
    if (station == "") {
        station = "OSL"
    }

    // Create the output string
    output = (
        '<a href="'
        + (                                                     //The link
            "http://rtd.opm.jbv.no:8080/web_client/std?" + 
            "station=" + station + 
            "&content=" + content + 
            "&layout=" + layout + 
            "&notice=" + notice
        ) + 
        '">This is the link</a>'
        )

    // Make the content of the output div the HTML in the output string
    document.getElementById("output").innerHTML = output
}

function getHelp() {
    /*
    Changes innerHTML of help div to the help information, and
    removing it if the innerHTML already exists
    */

    //If there is no help there
    if (document.getElementById("help").innerHTML.length == 0) {
        help = `
        <a href="https://www.banenor.no/contentassets/ffbc6590643a49eb87243a45482815d5/stationlist-passengers.txt" class="italics">Here is list of station codes</a>
        <p class="italics">The station code is two or three letters, and is normally found below enter/exit signals at the stations</p>`
    }
    // In all other cases (i.e. when there is help there already)
    else {
        help = ""
    }

    // Make the content of the help div the HTML in the help string
    document.getElementById("help").innerHTML = help
}