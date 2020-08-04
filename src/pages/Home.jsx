import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Categories, SortPopup, PizzaBlock } from '../components';

import { setCategory } from '../redux/actions/filters';

const categoryNames = ['Все', 'Мясные', 'Вегетариантские', 'Гриль', 'Острые', 'Закрытые'];
const sortNames = [
  { name: 'популярности', type: 'popular' },
  { name: 'цене', type: 'price' },
  { name: 'алфавиту', type: 'alhphabet' }
];

function Home() {
  const dispatch = useDispatch();

  const items = useSelector(({ pizzas }) => pizzas.items); 

  const onSelectCategoty = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItem={onSelectCategoty}
          items={categoryNames}
        />
        <SortPopup items={sortNames} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
          items && items.map(obj => <PizzaBlock key={obj.id} {...obj} />)
        }
      </div>
    </div> 
  );
}

export default Home
