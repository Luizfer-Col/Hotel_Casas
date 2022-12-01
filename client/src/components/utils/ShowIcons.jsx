import React from 'react'
import Style from './ShowIcons.module.css'
import peopleIcon from '../../assets/img/Rooms/Icons/people.png'
import balconyIcon from '../../assets/img/Rooms/Icons/balcony.png'
import tvIcon from '../../assets/img/Rooms/Icons/tv.png'
import airIcon from '../../assets/img/Rooms/Icons/air.png'
import bathIcon from '../../assets/img/Rooms/Icons/bath.png'
import wifiIcon from '../../assets/img/Rooms/Icons/wifi.png'
import bedIcon from '../../assets/img/Rooms/Icons/bed.png'

const Icons = {
    people: peopleIcon,
    bed: bedIcon,
    bath: bathIcon,
    wifi: wifiIcon,
    air: airIcon,
    tv: tvIcon,
    balcony: balconyIcon
}
const ShowIcons = (props) => {
    const { num, icon, available } = props.data
    if (available) {

        return (
            <div className={Style.container}>

                {num > 0 ?

                    <div>
                        <p>{num}
                        </p>
                    </div>
                    : (null)}


                <img
                    // style={{ marginTop: -6 }}
                    height={30}
                    src={Icons[icon]}
                    alt="" />
            </div>
        )
    }
}

export default ShowIcons