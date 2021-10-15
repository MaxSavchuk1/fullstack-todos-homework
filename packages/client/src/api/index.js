const todoTasks = [{ id: Date.now(), body: 'Do something', isDone: false }];

export const getTodos = () => {
  return Promise.resolve({ data: todoTasks });
};

export const createTodo = task => {
  const newTodoTask = { ...task, id: Date.now() };
  todoTasks.push(newTodoTask);
  return Promise.resolve({ data: newTodoTask });
};

export const deleteTodo = id => {
  const index = todoTasks.findIndex(todo => todo.id === id);
  return Promise.resolve({ data: todoTasks.splice(index, 1) });
};

export const statusTodo = id => {
  const index = todoTasks.findIndex(todo => todo.id === id);
  return Promise.resolve({ data: todoTasks[index].id });
};
