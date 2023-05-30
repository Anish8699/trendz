import './categories.style.scss';
import Directory from './components/Directory/Directory';
const App = () => {

  const categories = [
    {
      id: 1,
      title: 'Hats'
    },
    {
      id: 2,
      title: 'Jackets'
    },
    {
      id: 3,
      title: 'Sneakers'
    },
    {
      id: 4,
      title: "Men's"
    },
    {
      id: 5,
      title: "Women's"
    },
    {
      id: 6,
      title: "Kids"
    }
  ]



  return (
    <Directory categories={categories} />
  );
}

export default App;
