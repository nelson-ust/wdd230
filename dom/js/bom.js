const chapterInput = document.getElementById("chapterInput");
const addChapterButton = document.getElementById("addChapter");
const chapterList = document.getElementById("chapterList");

addChapterButton.addEventListener("click", function() {
  const chapter = chapterInput.value;
  if (!chapter) return;
  const li = document.createElement("li");
  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.classList.add("remove-button");
  li.textContent = chapter;
  li.appendChild(removeButton);
  chapterList.appendChild(li);
  chapterInput.value = "";
  chapterInput.focus();
});

chapterList.addEventListener("click", function(event) {
  if (event.target.classList.contains("remove-button")) {
    event.target.parentNode.remove();
  }
});
