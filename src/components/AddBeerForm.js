import axios from "axios";
import {useState} from "react";
import {useNavigate} from 'react-router-dom';
import Header from "./Header";

function AddBeer() {
    const [name, setName] = useState("");
    const [tagline, setTagline] = useState("");
    const [description, setDescription] = useState("");
    const [first_brewed, setFirstBrewed] = useState("");
    const [brewers_tips, setBrewersTips] = useState("");
    const [attenuation_level, setAttenuationLevel] = useState("");
    const [contributed_by, setContributedBy] = useState("");

    const updateName = e => setName(e.target.value);
    const updateTagLine = e => setTagline(e.target.value);
    const updateDescription = e => setDescription(e.target.value);
    const updateFirstBrewed = e => setFirstBrewed(e.target.value);
    const updateBrewersTips = e => setBrewersTips(e.target.value);
    const updateAttenuationLevel = e => setAttenuationLevel(e.target.value);
    const updateContributedBy = e => setContributedBy(e.target.value);

    const navigate = useNavigate();

    const bodyObject = {
        name: name,
        tagline: tagline,
        description: description,
        first_brewed: first_brewed,
        brewers_tips: brewers_tips,
        attenuation_level: Number(attenuation_level),
        contributed_by: contributed_by
    }
    const submitForm = e => {
        e.preventDefault();
        // fetch("https://ironbnb-m3.herokuapp.com", {
        //     method: "POST",
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(bodyObject) 
        // })
        //     .then(res => res.json())
        //     .then(json => {
        //         console.log(json);
        //     })
        axios.post("https://ih-beers-api2.herokuapp.com/beers/new", bodyObject)
            .then(res => {
                console.log(res.data);
                navigate("/");
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <Header/>
            <form onSubmit={submitForm}>
                <div className="form-container">
                    <label><b>Name</b></label>
                    <input type="text" value={name} onChange={updateName}></input>
                </div>
                <div className="form-container">
                    <label><b>Tagline</b></label>
                    <input type="text" value={tagline} onChange={updateTagLine}></input>
                </div>
                <div className="form-container">
                    <label><b>Description</b></label>
                    <textarea value={description} onChange={updateDescription} rows={10} cols={20}></textarea>
                </div>
                <div className="form-container">
                    <label><b>First Brewed</b></label>
                    <input type="text" value={first_brewed} onChange={updateFirstBrewed}></input>
                </div>
                <div className="form-container">
                    <label><b>Brewer's Tips</b></label>
                    <input type="text" value={brewers_tips} onChange={updateBrewersTips}></input>
                </div>
                <div className="form-container">
                    <label><b>Attenuation Level</b></label>
                    <input type="number" value={attenuation_level} onChange={updateAttenuationLevel}></input>
                </div>
                <div className="form-container">
                    <label><b>Contributed By</b></label>
                    <input type="text" value={contributed_by} onChange={updateContributedBy}></input>
                </div>
                <div>
                    <button>ADD NEW</button>
                </div>
            </form>
        </div>
        
        
    );
}

export default AddBeer;