var fs = require("fs");
const express = require('express');
const FAKE_DB_PATH = 'database/tasks.json'
var router = express.Router();

router.get('/:id', function (req, res) {
  var task = get_task_by_id(req.params.id);

  if (undefined !== task && null !== task) {
    return res.json(task);
  } else {
    res.statusCode = 400;
    return res.json({message:'Error, Not Found!'})
  }
});

router.get('/', function (req, res) {
  var tasks = get_tasks();

  if (undefined === tasks || null === tasks) {
    tasks = [];
  }

  return res.json(tasks);
});

function read_data() {
  return JSON.parse(fs.readFileSync(FAKE_DB_PATH, 'utf8'));
}

function get_tasks() {
  return read_data();
}

function get_task_by_id(id) {
  var tasks = read_data();

  for (var i in tasks) {
    if (tasks[i].id == id) {
      return tasks[i];
    }
  }

  return null;
}

function create_task(task) {

}

function delete_task(id) {

}

module.exports = router;
