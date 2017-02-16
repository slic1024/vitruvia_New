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

// Concept 1
exercises.push(new Exercise(1,1,6,
    "<h3>Concept 1 Demo 1</h3>" +
    "<p>Put a 1x1 GREEN brick in the cells whose locations are:</p>" +
    "<p>(0,0), (5,1), (1,2), (4,3), (2,4), (3,5)</p>",
    [   new SolutionCell(0,0,"GREEN"),
        new SolutionCell(5,1,"GREEN"),
        new SolutionCell(1,2,"GREEN"),
        new SolutionCell(4,3,"GREEN"),
        new SolutionCell(2,4,"GREEN"),
        new SolutionCell(3,5,"GREEN")]
));
exercises.push(new Exercise(1,2,6,
    "<h3>Concept 1 Exercise 1</h3>" +
    "<p>Put a 1x1 RED brick in the cells whose locations are:</p>" +
    "<p>(0,0), (5,0), (5,5), (0,5)</p>",
     [   new SolutionCell(0,0,"RED"),
         new SolutionCell(0,5,"RED"),
         new SolutionCell(5,0,"RED"),
         new SolutionCell(5,5,"RED")]
));
exercises.push(new Exercise(1,3,6,
    "<h3>Concept 1 Exercise 2</h3>" +
    "<p>Put a 1x1 YELLOW brick in the cells whose locations are:</p>" +
    "<p>(0,0), (1,1), (2,2), (3,3), (4,4), (5,5)</p>",
    [   new SolutionCell(0,0,"YELLOW"),
        new SolutionCell(1,1,"YELLOW"),
        new SolutionCell(2,2,"YELLOW"),
        new SolutionCell(3,3,"YELLOW"),
        new SolutionCell(4,4,"YELLOW"),
        new SolutionCell(5,5,"YELLOW")]
));
exercises.push(new Exercise(1,4,5,
    "<h3>Concept 1 Exercise 3</h3>" +
    "<p>Put a 1x1 GRAY brick in the cells whose locations are:</p>" +
    "<p>(2,0), (3,0), (2,1), (3,1)</p>",
    [   new SolutionCell(2,0,"GRAY"),
        new SolutionCell(3,0,"GRAY"),
        new SolutionCell(2,1,"GRAY"),
        new SolutionCell(3,1,"GRAY")]
));
exercises.push(new Exercise(1,5,5,
    "<h3>Concept 1 Exercise 4</h3>" +
    "<p>Put a 1x1 BLUE brick in the cells whose locations are:</p>" +
    "<p>(0,0), (0,1), (0,2), (0,3), (0,4) </p>",
    [   new SolutionCell(0,0,"BLUE"),
        new SolutionCell(0,1,"BLUE"),
        new SolutionCell(0,2,"BLUE"),
        new SolutionCell(0,3,"BLUE"),
        new SolutionCell(0,4,"BLUE")]
));
exercises.push(new Exercise(1,6,5,
    "<h3>Concept 1 Exercise 5</h3>" +
    "<p>Put a 1x1 GREEN brick in the cells whose locations are:</p>" +
    "<p>(0,0), (0,1), (0,2), (0,3), (1,0), (1,1), (1,2), (1,3)</p>",
    [   new SolutionCell(0,0,"GREEN"),
        new SolutionCell(0,1,"GREEN"),
        new SolutionCell(0,2,"GREEN"),
        new SolutionCell(0,3,"GREEN"),
        new SolutionCell(1,0,"GREEN"),
        new SolutionCell(1,1,"GREEN"),
        new SolutionCell(1,2,"GREEN"),
        new SolutionCell(1,3,"GREEN")]
));
exercises.push(new Exercise(1,7,5,
    "<h3>Concept 1 Exercise 6</h3>" +
    "<p>Put a red brick in the cells whose locations are:</p>" +
    "<p>(2,0), (3,1), (4,2), (3,3), (2,4), (1,3),(0,2), (1,1)</p>",
    [   new SolutionCell(2,0,"RED"),
        new SolutionCell(3,1,"RED"),
        new SolutionCell(4,2,"RED"),
        new SolutionCell(3,3,"RED"),
        new SolutionCell(2,4,"RED"),
        new SolutionCell(1,3,"RED"),
        new SolutionCell(0,2,"RED"),
        new SolutionCell(1,1,"RED")]
));
exercises.push(new Exercise(1,8,5,
    "<h3>Concept 1 Exercise 7</h3>" +
    "<p>Put a YELLOW brick in the cells whose locations are:</p>" +
    "<p>(0,4), (1,3), (2,2), (3,1), (4,0), (0,0), (1,1), (3,3), (4,4)</p>",
    [   new SolutionCell(0,4,"YELLOW"),
        new SolutionCell(1,3,"YELLOW"),
        new SolutionCell(2,2,"YELLOW"),
        new SolutionCell(3,1,"YELLOW"),
        new SolutionCell(4,0,"YELLOW"),
        new SolutionCell(0,0,"YELLOW"),
        new SolutionCell(1,1,"YELLOW"),
        new SolutionCell(3,3,"YELLOW"),
        new SolutionCell(4,4,"YELLOW")]
));
exercises.push(new Exercise(1,9,6,
    "<h3>Concept 1 Exercise 8</h3>" +
    "<p>Put a BLUE brick in the cells whose locations are:</p>" +
    "<p>(0,3), (1,3), (2,3),(3,3), (4,3), (5,3),(1,4), (2,5), (3,5),(4,4)</p>",
    [   new SolutionCell(0,3,"BLUE"),
        new SolutionCell(1,3,"BLUE"),
        new SolutionCell(2,3,"BLUE"),
        new SolutionCell(3,3,"BLUE"),
        new SolutionCell(5,3,"BLUE"),
        new SolutionCell(1,4,"BLUE"),
        new SolutionCell(2,5,"BLUE"),
        new SolutionCell(3,5,"BLUE"),
        new SolutionCell(4,4,"BLUE")]
));
exercises.push(new Exercise(1,10,5,
    "<h3>Concept 1 Exercise 9</h3>" +
    "<p>Put a GREEN brick in the cells whose locations are:</p>" +
    "<p>(0,1), (1,1), (2,1), (0,2), (1,2), (2,2)</p>",
    [   new SolutionCell(0,1,"GREEN"),
        new SolutionCell(1,1,"GREEN"),
        new SolutionCell(2,1,"GREEN"),
        new SolutionCell(0,2,"GREEN"),
        new SolutionCell(1,2,"GREEN"),
        new SolutionCell(2,2,"GREEN")]
));
exercises.push(new Exercise(1,11,5,
    "<h3>Concept 1 Exercise 10</h3>" +
    "<p>Put a GRAY brick in the cells whose locations are:</p>" +
    "<p>(3,0), (3,1), (3,2), (3,3), (4,0), (4,1), (4,2), (4,3)</p>",
    [   new SolutionCell(3,0,"GRAY"),
        new SolutionCell(3,1,"GRAY"),
        new SolutionCell(3,2,"GRAY"),
        new SolutionCell(3,3,"GRAY"),
        new SolutionCell(4,0,"GRAY"),
        new SolutionCell(4,1,"GRAY"),
        new SolutionCell(4,2,"GRAY"),
        new SolutionCell(4,3,"GRAY")]
));
// Concept 2
exercises.push(new Exercise(2,1,6,
    "<h3>Concept 2 Demo 1</h3>" +
    "<p>Consider the following function: f(x,z) = x + z = 5." +
    " Put a 1x1 BLUE brick in every cell where the expression x + z = 5 evaluates to true.</p>",
    [   new SolutionCell(0,5,"BLUE"),
        new SolutionCell(1,4,"BLUE"),
        new SolutionCell(2,3,"BLUE"),
        new SolutionCell(3,2,"BLUE"),
        new SolutionCell(4,1,"BLUE"),
        new SolutionCell(5,0,"BLUE")]
));
exercises.push(new Exercise(2,2,5,
    "<h3>Concept 2 Demo 2</h3>" +
    "<p>Consider the following function:</p>" +
    "<p>f(x,z) = x = 2.</p>" +
    "<p>Put a 1x1 RED brick in every cell where the expression x = 2 evaluates to true.</p>",
    [   new SolutionCell(2,0,"RED"),
        new SolutionCell(2,1,"RED"),
        new SolutionCell(2,2,"RED"),
        new SolutionCell(2,3,"RED"),
        new SolutionCell(2,4,"RED")]
));
exercises.push(new Exercise(2,3,6,
    "<h3>Concept 2 Exercise 1</h3>" +
    "<p>Consider the following function: f(x,z) = x < z." +
    " Put a 1x1 BLUE brick in every cell where the expression x < z evaluates to true." +
    " For example, 1 < 2 evaluates to true, so the cell at location (1,2) should have a BLUE tile. " +
    "In contrast, 2 < 2 evaluates to false, so the cell at location (2,2) should not have a BLUE tile (i.e., should be empty).</p>",
    [   new SolutionCell(0,1,"BLUE"),
        new SolutionCell(0,2,"BLUE"),
        new SolutionCell(0,3,"BLUE"),
        new SolutionCell(0,4,"BLUE"),
        new SolutionCell(0,5,"BLUE"),
        new SolutionCell(1,2,"BLUE"),
        new SolutionCell(1,3,"BLUE"),
        new SolutionCell(1,4,"BLUE"),
        new SolutionCell(1,5,"BLUE"),
        new SolutionCell(2,3,"BLUE"),
        new SolutionCell(2,4,"BLUE"),
        new SolutionCell(2,5,"BLUE"),
        new SolutionCell(3,4,"BLUE"),
        new SolutionCell(3,5,"BLUE"),
        new SolutionCell(4,5,"BLUE")]
));
exercises.push(new Exercise(2,4,5,
    "<h3>Concept 2 Exercise 2</h3>" +
    "<p>In SML, the mod operator is used to get the remainder of an integer division. " +
    "For example, 2 mod 2 = 0, 3 mod 2 = 1, and 4 mod 2 = 0.</p>" +
    "<p>Consider the following function: </p>"+
    "<p>    f(x,z) = (x + z) mod 2 = 0</p>"+
    "<p>which evaluates to true when x+z is an even number and evaluates to false when x+z is an odd number.</p>"+
    "<p>Put a 1x1 BLUE brick in every cell for which f(x,z) evaluates to true.</p>",
    [   new SolutionCell(0,0,"BLUE"),
        new SolutionCell(0,2,"BLUE"),
        new SolutionCell(0,4,"BLUE"),
        new SolutionCell(1,1,"BLUE"),
        new SolutionCell(1,3,"BLUE"),
        new SolutionCell(2,0,"BLUE"),
        new SolutionCell(2,2,"BLUE"),
        new SolutionCell(2,4,"BLUE"),
        new SolutionCell(3,1,"BLUE"),
        new SolutionCell(3,3,"BLUE"),
        new SolutionCell(4,0,"BLUE"),
        new SolutionCell(4,2,"BLUE"),
        new SolutionCell(4,4,"BLUE")]
));
exercises.push(new Exercise(2,5,7,
    "<h3>Concept 2 Exercise 3</h3>" +
    "<p>Consider the following function: </p>"+
    "<p>    f(x,z) = (x + z) mod 3 = 0</p>"+
    "<p>which evaluates to true when x+z is a multiple of 3.</p>"+
    "<p>Put a 1x1 GREEN brick in every cell for which f(x,z) evaluates to true.</p>",
    [   new SolutionCell(0,0,"GREEN"),
        new SolutionCell(0,3,"GREEN"),
        new SolutionCell(0,6,"GREEN"),
        new SolutionCell(1,2,"GREEN"),
        new SolutionCell(1,5,"GREEN"),
        new SolutionCell(2,1,"GREEN"),
        new SolutionCell(2,4,"GREEN"),
        new SolutionCell(3,0,"GREEN"),
        new SolutionCell(3,3,"GREEN"),
        new SolutionCell(3,6,"GREEN"),
        new SolutionCell(4,2,"GREEN"),
        new SolutionCell(4,5,"GREEN"),
        new SolutionCell(5,1,"GREEN"),
        new SolutionCell(5,4,"GREEN"),
        new SolutionCell(6,0,"GREEN"),
        new SolutionCell(6,3,"GREEN"),
        new SolutionCell(6,6,"GREEN")]
));
exercises.push(new Exercise(2,6,5,
    "<h3>Concept 2 Exercise 4</h3>" +
    "<p>In SML, the multiplication operator is denoted by the * symbol. Consider the following function:</p>" +
    "<p>f(x,z) = (x*x + z) mod 2 = 0</p>"+
    "<p>which evaluates to true when x*x+z is an even number and evaluates to false when x*x+z is an odd number.</p>"+
    "<p>Put a 1x1 BLUE brick in every cell for which f(x,z) evaluates to true.</p>",
    [   new SolutionCell(0,0,"BLUE"),
        new SolutionCell(0,2,"BLUE"),
        new SolutionCell(0,4,"BLUE"),
        new SolutionCell(1,1,"BLUE"),
        new SolutionCell(1,3,"BLUE"),
        new SolutionCell(2,0,"BLUE"),
        new SolutionCell(2,2,"BLUE"),
        new SolutionCell(2,4,"BLUE"),
        new SolutionCell(3,1,"BLUE"),
        new SolutionCell(3,3,"BLUE"),
        new SolutionCell(4,0,"BLUE"),
        new SolutionCell(4,2,"BLUE"),
        new SolutionCell(4,4,"BLUE")]
));
exercises.push(new Exercise(2,7,7,
    "<h3>Concept 2 Exercise 5</h3>" +
    "<p>In SML, the multiplication operator is denoted by the * symbol. Consider the following function:</p>" +
    "<p>f(x,z) = (x*z) mod 3 = 0</p>"+
    "<p>which evaluates to true when x*z is a multiple of 3 and evaluates to false when x*z is not a multiple of 3.</p>"+
    "<p>Put a 1x1 BLUE brick in every cell for which f(x,z) evaluates to true.</p>",
    [   new SolutionCell(0,1,"BLUE"),
        new SolutionCell(0,2,"BLUE"),
        new SolutionCell(0,3,"BLUE"),
        new SolutionCell(0,4,"BLUE"),
        new SolutionCell(0,5,"BLUE"),
        new SolutionCell(0,6,"BLUE"),
        new SolutionCell(0,0,"BLUE"),
        new SolutionCell(1,0,"BLUE"),
        new SolutionCell(1,3,"BLUE"),
        new SolutionCell(1,6,"BLUE"),
        new SolutionCell(2,0,"BLUE"),
        new SolutionCell(2,3,"BLUE"),
        new SolutionCell(2,6,"BLUE"),
        new SolutionCell(3,1,"BLUE"),
        new SolutionCell(3,2,"BLUE"),
        new SolutionCell(3,3,"BLUE"),
        new SolutionCell(3,4,"BLUE"),
        new SolutionCell(3,5,"BLUE"),
        new SolutionCell(3,6,"BLUE"),
        new SolutionCell(3,0,"BLUE"),
        new SolutionCell(4,0,"BLUE"),
        new SolutionCell(4,3,"BLUE"),
        new SolutionCell(4,6,"BLUE"),
        new SolutionCell(5,0,"BLUE"),
        new SolutionCell(5,3,"BLUE"),
        new SolutionCell(5,6,"BLUE"),
        new SolutionCell(6,0,"BLUE"),
        new SolutionCell(6,1,"BLUE"),
        new SolutionCell(6,2,"BLUE"),
        new SolutionCell(6,3,"BLUE"),
        new SolutionCell(6,4,"BLUE"),
        new SolutionCell(6,5,"BLUE"),
        new SolutionCell(6,6,"BLUE")]
));
exercises.push(new Exercise(2,8,7,
    "<h3>Concept 2 Exercise 6</h3>" +
    "<p>Consider the following function:</p>" +
    "<p>f(x,z) = (x - z) mod 3 = 0</p>"+
    "<p>which evaluates to true when x - z is a multiple of 3 and evaluates to false otherwise.</p>"+
    "<p>Put a 1x1 RED brick in every cell for which f(x,z) evaluates to true.</p>",
    [   new SolutionCell(0,0,"RED"),
        new SolutionCell(1,1,"RED"),
        new SolutionCell(2,2,"RED"),
        new SolutionCell(3,3,"RED"),
        new SolutionCell(4,4,"RED"),
        new SolutionCell(5,5,"RED"),
        new SolutionCell(6,6,"RED"),
        new SolutionCell(0,3,"RED"),
        new SolutionCell(1,4,"RED"),
        new SolutionCell(2,5,"RED"),
        new SolutionCell(3,6,"RED"),
        new SolutionCell(0,6,"RED"),
        new SolutionCell(3,0,"RED"),
        new SolutionCell(3,3,"RED"),
        new SolutionCell(4,1,"RED"),
        new SolutionCell(5,2,"RED"),
        new SolutionCell(6,3,"RED"),
        new SolutionCell(6,0,"RED")]
));

