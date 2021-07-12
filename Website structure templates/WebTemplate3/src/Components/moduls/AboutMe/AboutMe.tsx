import "./AboutMe.css";
import profile from '../../../Assets/Images/profile.png';
function AboutMe(): JSX.Element {
  return (
    <div>
      <br/><br/>
      <img src={profile} className="profile" alt="profileImg"/>
      <span className="Title"><b>Free text</b></span><br/>
      <p>text text text text text text text text<br/> 
      text text text text text text text text text text text text text <br/>
      text text text text text text text text text text text text text <br/>
      text text text text text text text text text text text text text <br/>
      text text text text text text text text text text text text text <br/>
      text text text text text text text text text text text text text <br/>
      text text text text text text text text text text text text text <br/>
      </p>
    </div>
  );
}

export default AboutMe;
