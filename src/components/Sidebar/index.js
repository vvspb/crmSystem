import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './index.css';
import api from '../../utils/api'

import logo from './img/logo.svg';
import { ReactComponent as Phone } from './img/phone.svg';
import { ReactComponent as Orders } from './img/orders.svg';
import { ReactComponent as Results } from './img/Results.svg';
import { ReactComponent as Performers } from './img/performers.svg';
import { ReactComponent as Settings } from './img/settings.svg';
import { ReactComponent as Reports } from './img/reports.svg';
import { ReactComponent as Messages } from './img/messages.svg';
import { ReactComponent as Documents } from './img/document.svg';
import { ReactComponent as Counterparties } from './img/counterparties.svg';
import { ReactComponent as Kb } from './img/kb.svg';

import { CustomButton } from '../CustomButton';
import PageCountContext from '../../context/pageCountContext';
import DataListContext from '../../context/dataListContext';
import TimeFilterContext from '../../context/timeFilterContext';
import PageContext from '../../context/pageContext';

export const Sidebar = () => {
    const navigate = useNavigate();
    const [checkButton, setCheckButton] = useState('hidden');
    const [checkBtnRes, setCheckBtnRes] = useState(null);

    const handelClick = () => {

    }

    return (
        <div className='sidebar'>
            <div className='menu'>
                <img className='logo' src={logo} />
                <div className='listMenu'>
                    <CustomButton
                        onClick={() => {
                            setCheckButton('result')
                            navigate('result')
                        }}
                        buttonStyle={checkButton == 'result' ? 'btn--clickSideBar' : 'btn--listSideBar'}

                    >
                        <Results className='icon' />
                        <div className={'div'}>
                            Итоги
                        </div>
                    </CustomButton>

                    <CustomButton
                        onClick={() => {
                            setCheckButton('orders');
                            navigate('orders')
                        }}
                        buttonStyle={checkButton == 'orders' ? 'btn--clickSideBar' : 'btn--listSideBar'}
                    >
                        <Orders className='icon' />

                        <div className={'div'}>
                            Заказы
                        </div>
                    </CustomButton>

                    <CustomButton
                        onClick={() => { 
                            setCheckButton('messages')
                            navigate('messages')
                        }}
                        buttonStyle={checkButton == 'messages' ? 'btn--clickSideBar' : 'btn--listSideBar'}
                    > <Messages className='icon' />
                        <div className='div'>
                            Сообщения
                        </div>
                    </CustomButton>
                    <CustomButton

                        onClick={() => {
                            setCheckButton('calls')
                            navigate('calls')
                        }}
                        buttonStyle={checkButton == 'calls' ? 'btn--clickSideBar' : 'btn--listSideBar'}
                    >
                        <Phone className='icon' />
                        <div className='div'>
                            Звонки
                        </div>

                    </CustomButton>
                    <CustomButton
                        onClick={() => {
                            setCheckButton('counterparties');
                            navigate('counterparties')
                        }}
                        buttonStyle={checkButton == 'counterparties' ? 'btn--clickSideBar' : 'btn--listSideBar'}
                    >
                        <Counterparties className='icon' />

                        <div className='div'>
                            Контрагенты
                        </div>
                    </CustomButton>
                    <CustomButton
                        onClick={() => { 
                            setCheckButton('document');
                            navigate('documents')
                        }}
                        buttonStyle={checkButton == 'document' ? 'btn--clickSideBar' : 'btn--listSideBar'}
                    >
                        <Documents className='icon' />
                        <div className='div'>
                            Документы
                        </div>
                    </CustomButton>

                    <CustomButton
                        onClick={() => { setCheckButton('performers') }}
                        buttonStyle={checkButton == 'performers' ? 'btn--clickSideBar' : 'btn--listSideBar'}
                    >
                        <Performers className='icon' />
                        <div className='div'>
                            Исполнители
                        </div>
                    </CustomButton>
                    <CustomButton 
                     onClick={() => { setCheckButton('reports') }}
                     buttonStyle={checkButton == 'reports' ? 'btn--clickSideBar' : 'btn--listSideBar'}
                    >
                        <Reports className='icon' />
                        <div className='div'>
                            Отчеты
                        </div>
                    </CustomButton>
                    <CustomButton 
                        onClick={() => setCheckButton('kb')}
                        buttonStyle={checkButton == 'kb' ? 'btn--clickSideBar' : 'btn--listSideBar'}

                    >
                        <Kb className='icon' />
                        <div className='div'>
                            База знаний
                        </div>
                    </CustomButton>
                    <CustomButton 
                        onClick={() => setCheckButton('settings')}
                        buttonStyle={checkButton == 'settings' ? 'btn--clickSideBar' : 'btn--listSideBar'}

                    >
                        <Settings className='icon' />
                        <div className='div'>
                            Настройки
                        </div>
                    </CustomButton>
                </div>
            </div>
        </div>
    )
}
