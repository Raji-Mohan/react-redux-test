import appState from '../appState'

const reducer = (state=appState, action) => {
    switch(action.type){
        case 'PERSON_SELECT':  return personSelect(state, action)
        case 'PERSON_SAVE': return personSave(state, action)
        case 'PERSON_DELETE': return personDelete(state, action)
        case 'PERSON_CANCEL': return personCancel(state, action)
        case 'PERSON_ADD': return personAdd(state,action)
        default: return state
    }

}

const personSelect = (state,action) => {
    const newState = JSON.parse(JSON.stringify(state))
    newState.view = 'EDIT'
    newState.selectedPerson = action.person
    return newState
}

const personSave = (state,action) => {

    const newState = JSON.parse(JSON.stringify(state))
    if(!isValidPerson(action.person)){
        newState.isError = true
        newState.errorMsg = 'First and LastName should not be empty'
        return newState
    }
    if(action.person.id){
        newState.people = newState.people.map(p => {
            return p.id === action.person.id ? action.person : p
        })
        newState.selectedPerson = undefined
        newState.view = 'LIST'
        return newState
    } else {
        const nextId = newState.people.map(p => p.id).reduce((acc, val) => acc < val ? acc=val:val,0) +1
        newState.people.push({id:nextId,firstname:action.person.firstname,lastname:action.person.lastname})
        newState.view ='LIST'
        newState.selectedPerson = undefined
        return newState
    }
}

const isValidPerson =(person) => {
    return person.firstname.length > 0 && person.lastname.length > 0
}

const personDelete = (state, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    newState.people = newState.people.filter( p  => p.id !== action.id)
    newState.selectedPerson = undefined
    newState.view ='LIST'
    return newState
}

const personCancel = (state,action) => {
    const newState = JSON.parse(JSON.stringify(state))
    newState.view ='LIST'
    newState.selectedPerson = undefined
    return newState
}

const personAdd = (state, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    newState.view = 'EDIT'
    newState.selectedPerson = {firstname:"",lastname:""}
    return newState
}

export default reducer