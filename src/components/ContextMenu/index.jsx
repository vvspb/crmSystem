// import React, { useContext, useState } from 'react';
// import style from './Menu.module.css'

// export const ContextMenu = ({ children }) => {
//     const { setTimeFiltr } = useContext(TimeFilterContext);

//     const [buttonName, setButtonName] = useState('3 дня')
//     const [anchorEl, setAnchorEl] = useState(null);

//     const open = Boolean(anchorEl);

//     const handleClick = (event) => {
//         setAnchorEl(event.currentTarget);
//     };
//     const handleCloseFhreeDays = () => {
//         setAnchorEl(null);
//         setButtonName('<3 дня>');
//         const dateStart = dayjs().subtract(2, 'day').format('YYYY-MM-DD');
//         const dateEnd = dayjs().format('YYYY-MM-DD');
//         setTimeFiltr(`?limit=150&${dateStart}&${dateEnd}`)
//     };
//     const handleCloseWeek = () => {
//         setAnchorEl(null);
//         setButtonName('<Неделя>')
//         const dateStart = dayjs().subtract(6, 'day').format('YYYY-MM-DD');
//         const dateEnd = dayjs().format('YYYY-MM-DD');
//         setTimeFiltr(`?limit=300&${dateStart}&${dateEnd}`)
//     };
//     const handleCloseManth = () => {
//         setAnchorEl(null);
//         setButtonName('<Месяц>')
//         const dateStart = dayjs().subtract(1, 'month').format('YYYY-MM-DD');
//         const dateEnd = dayjs().format('YYYY-MM-DD');
//         setTimeFiltr(`?limit=1000&${dateStart}&${dateEnd}`)
//     }
//     const handleCloseYear = () => {
//         setAnchorEl(null);
//         setButtonName('<Год>')
//         const dateStart = dayjs().subtract(1, 'year').format('YYYY-MM-DD');
//         const dateEnd = dayjs().format('YYYY-MM-DD');
//         setTimeFiltr(`?limit=1000&${dateStart}&${dateEnd}`)
//     };
//     const handleClose = () => {
//         setAnchorEl(null);
//     };
//     return (
//         <nav>
//             <ul className='menu'>
//                 <li>
//                     <a href='#'>{buttonName}</a>
//                     <ul>
//                         <li><a href='#'>{children}</a></li>
//                         <li><a href='#'>{children}</a></li>
//                         <li><a href='#'>{children}</a></li>
//                         <li><a href='#'>{children}</a></li>
//                     </ul>
//                 </li>
//             </ul>
//         </nav>
//     )
// }
