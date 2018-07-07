import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ children, onClick}) => (
    <a href="#" onClick={(e) => {
            e.preventDefault()
            onClick()
        }}
    >
        {children}
    </a>
)

Link.PropTypes =  {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Link