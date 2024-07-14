import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilials } from './filialSlice';
import axios from 'axios';

export function Home() {
    const dispatch = useDispatch();
    const filials = useSelector(state => state.filial);

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
                    <div className='mt-10 grid '>
                        <label htmlFor="filial">Филиал: </label>
                        <select id='filial' className='border-2 border-solid border-sky-950 rounded-md'>
                            <option>Выберите филиал</option>
                            {filials.map(filial => (
                                <option key={filial.id} value={filial.id}>{filial.name}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                    <img className='mt-[-16px] mb-[-10px] opacity-40'width='230' src='https://d2bzx2vuetkzse.cloudfront.net/fit-in/0x450/unshoppable_producs/1e88e851-f5b4-4a5d-9aef-25a29b2851d2.png' alt='notebook' />
                    </div>
                    <div className='mt-10 grid grid-rows-9 mt-0 overflow-y-scroll color-blue-200'>
                        <a href='...'>-компоненты</a>
                        <a href='...'>-полуфабрикаты</a>
                        <a href='...'>-товары</a>
                        <a href='...'>-меню</a>
                        <a href='...'>-перемещения</a>
                        <a href='...'>-инвентаризация</a>
                        <a href='...'>-выпуск товара</a>
                        <a href='...'>-списание</a>
                        <a href='...'>-накладные</a>
                    </div>
                    {/* Сделать эдементами (табами для возможности переключения без перезагрузок)*/}
                </div>
            </div>
            Здесь будет меню
        </div>

    );
}
