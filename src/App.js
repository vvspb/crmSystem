import React, { useState, useEffect, useContext } from 'react';
import { Routes, Route, Link } from "react-router-dom";

import api from './utils/api'
import './index.css'

import { Header } from "./components/Header/index";
import { Sidebar } from './components/SideBar';
import { Content } from './components/Content';
import DataListContext from './context/dataListContext';
import PageCountContext from './context/pageCountContext';
import PageContext from './context/pageContext';
import TimeFilterContext from './context/timeFilterContext';
import { HomePage } from './components/HomePage';



export const App = () => {

    const [dataList, setDataList] = useState([]);
    const [timeFiltr, setTimeFiltr] = useState(null);
    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(1);

    return (
        <TimeFilterContext.Provider value={{ timeFiltr, setTimeFiltr }}>
            <DataListContext.Provider value={{ dataList, setDataList }}>
                <PageCountContext.Provider value={{ pageCount, setPageCount }}>
                    <PageContext.Provider value={{ page, setPage }}>
                        <div>
                            <Header />
                            <Sidebar />
                            <Routes>
                                <Route path="/" element={<HomePage />} />
                                <Route path="/result" element={<HomePage />} />
                                <Route path="/orders" element={<HomePage />} />
                                <Route path="/messages" element={<HomePage />} />
                                <Route path="/calls" element={<Content />} />
                                <Route path="/counterparties" element={<HomePage />} />
                                <Route path="/documents" element={<HomePage />} />
                            </Routes>
                        </div>
                     </PageContext.Provider>
                 </PageCountContext.Provider>
             </DataListContext.Provider>
         </TimeFilterContext.Provider >
    )
}
