import React from 'react'

const PrimaryButton = ({ icon, text, className, onClick }) => {
    return (
        <div className={className}>
            <button className="btn btn-dark gap-2" onClick={(e) => onClick(e)}>
                {
                    icon ? <i className={`bi ${icon} me-2`}></i> : <></>
                }
                {text}
            </button>
        </div>
    )
}

export default PrimaryButton