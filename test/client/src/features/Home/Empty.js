import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilials } from './filialSlice';
import { setActiveMenu } from './activeMenuSlice';
import axios from 'axios';


export function Empty() {
    const dispatch = useDispatch();
    const filials = useSelector(state => state.filial);

    const activeMenu = useSelector(state => state.activeMenu)

    const [selectData, setSelectData] = useState();
   

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

    

    const handleClick = (e) => {
        e.preventDefault();

        const nameA = e.target.id;
        dispatch(setActiveMenu(nameA));

        window.location.href = e.target.getAttribute('href');
    }

    


    return (
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
                            <input placeholder='Название меню' className='border-2 border-solid border-sky-950 rounded-md cursor-pointer w-2/3' name='menuName'  />
                        </div>
                        <div>
                            <input placeholder='Филиал' className='border-2 border-solid border-sky-950 rounded-md cursor-pointer w-2/3' name='filial'  />
                        </div>
                        <div>
                            <input placeholder='Торговая точка' className='border-2 border-solid border-sky-950 rounded-md cursor-pointer w-2/3' name='tt'  />
                        </div>
                        <div>
                            <select className='border-2 border-solid border-sky-950 rounded-md cursor-pointer w-2/3' name='isActive' >
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
                
               
            </div>
        </div>

    );
}
