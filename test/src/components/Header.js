import React from 'react'

export default function Header() {
    return (
        <header className=" mt-10 ml-10 bg-gray-400 w-1/4 ">
            <div className='flex flex-col'>
                <div className="flex flex-col w-15">
                    <div className='flex'>
                        <img src='../gallery/logo.png' alt='логотип' className='mr-2' />
                        Название фирмы
                    </div>
                    <div>
                        Лоскутников В.П.
                    </div>
                </div>
                <div>
                <img src='../gallery/logo.png' alt='логотип' className='mr-2' />
                    Складской учет
                </div>
            </div>
            <div className='mt-10'>
            <label for="city">Филиал</label>
                    <select id='city'>
                        <option value='1'>Иркутск</option> {/* Редактировать для работы бека*/}
                    </select>
            </div>
            <div className='mt-10 grid grid-rows-9  '>
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
        </header>
    )
}
