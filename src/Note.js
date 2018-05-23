import React from 'react'


const Note = (props) => {

    return (
        <li>
            <div class="note">
                <div class="note-title">
                    {props.note.title}
                </div>
                <div class="note-body">
                    <p>
                        {props.note.body}
                    </p>
                </div>
            </div>
        </li>
    )


}

export default Note