/**
 * Created by San on 1/24/2017.
 */

// =====================================================================================================================
// Exercises Solutions are loaded here
var exercises = [];
var currentExerciseId=1;
var currentConceptId=1;
var fireworks = false;
function Exercise(concept_id, exercise_id, array_length, exerciseDetails, solution){
    this.concept_id = concept_id;
    this.exercise_id = exercise_id;
    this.array_length = array_length;
    this.exerciseDetails = exerciseDetails;
    this.solution = solution;
}
function SolutionCell(x,y,lego){
    this.x = x;
    this.y = y;
    this.lego = lego;
}


// =====================================================================================================================
// ------------------------------------------------- Begin Vitruvia Concepts -------------------------------------------
// =====================================================================================================================

// =====================================================================================================================
// ------------------------------------------------- End Vitruvia Concepts -------------------------------------------
// =====================================================================================================================


// =====================================================================================================================
function loadExercise(concept_id,exercise_id) {
    if(fireworks){
        stopFireWorks();
    }
    currentExerciseId = parseInt(exercise_id);
    currentConceptId = parseInt(concept_id);
    for(var i=0; i<exercises.length;i++){
        if (exercises[i].concept_id == currentConceptId && exercises[i].exercise_id == currentExerciseId) {
            document.getElementById("Exercise").innerHTML = exercises[i].exerciseDetails;
            if(gameLoaded){
                updateGame(exercises[i].array_length);
            } else {
                initGame(exercises[i].array_length);
            }
        }
    }
    if(coordinates){
        toggleCoordinates(0);
    }
}
// ======================================================================================================================
function checkSolution() {
    var cellCount = 0;
    var solutionLength;
    var initialFinalLength = finalUserSolution.length;
    if(fireworks){
        stopFireWorks();
        nextExercise();
        return;
    }
    generateUserSolution();
    initialFinalLength = finalUserSolution.length;
    for (var i=initialFinalLength - 1; i>=0;i--){
        if(finalUserSolution[i].lego ==  "EMPTY"){
            finalUserSolution.splice(i,1);
        }
    }
    for(i=0; i<exercises.length;i++){
        if (exercises[i].concept_id == currentConceptId && exercises[i].exercise_id == currentExerciseId) {
            solutionLength = exercises[i].solution.length;
            if(exercises[i].solution.length == finalUserSolution.length){
                for(var j=0; j<finalUserSolution.length;j++){
                    for(var k = 0; k<finalUserSolution.length; k++){
                        if (exercises[i].solution[j].x == finalUserSolution[k].x && exercises[i].solution[j].y == finalUserSolution[k].y && exercises[i].solution[j].lego == finalUserSolution[k].lego) {
                            cellCount++;
                        }
                    }
                }
            } else {
                clearCanvas();
                incorrect = true;
                gDrawingContext.font = "30px Comic Sans MS";
                gDrawingContext.fillStyle = "red";
                gDrawingContext.textAlign = "center";
                gDrawingContext.fillText("Try Again!", xEnd/2, yEnd/2);
                incorrectSound.play();
            }
        }
    }
    if (cellCount == solutionLength){
        initFireWorks();
    } else {
        clearCanvas();
        incorrect = true;
        gDrawingContext.font = "30px Comic Sans MS";
        gDrawingContext.fillStyle = "red";
        gDrawingContext.textAlign = "center";
        gDrawingContext.fillText("Try Again!", xEnd/2, yEnd/2);
        incorrectSound.play();
    }
}
// ===================================================================================================================
function toggleSolution() {
    var a = document.getElementById("toggle_solution");
    var tempLego, tempX, tempY;
    if(a.value == "Show Solution"){
        a.value = "Hide Solution";
        for(i=0; i<exercises.length;i++){
            if (exercises[i].concept_id == currentConceptId && exercises[i].exercise_id == currentExerciseId){
                drawBoard();
                for ( var k = 0 ;k<exercises[i].solution.length; k++){
                    tempLego = legoNameToImage(exercises[i].solution[k].lego);
                    tempX = exercises[i].solution[k].x;
                    tempY = exercises[i].solution[k].y;
                    tempX = tempX *kStep +1;
                    tempY = (gridSize -1 -tempY)* kStep +1;
                    gDrawingContext.drawImage(tempLego,tempX + axisDelta,tempY,kStep -1 ,kStep - 1);
                }
            }
        }
    } else {
        a.value = "Show Solution";
        drawBoard();
        for (k =0 ;k<userSolution.length;k++){
            tempLego = legoNameToImage(userSolution[k].lego);
            tempX = userSolution[k].x;
            tempY = userSolution[k].y;
            gDrawingContext.drawImage(tempLego,tempX,tempY,kStep -1 ,kStep - 1);
        }
        if(coordinates){
            toggleCoordinates(0);
        }
    }
}
// ==================================================================================================================
function nextExerciseIdExists() {
    for(i=0; i<exercises.length;i++){
        if (exercises[i].concept_id == currentConceptId && exercises[i].exercise_id == (currentExerciseId+1)){
            currentExerciseId++;
            return true;
        }
    }
    return false;
}
// ===================================================================================================================
function nextConceptIdExists() {
    for(i=0; i<exercises.length;i++){
        if (exercises[i].concept_id == (currentConceptId + 1) && exercises[i].exercise_id == 1){
            currentConceptId++;
            currentExerciseId = 1;
            return true;
        }
    }
    return false;
}
// ==================================================================================================================
function previousExerciseIdExists() {
    for(i=0; i<exercises.length;i++){
        if (exercises[i].concept_id == currentConceptId && exercises[i].exercise_id == (currentExerciseId-1)){
            currentExerciseId--;
            return true;
        }
    }
    return false;
}
// ====================================================================================================================
function numberOfExercisesInConcept(conceptID){
    var count = 0;
    for(j=0; j<exercises.length;j++){
        if(exercises[j].concept_id == conceptID)
            count++;
    }
    return count;
}
// ===================================================================================================================
function previousConceptIdExists() {
    for(i=0; i<exercises.length;i++){
        if (exercises[i].concept_id == (currentConceptId - 1) && exercises[i].exercise_id == 1){
            currentConceptId--;
            currentExerciseId = numberOfExercisesInConcept(currentConceptId);
            return true;
        }
    }
    return false;
}
// ===================================================================================================================
function nextExercise(){
    if(fireworks){
        stopFireWorks();
    }
    if(nextExerciseIdExists()){
        var tempExerciseLink = document.createElement('a');
        /*var linkText = document.createTextNode("my title text");
        a.appendChild(linkText);
        a.title = "my title text";*/
        tempExerciseLink.href = "#concepts/"+currentConceptId+"/"+currentExerciseId;
        document.body.appendChild(tempExerciseLink);
        tempExerciseLink.click();

    }else if(nextConceptIdExists()){
         tempExerciseLink = document.createElement('a');
        /*var linkText = document.createTextNode("my title text");
         a.appendChild(linkText);
         a.title = "my title text";*/
        tempExerciseLink.href = "#concepts/"+currentConceptId+"/"+currentExerciseId;
        document.body.appendChild(tempExerciseLink);
        tempExerciseLink.click();

    } else {
        clearCanvas();
        gDrawingContext.font = "30px Comic Sans MS";
        gDrawingContext.fillStyle = "red";
        gDrawingContext.textAlign = "center";
        gDrawingContext.fillText("This is the end", xEnd/2, yEnd/2);
    }
}
// ===================================================================================================================
function previousExercise(){
    if(fireworks){
        stopFireWorks();
    }
    if(previousExerciseIdExists()){
        var tempExerciseLink = document.createElement('a');
        /*var linkText = document.createTextNode("my title text");
         a.appendChild(linkText);
         a.title = "my title text";*/
        tempExerciseLink.href = "#concepts/"+currentConceptId+"/"+currentExerciseId;
        document.body.appendChild(tempExerciseLink);
        tempExerciseLink.click();

    }else if(previousConceptIdExists()){
        tempExerciseLink = document.createElement('a');
        /*var linkText = document.createTextNode("my title text");
         a.appendChild(linkText);
         a.title = "my title text";*/
        tempExerciseLink.href = "#concepts/"+currentConceptId+"/"+currentExerciseId;
        document.body.appendChild(tempExerciseLink);
        tempExerciseLink.click();

    } else {
        clearCanvas();
        gDrawingContext.font = "30px Comic Sans MS";
        gDrawingContext.fillStyle = "red";
        gDrawingContext.textAlign = "center";
        gDrawingContext.fillText("This is the end", xEnd/2, yEnd/2);
    }
}
// ===================================================================================================================
function changeBackground(data){
    switch (data){
        case 'christmas':
            document.body.style.backgroundImage = "url('images/backgroundTheme/christmas-colour.png')";
            break;
        case 'circles':
            document.body.style.backgroundImage = "url('images/backgroundTheme/circles-dark.png')";
            break;
        case 'doodles':
            document.body.style.backgroundImage = "url('images/backgroundTheme/doodles.png')";
            break;
        case 'halftoneYellow':
            document.body.style.backgroundImage = "url('images/backgroundTheme/halftone-yellow.png')";
            break;
        case 'veneer':
            document.body.style.backgroundImage = "url('images/backgroundTheme/light-veneer.png')";
            break;
        case 'polka':
            document.body.style.backgroundImage = "url('images/backgroundTheme/polka-dots.png')";
            break;
        case 'gaming':
            document.body.style.backgroundImage = "url('images/backgroundTheme/gaming-pattern.png')";
            break;
        case 'whirlpool':
            document.body.style.backgroundImage = "url('images/backgroundTheme/whirlpool.png')";
            break;
        case 'skyscraper':
            document.body.style.backgroundImage = "url('images/backgroundTheme/skyscraper.png')";
            break;
        case 'waves':
            document.body.style.backgroundImage = "url('images/backgroundTheme/vertical-waves.png')";
            break;
        default:
            break;
    }
}