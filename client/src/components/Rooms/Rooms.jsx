import React from 'react'
import Style from './Rooms.module.css'
import ShowIcons from '../utils/ShowIcons'

//icons

import peopleIcon from '../../assets/img/Rooms/Icons/people.png'
import bedIcon from '../../assets/img/Rooms/Icons/bed.png'
import bathIcon from '../../assets/img/Rooms/Icons/bath.png'
import wifiIcon from '../../assets/img/Rooms/Icons/wifi.png'
import airIcon from '../../assets/img/Rooms/Icons/air.png'
import tvIcon from '../../assets/img/Rooms/Icons/tv.png'
import balconyIcon from '../../assets/img/Rooms/Icons/balcony.png'

// imgRooms
import luxury from '../../assets/img/Rooms/img/luxury.png'
import single from '../../assets/img/Rooms/img/single.png'
import suite from '../../assets/img/Rooms/img/suite.png'
import twin from '../../assets/img/Rooms/img/twin.png'
const roomsInfo = [
    {
        id: 1,
        name: 'Single',
        number: 1,
        images: single,
        description: 'Proident tempor deserunt do sit et excepteur ut. Aliquip ullamco cupidatat mollit anim quis irure nulla Lorem ipsum velit id ullamco aute dolor. Reprehenderit anim irure do sint deserunt excepteur enim.',
        features: [
            {
                icon: 'people',
                name: 'people',
                available: true,
                num: 2
            },


            {
                icon: 'bed',
                name: 'bed',
                available: true,
                num: 1
            },
            {
                icon: 'bath',
                name: 'bath',
                available: true,
                num: 1
            },
            {
                icon: 'tv',
                name: 'tv',
                available: true,
                num: 1
            },
            {
                icon: 'wifi',
                name: 'wifi',
                available: true,
                num: 0
            },
            {
                icon: 'air',
                name: 'air',
                available: false,
                num: 0
            },
            {
                icon: 'balcony',
                name: 'balcony',
                available: false,
                num: 0
            },
        ],
    },
    {
        id: 2,
        name: 'Twin',
        number: 2,
        images: twin,
        description: 'Culpa id mollit consequat qui elit qui eu Lorem elit. Minim occaecat adipisicing officia velit. Esse id nisi cillum adipisicing dolor ut ad officia dolore veniam deserunt. Est irure esse consectetur officia minim id consequat esse esse deserunt ullamco.',
        features: [
            {
                icon: 'people',
                name: 'people',
                available: true,
                num: 2
            },


            {
                icon: 'bed',
                name: 'bed',
                available: true,
                num: 2
            },
            {
                icon: 'bath',
                name: 'bath',
                available: true,
                num: 1
            },
            {
                icon: 'tv',
                name: 'tv',
                available: true,
                num: 1
            },
            {
                icon: 'wifi',
                name: 'wifi',
                available: true,
                num: 0
            },
            {
                icon: 'air',
                name: 'air',
                available: true,
                num: 0
            },
            {
                icon: 'balcony',
                name: 'balcony',
                available: false,
                num: 0
            },
        ],
    },
    {
        id: 3,
        name: 'Suite',
        number: 3,
        images: suite,
        description: 'Labore deserunt esse ea magna proident laboris labore irure et aute. Eiusmod sunt do eiusmod mollit eiusmod ut non tempor. Nisi cupidatat ad do nulla dolore culpa qui elit Lorem eiusmod non amet.',
        features: [
            {
                icon: 'people',
                name: 'people',
                available: true,
                num: 2
            },


            {
                icon: 'bed',
                name: 'bed',
                available: true,
                num: 1
            },
            {
                icon: 'bath',
                name: 'bath',
                available: true,
                num: 1
            },
            {
                icon: 'tv',
                name: 'tv',
                available: true,
                num: 1
            },
            {
                icon: 'wifi',
                name: 'wifi',
                available: true,
                num: 0
            },
            {
                icon: 'air',
                name: 'air',
                available: true,
                num: 0
            },
            {
                icon: 'balcony',
                name: 'balcony',
                available: false,
                num: 0
            },
        ],
    },
    {
        id: 4,
        name: 'Luxury',
        number: 4,
        images: luxury,
        description: 'Laboris esse quis aute mollit incididunt sunt mollit consequat sint. Deserunt tempor sunt cillum tempor magna. Duis irure velit exercitation nisi sunt ex irure laboris cillum magna laboris veniam commodo. Aliqua ea Lorem et nulla consectetur occaecat voluptate duis nisi ex excepteur fugiat officia aute. Dolore laboris ut occaecat veniam.',
        features: [
            {
                icon: 'people',
                name: 'people',
                available: true,
                num: 4
            },

            {
                icon: 'bed',
                name: 'bed',
                available: true,
                num: 2
            },
            {
                icon: 'bath',
                name: 'bath',
                available: true,
                num: 2
            },
            {
                icon: 'tv',
                name: 'tv',
                available: true,
                num: 2
            },
            {
                icon: 'wifi',
                name: 'wifi',
                available: true,
                num: 0
            },
            {
                icon: 'air',
                name: 'air',
                available: true,
                num: 0
            },
            {
                icon: 'balcony',
                name: 'balcony',
                available: true,
                num: 0
            },
        ],
    },
]
const Rooms = () => {
    return (
        <div className='container'>
            <div className={Style.title}>
                <h3>
                    NUESTRAS HABITACIONES
                </h3>
                <p>
                    Cillum anim laborum est ipsum qui labore est mollit ad anim. Consequat officia sit eiusmod deserunt fugiat aliqua sint do pariatur. .
                </p>
            </div>
            {roomsInfo.map((room, index) => {
                return <RoomCard data={room} />

            })}
        </div>
    )
}

export default Rooms

const forFeatures = (feat) => {
    return feat.map(((f, i) =>
        <div key={i} >

            <ShowIcons data={f} />
        </div>
    ))

}
export const RoomCard = (props) => {
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
                {/* <ShowIcons icon={peopleIcon} /> */}
            </div>
        </div>

    )
}