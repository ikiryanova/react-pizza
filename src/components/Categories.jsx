import React from 'react';

// class Categories extends React.Component {
  
//   state = {
//     activeItem: 1,
//   };

//   onSelectItem = index => {
//     this.setState({
//       activeItem: index,    // обновляет состояние
//     }); 
//   }

//   render() {
//     const { items } = this.props;
//     return (
//       <div>
//         <div className="categories">
//           <ul>
//             <li className="active">Все</li>
//             {
//               items.map((item, index) => (
//                 <li className={this.state.activeItem === index ? 'active' : ''} onClick={() => this.onSelectItem(index)} key={`${item}__${index}`}>{item}</li>
//               ))
//             }
//           </ul>
//         </div>
//       </div>
//     )
//   };
// }

function Categories({ items }) {
  const [activeItem, setActiveItem] = React.useState(0);

  const onSelectItem = (index) => {
    setActiveItem(index);
  }

  return (
    <div className="categories">
      <ul>
        {items &&
          items.map((item, index) => (
            <li 
              className={activeItem === index ? 'active' : ''}
              onClick={() => onSelectItem(index)} 
              key={`${item}__${index}`}
            >
              {item}
            </li>
          ))
        }
      </ul>
    </div> 

  );
}

export default Categories;
