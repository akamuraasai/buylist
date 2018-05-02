export const findById = id => ({ type: 'FIND_BY_ID', id });

export const changeField = (field, value) => ({ type: 'CHANGE_FIELD', field, value });

export const apply = item => ({ type: 'APPLY', item });

export const addItem = () => ({ type: 'ADD' });

export const remove = id => ({ type: 'REMOVE', id });

export const toggleFilter = () => ({ type: 'TOGGLE_FILTER' });
