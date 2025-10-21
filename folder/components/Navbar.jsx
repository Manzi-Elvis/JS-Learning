// to import nexcent.css from components folder

import Button from './Button';
function Navbar() {
    const navStyle ={
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
    };
    const navLinks = {
        justifyContent: 'space-between',
        // padding: '20px',
        display: 'flex',
        textDecoration : 'none',
        color: '#4a5568',
        fontWeight : '500'
    }
    const navLink = {
        textDecoration: 'none',
        inlineStyle: 'none'
    }
  return (
      <nav style={navStyle}>
            <div className="logo">
                <a className='logo' href="#"><img src='./src/assets/icon.png'/>Nexcent</a>
            </div>
            <ul style={navLinks}>
                  <li><a style={navLink} href="#home">Home</a></li>
                  <li><a style={navLink} href="#service">Service</a></li>
                  <li><a style={navLink} href="#feature">Feature</a></li>
                  <li><a style={navLink} href="#product">Product</a></li>
                  <li><a style={navLink} href="#testimmonial">Testimonial</a></li>
                  <li><a style={navLink} href="#faq">FAQ</a></li>
            </ul>
            <div className="auth-buttons">
                <a style={navLink} href="#">Login</a>
                <a href="#" ><Button name = {"SignUp"} /></a>
            </div>
        </nav>
  );
}
export default Navbar;