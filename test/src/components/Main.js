import React from 'react'

export default function Main() {
    return (
        <main className='mt-10 bg-blue-200 w-2.3'>
            <div className='grid grid-cols-6 text-center ml-10'>
                <div>Название меню </div>
                <div>Филиал</div>
                <div>Торговая точка </div>
                <div>Активно</div>
                <div>Экспорт </div>
                <div></div>

                {/* Из данных полей сделать поисковые строки*/}

            </div>
            <div className='grid grid-cols-6 text-center ml-10'>
                <div> Насыщеное </div>
                <div> Москва</div>
                <div>Сушу кручу </div>
                <div>Активно</div>
                <div>Яндекс </div>
                <div className='flex'>
                    <a href='...'>
                        <img src='...' alt='icon' />
                    </a>
                    <a href='...'>
                        <img src='...' alt='icon' />
                    </a>
                    <a href='...'><img src='...' alt='icon' />
                    </a>
                </div>

                {/* Связать данные поля с поисковой строкой*/}


            </div>
            {/* Здесь будет распологаться пагинация*/}
        </main>
    )
}
