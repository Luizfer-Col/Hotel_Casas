import React from 'react'
import ShowIcons from '../utils/ShowIcons'
import Style from './RoomCard.module.css'

const RoomCard = (props) => {
    const { images, name, description, features } = props.data
    return (
        <div className={Style.containerCard}>
            <div className={Style.image}>
                <img
                    src={images}
                    height={'80%'}
                    width={'80%'}
                />
            </div>
            <div className={Style.content}>
                <div
                    className={Style.roomTitle}
                >{name}</div>
                <div className={Style.description} >
                    {description}
                </div>
                <div className={Style.map}>
                    {forFeatures(features)}
                </div>
            </div>
        </div>
    )
}

export default RoomCard

const forFeatures = (feat) => {
    return feat.map(((f, i) =>
        <div key={i} >

            <ShowIcons data={f} />
        </div>
    ))

}