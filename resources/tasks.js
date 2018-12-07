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

router.post('/', function (req, res) {
  if (create_task(req.body)) {
    res.write("task created");
    res.statusCode = 200;
  } else { 
    res.statusCode = 400;
    res.write("Invalid post call!!!");
  }
});

router.put('/', function (req, res) {
  if (update_task(req.body)) {
    res.write("task updated");
    res.statusCode = 200;
  } else {
    res.statusCode = 400;
    res.write("Unable to update task");
  }
});

router.delete('/:id', function (req, res) {
  if (delete_task(req.params.id)) {
    res.json({status: "removed", task_id: req.params.id});
    res.statusCode = 200;
  } else {
    res.statusCode = 400;
    res.json({message: "Unable to remove task"});
  }
});

function is_task_type(elem) {
  return elem.id !== undefined && elem.response !== undefined &&
    elem.type !== undefined && elem.request !== undefined;
}

function read_data() {
  return JSON.parse(fs.readFileSync(FAKE_DB_PATH, 'utf8'));
}

function write_data(tasks) {
  fs.writeFileSync(FAKE_DB_PATH, JSON.stringify(tasks));
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
  var retval;
  var data = read_data();

  task.id = -1;

  if (is_task_type(task)) {
    retval = true;
    /* NOTE:
     * relies on ordination by id. 
     * This shit will be modified when 
     * there will be a real DB. 
    */
    task.id = data[data.length -1].id + 1;
    data.push(task);
    write_data(data);
  } else { retval = false; }

  return retval;
}

function delete_task(id) {
  var tasks = read_data();

  for (var i in tasks) {
    if (tasks[i].id == id) {
      tasks.splice(i, 1);
      write_data(tasks);
      return true;
    }
  }

  return false;
}

function update_task(task) {
  var tasks = read_data();
  if (is_task_type(task)) {
    for (var i in tasks) {
      if (tasks[i].id == task.id) {
        tasks.splice(i, 1, task);
        write_data(tasks);
        return true;
      }
    }
  }
  return false;
}

/* exported functions (I KNOW THIS IS SHITTY) */
router.test_fun_get_tasks = get_tasks;
router.test_fun_create_task = create_task;
router.test_fun_delete_task = delete_task;
router.test_fun_update_task = update_task;
router.test_fun_get_task_by_id =get_task_by_id;
module.exports = router;
