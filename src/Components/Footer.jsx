const Footer = () => {
    
  
    return (
      <div className="footer">
        <div className="trademarkDiv">
        © 2023 Valve Corporation. All rights reserved. All trademarks are property of their respective owners in the US and other countries.
        VAT included in all prices where applicable.
        </div>
        <div className="footerdiv1">
          <ul className="footerList">
            <li><button className="footerButton">About Valve</button></li>
            <li><button className="footerButton">Jobs</button></li>
            <li><button className="footerButton">Steamworks</button></li>
            <li><button className="footerButton">Steam Distribution</button></li>
            <li><button className="footerButton">Support</button></li>
          </ul> 
        </div>
        <div className="footerdiv2">
          <ul className="footerList">
            <li><button className="footerButton">Privacy Policy</button></li>
            <li><button className="footerButton">Legal</button></li>
            <li><button className="footerButton">Steam Suscriber Agreement</button></li>
            <li><button className="footerButton">Refunds</button></li>
            <li><button className="footerButton">Cookies</button></li>
          </ul>
        </div>
      </div>
      
    )
    
  };
  
  export default Footer;