import React from 'react';

import {ReactComponent as Outgoing} from './img/outgoing.svg';
import incoming from './img/incoming.svg';
import site from './img/site.svg';
import './index.css';

import dayjs from 'dayjs';
import Typography from '@mui/material/Typography';

export const Calls = ({ itemCall, setDataList }) => {
    const isCall = itemCall.in_out;
    const isSite = itemCall.from_site;
    let durationTime = itemCall.time;
    let color = '#00C294'
       
    if (!durationTime){
        durationTime = '';
        color = 'red'
    }
    if ((durationTime > 0) && (durationTime < 60)) {
        durationTime = `00:${durationTime}`;
    } else {
        if ((durationTime >= 60) && (durationTime % 60 < 10)) {
            durationTime = `${Math.trunc(durationTime / 60)}:0${durationTime % 60}`
        } else {
            if ((durationTime > 60) && (durationTime % 60 >= 10)) {
                durationTime = `${Math.trunc(durationTime / 60)}:${durationTime % 60}`
            }

        }
    }


    return (
        <div className='container'>
            <div className='border'></div>
            <div className='row'>
                <div></div>
                { 
                    isCall ? (<img src={incoming} />) : (<Outgoing fill={color} />)
                } 
   
                <Typography variant='inherit'>{dayjs(itemCall.date).format('HH:MM')}</Typography>
                <img src={itemCall.person_avatar} />
                {isSite ? (<img src={site} />) : ('')}
                <Typography variant='inherit'>{itemCall.from_number}</Typography>
                <Typography variant='inherit'>{itemCall.source}</Typography>
                <div className='errors'>{itemCall.errors}</div>
                <Typography className='row__cell' variant='inherit'>
                    {
                        durationTime
                    }
                </Typography>
            </div>
        </div>
    )
}
