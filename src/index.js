class List {
    notes = [
        { value: "Js", completed: false, id: 1596559757142 },
        { value: "World", completed: false, id: 1596559757043 },
        { value: "Hello", completed: false, id: 1596559756940 },
    ];

    addNote (value) {
        const note = {
            value,
            completed: false,
            id: Date.now(),
        };
        this.notes = [note, ...this.notes];
    };

    editNote (id, value, confirm) {
        if (confirm) {
            this.notes = this.notes.map(note => {
                let newNote = note;
    
                if (note.id === id) {
                    newNote = {
                        ...note,
                        value
                    }
                };
    
                return newNote
            });
        }
    };

    removeNote (id, confirm) {
        if (confirm) {
            this.notes = this.notes.filter(note => note.id !== id);
        };note => note.id !== id
    };
};

class ToDoList extends List {

    getStatistic = function () {
        return this.notes.reduce(
            (acc, note) => {
                note.completed && acc.completed++;
                return acc;
            },
            { total: this.notes.length, completed: 0 }
        );
    };

    completeNote (id) {
        this.notes = this.notes.map(note => ({
            ...note,
            completed: note.id === id ? !note.completed : note.completed
        }))
    };
};

class ContactList extends ToDoList{
    constructor(...args) {
        super(...args);
    };

    searchForANote = function (id) {
        this.notes = this.notes.filter(note => note.id === id);
    };
};

const myNewNote = new ContactList;
myNewNote.addNote('lala');
myNewNote.editNote(1596559757142, 'Valera', true);
console.log(myNewNote.searchForANote(1596559756940));
console.log(myNewNote.getStatistic());

const myNewNote2 = new ContactList;
myNewNote2.removeNote(1596559756940, true);

console.log(myNewNote);
console.log(myNewNote2);
