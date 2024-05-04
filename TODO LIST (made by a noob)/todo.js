let todoitem;
let tododate;

let arrTODO = [];
let arrDATE = [];

function todoin() {
  let work = document.querySelector("#input");
  todoitem = work.value;
  let date = document.querySelector("#date");
  tododate = date.value;
  arrTODO.push(todoitem);
  arrDATE.push(tododate);
  work.value = "";
  date.value = "";
}

function display() {
  let show = document.querySelector("#container");
  let newhtml = "";
  for (let i = 0; i < arrDATE.length; i++) {
    newhtml =
      newhtml +
      `
 
 <span id="do"class="write">${arrTODO[i]}</span>
 <span id="date" class="write">${arrDATE[i]}</span>
 <button id="delete"  onclick="arrDATE.splice(${i},1);arrTODO.splice(${i},1);(display())"> DELETE </button>
  `;
  }
  show.innerHTML = newhtml;
}
