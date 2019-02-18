import {connect} from 'react-redux'

import PersonList from '../components/PersonList'
import {personSelect, personAdd } from '../actions/action'

const mapStateToProps =(state) => {
    return {
        people:state.people
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onSelect: (person) => dispatch(personSelect(person)),
        onAdd:() => dispatch(personAdd())
    }
}

export default connect(mapStateToProps,mapDispatchToProps )(PersonList)