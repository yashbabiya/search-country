import "./App.css";
import { MoonOutline, Moon } from "react-ionicons";

const Header = (props) => {
  const styles = props.styles;
  return (
    <div className="header" style={styles.header}>
      <h1 style={{color:styles.header.color}}>Where in the world ?</h1>
      <code className="code" style={{color:styles.header.color}} onClick={props.ui}>
        {!props.theme? <Moon color={styles.header.color} />:<MoonOutline color={styles.header.color} />}
        Dark Mode{" "}
      </code>
    </div>
  );
};

export default Header;
