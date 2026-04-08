// Load notes when page opens
document.addEventListener("DOMContentLoaded", showNotes);

function addNote() {
    let noteInput = document.getElementById("noteInput");
    let noteText = noteInput.value.trim();

    if (noteText === "") {
        alert("Enter a note!");
        return;
    }

    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push(noteText);

    localStorage.setItem("notes", JSON.stringify(notes));

    noteInput.value = "";
    showNotes();
}

function showNotes() {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    let notesList = document.getElementById("notesList");

    notesList.innerHTML = "";

    notes.forEach((note, index) => {
        let div = document.createElement("div");
        div.className = "note";

        div.innerHTML = `
            <p>${note}</p>
            <button class="deleteBtn" onclick="deleteNote(${index})">
                Delete
            </button>
        `;

        notesList.appendChild(div);
    });
}

function deleteNote(index) {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];

    notes.splice(index, 1);

    localStorage.setItem("notes", JSON.stringify(notes));
    showNotes();
}