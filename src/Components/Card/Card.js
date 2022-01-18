import React from 'react';

const Card=(props,index)=>{
    const item=props.item;
    return (
        <>
            <div id="card">
                <div id="imageContainer">
                <div id="profileImage"><img src={item.image} alt="Profile Image"/></div>
                </div>
                <div id="detailsContainer">
                    <div data-testid="cardname" id="cardname">Name : {item.name}</div><br/>
                    <div data-testid="cardemail" id="cardemail">Email : {item.email}</div><br/>
                    <div data-testid="contactnumber" id="contactnumber">Contact number : {item.contactno}</div><br/>
                </div>
                <button id="delete" data-testid="delete" onClick={() => props.removeItem(index)}>Delete</button>
            </div>
        </>
    );
}
export default Card;