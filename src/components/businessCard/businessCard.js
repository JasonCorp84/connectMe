import React from 'react';
import './businessCard.css';

let businessCard = () => {
    return(
 
        <div className={'business--card'}>
            <div className={'business__left--container'}>
                <div className={'business__title'}><h5>Metal Parts Experts Inc.</h5></div>
                <div className={'business__type'}>CNC machine shop</div>
                <div className={'business__hours'}>Open:6am-6pm</div>
            </div>
            <div className="business__right--container">
                <div className="business__address">8014 Mango Ave Apt C30, Fontana, CA 92336</div>
                <div className="business__phone">Phone(icon): (909) 213 8702</div>
                <div className="business__website"><a target="_blank" href="https://www.metalpartsexpert.com/">metalpartsexpert.com</a></div>
            </div>
        </div>
    )
}

export default businessCard;