const tasks = require('../resources/tasks')

/* TODO: remove this function */
function is_task_type(elem) {
  return elem.id !== undefined && elem.response !== undefined &&
    elem.type !== undefined && elem.request !== undefined;
}

test('should get a task', async () => {
  var valid_index = 1;
  /*
       .end(function (err, res) {
          t.equals(res.status, 200, 'response status should be 200');
          t.end();

       })
       */
  var task_id_1 = tasks.test_fun_get_task_by_id(valid_index);
  expect(task_id_1.id).toBe(valid_index);
  expect(is_task_type(task_id_1)).toBeTruthy();
});

test('shouldn\'t find the task', () => {
  var invalid_index = 4358394;
  var task = tasks.test_fun_get_task_by_id(invalid_index);
  expect(task).toBeNull();
});

test('should be able to return all tasks', () => {
  var task_list = tasks.test_fun_get_tasks();
  expect(Array.isArray(task_list)).toBeTruthy();
})

test('should be able to create the task', () => {
  var task = 
    {
      type: "TEST_TYPE", 
      request: "Non al denaro, non all'amore, ne al?",
      response: "cielo"
    }; 
  expect(tasks.test_fun_create_task(task)).toBeTruthy();
})

test('should not create wrong type task', () => {
  var no_task = 
    {
      type: "WRONG",
      RESTinpeace: "RIP",
      letsgototheBAR: "the foo bar"
    }

  expect(! tasks.test_fun_create_task(no_task)).toBeTruthy();
})
