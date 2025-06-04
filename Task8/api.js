async function getData() {
    try {

        const res = await fetch('http://localhost:3000/todo')

        if (!res.ok) {
            throw new Error(`HTTP error: ${res.status}`)
        }

        return await res.json()

    } catch (err) {
        console.log('Fetch error:', err)
    }

}

async function getDataById(id) {
    try {

        const res = await fetch(`http://localhost:3000/todo/${id}`)

        if (!res.ok) {
            throw new Error(`HTTP error: ${res.status}`)
        }

        return await res.json()

    } catch (err) {
        console.log('Fetch error:', err)
    }

}
async function addData(newItem) {
    try {
        const res = await fetch(`http://localhost:3000/todo`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newItem)

        })
        if (!res.ok) {
            throw new Error(`Failed to add: ${res.status}`)
        }
    } catch (err) {
        console.log('Add error:', err.message);
    }
}

async function updateById(item, itemID, itemText) {
    try {
        const id = itemID || item.id
        const updatedItem = itemText ? { text: itemText } : { done: item.done }

        const res = await fetch(`http://localhost:3000/todo/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedItem)

        })

        if (!res.ok) {
            throw new Error(`Failed to update: ${res.status}`)
        }
    } catch (err) {
        console.log('Update error:', err);
    }
}

async function deleteItem(e) {
    try {
        const key = e.target ? e.target.closest(".item").dataset.id : e

        const res = await fetch(`http://localhost:3000/todo/${key}`, {
            method: 'DELETE'
        })
        if (!res.ok) {
            throw new Error(`Failed to delete: ${res.status}`)
        }
        document.querySelector(`[data-id="${key}"]`).remove()
        leftItemCounts()
    } catch (err) {
        console.log('Delete error:', err.message);
    }
}