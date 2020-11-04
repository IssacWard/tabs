import React, { useState } from 'react';

const Tabs = (props) => {
    const {name,isSelected, toggleTab, idx} = props;
    return (
        <button onClick={() => toggleTab (idx)} style={isSelected ? {backgroundColor:"red"} : {backgroundColor:"White"}}>{name}</button>
    );

};

export default Tabs;