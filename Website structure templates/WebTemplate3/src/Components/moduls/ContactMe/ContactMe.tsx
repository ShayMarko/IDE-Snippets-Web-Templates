import "./ContactMe.css";
import GitHub from '../../../Assets/Images/github-icon.png';
import LinkedIn from '../../../Assets/Images/linkedin-icon.png';
import Email from '../../../Assets/Images/email-icon.png';

function ContactMe(): JSX.Element {
    return (
        <div className="ContactMe" id="contact">
            <span className="title2"><b>Lets get in touch..</b></span><br/>
            <a href="https://github.com/ShayMarko/ShayMarko" target="_blank" rel="noreferrer"><img alt="github" src={GitHub} className="resizeImg" id="border"/></a> &nbsp;&nbsp;
            <a href="https://www.linkedin.com/in/shay-marko-0a4ba01b5/" target="_blank" rel="noreferrer"><img alt="linkedin" src={LinkedIn} className="resizeImg border"/></a> &nbsp;&nbsp;
            <a href="mailto:Smarko1997@gmail.com" target="_blank" rel="noreferrer"><img alt="email" src={Email}  className="resizeImg border"/></a> &nbsp;&nbsp;
        </div>
    );
}

export default ContactMe;




