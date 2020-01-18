//exporting the mysql module
const mysql      = require('mysql');
let connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'mealapp',
  multipleStatements: true
});

connection.connect();

//list of tables that exists in the database
const database_tables = ['meal','reservation','review'];

//checking if the table exists in the database
function checkValidTableIdentifier(value) {
    let flag = false;
    database_tables.forEach(element => {
        if(element === value) {
            flag = true;
        }
    });
    return flag;
}

const showTableData = function(tableName) {
    if(checkValidTableIdentifier(tableName) === true) {
        let query = connection.query('SELECT * FROM ??', tableName,  function (error, results, fields) {
            if (error) throw error;
            if(results) {
                console.log(`Displaying data for ${tableName} Table`);
                results.forEach(element=>{
                    console.log(JSON.stringify(element) + "\n");
                });
            }
            else {
                console.log("Nothing match");
            }
        });
    }   
    else {
        console.log("Table name is not valid");
    }
};


const searchId = function(id, tableName) {
    if(checkValidTableIdentifier(tableName) === true) {
        let post = [tableName, id];
        connection.query('SELECT * FROM ?? WHERE id = ?', post , function (error, results, fields) {
            if (error) throw error;
            console.log("Showing data for id "+ id);
            console.log(JSON.stringify(results) + '\n');
        });
    }   
    else {
        console.log("Table name is not valid");
    }
};

const deleteData = function(id, tableName) {
    if(checkValidTableIdentifier(tableName) === true) {
        connection.query(`DELETE FROM ${tableName} WHERE id = ?`, id , function (error, results, fields) {
            if (error) throw error;
            if(results.length) {
                console.log("Delete successfull...");
                console.log(`Data with Id ${id} from ${tableName} is deleted`);
            }
            else {
                console.log("Data was not found on the database \n");
            }
        });
    }   
    else {
        console.log("Table name is not valid");
    }
};

const addNewMeal = function(title, description, location, when, max_reservations, price, created_date) {
    let post = {title, description, location, when, max_reservations, price, created_date};
    let query = connection.query('INSERT INTO meal SET ?', post , function (error, results, fields) {
        if (error){
            if(error.code == 'ER_DUP_ENTRY') {
                console.log('Duplicate Entry. Review the values.');
            }
            else {
                throw error;
            }
        } 
        else {
            console.log("Data inserted successfully...");
            console.log(query.sql + '\n');
        }
    });
}

const changeMeal = function(taskID, newTitle) {
    let post = [newTitle, taskID];
    let query = connection.query('UPDATE meal SET title = ? WHERE id = ?', post , function (error, results, fields) {
        if (error) throw error;
        console.log("Update successfull...");
        console.log(`New title is now ${newTitle} at ID ${taskID} on Table Meal \n`);
    }); 
};

function setMaxReservationWithId(meal_id) {
    connection.query('SELECT @temp_max:= max_reservations FROM meal WHERE id = ?', meal_id, function (error, results, fields) {
        if (error) throw error;
    });
}

const addNewReservation = function(number_of_guests, meal_id, created_date) {
    let post = {number_of_guests, meal_id, created_date};

    setMaxReservationWithId(meal_id);
    connection.query('SELECT reservation.id, reservation.meal_id, @temp_count:=COUNT(meal_id), @temp_max:=meal.max_reservations  FROM reservation JOIN meal on reservation.meal_id = meal.id WHERE meal_id = ?', meal_id, function (error, results, fields) {
        if (error) throw error;
        if(results[0]["@temp_count:=COUNT(meal_id)"] < results[0]["@temp_max:=meal.max_reservations"]) {
            let query = connection.query('INSERT INTO reservation SET ?', post , function (error, results, fields) {
                if (error){
                    if(error.code == 'ER_DUP_ENTRY') {
                        console.log('Duplicate Entry. Review the values.');
                    }
                    else {
                        throw error;
                    }
                } 
                else {
                    console.log("Data inserted successfully...");
                    console.log(query.sql + '\n');
                }
            });
        }
        else {
            console.log("Max reservations for this meal Id already reached \n");
        }
    });
    
}

const changeReservation = function(taskID, number_of_guests) {
    let post = [number_of_guests, taskID];
    let query = connection.query('UPDATE reservation SET number_of_guests = ? WHERE id = ?', post , function (error, results, fields) {
        if (error) throw error;
        console.log("Update successfull...");
        console.log(`New title is now ${number_of_guests} at ID ${taskID} on Table Reservation \n`);
    });
};

