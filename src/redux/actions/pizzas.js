import axios from 'axios';

export const setLoaded = val => ({
  type: 'SET_LOADED',
  payload: val
})

export const fetchPizzas = (category, sortBy) => (dispatch) => { // асинхронный action
  dispatch(setLoaded(false));
  axios.get(`/pizzas?${category !==null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`)
    .then(({ data }) => {
      dispatch(setPizzas(data));
    });
};

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
}); 

