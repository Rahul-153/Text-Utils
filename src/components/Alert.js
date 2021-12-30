import React from 'react'

function Alert(props) {
    const caps=(word)=>{
        const low=word.toLowerCase();
        return low.charAt('0').toUpperCase()+low.slice(1);
    }
    return (
        props.alert && <div>
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{caps(props.alert.type)}</strong>: {props.alert.msg}
            </div>
        </div>
    )
}

export default Alert
