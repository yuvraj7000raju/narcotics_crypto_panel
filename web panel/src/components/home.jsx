// import Navv from "./nav"
// import Firstt from "./first"
// import Report from "./report"
// import Suspect from "./suspect"
// import Setting from "./setting"
// import Footer from "./footer"
// export default function Home(){
//     return(
//         <>
//         <Navv></Navv>
//         <Firstt></Firstt>
//          <Report></Report>
//          <Suspect></Suspect>
//         <Setting></Setting>
//         <Footer></Footer>
//         </>
//     )
// }


import { useState } from 'react';

import First from "./first"
import Report from './report';
import Suspect from './suspect';
import Setting from './setting';
import Navv from './nav';
import Footer from './footer';
import TransactionInfo from './TransactionInfo';

function Home() {
  // State to track the current page
  const [currentPage, setCurrentPage] = useState('First');

  // Function to render the current page
  const renderPage = () => {
    switch (currentPage) {
      case 'First':
        return <First />;
      case 'reports':
        return <Report />;
      case 'suspects':
        return <Suspect />;
      case 'settings':
        return <Setting />;
      case 'transaction':
        return <TransactionInfo />;
      default:
        return <First />;
    }
  };

  return (
    <div>
      <Navv setCurrentPage={setCurrentPage} /> {/* Pass setCurrentPage as a prop */}
      {renderPage()} {/* Render the current page based on state */}
      <Footer /> {/* Constant Footer */}
    </div>
  );
}

export default Home;
