import React from 'react'

const TitleComponent = (props) => {
    return (
        <div style={{
            width: '100%',
            backgroundColor: '#111',
            padding: '8px'
        }}>
            <h2 className='text-white'><b>{props.title}</b></h2>
        </div>
    )
}

export default TitleComponent