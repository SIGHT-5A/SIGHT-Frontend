import React, { useEffect, useState } from 'react'
import "./Notification.scss"
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const Notification = (props) => {
    const AnomalyIcons = [
        `<i class="fa-solid fa-fire"></i>`,
        `<i class="fa-solid fa-hand-fist"></i>`,
        `<i class="fa-solid fa-car-burst"></i>`
    ];

    const [isReadNotification, setIsReadNotification] = useState(false);

    useEffect(() => {
        setIsReadNotification(props.notification.isRead);
    }, []);

    const getIcon = (notification) => {
        switch (notification.type) {
            case 'fire':
                return AnomalyIcons[0];
            case 'fight':
                return AnomalyIcons[1];
            case 'accident':
                return AnomalyIcons[2];
        }

    }
    const getStyleForIcon = (notification) => {
        switch (notification.severity) {
            case 'Severe':
                return {
                    color: "var(--red)"
                };
            case 'Moderate':
                return {
                    color: "var(--orange)"
                };
            case 'Normal':
                return {
                    color: "var(--green)"
                };
        }
    }

    return (
        <div>
            {
                isReadNotification
                    ?
                    <div className='new-notification read-notification'>
                        <div className='icon' style={getStyleForIcon(props.notification)} dangerouslySetInnerHTML={{ __html: getIcon(props.notification) }}></div>
                        <div className="about-notification">
                            <p>Anomaly: {props.notification.id}</p>
                            <p style={{ color: "var(--grey)" }}>Event: {props.notification.event}</p>
                        </div>
                        <div className="location">
                            <p>Location: {props.notification.location}</p>
                        </div>
                        <div className="timestamp">
                            <p>{props.notification.timestamp}</p>
                        </div>
                        <Tippy content={<span>Download video</span>} delay={300}>
                            <div className="video">
                                <i class="fa-regular fa-circle-play"></i>
                            </div>
                        </Tippy>
                        <div style={{ visibility: 'hidden' }} className="mark-as-read">
                            <i class="fa-solid fa-check"></i>
                        </div>
                    </div>
                    :
                    <div className='new-notification unread-notification'>
                        <div className='icon' style={getStyleForIcon(props.notification)} dangerouslySetInnerHTML={{ __html: getIcon(props.notification) }}></div>
                        <div className="about-notification">
                            <p>Anomaly: {props.notification.id}</p>
                            <p style={{ color: "var(--grey)" }}>Event: {props.notification.event}</p>
                        </div>
                        <div className="location">
                            <p>Location: {props.notification.location}</p>
                        </div>
                        <div className="timestamp">
                            <p>{props.notification.timestamp}</p>
                        </div>
                        <Tippy content={<span>Download video</span>} delay={300}>
                            <div className="video">
                                <i class="fa-regular fa-circle-play"></i>
                            </div>
                        </Tippy>
                        <Tippy content={<span>Mark As Read</span>} delay={300}>
                            <div className="mark-as-read">
                                <i class="fa-solid fa-check"></i>
                            </div>
                        </Tippy>
                    </div>
            }
        </div>
    );
};


export default Notification