// Concept 3
exercises.push(new Exercise(3,1,5,
    "<h3>Concept 3 Demo 1</h3>" +
    "<p>Put a 1x1 RED brick at location (0,0).</p>",
    [   new SolutionCell(0,0,"RED")]
));
exercises.push(new Exercise(3,2,5,
    "<h3>Concept 3 Demo 2</h3>" +
    "<p>Put a 2x2 RED brick at location (3,2).</p>",
    [   new SolutionCell(3,2,"RED"),
        new SolutionCell(3,3,"RED"),
        new SolutionCell(4,2,"RED"),
        new SolutionCell(4,3,"RED")]
));
exercises.push(new Exercise(3,3,5,
    "<h3>Concept 3 Demo 3</h3>" +
    "<p>Put a 4x2 YELLOW brick at location (0,2).</p>",
    [   new SolutionCell(0,2,"YELLOW"),
        new SolutionCell(1,2,"YELLOW"),
        new SolutionCell(2,2,"YELLOW"),
        new SolutionCell(3,2,"YELLOW"),
        new SolutionCell(0,3,"YELLOW"),
        new SolutionCell(1,3,"YELLOW"),
        new SolutionCell(2,3,"YELLOW"),
        new SolutionCell(3,3,"YELLOW")]
));
exercises.push(new Exercise(3,4,5,
    "<h3>Concept 3 Demo 4</h3>" +
    "<p>Put a 2x3 GRAY brick at location (1,0)</p>",
    [   new SolutionCell(1,0,"GRAY"),
        new SolutionCell(1,1,"GRAY"),
        new SolutionCell(1,2,"GRAY"),
        new SolutionCell(2,0,"GRAY"),
        new SolutionCell(2,1,"GRAY"),
        new SolutionCell(2,2,"GRAY")]
));
exercises.push(new Exercise(3,5,5,
    "<h3>Concept 3 Exercise 1</h3>" +
    "<p>Put a 3x2 YELLOW brick at location (1,2).</p>",
    [   new SolutionCell(1,2,"YELLOW"),
        new SolutionCell(1,2,"YELLOW"),
        new SolutionCell(2,2,"YELLOW"),
        new SolutionCell(2,3,"YELLOW"),
        new SolutionCell(3,2,"YELLOW"),
        new SolutionCell(3,3,"YELLOW")]
));
exercises.push(new Exercise(3,6,6,
    "<h3>Concept 3 Exercise 2</h3>" +
    "<p>Put a 2x4 GRAY brick at location (4,1).</p>",
    [   new SolutionCell(4,1,"GRAY"),
        new SolutionCell(4,2,"GRAY"),
        new SolutionCell(4,3,"GRAY"),
        new SolutionCell(4,4,"GRAY"),
        new SolutionCell(5,1,"GRAY"),
        new SolutionCell(5,2,"GRAY"),
        new SolutionCell(5,3,"GRAY"),
        new SolutionCell(5,4,"GRAY")]
));
exercises.push(new Exercise(3,7,6,
    "<h3>Concept 3 Exercise 3</h3>" +
    "<p>Put a 4x2 BLUE brick at location (1,3).</p>",
    [   new SolutionCell(1,3,"BLUE"),
        new SolutionCell(2,3,"BLUE"),
        new SolutionCell(3,3,"BLUE"),
        new SolutionCell(4,3,"BLUE"),
        new SolutionCell(1,4,"BLUE"),
        new SolutionCell(2,4,"BLUE"),
        new SolutionCell(3,4,"BLUE"),
        new SolutionCell(4,4,"BLUE")]
));
exercises.push(new Exercise(3,8,5,
    "<h3>Concept 3 Exercise 4</h3>" +
    "<p>Put a 2x3 RED brick at location (2,2).</p>",
    [   new SolutionCell(2,2,"RED"),
        new SolutionCell(2,3,"RED"),
        new SolutionCell(2,4,"RED"),
        new SolutionCell(3,2,"RED"),
        new SolutionCell(3,3,"RED"),
        new SolutionCell(3,4,"RED")]
));
exercises.push(new Exercise(3,9,5,
    "<h3>Concept 3 Exercise 5</h3>" +
    "<p>Put a 2x1 GREEN brick at location (3,0).</p>",
    [   new SolutionCell(3,0,"GREEN"),
        new SolutionCell(4,0,"GREEN")]
));
exercises.push(new Exercise(3,10,5,
    "<h3>Concept 3 Exercise 6</h3>" +
    "<p>Put a 1x2 BLUE brick at location (2,1).</p>",
    [   new SolutionCell(2,1,"BLUE"),
        new SolutionCell(2,2,"BLUE")]
));
exercises.push(new Exercise(3,11,5,
    "<h3>Concept 3 Exercise 7</h3>" +
    "<p>Put a 4x2 YELLOW brick at location (0,3).</p>",
    [   new SolutionCell(0,3,"YELLOW"),
        new SolutionCell(1,3,"YELLOW"),
        new SolutionCell(2,3,"YELLOW"),
        new SolutionCell(3,3,"YELLOW"),
        new SolutionCell(0,4,"YELLOW"),
        new SolutionCell(1,4,"YELLOW"),
        new SolutionCell(2,4,"YELLOW"),
        new SolutionCell(3,4,"YELLOW")]
));
exercises.push(new Exercise(3,12,5,
    "<h3>Concept 3 Exercise 8</h3>" +
    "<p>Put a 2x2 GRAY brick at location (1,1).</p>",
    [   new SolutionCell(1,1,"GRAY"),
        new SolutionCell(1,2,"GRAY"),
        new SolutionCell(2,1,"GRAY"),
        new SolutionCell(2,1,"GRAY")]
));
exercises.push(new Exercise(3,13,5,
    "<h3>Concept 3 Exercise 9</h3>" +
    "<p>Put a 2x1 BLUE brick at location (3,4).</p>",
    [   new SolutionCell(3,4,"BLUE"),
        new SolutionCell(4,4,"BLUE")]
));
exercises.push(new Exercise(3,14,5,
    "<h3>Concept 3 Exercise 10</h3>" +
    "<p>Put a 2x3 RED brick at location (3,2).</p>",
    [   new SolutionCell(3,2,"RED"),
        new SolutionCell(3,3,"RED"),
        new SolutionCell(3,4,"RED"),
        new SolutionCell(4,2,"RED"),
        new SolutionCell(4,3,"RED"),
        new SolutionCell(4,4,"RED")]
));



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
}
// ======================================================================================================================
function checkSolution() {
    var cellCount = 0;
    var solutionLength;
    generateUserSolution();
    for (var i=0; i<finalUserSolution.length;i++){
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
                    gDrawingContext.drawImage(tempLego,tempX,tempY,kStep -1 ,kStep - 1);
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