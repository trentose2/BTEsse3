const PORT = 3000;
const URL = 'http://localhost:${PORT}/tasks'

const tasks = require('../resources/tasks')
const fetch = require('node-fetch');

/* TODO: remove this function */
function is_task_type(elem) {
  return elem.id !== undefined && elem.response !== undefined &&
    elem.type !== undefined && elem.request !== undefined;
}

test('should be able to return all tasks', () => {
  var task_list = tasks.test_fun_get_tasks();
  expect(Array.isArray(task_list)).toBeTruthy();
})

test('should get a task', async () => {
  var task = {type: "type", request: "req", response: "res"};
  var task_list;
  tasks.test_fun_create_task(task);
  task_list = tasks.test_fun_get_tasks();

  var task_id_1 = tasks.test_fun_get_task_by_id(task_list[0].id);
  expect(task_id_1.id).toBe(task_list[0].id);
  expect(is_task_type(task_id_1)).toBeTruthy();
  tasks.test_fun_remove_task(task_list[0].id);
});

test('shouldn\'t find the task', () => {
  var task_list = tasks.test_fun_get_tasks();
  if (task_list.length == 0)
    task_list[0] = {id: -1};
  var task = tasks.test_fun_get_task_by_id(task_list[task_list.length-1].id + 1);
  expect(task).toBeNull();
});

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

  task.id = task_list[task_list.length -1].id;

  for (var field in task) {
    expect(task_list[task_list.length -1][field]).toBe(task[field]);
  }
  tasks.test_fun_remove_task(task.id);
});

test('should not create wrong type task', () => {
  var no_task = 
    {
      type: "WRONG",
      RESTinpeace: "RIP",
      letsgototheBAR: "the foo bar"
    }

  expect(! tasks.test_fun_create_task(no_task)).toBeTruthy();
});

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
  tasks.test_fun_remove_task(task.id);
});

test('should not be able to update non existing task', () => {
  var task_list = tasks.test_fun_get_tasks();
  var last_task_id = task_list.length > 0 ? 
    task_list[task_list.length -1].id + 1 :
    0;
  var task = {id: last_task_id, request: " ", response: " " };
  expect(tasks.test_fun_update_task(task)).toBe(false);
});

test('should delete task by id', () => {
  var task_list_size = tasks.test_fun_get_tasks().length;
  var task_list;
  var new_task = {type: " ", request: " ", response: " "};
  tasks.test_fun_create_task(new_task);
  task_list = tasks.test_fun_get_tasks();
  tasks.test_fun_remove_task(task_list[task_list.length -1].id);
  expect(tasks.test_fun_get_tasks().length).toBe(task_list_size);
  expect(tasks.test_fun_get_task_by_id(task_list[task_list.length -1].id)).toBeNull();
});

test('should not be able to update non existing task', () => {
  var task_list = tasks.test_fun_get_tasks();
  var last_task_id = task_list.length > 0 ? 
    task_list[task_list.length -1].id + 1 :
    0;
  expect(tasks.test_fun_remove_task(last_task_id)).toBe(false);
});

/* TESTS ON API CALL: */

test('GET ok', () => {

});

test('GET not ok', () => {

});

test('PUT ok', () => {

});

test('PUT not ok', ()=> {

});

test('POST ok', () => {

});

test('POST not ok', () => {

});

test('DELETE ok', () => {
  
});

test('DELETE not ok', () => {
  
});
