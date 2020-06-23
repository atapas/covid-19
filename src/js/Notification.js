
import React, { useState, useEffect, useRef } from 'react';
import { useFetch } from './useFetch';

import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import Button from 'react-bootstrap/Button';

import moment from 'moment';

const Notification = () => {
    const [data, loading] = useFetch('https://api.covid19india.org/updatelog/log.json');
    const [showCount, setShowCount] = useState(false);
    const [messageCount, setMessageCount] = useState(0);
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);

    useEffect(() => {
        if (!loading) {
            data.sort((a,b) => b.timestamp - a.timestamp);
            data.length > 0 ? setShowCount(true) : setShowCount(false);
            setMessageCount(data.length);
            console.log(data);
        }
    },[loading]);

    const handleClick = (event) => {
        setShow(!show);
        setTarget(event.target);
    }

    const getDayDiff = timestamp => {
        var a = moment();
        var b = moment(timestamp * 1000);
        let diff = a.diff(b, 'days');
        if (diff === 0) {
            diff = a.diff(b, 'hour');
            
            if (diff === 0) {
                diff = a.diff(b, 'minute');
                return `${diff} minute(s) before`
            } else {
                return `${diff} hour(s) before`;
            }
        } else {
            return `${diff} day(s) before`;
        }
    }

    const getContent = message => {
        if (message.indexOf('\n')) {
            let splitted = message.split('\n');
            let ret = '<ul>';
            for (let i = 0; i<splitted.length - 1 ; i ++) {
                if (splitted[i] !== '') {
                    ret = ret + '<li>' + splitted[i] + '</li>';
                }
            }
            ret = ret + '</ul>';
            return { __html: ret };
        }
        return `<span>${message}</span>`;
    }

    const hide = () => {
        setShow(false);
    }

    const markAsRead = () => {
        setShowCount(false);
        //setMessageCount(0);
    }

    return (
        <>
            <div className="notification-container">
                <div className={showCount ? 'notification notify show-count' : 'notification notify'} 
                    data-count={messageCount} 
                    onClick={event => handleClick(event)}>
                    <i className="fas fa-bell"></i>
                </div>
            </div>

            <div ref={ref}>
                <Overlay
                    show={show}
                    target={target}
                    placement="bottom"
                    container={ref.current}
                    containerPadding={20}
                    rootClose={true}
                    onHide={hide}
                >
                    <Popover id="popover-contained">
                        <Popover.Title as="h3">Breaking Alerts!</Popover.Title>
                        { !loading ?
                            <Popover.Content style={{padding: '3px 3px'}}>
                                <div>
                                    <Button variant="link" onClick={markAsRead}>Mark as Read</Button>
                                </div>
                                <ul className="notification-info-panel">
                                {
                                    data.map((message, index) =>
                                        <li className="notification-message" key={index}>
                                            <div className="timestamp">{getDayDiff(message.timestamp)}</div>
                                            <div className="content" dangerouslySetInnerHTML={getContent(message.update)} />
                                        </li>
                                    )
                                }
                                </ul>
                            </Popover.Content> : null
                        }
                    </Popover>
                </Overlay>
            </div>
        </>
    )
};

export default Notification;