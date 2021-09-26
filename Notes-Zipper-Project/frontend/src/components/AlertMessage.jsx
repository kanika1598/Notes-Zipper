import React from 'react'
import { Alert } from 'react-bootstrap'

function AlertMessage(props) {
    return (
        <Alert variant={props.variant}>
            {props.children}
        </Alert>
    )
}

export default AlertMessage