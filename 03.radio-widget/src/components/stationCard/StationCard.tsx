import React, { useEffect, useState } from 'react';
import classes from './StationCard.module.css';
import Player from '../player/Player';
// images
import arrowLeftIcon from "../../assets/images/back-arrow.png";
import switchIcon from "../../assets/images/switch.png";

type Radio = {
    name: string;
    frequency: string;
}
const radioArray: Radio[] = [
        {
            name: "Putin FM",
            frequency: "66,6"
        },
        {
            name: "Dribbble FM",
            frequency: "101,2"
        },
        {
            name: "Doge FM",
            frequency: "99,4"
        },
        {
            name: "Ballads FM",
            frequency: "87,1"
        },
        {
            name: "Maximum FM",
            frequency: "142,2"
        }
    ]

    
const StationCard = () => {
    const [selectedRadio, setSelectedRadio] = useState<Radio>({ name: "", frequency: "" })
    const [radioData, setRadioData] = useState(radioArray)


    useEffect(() => {
        const getRadio = async () => {
            try {
                const res = await fetch("http://localhost:5000/api/station");
                const data = await res.json()
                setRadioData(data)
            } catch (err) {
                console.log(err);
            }
        };
        getRadio();
    }, []);


    return (
        <div className={classes.card}>
            <div className={classes["card-header"]}>
                <button>
                    <img src={arrowLeftIcon} alt="" />
                </button>
                <h2>Stations</h2>
                <button>
                    <img src={switchIcon} alt="" />
                </button>
            </div>
            <div className={classes["card-body"]}>
                {
                    radioData.map((radio, idx) => (
                        <React.Fragment key={idx}>
                            {radio.name === selectedRadio.name && <Player />}
                            <button
                                className={classes["card-body-row"]}
                                onClick={() => setSelectedRadio(radio)}
                            >
                                <span>{radio.name}</span>
                                <span>{radio.frequency}</span>
                            </button>
                        </React.Fragment>
                    ))
                }
            </div>
            <div className={classes["card-footer"]}>
                {(selectedRadio.name.length > 1) &&
                    <div>
                        <span>currently playing</span>
                        <span>{selectedRadio.name}</span>
                    </div>}
            </div>
        </div>
    );
};

export default StationCard;