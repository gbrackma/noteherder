import React, { Component } from 'react'

import './NoteForm.css'

class NoteForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      note: this.blankNote(),
    }
  }

  componentWillReceiveProps = (newProps) => {
    // Get the ID from the URL
    const newId = newProps.match.params.id

    // Find the note with that ID
    //console.log(newProps.notes)
    const i = newProps.notes.findIndex(currentNote => currentNote.id.toString() === newId)
    const note = newProps.notes[i] || this.blankNote()

    //console.log(i)

    // Update state with that note, if found
    if (note) {
      this.setState({ note })
    }
  }

  blankNote = () => {
    return {
      id: null,
      title: '',
      body: '',
      updatedAt: '',
    }
  }

  handleChanges = (ev) => {
    const note = { ...this.state.note }
    note[ev.target.name] = ev.target.value

    var today = new Date()
    note.updatedAt = today.getMonth() + '/' + (today.getDate()) + '/' + today.getFullYear() + ' at ' + today.getHours() + ':' + today.getUTCMinutes()
    console.log(note)
    this.setState(
      { note },
      () => (this.props.saveNote(note))
    )
  }

  render() {
    const { deleteNote } = this.props
    return (
      <div className="NoteForm">
        <div className="form-actions">
          <button
            type="button"
            onClick={() => deleteNote(this.state.note)}
          >
            <i className="far fa-trash-alt"></i>
          </button>
        </div>
        <form>
          <p>
            <input
              type="text"
              name="title"
              placeholder="Title your note"
              value={this.state.note.title}
              onChange={this.handleChanges}
            />
          </p>

          <h3>Time last updated: {this.state.note.updatedAt}</h3>

          <textarea
            name="body"
            value={this.state.note.body}
            onChange={this.handleChanges}
          ></textarea>
        </form>
      </div>
    )
  }
}

export default NoteForm