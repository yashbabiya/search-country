import "./App.css";
import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { Router, Route, Switch, Link } from "react-router-dom";
import Cn from "./Country";
import Main from "./Main";
import Header from "./Header";
function App() {
  // let styles={
  // }
  let body = document.querySelector("body")
  const [theme,setTheme] = useState(1)
  let styles = {
    body:{
      color: theme ? "hsl(0, 0%, 98%)" :"hsl(207, 26%, 17%)"
    },
    backgroundColor: theme ? "hsl(0, 0%, 98%)" :"hsl(207, 26%, 17%)",
    main: {
      backgroundColor: theme ? "hsl(0, 0%, 98%)" :"hsl(207, 26%, 17%)",
    },
    input: {
      backgroundColor:theme ? "white" : "hsl(209, 23%, 22%)",
      color:theme ? "#000" : "#fff",
    },
    header: {
      backgroundColor:theme ? "white" : "hsl(209, 23%, 22%)",
      color:theme ? "#000" : "#fff",
    },
    page:{
        backgroundColor:theme ? "hsl(0, 0%, 98%)" :"hsl(207, 26%, 17%)",
        color:theme ? "#000" :"white",
        spe:{
            backgroundColor:theme ? "white" :"hsl(209, 23%, 22%)",
            color:theme ? "#000" :'#fff'
        }
    }
  };
  body.style.backgroundColor=styles.body.color

  function ui() {
    setTheme((theme+1)%2)
  }

  return (
    <div className="App" style={styles}>
      <Header ui={ui} styles={styles} theme={theme}/>
      <Switch>
        <Route exact path="/" render={() => <Main styles={styles} theme={theme}/>} />
        <Route path="/country" render={(props)=><Cn {...props} styles={styles} theme={theme}/>} />
      </Switch>
    </div>
  );
}

export default App;
