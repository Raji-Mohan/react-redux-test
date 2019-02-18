import React, {Component} from 'react'
import PersonList from '../containers/PersonList'
import PersonEdit from '../containers/PersonEdit'

class App extends Component{

currentView = () => {
    return this.props.view === 'LIST' ? <PersonList /> : <PersonEdit />
}

render(){
    return(
        <div>{this.currentView()}</div>
    )
}
}
export default App