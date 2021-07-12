import AboutMe from "../AboutMe/AboutMe";
import ContactMe from "../ContactMe/ContactMe";
import Projects from "../Projects/Projects";
import "./Main.css";


function Main(): JSX.Element {
    return (
        <div className="Main">
            <AboutMe/>
            <Projects/>
            <ContactMe/>
        </div>
    );
}

export default Main;
