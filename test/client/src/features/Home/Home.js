import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilials } from './filialSlice';
import { setActiveMenu } from './activeMenuSlice';
import axios from 'axios';

export function Home() {
    const dispatch = useDispatch();
    const filials = useSelector(state => state.filial);
    const activeMenu = useSelector(state => state.activeMenu)

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

const handleClick = (e) =>{
    e.preventDefault();

    const nameA = e.target.id;
    dispatch(setActiveMenu(nameA));
}

    return (
        <div className='flex'>
            <div>
                <div className=" mt-10 ml-10  ">
                    <a href='/' className=''>
                        <div className='grid grid-rows-3 grid-flow-col gap-4 p-3 bg-white shadow-md pb-0'>

                            <div className='rounded-full bg-sky-950 position-center p-1 row-span-3 h-10 m-2 '>
                                <img width='30' src='https://cdn.icon-icons.com/icons2/4231/PNG/512/bank_building_icon_263681.png' alt='логотип' className='block bg-white rounded-full' />
                            </div>
                            <div className='col-span-2 h-0  '>
                                Название фирмы
                            </div>
                            <div className='row-span-2 col-span-2 h-0 opacity-50'>
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
                        <select id='filial' className='border-2 border-solid border-sky-950 rounded-md cursor-pointer'>
                            <option>Выберите филиал</option>
                            {filials.map(filial => (
                                <option key={filial.id} value={filial.id}>{filial.name}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                    <img className='mt-[-10px] mb-[-10px] opacity-40 z-0'width='230' src='https://d2bzx2vuetkzse.cloudfront.net/fit-in/0x450/unshoppable_producs/1e88e851-f5b4-4a5d-9aef-25a29b2851d2.png' alt='line' />
                    </div>
                    <div className='mt-0 grid grid-rows-9 mt-0 overflow-y-scroll color-blue-200'>
                        <a href='/' id='component' onClick={handleClick} className={`${activeMenu === 'component' ? 'shadow-lg p-1' : ''}`}>-компоненты</a>
                        <a href='/' id='fabric' onClick={handleClick} className={`${activeMenu === 'fabric' ? 'shadow-lg p-1' : ''}`}>-полуфабрикаты</a>
                        <a href='/' id='product' onClick={handleClick} className={`${activeMenu === 'product' ? 'shadow-lg p-1' : ''}`}>-товары</a>
                        <a href='/' id='menu' onClick={handleClick} className={`${activeMenu === 'menu' ? 'shadow-lg p-1' : ''}`}>-меню</a>
                        <a href='/' id='travel' onClick={handleClick} className={`${activeMenu === 'travel' ? 'shadow-lg p-1' : ''}`}>-перемещения</a>
                        <a href='/' id='invent' onClick={handleClick} className={`${activeMenu === 'invent' ? 'shadow-lg p-1' : ''}`}>-инвентаризация</a>
                        <a href='/' id='createProduct' onClick={handleClick} className={`${activeMenu === 'createProduct' ? 'shadow-lg p-1' : ''}`}>-выпуск товара</a>
                        <a href='/' id='minusMoney' onClick={handleClick} className={`${activeMenu === 'minusMoney' ? 'shadow-lg p-1' : ''}`}>-списание</a>
                        <a href='/' id='plusMoney' onClick={handleClick} className={`${activeMenu === 'plusMoney' ? 'shadow-lg p-1' : ''}`}>-накладные</a>
                    </div>
                </div>
            </div>
            Здесь будет меню
        </div>

    );
}
