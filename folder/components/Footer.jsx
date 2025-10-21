
export default function footer() {
      const inpStyle = {
            width: '100%',
            padding: '12px',
            margin: '8px 0',
            display: 'inline-block',
            border: '1px solid #ccc',
            borderRadius:'4px',
            boxSizing:'border-box' ,
      }

      return (
       <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h4><img src='./src/assets/Icon.png'>Nexcent</h4>
                    <p>Copyright © 2020 Nexcent ltd.<br>All rights reserved</p>
                </div>
                <div class="footer-section">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Testimonials</a></li>
                    </ul>
                    <h4>Support</h4>
                    <ul>
                        <li><a href="#">Help center</a></li>
                        <li><a href="#">Terms of service</a></li>
                        <li><a href="#">Legal</a></li>
                        <li><a href="#">Privacy policy</a></li>
                        <li><a href="#">Status</a></li>
                    </ul>
                    <h4>Stay up to date</h4>
                    
                    <label for="text">Subscribe to our newsletter
                       <input style={inpStyle} type="text" id="item" placeholder="What do you need to do?"></input>
                    </label>
                </div>
                
                <div class="footer-section">
                    
                </div>
            </div>
            <div class="footer-bottom">
                <p></p>
            </div>
        </div>
    </footer>     
      );
}