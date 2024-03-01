const Content = document.querySelector(".content");
const AddItem = document.querySelector(".add-item");
const Add = document.querySelector(".add");
const Delete = document.querySelector(".delete");
const Edit = document.querySelector(".edit");
const Para = document.querySelector(".para");
const TextD = document.querySelector(".text");
//const dynamicID = "xdiv";
const txtC = "text";

function genRandomId() {
  let constants = ["a", "b", "c", "d", "e", "1", "2", "3", "4", "5"];
  let randString = "";

  for (let i = 0; i < 5; i++) {
    let randomNumber = Math.floor(Math.random() * (constants.length - 1));
    randString += constants[randomNumber];
  }

  return randString;
}

//s<input type="button" class="edit" value="Edit" />
const AddBtn = function (text) {
  const dynamicId = genRandomId();

  html = `
  <div class="text">
          <div class="indiv">
            <div class="para">${text}</div>
            <div class="btn">
              <input type="button" id="${dynamicId}" class="delete" value="Delete" />
              </div>
              </div>
              </div>
    `;
  Content.insertAdjacentHTML("beforeend", html);
  const DeleteBtn = document.getElementById(dynamicId);
  let DeleteBtnFunc = (e) => {
    let parentDiv = e.target.parentElement.parentElement.parentElement;
    Content.removeChild(parentDiv);
  };
  DeleteBtn.addEventListener("click", DeleteBtnFunc);
};

document.addEventListener("keydown", (e) => {
  if (AddItem.value && e.key === "Enter") {
    let value = AddItem.value;
    AddBtn(value);
    AddItem.value = "";
  }
});
Add.addEventListener("click", (e) => {
  if (AddItem.value || e.key === "Enter") {
    let value = AddItem.value;
    AddBtn(value);
    AddItem.value = "";
  }
});
