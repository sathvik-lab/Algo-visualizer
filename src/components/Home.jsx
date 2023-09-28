import { useLocation } from 'react-router-dom';
import Graphs from './GraphVizualizer/Graphs.js';
import Sorts from './SortingVisualizer/Sorting.js';
import './Home.css';


function Home() {


  const location = useLocation();

  // Access the current route using location.pathname
  const currentRoute = location.pathname;

  let component;
  switch (currentRoute) {
    case '/graph':
      component = <Graphs current={currentRoute} />
      break;
    default:
      component = <Sorts current={currentRoute} />
      break;
  }



  return (
    <>
      {component}


    </>
  );
}

// Rest of your code remains the same

export default Home;

