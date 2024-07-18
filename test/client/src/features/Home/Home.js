import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilials } from './filialSlice';
import { setActiveMenu } from './activeMenuSlice';
import { setAllData } from './allDataSlice';
import statImg from '../../images/signal_growth_analysis_report_data_graph_chart_statistic_icon_212638.png';
import axios from 'axios';

export function Home() {
    const dispatch = useDispatch();
    const filials = useSelector(state => state.filial);
    const allData = useSelector(state => state.allData)
    const activeMenu = useSelector(state => state.activeMenu)



    const [selectData, setSelectData] = useState();
    const [searchData, setSearchData] = useState({
        menuName: '',
        filial: '',
        tt: '',
        isActive: ''
    })
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(1);
    const [maxPages, setMaxPages] = useState(0);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('https://testjob.checkport.ru/filial/');
                dispatch(setFilials(response.data));
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
            }
        }
        fetchData();
    }, [dispatch]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`https://testjob.checkport.ru/filial/${selectData}/menu/`, {
                    params: {
                        limit: itemsPerPage,
                        page: currentPage
                    }
                });
                dispatch(setAllData(response.data.data));
                setMaxPages(response.data.max_pages); // Предполагаем, что max_pages находится в корне ответа
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
            }
        }
        fetchData();
    }, [dispatch, selectData, currentPage, itemsPerPage]);

    useEffect(() => {
        setCurrentPage(1);
    }, [selectData]); 

    const handleClick = (e) => {
        e.preventDefault();

        const nameA = e.target.id;
        dispatch(setActiveMenu(nameA));

        window.location.href = e.target.getAttribute('href');
    }

    const handleSearch = (e) => {
        e.preventDefault();

        setSearchData({
            ...searchData,
            [e.target.name]: e.target.value
        });
    };

    const filterData = allData.filter(elem =>
        (!searchData.menuName || elem.name.toLowerCase().includes(searchData.menuName.toLowerCase())) &&
        (!searchData.filial || elem.filial.name.toLowerCase().includes(searchData.filial.toLowerCase())) &&
        (!searchData.tt || elem.tt.name.toLowerCase().includes(searchData.tt.toLowerCase())) &&
        (!searchData.isActive || (elem.active ? 'Активно' : 'Не активно') === searchData.isActive)
    );

    return (
        <div>


            <div className='flex w-full text-sky-950'>
                <div className=" mt-10 ml-10 w-64 max-w-fit min-w-fit">
                    <a href='/' >
                        <div className='grid grid-rows-3 grid-flow-col gap-4 p-3 bg-white shadow-md pb-0'>

                            <div className='rounded-full bg-sky-950 position-center p-1 row-span-3 h-10 w-10 m-2  '>
                                <img width='100%' src='https://cdn.icon-icons.com/icons2/4231/PNG/512/bank_building_icon_263681.png' alt='логотип' className='block bg-white rounded-full ' />
                            </div>
                            <div className='col-span-2 h-0 inline-block text-nowrap'>
                                Название фирмы
                            </div>
                            <div className='row-span-2 col-span-2 h-0 opacity-50 text-nowrap'>
                                Лоскутникова В.П.
                            </div>
                        </div>
                    </a>

                    <div className='grid grid-rows-3 grid-flow-col gap-0 p-3 bg-white shadow-md pb-0 pt-0'>

                        <div className=' p-1 row-span-3 h-10 m-2'>
                            <img width='30' src='https://cdn.icon-icons.com/icons2/2031/PNG/512/note_list_icon_124054.png' alt='notebook' />
                        </div>
                        <div className='col-span-2 h-0 mt-3 '>
                            Складской учет
                        </div>
                    </div>
                    <div className='mt-10 grid z-40'>
                        <label htmlFor="filial">Филиал: </label>
                        <select
                            id='filial'
                            className='border-2 border-solid border-sky-950 rounded-md cursor-pointer'
                            value={selectData}
                            onChange={e => setSelectData(e.target.value)}
                        >
                            <option>Выберите филиал</option>
                            {filials.map(filial => (
                                <option key={filial.id} value={filial.id} >{filial.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className='border border-b-0 border-sky-950 mb-10 w-full mt-2 opacity-50 mb-0' />
                    <div className='mt-0 grid grid-rows-9 mt-0 overflow-y-scroll color-blue-200 mt-2'>
                        <a href='/empty' id='component' onClick={handleClick} className={`${activeMenu === 'component' ? 'shadow-lg p-1' : ''}`}>-компоненты</a>
                        <a href='/empty' id='fabric' onClick={handleClick} className={`${activeMenu === 'fabric' ? 'shadow-lg p-1' : ''}`}>-полуфабрикаты</a>
                        <a href='/empty' id='product' onClick={handleClick} className={`${activeMenu === 'product' ? 'shadow-lg p-1' : ''}`}>-товары</a>
                        <a href='/' id='menu' onClick={handleClick} className={`${activeMenu === 'menu' ? 'shadow-lg p-1' : ''}`}>-меню</a>
                        <a href='/empty' id='travel' onClick={handleClick} className={`${activeMenu === 'travel' ? 'shadow-lg p-1' : ''}`}>-перемещения</a>
                        <a href='/empty' id='invent' onClick={handleClick} className={`${activeMenu === 'invent' ? 'shadow-lg p-1' : ''}`}>-инвентаризация</a>
                        <a href='/empty' id='createProduct' onClick={handleClick} className={`${activeMenu === 'createProduct' ? 'shadow-lg p-1' : ''}`}>-выпуск товара</a>
                        <a href='/empty' id='minusMoney' onClick={handleClick} className={`${activeMenu === 'minusMoney' ? 'shadow-lg p-1' : ''}`}>-списание</a>
                        <a href='/empty' id='plusMoney' onClick={handleClick} className={`${activeMenu === 'plusMoney' ? 'shadow-lg p-1' : ''}`}>-накладные</a>
                    </div>
                </div>

                <div className=" mt-10 ml-10 ">
                    <div className='grid grid-rows-2'>
                        <div className='grid grid-cols-6 '>
                            <div>
                                <input placeholder='Название меню' className='border-2 border-solid border-sky-950 rounded-md cursor-pointer w-2/3' name='menuName' onChange={handleSearch} />
                            </div>
                            <div>
                                <input placeholder='Филиал' className='border-2 border-solid border-sky-950 rounded-md cursor-pointer w-2/3' name='filial' onChange={handleSearch} />
                            </div>
                            <div>
                                <input placeholder='Торговая точка' className='border-2 border-solid border-sky-950 rounded-md cursor-pointer w-2/3' name='tt' onChange={handleSearch} />
                            </div>
                            <div>
                                <select className='border-2 border-solid border-sky-950 rounded-md cursor-pointer w-2/3' name='isActive' onChange={handleSearch}>
                                    <option value=''>Статус</option>
                                    <option value='Активно'>Активно</option>
                                    <option value='Не активно' >Не активно</option>
                                </select>
                            </div>
                            <div className='text-sky-950 opacity-50'>
                                Экспорт
                            </div>

                        </div>
                    </div>
                    <div className='grid grid-cols-1 text-sky-950'>
                        <div className='border border-b-0 border-sky-950 mb-10 w-11/12 ml-10' />
                    </div>
                    {filterData.map((elem) => [
                        <div className='grid grid-cols-6 text-sky-950'>
                            <div>
                                {elem.name}
                            </div>
                            <div>
                                {elem.filial.name}
                            </div>
                            <div>
                                {elem.tt.name}
                            </div>
                            <div>
                                {elem.active === true ? 'Активно' : 'Не активно'}
                            </div>
                            <div className='mr-4'>
                                {elem.export.map(elems => elems).join(', ')}
                            </div>
                            <div className='row-span-3 flex gap-4'>
                                <img className='cursor-pointer h-8' src={statImg} alt='statistic' />
                                <img className='cursor-pointer h-8' src='https://cdn.icon-icons.com/icons2/569/PNG/512/pen-black-diagonal-symbol-of-writing-tool_icon-icons.com_54470.png' alt='pen' />
                                <img className='cursor-pointer h-10 mt-[-8px]' src='https://cdn.icon-icons.com/icons2/390/PNG/512/trash-can_38501.png' alt='trash bucket' />
                            </div>
                        </div>
                    ])}

                </div>

            </div>
            <div className="pagination flex items-center text-gray-600 space-x-4 ml-80">
                {Array.from({ length: maxPages }, (_, index) => index + 1).map((pageNumber) => (
                    <button
                        key={pageNumber}
                        onClick={() => setCurrentPage(pageNumber)}
                        className={currentPage === pageNumber ? 'bg-sky-950 rounded text-white p-2  cursor-pointer' : 'cursor-pointer'}
                    >
                        {pageNumber}
                    </button>
                ))}
            </div>
        </div>

    );
}
