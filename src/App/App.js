import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Destination from '../page/Destination/Destination';
import Search from '../page/Search/Search';
import CollectionHover from '../page/CollectionHover/CollectionHover';
import DashBoard from '../page/DashBoard/DashBoard';
import Collection from '../page/Collection/Collection';
import FilterCard from '../page/FilterCard/FilterCard';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path='/Destination'
            element={
              <Destination />
            }
          >
          </Route>
          <Route
            path='/DashBoard'
            element={
              <DashBoard />
            }
          >
          </Route>
          <Route
            path='/FilterCard'
            element={
              <FilterCard />
            }
          >
          </Route>
          <Route
            path='/Collection'
            element={
              <Collection />
            }
          >
          </Route>
          <Route
            path='/Search'
            element={
              <Search />
            }
          >
          </Route>
          <Route
            path='/CollectionHover'
            element={
              <CollectionHover />
            }
          >
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
