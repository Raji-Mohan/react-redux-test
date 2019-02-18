import {connect} from 'react-redux'
import PersonEdit from '../components/PersonEdit'
import {personSave, personDelete, personCancel} from '../actions/action'

const mapStateToProps = (state) => {
    return{
        person: state.selectedPerson,
        isError : state.isError,
        errorMsg : state.errorMsg
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onSave : (person) => dispatch(personSave(person)),
        onDelete : (id) => dispatch(personDelete(id)),
        onCancel : () => dispatch(personCancel())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonEdit)