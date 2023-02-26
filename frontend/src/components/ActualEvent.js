import {useEffect, useState} from "react";
import './actualevent.css';
import ProgressBar from "./ProgressBar";

const ActualEvent = () => {
    const url = 'http://localhost:8000/api/actual-event';

    const [data, setData] = useState([]);
    const [activities, setActivity] = useState([]);
    const [regUsers, setRegUser] = useState([]);

    async function fetchActualEventData(){
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
        setActivity(result.activities);
        setRegUser(result.users);
    }

    useEffect(() => {
        fetchActualEventData()
    }, []);

    return (
        <div className="actual-container">
            <div className="actual-basics">
                <h2>{data.name}</h2>
                <p>{data.description}</p>
                <div className="actual-basics-date">
                    <p>{data.from}</p>
                    <p>{data.to}</p>
                </div>
            </div>
            <div className="actual-activities">
                {activities.map((activity, index) => (
                    <div key={index} className="actual-activity">
                        <h4>{activity.name}</h4>
                        <p>{activity.description}</p>
                    </div>
                ))}
            </div>
            <div className="actual-users">
                <h3>Počet přihlášených</h3>
                <ProgressBar reg={regUsers.length} total={data.capacity} text={regUsers.length + '/' + data.capacity}></ProgressBar>
            </div>
            <div className="actual-button">
                <button>Zúčastnit se</button>
            </div>
        </div>
    );
}

export default ActualEvent;