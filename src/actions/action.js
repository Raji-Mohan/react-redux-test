export const personSelect = (person) => {
    return {
        type:'PERSON_SELECT',
        person:person
    }
}

export const personSave = (person) => {
    return{
        type:'PERSON_SAVE',
        person:person
    }
}

export const personDelete = (id) => {
    return{
        type:'PERSON_DELETE',
        id: id
    }
}

export const personCancel = () => {
    return{
        type:'PERSON_CANCEL'
    }
}

export const personAdd = () => {
    return{
        type:'PERSON_ADD'
    }
}