const todoList = document.querySelector(".todoList")
const addButton = document.querySelector('.added input[name="add"]')
const countDiv = document.querySelector('#count')
const itemInputText = document.querySelector('.added input[name="todo"]')
const doneInput = document.querySelector('.added input[name="done"]')


itemInputText.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addItem()
})
addButton.onclick = addItem

displayItem('all')

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
    editItem()
    leftItemCounts()
}



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
    editItem()

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




function editItem() {
    const editButtons = document.querySelectorAll('.edit-btn')
    editButtons.forEach(el => {
        el.addEventListener('click', function (e) {
            if (e.target.classList.contains('edit-btn')) {
                const item = e.target.closest('.item');
                const input = item.querySelector('input[type="text"]');
                const isEditable = !input.hasAttribute('readonly');
                if (isEditable) {
                    input.setAttribute('readonly', true);
                    e.target.textContent = '✏️';
                    updateById(item, item.dataset.id, input.value)
                } else {
                    input.removeAttribute('readonly');
                    input.focus();
                    e.target.textContent = '✅';
                }
            }
        })
    })
}

// todoList.addEventListener('click', async (e) => {
//   const item = e.target.closest('.item')
//   const id = item?.dataset.id

//   if (e.target.matches('.edit-btn')) {
//     const input = item.querySelector('input[type="text"]')
//     const isEditing = !input.hasAttribute('readonly')
//     if (isEditing) {
//       input.setAttribute('readonly', true)
//       e.target.textContent = '✏️'
//       await updateById(item, id, input.value)
//     } else {
//       input.removeAttribute('readonly')
//       input.focus()
//       e.target.textContent = '✅'
//     }
//   }

//   if (e.target.matches('input[name="delete"]')) {
//     await deleteItemById(id)
//     item.remove()
//     leftItemCounts()
//   }

//   if (e.target.matches('input[type="checkbox"]')) {
//     const itemData = await getDataById(id)
//     itemData.done = e.target.checked
//     await updateById(itemData)
//     leftItemCounts()
//   }
// })