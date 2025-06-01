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
        let res;
        if (itemID && itemText) {
            res = await fetch(`http://localhost:3000/todo/${itemID}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ text: itemText })

            })
        } else {
            res = await fetch(`http://localhost:3000/todo/${item.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ done: item.done })

            })
        }

        if (!res.ok) {
            throw new Error(`Failed to update: ${res.status}`)
        }
    } catch (err) {
        console.log('Update error:', err);
    }
}

async function deleteItem(e) {
    try {
        let key;
        if (e.target) {
            key = e.target.closest(".item").dataset.id
        } else {
            key = e
        }

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