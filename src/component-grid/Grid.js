import React from "react";
import '/Users/caliservices/Dropbox/Niyo Software Development Bootcamp/Niyo Software Dev course/Assignment 5 - React web design/niyo-website/src/component-grid/Grid.css';

const Grid = ({ data }) => {
    if (!data || data.length <0) {
        return <div></div>;
    }
        return (        
            <div className="gridContainer">
                {data.map((item) => (
                    // eslint-disable-next-line
                <div key={item.id} className="grid-item">
                    <img src={item.image} alt={item.title} />
                    <h2>{item.title}</h2>    
                    <p>{item.description}</p>
                </div>
                ))}
                </div>
            );
        };

export default Grid;