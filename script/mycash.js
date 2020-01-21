/////////////////////////////////////////////////
/* Calculation of budget by adding incomes to the total income amount and 
deducting expenses. DOM functions are used to take inputs (values, description) 
and to show the budget/income/expenses. Function contrcutor is used to for new inputs, 
which are then grouped to income/expense arrays in the object.

With event listeners, if/else statements and calculation functions amounts are 
displayed into correct DOM UI fields. Every entry is also displayed in the table 
below calculator using DOM insertAdjacentHTML method.
*/


// Initialization function that resets numbers.
init();

function init() {
    
    document.querySelector('.displayBudgetValue').textContent = '0.00 EUR';
    document.querySelector('.displayIncomeValue').textContent = '0.00 EUR';
    document.querySelector('.displayExpenseValue').textContent = '0.00 EUR';
    document.querySelector('.addType').classList.remove('minus');
    document.querySelector('.addValue').classList.remove('minus');
    document.querySelector('.addDescription').classList.remove('minus');
};

// Function constructor for new entry.
var NewInput = function(type, description, value) {
    this.type = type;
    this.description = description;
    this.value = value;
};
    
// Array to store inputs as incomes and expenses.
var allData = {
    allInputs: {
        expenses: [],
        incomes: []
        },
        
    totalInputs: {
        expenses: 0,
        incomes: 0
        },
        
    budget: 0,
    };


// Getting values from DOM.
document.querySelector('.addButton').addEventListener('click', function(){
        
    var newEntry, type, desription, value;

// Three inputs are taken here.
    type = document.querySelector('.addType').value;
    description = document.querySelector('.addDescription').value;
    value = parseFloat(document.querySelector('.addValue').value);
 
// Depending on the type of income or expense entries are added to object array and dom.
    if (description !== "" && !isNaN(value) && value > 0) {
        if (type === 'type-Inc'){
            newEntry = new NewInput(type, description, value);
            allData.allInputs.incomes.push(newEntry);
            addToDom(newEntry);
        } else if (type === 'type-Exp') {
            newEntry = new NewInput(type, description, value);
            allData.allInputs.expenses.push(newEntry);
            addToDom(newEntry);
        }
// Functions below allow to calculate totals with each addition + clear fields.
        calculateTotalInc();
        calculateTotalExp();
        calculateBudget();
        clearFields();
    } else {
// Alert used if trying to input empty fields.
        alert('Description and value must be entered properly!');
    };
});

// Apply red outline for expenses.
document.querySelector('.addType').addEventListener('change', function() {
    
    type = document.querySelector('.addType').value;
    if (type === 'type-Inc') {
            document.querySelector('.addType').classList.remove('minus');
            document.querySelector('.addValue').classList.remove('minus');
            document.querySelector('.addDescription').classList.remove('minus');
    } else if (type === 'type-Exp') {
            document.querySelector('.addType').classList.add('minus');
            document.querySelector('.addValue').classList.add('minus');
            document.querySelector('.addDescription').classList.add('minus');
        }
});

// Reset everything - displayed values and inputs - yeah, I know a bit clumsy...
// Tried not to use init function, but think about every step again.
document.querySelector('.resetButton').addEventListener('click', function(){

// Upper fields reset to zerous
    document.querySelector('.displayBudgetValue').textContent = '0.00 EUR';
    document.querySelector('.displayIncomeValue').textContent = '0.00 EUR';
    document.querySelector('.displayExpenseValue').textContent = '0.00 EUR';
 
// Income list removed and replaced with default html (same as init function).
    var list = document.querySelector('.incomeList');
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }
    
    document.querySelector('.incomeList').insertAdjacentHTML('beforeend', '          <div class="incomeItem hideIncList"><div class="describeT">No income yet</div><div class="valueN">0.00 EUR</div></div>');
    
 // Exepnses removed as well.  
    var list = document.querySelector('.expensesList');
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }
    
    document.querySelector('.expensesList').insertAdjacentHTML('beforeend', '          <div class="expensesItem hideExpList"><div class="describeT">No expenses yet</div><div class="valueN">0.00 EUR</div></div>');
 
// Recalculation of the budget.
    allData.allInputs.expenses = [];
    allData.allInputs.incomes = [];
    calculateTotalInc();
    calculateTotalExp();
    calculateBudget();
});


/////////////////////////////////////////////////
/* Calculation of income, expenses and total budget.
allData array is taken (incomes or expenses) and using forEach loop 
new sum is calculated. Overall budget is calculate deducting exp from inc.
*/

var calculateTotalInc = function(ent) {
    var sum = 0;
    ent = allData.allInputs.incomes;
        
    ent.forEach(function(cur) {
        sum += cur.value;
    });
        
    allData.totalInputs.incomes = sum;   
    return document.querySelector('.displayIncomeValue').textContent = allData.totalInputs.incomes.toFixed(2) + ' EUR';
};
    
var calculateTotalExp = function(ent) {
    var sum = 0;
    ent = allData.allInputs.expenses;
        
    ent.forEach(function(cur) {
        sum += cur.value;
    });
        
    allData.totalInputs.expenses = sum;  
    return document.querySelector('.displayExpenseValue').textContent = allData.totalInputs.expenses.toFixed(2) + ' EUR';
};

var calculateBudget = function() {
    
    var totalAmount = allData.totalInputs.incomes - allData.totalInputs.expenses;
    totalAmount = totalAmount.toFixed(2);
    if (totalAmount < 0 || totalAmount == 0) {
        return document.querySelector('.displayBudgetValue').textContent = '0.00 EUR';
    } else if (totalAmount > 0) {
        return document.querySelector('.displayBudgetValue').textContent = totalAmount + ' EUR';
    }
}

// Fields are cleared and focus class changed.

var clearFields = function() {
    
    document.querySelector('.addType').value = "type-Inc";
    document.querySelector('.addDescription').value = "";
    document.querySelector('.addValue').value = "";
    document.querySelector('.addType').classList.remove('minus');
    document.querySelector('.addValue').classList.remove('minus');
    document.querySelector('.addDescription').classList.remove('minus');
    
};

// Adding new input with description and value to be displayed for the user.

var addToDom = function(obj) {

// Depending of the type of inc or exp these fall under certain positions and default html text is removed.
    if (obj.type === 'type-Inc') {
        var content, newContent;
        content = '<div class="incomeItem"><div class="describeT">%description%</div><div class="valueN">+ %value% EUR</div></div>';
        newContent = content.replace('%description%', obj.description);
        newContent = newContent.replace('%value%', obj.value.toFixed(2));
    
        document.querySelector('.incomeList').insertAdjacentHTML('beforeend', newContent);
        
        document.querySelector('.hideIncList').style.display = 'none';
    } else if (obj.type === 'type-Exp') {
        var content, newContent;
        content = '<div class="expensesItem"><div class="describeT">%description%</div><div class="valueN">- %value% EUR</div></div>';
        newContent = content.replace('%description%', obj.description);
        newContent = newContent.replace('%value%', obj.value.toFixed(2));
    
        document.querySelector('.expensesList').insertAdjacentHTML('beforeend', newContent);
        
        document.querySelector('.hideExpList').style.display = 'none';
    }

};
    



