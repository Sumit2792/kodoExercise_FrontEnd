const paginateAction = (number) => {
    return {
        type: 'PAGE_SELECTED',
        payload:  number 
    }
}

export default paginateAction;