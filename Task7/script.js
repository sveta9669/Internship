const liList = document.querySelectorAll(".liList li")

liList.forEach(li => {
    li.addEventListener('click', function (e) {

        liList.forEach(listItem => {
            if (e.currentTarget != listItem) {
                listItem.classList.remove("displayYes")
            }
        })
        e.currentTarget.classList.toggle("displayYes")
        
    });

})


// GPT version

// liList.forEach(li => {
//     li.addEventListener('click', function (e) {



        const isOpen = this.classList.contains("displayYes");
        liList.forEach(item => item.classList.remove("displayYes"));
        if (!isOpen) {
            this.classList.add("displayYes");
        }



//     });

// })