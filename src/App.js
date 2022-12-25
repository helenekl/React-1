import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Navigation from './components/sitebar';
import Content from './components/content';

function App () {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/' element={<Content />} >
            <Route path=":id" element={<Content />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;




// import React from 'react';
// import { Routes, Route, BrowserRouter } from 'react-router-dom';

// import Sitebar from './Components/Sitebar/index';
// import Page from './Components/Page/index';
// import Content from './Components/Content/index';
// import Header from './Components/Content/Header/index';

// import './App.css';

// function App () {
//   return (
//      <div className='App'>
//         <BrowserRouter>
//           <Sitebar />
//           <Page> 
//             <Routes>
//              <Route path='/' element={<Content />} >
//               {/* <Route path=":id" element={<CardInfo />} /> */}
//              </Route>
//              <Route path='/header' element={< Header/>}></Route>
//              {/* <Route path='/about' element={< About />} />
//              <Route path='*' element={<NotFoundPage />} /> */}
//             </Routes>
//           </Page>
//         </BrowserRouter> 
//      </div>
//   );
// }

// export default App;
