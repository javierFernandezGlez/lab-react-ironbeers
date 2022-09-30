import {Link} from "react-router-dom";

function Home() {
    return (
        <div>
            <Link to="/beers">
                <img src={require("../assets/beers.png")} alt="allBeers"></img>
                <h1>All Beers</h1>
            </Link>
            <Link to="/random-beer">
                <img src={require("../assets/random-beer.png")} alt="allBeers"></img>
                <h1>Random Beer</h1>
            </Link>
            <Link to="/new-beer">
                <img src={require("../assets/new-beer.png")} alt="allBeers"></img>
                <h1>New Beer</h1>
            </Link>
        </div>
    );
}

export default Home;