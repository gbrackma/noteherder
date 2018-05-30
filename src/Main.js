import React from 'react'

import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'
import base from './firebase.js'
import { Route, Switch } from 'react-router-dom'

class Main extends React.Component {

    constructor() {
        super()
        //get the initial data
        this.state = {
            notes: [],
            currentNote: this.blankNote(),
        }

    }

    componentDidMount() {
        /*const notesRef = firebase.database().ref('notes');
        notesRef.on('value', (snapshot) => {
            const notes = [...this.state.notes]

                snapshot.forEach(function (childSnapshot) {
                    let item = childSnapshot.val()

                    let itemToPush = {
                        id: childSnapshot.key,
                        title: item.title,
                        body: item.body,
                    }

                    notes.push(itemToPush)

                })

                this.setState({ notes })
        })*/

        //let nameofNotes = 'notes.${this.props.uid}'
        //console.log(nameCompare)

        base.syncState(`notes/${this.props.uid}`, {
            context: this,
            state: 'notes',
            asArray: true,
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
            /*let newNoteKey = firebase.database().ref().child('notes').push().key;
            note.id = newNoteKey*/
            note.id = Date.now();
            notes.push(note)

        } else {
            const i = notes.findIndex((currentNote) => currentNote.id === note.id)
            notes[i] = note
            /*firebase.database().ref('notes/' + note.id).set({
                body: note.body,
                title: note.title,
            })
            //method to get item and add*/
        }

        this.setState({ notes })
        this.setState({ currentNote: note })

    }

    deleteNote = (note) => {

        //console.log('delete')

        const notes = [...this.state.notes]


        const i = notes.findIndex(currentNote => currentNote.id === note.id)
        notes.splice(i, 1)

        // firebase.database().ref('notes/' + note.id).remove();


        this.setState({ notes })
        this.resetCurrentNote()

    }


    resetCurrentNote = () => {
        this.setCurrentNote(this.blankNote())
    }

    render() {

        const formProps = {
            currentNote: this.state.currentNote,
            saveNote: this.saveNote,
            deleteNote: this.deleteNote,
            notes: this.state.notes
        }

        return (
            <div className='Main' style={style} >
                <Sidebar
                    resetCurrentNote={this.resetCurrentNote}
                    signOut={this.props.signOut}
                />
                <NoteList
                    notes={this.state.notes}
                />
                <Switch>

                    <Route
                        path='/notes/:id'
                        render={(navProps) => (
                            <NoteForm
                                {...formProps}
                                {...navProps}
                            />
                        )}
                    />

                    <Route
                        render={(navProps) => (
                            <NoteForm
                                {...formProps}
                                {...navProps}
                            />
                        )}
                    />

                </Switch>
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