const container = document.getElementById('todo-container');
const input = document.getElementById('new-item');

function saveTodos(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function renderTodos() {
    container.innerHTML = '';
    const todos = JSON.parse(localStorage.getItem('todos') || '[]');
    todos.forEach((t, index) => createTodoElement(t.todo, t.status, index));
}

function createTodoElement(todoText, status, index) {
    const item = document.createElement('div');
    item.style.display = 'flex';
    item.style.alignItems = 'center';
    item.style.justifyContent = 'space-between';
    item.style.marginTop = '14px';

    const left = document.createElement('div');
    left.style.display = 'flex';
    left.style.alignItems = 'center';
    left.style.gap = '10px';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.style.width = '18px';
    checkbox.style.height = '18px';
    checkbox.style.accentColor = '#4b5563';
    checkbox.style.backgroundColor = '#4b5563';
    checkbox.style.border = '2px solid #4b5563';
    checkbox.style.borderRadius = '50%';
    checkbox.style.cursor = 'pointer';
    checkbox.checked = status === 'done';
    checkbox.onclick = () => {
        const todos = JSON.parse(localStorage.getItem('todos') || '[]');
        todos[index].status = checkbox.checked ? 'done' : 'not_done';
        saveTodos(todos);
        renderTodos();
    };

    const label = document.createElement('span');
    label.innerText = todoText.slice(0, 40);
    label.style.fontSize = '16px';
    label.style.textDecoration = status === 'done' ? 'line-through' : 'none';
    label.style.color = status === 'done' ? '#4b5563' : 'white';

    left.appendChild(checkbox);
    left.appendChild(label);

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = '✕';
    deleteBtn.style.fontSize = '18px';
    deleteBtn.style.border = 'none';
    deleteBtn.style.background = 'none';
    deleteBtn.style.color = '#4b5563';
    deleteBtn.style.cursor = 'pointer';
    deleteBtn.style.marginLeft = '10px';
    deleteBtn.onclick = () => {
        const todos = JSON.parse(localStorage.getItem('todos') || '[]');
        todos.splice(index, 1);
        saveTodos(todos);
        renderTodos();
    };

    item.appendChild(left);
    item.appendChild(deleteBtn);
    container.appendChild(item);
}

input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        const text = input.value.trim();
        if (text === '') return;

        const todos = JSON.parse(localStorage.getItem('todos') || '[]');
        todos.push({ todo: text, status: 'not_done' });
        saveTodos(todos);
        renderTodos();
        input.value = '';
    }
});

renderTodos();
