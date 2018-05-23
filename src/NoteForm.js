import React from 'react'

const NoteForm = () =>{
    return (
        <div className="NoteForm" style={styles.NoteForm}>
          <div className="form-actions" style={styles.NoteFormFormActions}>
            <button type="button" style={styles.NoteFormButton}>
              <i className="fa fa-trash-o" style={styles.NoteFormButtonIFa}/>
            </button>
          </div>
          <form style={styles.NoteFormForm}>
            <p>
              <input
                type="text"
                name="title"
                placeholder="Title your note"
                style={styles.NoteFormInputTitle}/>
            </p>
            
            <textarea name="body" style={styles.NoteFormTextArea}></textarea>
          </form>
        </div>
    )
}

const styles = {

    NoteForm: {
        msFlexPositive: '1',
        flexGrow: '1',
        padding: '0 3rem',
    },
    NoteFormFormActions: {
        paddingTop: '1rem',
        marginLeft: '-2rem',
        display: '-ms-flexbox',
        msFlexLinePack: 'center',
        alignContent: 'center',
    },
    NoteFormButton: {
        border: 'none',
        background: 'none',
        padding: '0',
    },
    
    //not used
    NoteFormButtonSubmit: {
        backgroundColor: '#008bf8',
        borderRadius: '4px',
        color: '#fff',
        fontSize: '1.4rem',
        padding: '1rem',
    },
    NoteFormButtonIFa: {
        color: '#999',
        fontSize: '2rem',
        margin: '0',
    },
    NoteFormForm: {
        margin: '0 auto',
        maxWidth: '80rem',
    },
    NoteFormInputTitle: {
        border: 'none',
        fontSize: '200%',
        fontFamily: '"Fauna One"',
        color: '#008bf8',
        fontWeight: '400',
        width: '100%',
        outline: 'none',
    },
    NoteFormTextArea: {
        borderColor: '#eee',
        width: '100%',
        height: 'calc(100vh - 140px)',
        fontSize: '1.3em',
    },
      

}


export default NoteForm