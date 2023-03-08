import './App.css';
import './categories.styles.scss';

const App = () => {
  const categories = [
    {
      title: 'Hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      id: 1,
      linkUrl: 'hats',
    },
    {
      title: 'Jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      id: 2,
      linkUrl: 'jacket',
    },
    {
      title: 'Sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      id: 3,
      linkUrl: 'sneakers',
    },
    {
      title: 'Womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      id: 4,
      linkUrl: 'womens',
    },
    {
      title: 'Mens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      id: 5,
      linkUrl: 'mens',
    },
  ];

  return (
    < div className="categories-container" >
      {
        categories.map(({ title, imageUrl, id, linkUrl }) => (
          <div className="category-container" id={id}>
            <div className="background-image" style={{
              backgroundImage: `url(${imageUrl})`
            }} />
            <div className="category-body-container">
              <h2>{title}</h2>
              <p>Shop Now</p>
            </div>
          </div>
        ))
      }
    </div >
  );
}

export default App;