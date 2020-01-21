<!DOCTYPE html>
<html lang="en">
    <head>
        
        <!-- Title which is visible on the browser tab top. -->
        <title>JavaSript | Robke</title>
        
        <!-- Short description to the allmighty Google. -->
        <meta name="description" content="I am interested in front-end web development projects or jobs!">
        
        <!-- Character encoding. -->
        <meta charset="utf-8"/>
        
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        
        <!-- Google fonts. -->
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i&display=swap&subset=cyrillic" rel="stylesheet">
        
        <!-- CSS linking. -->      
        <link rel="stylesheet" type="text/css" href="css/styleKnow.css">
        
        <link rel="stylesheet" type="text/css" href="css/styleGame.css">
        
        <link rel="stylesheet" type="text/css" href="css/mycash.css">
        
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        
        <link rel="stylesheet" href="css/css/all.css" >
        
        <!-- Bootstrap -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
        
        <!-- Scaling meta. -->
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        
        <!-- Numbers not marked as phone numbers in MS browsers. -->
        <meta name="format-detection" content="telephone=no"/>
        
        <!-- Fav icons. -->
        <link rel="apple-touch-icon" sizes="180x180" href="img/favicon/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="img/favicon/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="img/favicon/favicon-16x16.png">
        <link rel="manifest" href="img/favicon/site.webmanifest">
        
        <!-- jQuery and Bootstrap JS -->

        
        <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
        
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

        
        
    </head>
    
    <body>
        
   <!-- Menu part and upper text -->
        
    <div class="navMenu">
        <div class="navInner">
            <ul>
                <li><a href="https://www.robert-d.com/index.php">Start (Comic Book Style)</a></li>
                <li><a href="https://www.robert-d.com/learn.php">JavaScript skills</a></li>
                <li><a href="https://www.robert-d.com/know.php">HTML, CSS, Bootstrap...</a></li>
            </ul>   
        <div class="menuClose">X</div>
        </div>
    </div>
        
    <div class="hiPart">
        <h1>What I learn: JavaScript.</h1>
        <div class="sandwichM">
            <div><img src="img/menu-new.png"></div>
        </div>
    </div>
    
    <!-- End of menu -->
        
    <!-- Budget calculation with JS. Full description in mycash.js file -->
    <div class="topSection">
        <div class="titleH">Calculate budget - JS, HTML, CSS</div>
        <div class="topDescription"><p>Enter your income and expenses to see calculations of the budget. All separate entries with description and amount are also displayed in a table below. Click "red delete icon" to reset everything.</p>
        </div>
        
        <div class="inner">
            <div class="amountPart">
                <div class="displayBudget">
                    <div class="displayBudgetText part">Available cash:</div>
                    <div class="displayBudgetValue part"></div>
                </div>
                <div class="displayIncome">
                    <div class="displayIncomeText part">Income:</div>
                    <div class="displayIncomeValue part"></div>
                </div>
                <div class="displayExpense">
                    <div class="displayExpenseText part">Expenses:</div>
                    <div class="displayExpenseValue part"></div>
                </div>
                
                <div class="addItemPart">
                    <div class="addContainer">
                        <select class="addType minus">
                            <option value="type-Inc" selected>+</option>
                            <option value="type-Exp">-</option>
                        </select>
                        <input type="number" class="addValue minus" placeholder="Value">

                    </div>
                    <div class="addContainer">
                        <input type="text" class="addDescription minus" placeholder="Description here">
                    </div>
                    
                    <div class="btnContainer">
                        <button class="addButton"><i class="fas fa-check"></i></button>
                        <button class="resetButton"><i class="fas fa-trash-alt"></i></button>
                    </div>
                </div>
            
            </div> 
            
            <div class="report">
                <div class="income">
                    <div class="incomeTitle"><p>Income (received cash)</p></div>
                        <div class="incomeList">
                            
                            <div class="incomeItem hideIncList">
                                <div class="describeT">No income yet</div>
                                <div class="valueN">0.00 EUR</div>
                            </div>
                            <!--
                            <div class="incomeItem">
                                <div class="describeT">Some text here</div>
                                <div class="valueN">20 EUR</div>
                            </div>
                            -->
                        </div>
                
                </div>
                
                <div class="expenses">
                    <div class="expensesTitle"><p>Expenses (spent cash)</p></div>
                        <div class="expensesList">
                                            
                            <div class="expensesItem hideExpList">
                                <div class="describeT">No expenses yet</div>
                                <div class="valueN">0.00 EUR</div>
                            </div>
                            <!--
                            <div class="incomeItem">
                                <div class="describeT">Some text here 2</div>
                                <div class="valueN">50 EUR</div>
                            </div>
                            -->
                        </div>
                    
                </div>
                
            </div>
        </div>
    </div>
    <!-- End of budget calculation -->
    
    <!-- Start of short explanation -->
        
    <div class="container-fluid jsExplain">
        <div class="titleH">JavaScript (ES5)</div>
        <div class="row">
            <div class="col-md text-center">
                <p><b>Object constructor</b> is created as a template to store all input values. When the button is clicked inputs are stored as a new object in the <b>array</b> (separate arrays are part of the object).</p>
            </div>
            <div class="col-md text-center">
                <p>With the same button <b>functions are called</b> to calculate incomes, expenses and total budget. Separate entries displayed using <b>insertAdjacentHTML</b> with <b>beforeend</b> method.</p>
            </div>
            <div class="col-md text-center">
                <p>Event listener on the reset button resets array, recalculates values and removes <b>HTML elements</b>. See another game example (a lot of if/else stuff) below.</p>
            </div>
        </div>
    </div>
        
    <!-- End of the section -->
    
    <!-- Game with points. Full description in scriptGame.js file -->
    <div class="gameSection">
        <div class="titleH">Game with JS, HTML, CSS</div>
        <div class="gameDescription"><p>Points game using HTML, CSS and JavaScript. After clicking the button Math.random() Method is used to generate number (digits 1 to 4) and display corresponding image. If it is shield +1 point goes to Captain and if it is pizza, Leo gets +1 point. For pumpkin and tomato neither of competitors get a point. First with 5 points wins. If 10 pumpkins/tomatoes are shown, no one wins. Start by clicking the button <b>SHOW NEXT IMAGE</b>.</p>
        </div>
        
        <div class="inner">
            
            <div class="winner hide" id="winnerBox"></div>
            <div class="player-0 part active" id="player-0">
                <div class="playerImg"><img src="img/game/superhero.png"></div>
                <div class="playerTextBox">
                    <div class="playerName left" id="player1-name">Captain</div>
                    <div class="scorePoints" id="pointsN-0">Points: 0</div>
                </div>
                
            </div>
            
            <div class="player-1 part" id="player-1">
                <div class="playerImg"><img src="img/game/leonardo.png"></div>
                <div class="playerTextBox">
                    <div class="playerName" id="player2-name">Leo</div>
                    <div class="scorePoints" id="pointsN-1">Points: 0</div>
                </div>
            </div>
            
            <div class="rolledPicture">
                <img src="img/game/picture-3.png" id="randomImage">
            </div>
            <div class="scorePoints bottom" id="pointsN-2">Pumpkins and tomatoes total: 0</div>
            
            <div class="buttonRow">
                <button class="btn btn-primary inactive" id="showN">Show next image</button><br>
                <button class="btn btn-warning" id="newG">New game</button>
            </div>
            
            <div class="customize"><p>You can customize names of players and how much score they have to get!</p>
            </div>
            
            <div class="change Captain">
                <div class="nameTxt" id="nameC">Name of player 1: Captain</div>
                <input type="text" placeholder="Enter name here" id="captainName">
                <button type="button" class="btn btn-info" id="nameBtn1">Click to change</button>
            </div>
            <div class="change Captain">
                <div class="nameTxt" id="nameL">Name of player 2: Leo</div>
                <input type="text" placeholder="Enter name here" id="leoName">
                <button type="button" class="btn btn-info" id="nameBtn2">Click to change</button>
            </div>
            <div class="change Captain">
                <div class="nameTxt" id="scoreW">Score to win: 5</div>
                <input type="number" placeholder="Number only" id="scoreWin">
                <button type="button" class="btn btn-info" id="nameBtn3">Click to change</button>
            </div>
            
            
        </div>
    </div>
    
        
    <div class="container-fluid jsExplain">
        <div class="titleH">Few notes</div>
        <div class="row">
            <div class="col-md text-center">
                <p>The game above briefly describes what I already can do with JavaScript. <b>Variables</b> and different <b>data types</b> (strings, numbers, booleans) were used for specific inputs and data.</p>
            </div>
            <div class="col-md text-center">
                <p>To have different output and for logic <b>operators</b> and <b>if/else</b> statements were used. All this was accompanied by <b>methods</b>, <b>functions</b> and basic <b>array</b> concepts.</p>
            </div>
            <div class="col-md text-center">
                <p>Finally, the most important thing in this game is <b>DOM manipulation</b> and obviously <b>event handlers</b> that allows to interact and change already pre-defined code.</p>
            </div>
        </div>
    </div>
        
    <!-- End section -->
        
    <!-- Short explanation about future plans -->
    <div class="container-fluid bottomPar">
        <div class="titleH">What's next?</div>
        <div class="gameDescription">I plan to learn more about objects/functions/IIFE in JavaScript ES5 and start ES6 + modern JS within next weeks. Next might be Angular.js/Node.js/REACT. Well, much later might try some back-end stuff - JAVA/PHP... Check some of Bootstrap/jQuery stuff by clicking the button!</p>
        <a href="https://www.robert-d.com/know.php"><button type="button" class="btn btn-success">GO TO EXAMPLES</button></a>
        </div>
    </div>
        
    <!-- Bottom text -->
    
    <div class="hiPart"><h1>hello@robert-d.com</h1></div> 
    
    
    <script src="script/script.js"></script>
    <script src="script/scriptGame.js"></script>
    <script src="script/mycash.js"></script>
        


    </body>
</html>