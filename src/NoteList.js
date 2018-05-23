import React from 'react'
import Note from './Note'

import './NoteList.css'

const NoteList = () =>{
    const notes = [
        {
            id: 1,
            title: 'why i <3 js',
            body: 'bc i like to code',
        },
        {
            id: 2,
            title: 'hello',
            body: 'this is hello text',
        },
        {
            id: 3,
            title: 'notenotenote',
            body: 'body body body',
        },

    ]
    return (
        <div className="NoteList">
            <h3>Notes</h3>
            <ul id="notes">
                <a className="active">
                    {notes.map(currentItem => <Note key={currentItem.id} note={currentItem}/>)}
                </a>
            </ul>
        </div>
    )
}



export default NoteList