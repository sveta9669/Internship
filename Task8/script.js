const todoList = document.querySelector(".todoList")
const addButton = document.querySelector('.added input[name="add"]')
const countDiv = document.querySelector('#count')
const itemInputText = document.querySelector('.added input[name="todo"]')
const doneInput = document.querySelector('.added input[name="done"]')



async function displayItem(type) {
    if (type !== 'all' && type !== 'active' && type !== 'completed' && type !== 'clearCompleted') {
        type = 'all'
    }
    todoList.innerHTML = ''

    const data = await getData()

    for (const item of data) {
        if (
            type === "all" ||
            (type === "active" && !item.done) ||
            (type === "completed" && item.done)
        ) {
            createItem(item);
        } else if (type === "clearCompleted" && item.done) {
            deleteItem(item.id)
        }
    }

    if (type === "clearCompleted") {
        displayItem("all");
    }

    addClickToCheckbox()
    leftItemCounts()
}

addButton.onclick = addItem

async function addItem() {
    const itemText = itemInputText.value.trim()
    itemInputText.value = ''
    const done = doneInput.checked
    if (!itemText) {
        alert('Add information');
        return 0;
    }

    const data = await getData()

    const obj = {
        id: `${++data.length}`,
        text: itemText,
        done: done
    }

    const x = await addData(obj)

    createItem(obj)
    leftItemCounts()
    addClickToCheckbox()

}

function createItem(item) {
    const div = document.createElement('div')
    div.setAttribute("data-id", item.id)
    div.className = 'added item'
    div.innerHTML = `
        <label class="circle-checkbox">
            <input type="checkbox" name="done" ${item.done ? 'checked' : ''}>
            <span class="checkMark"> </span>
        </label>
        <input type="text" name="todo" value="${item.text}" readonly>
        <button class="edit-btn">✏️</button>
        <input type="button" name="delete" value="X"> `

    div.querySelector('input[name="delete"]').onclick = deleteItem
    todoList.prepend(div)
}

async function addClickToCheckbox() {
    const checkbox = document.querySelectorAll('.item input[type="checkbox"]')

    checkbox.forEach(box => {
        box.addEventListener('click', async function (e) {
            const id = e.target.closest('[data-id]').dataset.id
            const item = await getDataById(id)
            item.done = e.target.checked
            await updateById(item)
            leftItemCounts()
        })
    })
}
async function leftItemCounts() {
    let count = 0;
    const data = await getData()
    for (const item of data) {
        if (item && item.done === false) {
            count++
        }
    }
    countDiv.textContent = `${count} items left`
}


displayItem('all')
const editButtons = document.querySelectorAll('.edit-btn')
console.log(editButtons)
editButtons.forEach(el => {
    el.addEventListener('click', function (e) {
        console.log('yes')
        if (e.target.classList.contains('edit-btn')) {
            const item = e.target.closest('.item');
            const input = item.querySelector('input[type="text"]');
            const isEditable = !input.hasAttribute('readonly');
            if (isEditable) {
                input.setAttribute('readonly', true);
                e.target.textContent = '✏️';
            } else {
                input.removeAttribute('readonly');
                input.focus();
                e.target.textContent = '✅';
            }
        }
    })
})