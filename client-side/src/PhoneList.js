import { useState, useEffect, } from 'react'
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

function PhoneListPage() {

    const [ phones, setPhones ] = useState([]);

    const getPhones = () => {
        axios
        .get(`${API_URL}/phones`)
        .then((response) => setPhones(response.data))
        .catch((error) => console.log(error)) 
    }

    useEffect(() => {
        getPhones();
    }, []);

    return (
        <div className="d-grid gap-3">
            {phones.map((phone) => (
                <div key={phone.id} className="card col-sm-6 w-70 mx-auto" >
                     <div className="card-header">
                        <h3>{phone.name}</h3>
                    </div>
                    <div className="card-body">
                        <p className="card-text">Price: <strong>{phone.price}</strong></p>
                        <p className="card-text">Manufacturer: <strong>{phone.manufacturer}</strong></p>
{/*                     <Link to={`/loads/${load._id}`}>
                        <button type="button" className="btn btn-secondary btn-sm w-25 mx-auto">Details</button>
                    </Link> */}
                    </div>
                </div>
                 
            ))}
        </div>
    );
}

export default PhoneListPage;



