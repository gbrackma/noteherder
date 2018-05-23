import React from 'react'

import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

class Main extends React.Component {

    constructor() {
        super()
        this.state = {
            notes: [],
            currentNote: this.blankNote(),
        }
    }

    setCurrentNote = (note) => {
        this.setState({currentNote: note})    
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
            note.id = Date.now()
            notes.push(note)
        } else {

            const i = notes.findIndex(currentNote => currentNote.id === note.id)
            notes[i] = note
        }

        this.setState({ notes })
        this.setState({ currentNote: note })

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