const todoList = document.querySelector(".todoList")
const addButton = document.querySelector('.added input[name="add"]')
const countDiv = document.querySelector('#count')
const itemInputText = document.querySelector('.added input[name="todo"]')
const doneInput = document.querySelector('.added input[name="done"]')

if (!localStorage.getItem("index")) {
    localStorage.setItem("index", 0);
}

addButton.onclick = addItem

function addItem() {
    const itemText = itemInputText.value.trim()
    const done = doneInput.checked
    if (!itemText) {
        alert('Add information');
        return 0;
    }

    const obj = {
        text: itemText,
        done: done
    }
    let index = localStorage.getItem("index");
    localStorage.setItem("index", ++index);
    localStorage.setItem(index, JSON.stringify(obj));

    createItem(obj, index)
    leftItemCounts()
    addClickToCheckbox()

}

function deleteItem(e) {
    const key = e.target.closest(".item").dataset.id
    document.querySelector(`[data-id="${key}"]`).remove()
    localStorage.removeItem(key)
    leftItemCounts()
}

function createItem(item, i) {
    const div = document.createElement('div')
    div.setAttribute("data-id", i)
    div.className = 'added item'
    div.innerHTML = `
        <label class="circle-checkbox">
            <input type="checkbox" name="done" ${item.done ? 'checked' : ''}>
            <span class="checkMark"> </span>
        </label>
        <input type="text" name="todo" value="${item.text}">
        <input type="button" name="delete" value="X"> `

    div.querySelector('input[name="delete"]').onclick = deleteItem
    todoList.prepend(div)
}

function displayItem(type) {
    if (type !== 'all' && type !== 'active' && type !== 'completed' && type !== 'clearCompleted') {
        type = 'all'
    }
    todoList.innerHTML = ''

    for (let i = 1; i <= localStorage.getItem("index"); i++) {
        const item = JSON.parse(localStorage.getItem(i));
        if (!item) continue;

        if (
            type === "all" ||
            (type === "active" && !item.done) ||
            (type === "completed" && item.done)
        ) {
            createItem(item, i);
        } else if (type === "clearCompleted" && item.done) {
            localStorage.removeItem(i);
        }
    }

    if (type === "clearCompleted") {
        displayItem("all");
    }

    addClickToCheckbox()
    leftItemCounts()
}

function addClickToCheckbox() {
    const checkbox = document.querySelectorAll('.item input[type="checkbox"]')

    checkbox.forEach(box => {
        box.addEventListener('click', function (e) {
            const id = e.target.closest('[data-id]').dataset.id
            const item = JSON.parse(localStorage.getItem(id))
            item.done = e.target.checked
            localStorage.setItem(id, JSON.stringify(item))
            leftItemCounts()
        })
    })
}

function leftItemCounts() {
    let count = 0;
    for (let i = 0; i <= localStorage.getItem("index"); i++) {
        const item = JSON.parse(localStorage.getItem(i))
        if (item && item.done === false) {
            count++
        }
    }
    countDiv.textContent = `${count} items left`
}

displayItem('all')
