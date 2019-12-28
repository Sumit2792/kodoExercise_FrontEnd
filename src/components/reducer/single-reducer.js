import MockData from '../../mock_data.json';

export function initialReducer(state = MockData, action) {
    switch (action.type) {
      case 'REQUEST':
        return {};
      case 'SUCCESS':
        return {};
      case 'FAILURE':
        return {};
      default:
        return state
    }
  }