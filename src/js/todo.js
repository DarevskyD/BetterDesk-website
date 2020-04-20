function todo() {
    const clear = document.querySelector('.todo__clear'),
        date = document.querySelector('.todo__date'),
        list = document.querySelector('.list'),
        input = document.getElementById('input-todo');

    const CHECK = 'circle-change';
    const UNCHECK = 'circle__circle-thin';
    const LINE_THROUGH = 'line-through';

    // let LIST, id;

    // let data = localStorage.getItem("TODO");

    // if (data) {
    //     LIST = JSON.parse(data);
    //     id = LIST.length;
    //     loadList(LIST);
    // } else {
    //     LIST = [];
    //     id = 0;
    // }

    // LIST = [];
    // id = 0;

    // function loadList(array) {
    //     array.forEach(function (item) {
    //         addToDo(item.name, item.id, item.done, item.trash);
    //     });
    // }

    // clear.addEventListener("click", function () {
    //     localStorage.clear();
    //     location.reload();
    // });

    const options = {
        weekday: "long",
        month: "short",
        day: "numeric"
    };
    const today = new Date();

    date.innerHTML = today.toLocaleDateString("en-US", options);

    function addToDo(toDo) {

        //     if (trash) {
        //         return;
        //     }

        //     const DONE = done ? CHECK : UNCHECK;
        //     const LINE = done ? LINE_THROUGH : '';

        const item =
            ` <li class="list__items">
                <span class="list__content">
                    <span class="circle">
                        <span class="circle__circle-thin" job="complete" id="0"><img class="circle-thin" src="assets/img/icons/checkmark.svg" alt="circle"/></span>
                    </span>
                    <p class="list__text">${toDo}</p>
                </span>
                <span class="trash-object" job="delete" id="0"><object data="assets/img/icons/trash.svg" type="image/svg+xml"></object></span>
            </li>`;

        const position = 'beforeend';

        list.insertAdjacentHTML(position, item);
    }

    document.addEventListener('keyup', (event) => {
        if (event.keyCode == 13) {
            const toDo = input.value;

            if (toDo) {
                addToDo(toDo);

                //             LIST.push({
                //                 name: toDo,
                //                 id: id,
                //                 done: false,
                //                 trash: false
                //             });

                //             localStorage.setItem("TODO", JSON.stringify(LIST));
                //             id++;
            }
            input.value = '';
        }
    });

    // function completeToDo(element) {
    //     element.classList.toggle(CHECK);
    //     element.classList.toggle(UNCHECK);
    //     element.parentNode.querySelector('.list__text').classList.toggle(LINE_THROUGH);

    //     LIST[element.id].done = LIST[element.id].done ? false : true;
    // }

    // function removeToDo(element) {
    //     element.parentNode.parentNode.removeChild(element.parentNode);
    //     LIST[element.id].trash = true;
    // }

    // list.addEventListener("click", function (event) {
    //     const element = event.target;
    //     const elementJob = element.attributes.job.value;

    //     if (elementJob == "complete") {
    //         completeToDo(element);
    //     } else if (elementJob == "delete") {
    //         removeToDo(element);
    //     }

    //     localStorage.setItem("TODO", JSON.stringify(LIST));
    // });

}

module.exports = todo;