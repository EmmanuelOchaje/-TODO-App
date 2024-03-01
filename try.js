const Content = document.querySelector(".content");
const AddItem = document.querySelector(".add-item");
const Add = document.querySelector(".add");
const Delete = document.querySelector(".delete");
const Edit = document.querySelector(".edit");
const Para = document.querySelector(".para");
const TextD = document.querySelector(".text");

function genRandomId() {
  let constants = ["a", "b", "c", "d", "e", "1", "2", "3", "4", "5"];
  let randString = "";

  for (let i = 0; i < 5; i++) {
    let randomNumber = Math.floor(Math.random() * (constants.length - 1));
    randString += constants[randomNumber];
  }

  return randString;
}

const AddFunc = function (text) {
  const dynamicId = genRandomId();

  const onClickToDelete = (e) => {
    const parentDiv = e.target.parentElement.parentElement.parentElement;
    Content.removeChild(parentDiv);
  };
  let html = `
    <div class="text">
          <div class="indiv">
            <div class="para">${text}</div>
            <div class="btn">
             <button type="button" id="${dynamicId}" class="delete" value="Delete">Delete</button>
             <input type="button" class="edit" value="Edit" />
            </div>
            </div>
            `;
  Content.insertAdjacentHTML("beforeend", html);

  const button = document.getElementById(dynamicId);
  if (button) {
    button.addEventListener("click", (e) => onClickToDelete(e));
  } else {
    console.log("Button not exist!");
  }
};

Add.addEventListener("click", () => {
  //preventDefault()
  if (AddItem.value) {
    let cont = AddItem.value;
    AddFunc(cont);
    //Para.textContent =
    AddItem.value = "";
  }
});
