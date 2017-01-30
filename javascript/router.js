/**
 * Created by San on 1/26/2017.
 */
// ====================================================================================================================
// routing is done here
/*
crossroads.addRoute('/',function () {
    var readyStateCheckInterval = setInterval(function() {
        if (document.readyState === "complete") {
            clearInterval(readyStateCheckInterval);
            var tempExerciseLink = document.createElement('a');
            /!*var linkText = document.createTextNode("my title text");
             a.appendChild(linkText);
             a.title = "my title text";*!/
            tempExerciseLink.href = "#concepts/1/1";
            document.body.appendChild(tempExerciseLink);
            tempExerciseLink.click();
        }
    }, 10);
});
crossroads.addRoute('/concepts/{concept_id}/{exercise_id}',function (concept_id,exercise_id) {
    loadExercise(concept_id,exercise_id);
    var readyStateCheckInterval = setInterval(function() {
        if (document.readyState === "complete") {
            clearInterval(readyStateCheckInterval);
            loadExercise(concept_id,exercise_id);
        }
    }, 10);
});
crossroads.bypassed.add(function (request) {
    console.error(request+"seems to be a dead end");
});
window.addEventListener("hashchange",function () {
    var route = "/";
    var hash = window.location.hash;
    if(hash.length >0){
        route = hash.split('#').pop();
    }
    crossroads.parse(route);
});
window.dispatchEvent(new CustomEvent("hashchange"));*/

// hasher with crossroadsjs
//setup crossroads
crossroads.addRoute('/',function () {
    var readyStateCheckInterval = setInterval(function() {
        if (document.readyState === "complete") {
            clearInterval(readyStateCheckInterval);
            var tempExerciseLink = document.createElement('a');
        /*var linkText = document.createTextNode("my title text");
            a.appendChild(linkText);
            a.title = "my title text";*/
            tempExerciseLink.href = "#concepts/1/1";
            document.body.appendChild(tempExerciseLink);
            tempExerciseLink.click();
        }
    }, 10);
});
crossroads.addRoute('/concepts/{concept_id}/{exercise_id}',function (concept_id,exercise_id) {
    var readyStateCheckInterval = setInterval(function() {
        if (document.readyState === "complete") {
            clearInterval(readyStateCheckInterval);
            loadExercise(concept_id,exercise_id);
        }
    }, 10);
});
crossroads.routed.add(console.log, console); //log all routes

//setup hasher
function parseHash(newHash, oldHash){
    crossroads.parse(newHash);
}
hasher.initialized.add(parseHash); //parse initial hash
hasher.changed.add(parseHash); //parse hash changes
hasher.init(); //start listening for history change

//update URL fragment generating new history record
/*
hasher.setHash('/');*/
