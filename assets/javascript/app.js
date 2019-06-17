var verbs = ["is:" , "was:", "played:" ,"enjoys:" ]

var descriptions = ["an aspiring web developer." , "previously a K-8 supplemental reading & mathematics instructor." , "drums semi-professionally for his band Fritz Montana before learning to code." , "front-end architecture & creating aesthetically appealing front-end designs"]

var descriptionRotation;
var verbCount = 0;
var descriptionCount = 0;

$(document).ready(function() {
    displayDescription();
    startRotation();
})
function displayDescription() {

    for (var i = 0; i < verbs.length; i++) {
        $("#verb-holder").text(verbs[verbCount]);
    }
    for (var i = 0; i < descriptions.length; i++) {
    $("#description-holder").text(descriptions[descriptionCount]);
    }

}


function nextDescription() {

    if (verbCount === verbs.length) {
        verbCount = 0;
    } else 
    verbCount++;

    if (descriptionCount === descriptions.length) {
        descriptionCount = 0;
    } else
    descriptionCount++;

displayDescription();    

}

    function startRotation() {
        descriptionRotation = setInterval(nextDescription, 3000);
    }
