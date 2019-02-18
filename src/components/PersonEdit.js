import React,{Component} from 'react'

class PersonEdit extends Component{
constructor(props){
    super(props)
    this.state = this.props.person
}

nameChange=(e) => {
    const newState = {...this.state}
    newState[e.target.name] = e.target.value
    this.setState(newState)
}

render(){
    return(
        <div>
        {this.props.isError ? <h3> {this.props.errorMsg} </h3> : null}
        <input type='text' name='firstname' value={this.state.firstname} onChange={this.nameChange} />
        <input type='text' name='lastname' value={this.state.lastname}  onChange={this.nameChange} />
        <br />
        <button onClick={() => this.props.onSave(this.state)}>Save</button>
        <button onClick={() => this.props.onDelete(this.state.id)}>Delete</button>
        <button onClick={() => this.props.onCancel()}>Cancel</button>
        </div>
     )
}
}
export default PersonEdit