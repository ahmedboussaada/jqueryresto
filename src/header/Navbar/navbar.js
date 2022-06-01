import "./navbar.css"
import Logo from "../../resto-module/logo/logo"
function Navbar (){
    return ( 
<div className="navbar item11">
  <a  href="#" className="item111"><Logo/></a>
        <div className="item112">
      
      <a  href="#" className="navbar_items">HOME</a>
      <a  href="#" className="navbar_items">LOCATION</a>   
      <a  href="#" className="navbar_items">ABOUT</a>  
      <a  href="#" className="navbar_items">BLOG</a>
     </div>
      <div className="item113">
      <a  href="#" className="signin">Sign In </a>

<button className="button-85 item1131" role="button">Sign Up</button>
</div>

</div>    );
}

export default Navbar 