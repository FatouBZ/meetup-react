
import AllMeetUp from './Components/pages/AllMeetUp';

import {BrowserRouter, Route, Routes } from 'react-router-dom';
import NewMeetUp from './Components/pages/NewMeetUp';
import Favorites from './Components/pages/Favorites';
import Layout from './Components/LayOut/layout';
function App() {
  return (

      <BrowserRouter>
       <Layout>
      <Routes>
            <Route path='/' exact element={<AllMeetUp />}/>
            <Route path='/NewMeetUp' element={<NewMeetUp/>}/>
            <Route path='/Favorite' element={<Favorites />}/>

          </Routes>
          </Layout>
      </BrowserRouter>
            
    
  );
}

export default App;
