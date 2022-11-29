import React from 'react'
import Style from './Offer.module.css'

const Offer = (props) => {
    const { images, name, description, features, total, precioPorNoche, personas, noches } = props.data

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
                <div className={Style.contentSide}>
                    <div
                        className={Style.contentSideLeft}
                    >
                        <div className={Style.map}>
                            {features.map((feat, index) =>
                                <p key={index} className={Style.features}>• {feat}</p>
                            )}
                        </div>
                        <p style={{ margin: 0 }}><strong>PRECIO NOCHE {precioPorNoche}</strong></p>
                    </div>
                    <div className={Style.totales}>
                        <div style={{ width: 180 }}>
                            <p><strong>TOTAL: {total}</strong></p>
                            <p style={{ fontWeight: 'bolder', fontSize: 12 }}>{personas} personas {noches} noches</p>
                        </div>
                        <button className={Style.buttons}>
                            <p><span>RESERVAR</span></p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Offer