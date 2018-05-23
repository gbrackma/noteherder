import React from 'react'
import NoteForm from './NoteForm';

const NoteList = () =>{
    return (
        <div className="NoteList" style={styles.NoteListUlNotesLi}>
            <h3 style={styles.NoteListH3}>Notes </h3>
            <ul id="notes" style={styles.NoteListUlNotes}>
                <a className="active" style={styles.NoteListUlNotesA}>
                    <li style={styles.NoteListUlNotesLi}>
                        <div className="note" style={styles.NoteListUlNotesLiNote}>
                            <div className="noteTitle" style={styles.NoteListUlNotesLiNoteTitle}>
                                Kohlrabi welsh
                            </div>
                            <div className="noteBody" style={styles.NoteListUlNotesLiNoteBody}>
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

const styles = {
    NoteList: {
        borderLeft: '1px solid #eee',
        borderRight: '1px solid #eee',
        width: '30rem',
    },
  /*@media(max - width: 800px) {
        .NoteList {
            width: 20rem;
        }
    }*/
    NoteListH3: {
        color: '#999',
        textTransform: 'uppercase',
        fontSize: '2rem',
        fontFamily: 'Oxygen',
        fontWeight: '300',
        letterSpacing: '3px',
        margin: '20px 2rem',
    },

    NoteListUlNotes: {
        borderTop: '1px solid #eee',
        overflowY: 'scroll',
        height: 'calc(100vh - 72px)',
        listStyle: 'none',
        marginTop: '1em',
        padding: '0',
        width: '100 %',
        color: '#999',
    },

    NoteListUlNotesA: {
        color: 'inherit',
        textDecoration: 'none',
    },

    NoteListUlNotesLi: {
        height: '100px',
        fontSize: '90 %',
        cursor: 'pointer',
        overflow: 'hidden',
    },

    NoteListUlNotesLiNote: {
        borderTop: '1px solid #eee',
        margin: '0 2rem',
        padding: '1rem 4px',
    },

    NoteListUlNotesAFirstOfTypeLiNote: {
        borderTop: 'none',
    },

    NoteListUlNotesLiHover: {
        backgroundColor: '#008bf8',
        color: '#fff!important',
        textDecoration: 'none !important',
    },

    NoteListUlNotesLiHoverNote: {
        borderColor: 'transparent',
    },

    NoteListUlNotesLiNoteTitle: {
        color: '#4a4a4a',
        fontFamily: 'Fauna One',
        fontSize: '120 %',
        fontWeight: '400',
        whiteSpace: 'nowrap',
        overflowX: 'hidden',
        OTextOverflow: 'ellipsis',
        textOverflow: 'ellipsis',
    },

    NoteListUlNotesLiNoteBody: {
        height: '54px',
        overflow: 'hidden',
        marginTop: '.5rem',
        fontSize: '1em!important',
        margin: '0!important',
        padding: '0!important',
        color: '#999!important',
        background: 'none',
        border: 'none',
    },
}

export default NoteList