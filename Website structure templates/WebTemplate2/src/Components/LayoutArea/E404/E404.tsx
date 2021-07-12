import "./E404.css";

function E404(): JSX.Element {
    return (
        <div className="E404">
            <b><h1 id="title">404</h1></b><br/>
            <p id="fix">
            Server error! either you broke something or something went wrong with the server. <br/>
            If you are the the developer of this website, please check the error-log. <br/>
            If you are just a guest here & you expected to see some magnificent error page - <br/>
            I'm sorry to let you down buddy..
            <br/>Here, let me help you: <br/>
            <button id="goBackBtn"><a href="/home">HEAD BACK TO SAFE PLACE</a></button>
            </p>
        </div>
    );
}

export default E404;
