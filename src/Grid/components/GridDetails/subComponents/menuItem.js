import React from 'react';

const MenuItem = ({ toggleOverlay, id, headline }) => {

        return (
            <div className="menuItem">
                <div onClick={() => toggleOverlay(id)}>{headline}</div>
            </div>
        )
}


export default MenuItem;