import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";
import "./App.scss";
import Heading from "./components/Heading";
import Content from "./components/Content";
import UserInsert from "./components/users/UserInsert";

function App() {
  return (
    <GlobalProvider>
      {/* <div className="App"> */}
        {/* <Layout> */}
          <Heading />
          {/* <Header>Header</Header> */}
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/add" element={<UserInsert />} />
            <Route path="/add/:id" element={<UserInsert />} /> 
          </Routes>
          {/* <Footer style={{ textAlign: "center" }}>Users List</Footer> */}
        {/* </Layout> */}
      {/* </div> */}
    </GlobalProvider>
  );
}

export default App;
