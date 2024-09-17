import React from "react";
import Header from "./Component/Header";

import MainPage from "./Component/MainPage";
import Footer from "./Component/Footer";



function App() {
  // const [currentPage, setCurrentPage] = useState("home");

  // // Update the current page when a navigation item is clicked
  // const handlePageChange = (page) => {
  //   setCurrentPage(page);
  // };
  return (
    <>
 
      <Header  />

      <MainPage />

      <Footer />
    </>
  );
}

export default App;
