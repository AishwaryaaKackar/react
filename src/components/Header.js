import logo from "../logo.png";


const Title = () => (
    <a href="/">
      <img className="logo" src={logo} alt="logo" />
    </a>
  );


const Header =()=>{
    return(
        <div className="header">
            <div>
                <Title/>
            </div>
            <div className="nav-items">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Cart</li>
                    </ul>
            </div>
    </div>
    )
};

export default Header;