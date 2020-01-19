//exporting the mysql module
const mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'hyf'
});


connection.connect();
const addNewTask = function(title, description, created, updated, due_date, status_id, user_id) {
    let post = {
        title,
        description,
        created,
        updated,
        due_date,
        status_id,
        user_id
    };
    connection.query('INSERT INTO task SET ?', post , function (error, results, fields) {
        if (error) throw error;
    });
}

const changeTaskTitle = function(taskID, newTitle) {
    let post = [newTitle, taskID];
    connection.query('UPDATE task SET title = ? WHERE id = ?', post , function (error, results, fields) {
        if (error) throw error;
    });
};

const changeTaskDueDate = function(taskID, newDueDate) {
    let post = [newDueDate, taskID];
    connection.query('UPDATE task SET due_date = ? WHERE id = ?', post , function (error, results, fields) {
        if (error) throw error;
    });
};

const changeTaskStatus = function(taskID, newStatus) {
    let post = [newStatus, taskID];
    connection.query('UPDATE task SET status_id = ? WHERE id = ?', post , function (error, results, fields) {
        if (error) throw error;
    });
};

const markTaskAsCompleted = function(taskID) {
    let post = [taskID];
    connection.query('UPDATE task SET status_id = 3 WHERE id = ?', post , function (error, results, fields) {
        if (error) throw error;
    });
};

const deleteTask = function(taskID) {
    let post = [taskID];
    connection.query('DELETE FROM task WHERE id = ?', post , function (error, results, fields) {
        if (error) throw error;
    });
};

addNewTask("Answering homework","Database Week2","2017-10-25 06:54:16","2017-10-25 06:54:16",null,1,1);
changeTaskTitle(40, "Really Answering the homework");
changeTaskDueDate(46, "2020-10-25 06:54:16");
changeTaskStatus(50, 2);
markTaskAsCompleted(52);
deleteTask(60);



connection.end();



