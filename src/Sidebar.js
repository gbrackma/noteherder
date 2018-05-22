import React from 'react'

import quill from './quill.svg'
import newIcon from './new.png'
import newHover from './new-hover.png'

const Sidebar = () =>{

    return(
        <div className='Sidebar'>
            <div className='logo' style={style.logo}>
                <img src={quill} alt="Noteherder"  style={style.logoImg}/>
            </div>

            <a href='/notes'>
                <img src={newHover} alt='New Note' />
                <img src={newIcon} alt='New Note'/>
            </a>

            <div className="SignOut">
                <button>
                    <i class="fa fa-sign-out"></i>
                </button>
            </div>

        </div>
    )

}

const style =  {
    sidebar:{
        width: '6rem',
        backgroundColor: '#f3f3f3',
        padding: '0.5rem 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

    },

    logo: {
        fontFamily: "Fauna One",
        color: '#666',
        fontSize: '3rem',
    },

    logoImg: {
        width: '3rem',
        paddingLeft: '3rem',
    },
}

export default Sidebar