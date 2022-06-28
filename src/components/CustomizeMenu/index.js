import React, { useState, useContext } from 'react';
import styles from './CustomizeMenu.module.css'

import TimeFilterContext from '../../context/timeFilterContext';

import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { ReactComponent as Rihgt } from './img/right.svg';
import { ReactComponent as Left } from './img/left.svg';
import { ReactComponent as Calendar } from './img/calendar.svg';
import { ReactComponent as TimeInt } from './img/timeInt.svg';
import { Typography } from '@mui/material';
import dayjs from 'dayjs';

const DateButton = styled(Button)({
    fontFamily: 'SF Pro Display',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 16,
    width:34,
    height: 16,
})
const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))
    (({ theme }) => ({
        '& .MuiPaper-root': {
            borderRadius: 0,
            marginTop: theme.spacing(1),
            minWidth: 180,
            color: '#899CB1',
            // theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.blue[100],
            boxShadow:
                'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
            '& .MuiMenu-list': {
                padding: '0',
            },
            '& .MuiMenuItem-root': {
                '&:active': {
                    backgroundColor: alpha(
                        '#005FF8',
                        theme.palette.action.selectedOpacity,
                    ),
                    color: '#122945',
                },
            },
        },
    }));

export default function CustomizedMenus() {
    const { setTimeFiltr } = useContext(TimeFilterContext);

    const [buttonName, setButtonName] = useState('3 дня')
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseFhreeDays = () => {
        setAnchorEl(null);
        setButtonName('<3 дня>');
        console.log(buttonName);
        const dateStart = dayjs().subtract(2, 'day').format('YYYY-MM-DD');
        const dateEnd = dayjs().format('YYYY-MM-DD');
        setTimeFiltr(`?limit=150&${dateStart}&${dateEnd}`)
    };
    const handleCloseWeek = () => {
        setAnchorEl(null);
        setButtonName('<Неделя>')
        const dateStart = dayjs().subtract(6, 'week').format('YYYY-MM-DD');
        const dateEnd = dayjs().format('YYYY-MM-DD');
        setTimeFiltr(`?limit=300&${dateStart}&${dateEnd}`)
    };
    const handleCloseManth = () => {
        setAnchorEl(null);
        setButtonName('<Месяц>')
        const dateStart = dayjs().subtract(1, 'month').format('YYYY-MM-DD');
        const dateEnd = dayjs().format('YYYY-MM-DD');
        setTimeFiltr(`?limit=1000&${dateStart}&${dateEnd}`)
    }
    const handleCloseYear = () => {
        setAnchorEl(null);
        setButtonName('<Год>')
        const dateStart = dayjs().subtract(1, 'year').format('YYYY-MM-DD');
        const dateEnd = dayjs().format('YYYY-MM-DD');
        setTimeFiltr(`?limit=1000&${dateStart}&${dateEnd}`)
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className={styles.buttonMenu}>
            <DateButton
                id="demo-customized-button"
                aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                size="small"
                variant='text'
                disableElevation
                onClick={handleClick}
            >
                {buttonName}
            </DateButton>
            <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={handleCloseFhreeDays} disableRipple>
                    3 дня
                </MenuItem>
                <MenuItem onClick={handleCloseWeek} disableRipple>
                    Неделя
                </MenuItem>
                <MenuItem onClick={handleCloseManth} disableRipple>
                    Месяц
                </MenuItem>
                <MenuItem onClick={handleCloseYear} disableRipple>
                    Год
                </MenuItem>
            </StyledMenu>
        </div>
    );
}
