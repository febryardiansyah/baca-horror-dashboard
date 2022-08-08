import React from 'react'

const LoadingPage = ({ className, marginLeft = '250px' }) => {
    return (
        <div className={className} style={{
            marginLeft: marginLeft
        }}>
            <center>
                Loading...
            </center>
        </div>
    )
}

export default LoadingPage