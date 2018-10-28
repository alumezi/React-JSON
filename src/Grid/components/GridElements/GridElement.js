import React from 'react';
import './GridElement.css';


const GridElement = (props) => {
     
        const { id, data, openOverlay } = props;
        const { type, value } = data.Content;
        
        return (
            <div className='container' id={id}>
                <img src={value.background} alt=""/>
                <div className="centered">
                    <h1 className="title" >{value.title}</h1>
                    { type === 'ImageBox' ? 
                        <div className="read">
                            <p>{value.teaser}</p>
                            <p onClick={() => openOverlay(id)} className="read-more" >{value.link}</p>
                        </div> 
                        : 
                        <a href={value.url} target="_blank" rel="noopener noreferrer" className="button">{value.link}</a> 
                    }
                </div>
            </div>
        )
    }

    

export default GridElement;
