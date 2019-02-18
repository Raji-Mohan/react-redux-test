import React,{Component} from 'react'

class PersonList extends Component{

showPerson = () => {
    return( this.props.people.map(person => {
            return <li key={person.id} onClick={() => {this.props.onSelect(person)}}>{person.firstname} {person.lastname} </li>
        }))
}

render(){
    return(
        <div>
         {this.showPerson()}
         <button onClick={() => this.props.onAdd()}>Add Person</button>
        </div>
    )
}
}
export default PersonList