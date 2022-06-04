import React from "react";

class Pokemon extends React.Component {
    render (){
        const { poke: {name, type, averageWeight:
             { value, measurementUnit}, image }} = this.props
        return (
            <article>
                <h4>{name}</h4>
                <h4>{type}</h4>
                <h4>{`Average weight: ${value} ${measurementUnit}`}</h4>
                <img src={image} alt={`pokemon ${name}`}/>
            </article>
        )
    }
}
export default Pokemon