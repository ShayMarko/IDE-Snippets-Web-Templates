import "./Footer.css";

function Footer(): JSX.Element {
    return (
        <div className="Footer">
          <button><a href="#">Back to top</a></button>
          <br/><a href="mailto:Smarko1997@gmail.com"><span id="signature">Shay Marko</span></a> &#169; Copyright 2021 All Rights Reserved.<br/><br/>
        </div>
    );
}

export default Footer;
