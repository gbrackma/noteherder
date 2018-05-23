import React from 'react'
import NoteForm from './NoteForm';

import './NoteList.css'

const NoteList = () =>{
    return (
        <div class="NoteList">
            <h3>Notes</h3>
            <ul id="notes">
                <a class="active">
                    <li>
                        <div class="note">
                            <div class="note-title">
                                Kohlrabi welsh
                            </div>
                            <div class="note-body">
                                <p>
                                    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.
                                </p>
                            </div>
                        </div>
                    </li>
                </a>
            </ul>
        </div>
    )
}



export default NoteList