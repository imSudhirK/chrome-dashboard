// todos.js
document.addEventListener('DOMContentLoaded', () => {
    const todoList = document.getElementById('todo-list');
    const todoInput = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-todo-btn');

    addBtn.addEventListener('click', () => {
        console.log('Add button clicked');
        const task = todoInput.value.trim();
        if (!task) return;

        const li = document.createElement('li');
        li.textContent = task;
        li.style.marginTop = '8px';
        li.style.cursor = 'pointer';

        li.addEventListener('click', () => li.remove()); // click to remove

        todoList.appendChild(li);
        todoInput.value = '';
    });
});
