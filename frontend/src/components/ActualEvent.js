import {useEffect, useState} from "react";

const ActualEvent = () => {
    const url = 'http://localhost:8000/api/actual-event';

    const [data, setData] = useState([]);

    async function fetchActualEventData(){
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
        console.log(result);

    }

    useEffect(() => {
        fetchActualEventData()
    }, []);

    return (
        <div className="container">
            <h2>{data.name}</h2>
            <p>{data.description}</p>
            <p>{data.from}</p>
            <p>{data.to}</p>
            <div>aktivity</div>
            <div>pocet prihlasenych</div>
            <button>Chci se zucastnit</button>


        </div>
    );
}

export default ActualEvent;