const addNewReview = function(title, description, meal_id, stars, created_date) {
    let post = {title, description, meal_id, stars, created_date};
    let query = connection.query('INSERT INTO review SET ?', post , function (error, results, fields) {
        if (error){
            if(error.code == 'ER_DUP_ENTRY') {
                console.log('Duplicate Entry. Review the values.');
            }
            else {
                throw error;
            }
        } 
        else {
            console.log("Data inserted successfully...");
            console.log(query.sql + '\n');
        }
    });
}

const changeReview= function(taskID, title) {
    let post = [title, taskID];
    
    let query = connection.query('UPDATE review SET title= ? WHERE id = ?', post , function (error, results, fields) {
        if (error) throw error;
        console.log("Update successfull...");
        console.log(`New title is now ${title} at ID ${taskID} on Table Review \n`);
    });
};

console.log("-----------------------------------------------------------------");
showTableData("meal");
addNewMeal("Women & Whiskiesssss", "Drinking whiskies", "Lot 579 Harvest Dinner", "2019-11-10", 2, 60, "2019-03-01");
addNewMeal("Burgers", "Giant Burgers", "Kerteminde, DK", "2019-12-10", 2, 100, "2019-03-08");
addNewMeal("Burrito Burp", "Burrito that makes you want to burp", "Langeland, DK", "2020-02-08", 2, 100, "2019-01-08");
addNewMeal("Taco Tuesday's", "Coz' every tuesday is Taco day!", "Odense, DK", "2020-03-01", 2, 50, "2019-02-01");
changeMeal(4, "Rød grød med");

searchId(2, "meal");
deleteData(33, "meal");
addNewReservation(5,2, "2019-03-08");
addNewReservation(2, 2, "2019-03-08");
addNewReservation(3, 3, "2019-02-08");
addNewReservation(2, 4, "2019-02-08");
changeReservation(4, 2);
addNewReview("Awesome Meal", "The meal is awesome. Can't say more.",2,5, "2019-03-9");
addNewReview("Best Meal", "One of the best meal I ever had.",2,5, "2019-03-10");
addNewReview("Food was great", "All is well",3,4, "2019-03-9");
addNewReview("Okay", "The food was okay. Kidding, It was fantastic!",3,5, "2019-04-10");
changeReview(2,"The very best meal");



//Functionality add-on
let price = 90;

//#1. Get meals that has a price smaller than a specific price fx 90
connection.query('SELECT * FROM meal WHERE price <= ?', connection.escape(price), function (error, results, fields) {
    if (error) throw error;
    console.log("Result with less than "+price+JSON.stringify(results));
}); 
//#2. Get meals that still has available reservations
connection.query('SELECT meal.id, max_reservations, title, description FROM reservation JOIN meal ON reservation.meal_id = meal.id GROUP BY meal_id HAVING COUNT(meal_id) < max_reservations', function (error, results, fields) {
    if (error) throw error;
    if(results.length) { 
        console.log("\n Here are the meals that still has available reservations", JSON.stringify(results));
    }
   else{
        console.log("\n All meals are fully booked.")
    }
}); 
// #3. Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
connection.query('SELECT * FROM meal WHERE title LIKE "%Rød grød%";', function (error, results, fields) {
    if (error) throw error;
    console.log("\nFound that match the condition", JSON.stringify(results));
}); 
// #4. Get meals that has been created between two dates
connection.query('SELECT * FROM meal WHERE created_date BETWEEN "2019-01-08" AND "2019-02-08"', function (error, results, fields) {
    if (error) throw error;
    console.log("\nFound that match the condition", JSON.stringify(results));
}); 
// #5. Get only specific number of meals fx return only 5 meals
connection.query('SELECT * FROM meal LIMIT 2', function (error, results, fields) {
    if (error) throw error;
    console.log("\nFound that match the condition", JSON.stringify(results));
}); 
// #6. Get the meals that have good reviews
connection.query('SELECT meal.id, meal.title, review.title, review.description, stars FROM meal JOIN review on meal.id = meal_id  WHERE stars >= 4 LIMIT 10', function (error, results, fields) {
    if (error) throw error;
    console.log("\nFound that match the condition", JSON.stringify(results));
}); 
// #7. Get reservations for a specific meal sorted by created_date
connection.query('SELECT * FROM reservation WHERE meal_id = 3 ORDER BY created_date', function (error, results, fields) {
    if (error) throw error;
    console.log("\nFound that match the condition", JSON.stringify(results));
}); 
// #8. Sort all meals by average number of stars in the reviews
connection.query('SELECT meal_id, AVG(stars) as "Average Star Rating" FROM review GROUP BY meal_id', function (error, results, fields) {
    if (error) throw error;
    console.log("\nFound that match the condition", JSON.stringify(results));
}); 

// connection.end();

