import {useEffect, useState} from "react";
import './anotherevents.css';

const AnotherEvents = () => {
    const url = 'http://localhost:8000/api/next-events';

    const [anotherEvent, setAnotherEvent] = useState([]);

    async function fetchAnotherEventsData() {
        const response = await fetch(url);
        const result = await response.json();
        setAnotherEvent(result);
    }

    useEffect(() => {
        fetchAnotherEventsData()
    },[]);

    return (
        <div className="another-container">
            <h2 className="another-headline">Dál se můžeme těšit</h2>
            <div className="another-event another-header">
                <div>Akce</div>
                <div>Od</div>
                <div>Do</div>
                <div>Počet dobrovolníků</div>
            </div>
            {anotherEvent.map((evn, index) => (
                <div key={index} className="another-event">
                    <div>{evn.name}</div>
                    <div>{evn.from}</div>
                    <div>{evn.to}</div>
                    <div>{evn.capacity}</div>
                </div>
            ))}
        </div>
    )
}

export default AnotherEvents;