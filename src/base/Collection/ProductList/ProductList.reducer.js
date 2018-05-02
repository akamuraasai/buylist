import { T, cond, propEq } from 'ramda';

const lastId = items => Math.max(...items.map(({ id }) => id))

const applyChanges = state => ({ item }) =>
 (item.id === undefined)
   ? { ...state, list: [...state.list, { ...item, id: lastId(state.list) + 1 }] }
   : { ...state, list: state.list.map(i => i.id === item.id ? item : i) };

const reducer = state => cond([
  [propEq('type', 'APPLY'), applyChanges(state)],
  [propEq('type', 'FIND_BY_ID'), ({ id }) => ({ ...state, item: state.list.find(i => i.id === id) })],
  [propEq('type', 'CHANGE_FIELD'), ({ field, value }) => ({ ...state, item: { ...state.item, [field]: value } })],
  [propEq('type', 'ADD'), () => ({ ...state, item: {} })],
  [propEq('type', 'REMOVE'), ({ id }) => ({ ...state, list: state.list.filter(i => i.id !== id) })],
  [propEq('type', 'TOGGLE_FILTER'), () => ({ ...state, filter: !state.filter })],
  [T, () => state],
]);

const list = [
  { id: 1, unitType: 'kg', name: 'Tomate', price: 3.99, units: 1, completed: false },
  { id: 2, unitType: 'kg', name: 'Cebola', price: 1.99, units: 2.3, completed: false },
  { id: 3, unitType: 'kg', name: 'Alho', price: 4.99, units: 0.4, completed: true },
  { id: 4, unitType: 'un', name: 'Leite', price: 2.49, units: 12, completed: false },
  { id: 5, unitType: 'un', name: 'Bolacha', price: 1.29, units: 5, completed: false },
  { id: 6, unitType: 'kg', name: 'Carne', price: 23.99, units: 0.9, completed: false },
  { id: 7, unitType: 'kg', name: 'Frango', price: 7.99, units: 2.3, completed: true },
  { id: 8, unitType: 'un', name: 'Margarina', price: 4.49, units: 1, completed: false },
];

export default (state = { list, item: {}, filter: false }, action) => reducer(state)(action);
