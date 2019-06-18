var verbs = ["i s" , "w a s", "p l a y e d" ,"e n j o y s", "t h r i v e s" , "h o p e s" ]

var descriptions = ["an aspiring web developer." , "previously a K-8 supplemental reading & mathematics instructor." , "the drums professionally with his band Fritz Montana before learning to code." , "creating practical, simple, & aesthetically appealing front-end designs" , "at interpersonal communication & working within teams", "to make a positive impact working for your company"]

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
        descriptionRotation = setInterval(nextDescription, 5000);
    }
