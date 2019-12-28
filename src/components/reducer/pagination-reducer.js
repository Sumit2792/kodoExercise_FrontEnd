const initialState = { 
    loading: false,
    setLoading: false,
    currentPage: 1,
    setCurrentPage: 1,
    postsPerPage: 10
  };

export function paginationReducer(state = initialState, action) {
    switch (action.type) {
      case 'PAGE_SELECTED':
        return { ...state, setCurrentPage: action.payload  };
      default:
        return state
    }
  }