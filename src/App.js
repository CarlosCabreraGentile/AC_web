import React from "react";
// import 'antd/dist/antd.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";
import "./App.css";
// import { Layout } from "antd";
import Heading from "./components/Heading";
import Content from "./components/Content";
import UserInsert from "./components/users/UserInsert";

// const { Header } = Layout;
// const { Footer } = Layout;


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
            {/* <Route path="/edit/:id" element={<TaskForm />} />  */}
          </Routes>
          {/* <Footer style={{ textAlign: "center" }}>Users List</Footer> */}
        {/* </Layout> */}
      {/* </div> */}
    </GlobalProvider>
  );
}

export default App;
