import React from 'react'

import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

class Main extends React.Component {

    constructor() {
        super()
        this.state = {
            notes: [
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
        }
    }
    render() {
        return (
            <div className='Main' style={style} >
                <Sidebar />
                <NoteList notes={this.state.notes}/>
                <NoteForm />
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