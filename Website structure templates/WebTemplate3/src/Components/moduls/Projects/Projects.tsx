
import "./Projects.css";

function Projects(): JSX.Element {
        const projects = [
        {"name":"yyyy", "link":"#", "description":"xxxx"},
        {"name":"yyyy", "link":"#", "description":"xxxx"}, 
        {"name":"yyyy", "link":"#", "description":"xxxx"}];
    return (
        <div>
            <br/><br/><br/><span className="Title"><b>Free text</b></span><br/>
			{/* {projects.map(p => <span className="box">{p.id}. &nbsp; <a href={p.link} target="_blank">{p.name}</a> &nbsp;&nbsp;&nbsp;</span>)} */}
            {projects.map(p => 
            <span className="box">
                <span id="inboxTitle"><b>{p.name}</b><br/></span>
                <span id="displayTxt">{p.description}<br/><br/></span>
                <span id="viewProject">View project <a href={p.link} target="_blank" rel="noreferrer">here!</a></span>
            </span>)}
        </div>
    );
}

export default Projects;

