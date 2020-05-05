function todo() {
  const clear = document.querySelector(".todo__clear"),
    date = document.querySelector(".todo__date"),
    list = document.querySelector(".list"),
    input = document.getElementById("input-todo"),
    imgRefresh = document.querySelector(".refresh");

  const CHECK = "circle-change";
  const UNCHECK = "circle__circle-thin";
  const LINE_THROUGH = "line-through";

  let LIST, id;

  let data = localStorage.getItem("TODO");

  if (data) {
    LIST = JSON.parse(data);
    id = LIST.length;
    loadList(LIST);
  } else {
    LIST = [];
    id = 0;
  }

  LIST = [];
  id = 0;

  function loadList(array) {
    array.forEach(function (item) {
      addToDo(item.name, item.id, item.done, item.trash);
    });
  }

  clear.addEventListener("click", function () {
    imgRefresh.classList.add('refresh-transform');
    localStorage.clear();
    location.reload();
  });

  const options = {
    weekday: "long",
    month: "short",
    day: "numeric",
  };
  const today = new Date();

  date.innerHTML = today.toLocaleDateString("en-US", options);

  function addToDo(toDo, id, done, trash) {
    if (trash) {
      return;
    }

    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";

    const item = `<li class="list__items">              
                    <span class="${DONE}"><img class="circle-thin" id="${id}" job="complete" src="assets/img/icons/checkmark.svg" alt="circle"/></span>                   
                    <div class="text-block"><p class="list__text ${LINE}">${toDo}</p></div>                   
                    <img class="trash" id="${id}" job="delete" src="assets/img/icons/trash-2.svg" alt="trash"/>
                  </li>`;

    const position = "beforeend";

    list.insertAdjacentHTML(position, item);
  }

  document.addEventListener("keyup", (event) => {
    if (event.keyCode == 13) {
      const toDo = input.value;

      if (toDo) {
        addToDo(toDo, id, false, false);

        LIST.push({
          name: toDo,
          id: id,
          done: false,
          trash: false,
        });

        localStorage.setItem("TODO", JSON.stringify(LIST));
        id++;
      }
      input.value = "";
    }
  });

  function completeToDo(element) {
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.parentNode.querySelector('.list__text').classList.toggle(LINE_THROUGH);

    LIST[element.id].done = LIST[element.id].done ? false : true;
  }

  function removeToDo(element) {
    element.parentNode.parentNode.removeChild(element.parentNode);
    LIST[element.id].trash = true;
  }

  list.addEventListener("click", function (event) {
    const element = event.target;
    const elementJob = element.attributes.job.value;

    if (elementJob == "complete") {
      completeToDo(element);
    } else if (elementJob == "delete") {
      removeToDo(element);
    }

    localStorage.setItem("TODO", JSON.stringify(LIST));
  });
}

module.exports = todo;