import React from 'react';
import "./Person.css";

const Person = (props) => {
    /*const rand = Math.random();
    if (rand > 0.8) {
        throw new Error("Threw exception!!");
    }*/
    return (
        /*<ErrorBoundary>*/
            <div className={"Person"}>
                <p onDoubleClick={props.click}>
                    Name: {props.name} <br/>Age: {props.age} <br/> Gender: {props.gender}<br/>{props.children}
                    <input type="text" onChange={props.changed} value={props.name}/>
                </p>
            </div>
        /*</ErrorBoundary>*/
    );
};

export default Person;