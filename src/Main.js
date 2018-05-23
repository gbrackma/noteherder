import React from 'react'

import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'
import firebase from './firebase.js'

class Main extends React.Component {

    constructor() {
        super()
        this.state = {
            notes: [],
            currentNote: this.blankNote(),
        }
    }

    getNotesInData() {
        const notesRef = firebase.database().ref('notes');
        notesRef.on('value', (snapshot) => {
            let notesInData = snapshot.val();
            return notesInData
        })
    }

    setCurrentNote = (note) => {
        this.setState({ currentNote: note })
    }

    blankNote = () => {
        return ({
            id: null,
            title: '',
            body: '',
        })
    }

    saveNote = (note) => {
        const notes = [...this.state.notes]

        if (!note.id) {
            var newNoteKey = firebase.database().ref().child('posts').push().key;
            note.id = newNoteKey
            notes.push(note)
            //const notesRef = firebase.database().ref('notes');
            //notesRef.push(this.state.currentNote)
        } else {
            const i = notes.findIndex((currentNote) => currentNote.id === note.id)
            notes[i] = note
            firebase.database().ref('notes/' + note.id).set({
                body: note.body,
                title: note.title,
            })
            //method to get item and add
        }

        this.setState({ notes })
        this.setState({ currentNote: note })

    }

    deleteNote = (note) => {

        console.log('delete')

        const notes = [...this.state.notes]


        const i = notes.findIndex(currentNote => currentNote.id === note.id)
        notes.splice(i, 1)


        this.setState({ notes })
        this.resetCurrentNote()

    }


    resetCurrentNote = () => {
        this.setCurrentNote(this.blankNote())
    }

    render() {

        return (
            <div className='Main' style={style} >
                <Sidebar
                    resetCurrentNote={this.resetCurrentNote}
                />
                <NoteList
                    notes={this.state.notes}
                    setCurrentNote={this.setCurrentNote}
                />
                <NoteForm
                    currentNote={this.state.currentNote}
                    saveNote={this.saveNote}
                    deleteNote={this.deleteNote}
                />
            </div>
        )
    }
}

const style = {
    display: 'flex',
    height: '100vh',
    alignItems: 'sretch',
}

export default Main