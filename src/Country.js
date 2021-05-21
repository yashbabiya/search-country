import './App.css';
import {Link} from 'react-router-dom'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import {ArrowBack,CaretBack} from "react-ionicons";
const Country = (props) => {
    let styles=props.styles.page
    let theme = props.theme
    return ( 
        <div className="country">
            
            <Link style={styles} id="back" to='/'><code style={styles}  className="code"><span style={styles.spe}  className="back"><CaretBack color={styles.spe.color} height="10px" />Back</span></code></Link>
            <div className="cont" style={styles}>
                <div className="img">
                    <img src={props.location.country.flag} alt="flag"/>
                </div>
                <div className="info">
                    <h2  style={styles}>{props.location.country.name}</h2>
                    <div class="in-info">
                        <div className="left">
                            <li  style={styles}><p style={styles} className="hil">Native name :</p> {props.location.country.nativeName}</li>
                            <li  style={styles}><p style={styles} className="hil">Population :</p> {props.location.country.population}</li>
                            <li  style={styles}><p style={styles} className="hil">Region :</p> {props.location.country.region}</li>
                            <li style={styles}><p style={styles} className="hil">Sub Region :</p> {props.location.country.subregion}</li>
                            <li style={styles}><p style={styles} className="hil">Capital :</p> {props.location.country.capital}</li>
                        </div>
        
        
        
                       <div className="right">
                            <li style={styles}><p style={styles} className="hil">Top level Domain :</p> {props.location.country.topLevelDomain===null?"none":props.location.country.topLevelDomain}</li>
                            <li style={styles}><p style={styles}className="hil">Currencies :</p><div className="com"> {props.location.country.currencies.length===0? "No information" :props.location.country.currencies.map(l=><pre style={styles}>{l.name},</pre>)}</div></li>
                            <li style={styles}><p style={styles} className="hil">Languages : </p><div className="com">{props.location.country.languages.length===0? "No information" :props.location.country.languages.map(l=><p style={styles}>{l.name},</p>)}</div></li>
                       </div>
                    </div>
    
    
    
                    <li style={styles} ><p style={styles} className="hil">Border Countries:&nbsp;</p>{props.location.country.borders.length===0? "No information" :props.location.country.borders.map(l=><p style={styles.spe} className="block">{l}</p>)}</li>
                </div>
            </div>


        </div>

     );
}
 
export default Country;