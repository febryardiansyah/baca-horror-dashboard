import React from 'react'

const PrimaryButton = ({ icon, text, className }) => {
    return (
        <div className={className}>
            <button className="btn btn-dark">
                <i className={`bi ${icon} me-2`}></i>
                {text}
            </button>
        </div>
    )
}

export default PrimaryButton