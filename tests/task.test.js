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
  var task_list_length = tasks.test_fun_get_tasks().length;
  var task_list = null;

  var task = 
    {
      type: "TEST_TYPE", 
      request: "Non al denaro, non all'amore, ne al?",
      response: "cielo"
    }; 

  expect(tasks.test_fun_create_task(task)).toBeTruthy();
  
  task_list = tasks.test_fun_get_tasks();

  for (var field in task) {
    expect(task_list[task_list.length -1][field]).toBe(task[field]);
  }
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

test('should update a prev created task', () => {
  var task =
    {
      type: "TEST",
      request: "test_req",
      response: "test_res"
    }
  var task_list = null;
  var other_task = null;

  expect(tasks.test_fun_create_task(task)).toBeTruthy();

  task_list = tasks.test_fun_get_tasks();
  task.id = task_list[task_list.length -1].id;
  task.request = "Vuoi davvero lasciare ai tuoi occhi solo i sogni che non fanno svegliare?";
  task.response = "Si vostro onore, ma li voglio piu' grandi";
  task.type= "mooseca";
  expect(tasks.test_fun_update_task(task)).toBeTruthy();

  other_task = tasks.test_fun_get_task_by_id(task.id);

  for (var field in task) {
    expect(other_task[field]).toBe(task[field]);
  }
});
