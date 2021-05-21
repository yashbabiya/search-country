import "./App.css";
import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";
import Cn from "./Country";
import SearchIcon from "@material-ui/icons/Search";
import { SearchOutline, Search ,ChevronDown,CaretDown} from "react-ionicons";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
function Main(props) {
  const [opt, setOpt] = useState("");
  const [inp, setInp] = useState("");
  const [Country, setCountry] = useState([]);
  const options = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  useEffect(() => {}, [props.theme]);

  useEffect(() => {
    setOpt("");
    if (inp === "") {
      fetch(`https://restcountries.eu/rest/v2/all`)
        .then((res) => res.json())
        .then((data) => setCountry(data));
    } else {
      fetch(`https://restcountries.eu/rest/v2/name/${inp}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.status === 404) {
            if (inp === "") {
              fetch(`https://restcountries.eu/rest/v2/all`)
                .then((res) => res.json())
                .then((data) => setCountry(data));
            } else setCountry([{ name: "No Results" }]);
          } else setCountry(data);
        });
    }
  }, [inp]);

  useEffect(() => {
    setInp("");
    if (opt === "fil") {
      setCountry([{ name: "ok" }]);
    } else {
      fetch(`https://restcountries.eu/rest/v2/region/${opt}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.status === 404) {
            fetch(`https://restcountries.eu/rest/v2/all`)
              .then((res) => res.json())
              .then((data) => setCountry(data));
          } else setCountry(data);
        })
        .catch((err) => {
          fetch(`https://restcountries.eu/rest/v2/all`)
            .then((res) => res.json())
            .then((data) => setCountry(data));
        });
    }
  }, [opt]);

  let styles = props.styles
  
  return (
    <div className="main" style={styles.main}>
      <i class="fas fa-search"></i>
      <section>
        <div className="input" style={styles.input}>
          <Search color={styles.input.color} />
          <input
            style={styles.input}
            placeholder="Search for a country..."
            onChange={(e) => setInp(e.target.value)}
            value={inp}
            type="text"
          />
        </div>

        <div className="drop" style={styles.input}>
          <span style={styles.input} className="code">
            <p style={styles.input}
              onClick={() => {
                setOpt("fill");
              }}
            >
              Filter By Region
            </p>
            <CaretDown
              
              color={styles.input.color}
              
              height="15px"
              onClick={() => {
                let popup = document.querySelector(".popup");
                if (popup.classList.contains("hide"))
                  popup.classList.remove("hide");
                else popup.classList.add("hide");
              }}
            />
          </span>
          
          <div className="pp">
            <div className="popup hide" style={styles.input}>
              {options.map((op) => (
                <span
                  style={styles.input}
                  onClick={() => {
                    setOpt(op);
                  }}
                  key={op}
                  value={op}
                >
                  {op}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        {Country.length === 0 ? (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        ) : (
          Country.map((countr) =>
            countr.name === "No Results" ? (
              <p style={{color:styles.input.color}}>No Results</p>
            ) : (
              <Link
                to={{
                  pathname: "/country",
                  country: countr,
                  styles: styles,
                  
                }}
              >
                <div className="card" style={styles.input}>
                  <img src={countr.flag} alt="Flag" />
                  <div className="content">
                    <h3 style={styles.input}>{countr.name}</h3>
                    <li style={styles.input}>
                      <code style={styles.input}>Population :</code>{" "}
                      {countr.population}
                    </li>
                    <li style={styles.input}>
                      <code style={styles.input}>Region :</code> {countr.region}
                    </li>
                    <li style={styles.input}>
                      <code style={styles.input}>Capital :</code>{" "}
                      {countr.capital}
                    </li>
                  </div>
                </div>
              </Link>
            )
          )
        )}
      </div>
    </div>
  );
}

export default Main;
