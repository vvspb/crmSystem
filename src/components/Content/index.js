import React, { useState, useEffect, useContext } from 'react';
import TimeFilterContext from '../../context/timeFilterContext'

import './index.css'
import api from '../../utils/api'
import { Calls } from '../Calls';
import CustomizedMenus from '../CustomizeMenu';

import Typography from '@mui/material/Typography';
import { Pagination } from '@mui/material';
import DataListContext from '../../context/dataListContext';
import PageCountContext from '../../context/pageCountContext';
import PageContext from '../../context/pageContext';


export const Content = () => {

  const { timeFiltr, setTimeFiltr } = useContext(TimeFilterContext);
  const { dataList, setDataList } = useContext(DataListContext);
  const { page, setPage } = useContext(PageContext);
  const { pageCount, setPageCount } = useContext(PageCountContext);

  useEffect(() => {
    api.getList(timeFiltr)
      .then((res) => {
        const { results } = res;
        console.log(results);
        setPageCount(Math.ceil(results.length / 27));
        setDataList(results.slice(27 * (page - 1), 27 * (page - 1) + 27))
      }
      )
  }, [timeFiltr, page])


  return (

    <div className='content'>
      <CustomizedMenus />

      <div className='navigate'>
        <div className='search'>
          здесь должен быть поиск
        </div>
        <div className='filter'>
          здесь должны быть фильтры
        </div>
      </div>

      <div className='calls'>

        <div className='table'>
          <div className='table__head'>
            <div className='head__rows'>
              <div></div>
              <Typography variant='div' className='head__rows__text'>Тип</Typography>
              <Typography variant='div' className='head__rows__text'>Время</Typography>
              <Typography variant='div' className='head__rows__text'>Сотрудник</Typography>
              <Typography variant='div' className='head__rows__text'>Звонок</Typography>
              <Typography variant='div' className='head__rows__text'>Источник</Typography>
              <Typography variant='div' className='head__rows__text'>Оценка</Typography>
              <Typography variant='div' className='head__rows__text box'>Длительность</Typography>
            </div>
            <div className='secnd__level'>
              второй уровень шапки
            </div>
          </div>

          <div className='table__rows'>
            {/* <div className='rows__down'>rows</div>
              <div className='data'>data</div> */}
            <div className='rows'>
              {dataList?.map((item) => (
                <Calls
                  key={item.id}
                  itemCall={item}
                  setDataList={setDataList}
                />
              ))}
            </div>

          </div>
          <Pagination sx={{ mb: 3, mt: 3, ml: 65 }}
            count={pageCount}
            page={page}
            onChange={(_, number) => setPage(number)}
            className='pagin'
          />
        </div>

      </div>

    </div >
  )
}
