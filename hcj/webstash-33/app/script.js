const addBtn = document.getElementById('add');

const notes = JSON.parse(localStorage.getItem('notes'));

if (notes) {
    notes.forEach(note => {
        addNewNote(note)
    })
}

addBtn.addEventListener('click', () => addNewNote(''));

function addNewNote(text = '') {
    const note = document.createElement('div');
    note.classList.add('note');

    note.innerHTML = `
        <div class="tools">
            <button ${text ? '' : 'hidden'} class="edit"><i class="fas fa-edit"></i></button>
            <button ${text ? 'hidden' : ''} class="save"><i class="fas fa-check"></i></button>
            <button class="delete"><i class="fas fa-trash-alt"></i></button>
        </div>
        <div ${text ? '' : 'hidden'} class="main">Hello!</div>
        <textarea ${text ? 'hidden' : ''} placeholder="Hello!"></textarea>
    `;

    const editBtn = note.querySelector('.edit');
    const saveBtn = note.querySelector('.save');
    const deleteBtn = note.querySelector('.delete');
    const main = note.querySelector('.main');
    const textArea = note.querySelector('textarea');

    textArea.value = text;
    main.innerHTML = marked.parse(text);

    deleteBtn.addEventListener('click', () => {
        note.remove();
        updateLS();
    });

    editBtn.addEventListener('click', () => {
        main.toggleAttribute('hidden');
        editBtn.toggleAttribute('hidden');
        textArea.toggleAttribute('hidden');
        saveBtn.toggleAttribute('hidden');
    });

    saveBtn.addEventListener('click', () => {
        main.toggleAttribute('hidden');
        editBtn.toggleAttribute('hidden');
        textArea.toggleAttribute('hidden');
        saveBtn.toggleAttribute('hidden');
    });

    textArea.addEventListener('input', (e) => {
        const { value } = e.target;
        main.innerHTML = marked.parse(value);
        updateLS()
    });

    document.body.appendChild(note);
}

function updateLS() {
    const notesText = document.querySelectorAll('textarea');
    const notes = [];

    notesText.forEach(note => notes.push(note.value));
    localStorage.setItem('notes', JSON.stringify(notes));
}