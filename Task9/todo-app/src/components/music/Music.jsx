import './Music.css'

function Music() {

    const banner = 'p-11 rounded-3xl bg-yellow-700 w-full bg-opacity-40'
    const forImage = 'w-full rounded-2xl'
    return (
        <main className='grid [grid-template-columns:1fr_1.5fr] [grid-template-rows:1fr_1fr] gap-8 w-[60%] h-screen m-auto p-10'>
            <div className={`${banner} row-start-1 row-span-2 flex flex-col justify-between gap-8`}>
                <div className=''>
                    <img className={forImage} src='/album2.jpg' alt='Album cover for Code PostCast' />
                </div>
                <div>
                    <h1 className='text-3xl font-semibold'>Code <br /> PostCast</h1>
                    <p className='mt-1 text-3xl text-gray-600'>Banda OneBiteMusic</p>
                </div>
                <div>
                    <div className='my-6 flex justify-around flex-nowrap gap-5'>
                        <div className='text-5xl'>&#9198;</div>
                        <div className='text-5xl'>&#10022;</div>
                        <div className='text-5xl'>&#9197;</div>
                    </div>
                    <div className='my-6'><progress className='w-full appearance-none rounded-2xl' value='90' max='100'></progress></div>
                    <div className='my-6 flex justify-around flex-nowrap gap-5'>
                        <p className='text-3xl'>03:20</p>
                        <p className='text-3xl'>00:12</p>
                    </div>
                </div>
            </div>
            <div className={`${banner} row-start-1 row-end-2 pt-6`}>
                <div className='w-full flex  justify-between flex-nowrap gap-9'>
                    <div className='w-[30%] m-auto'>
                        <img className={forImage} src='/album1.jpg' alt='Album cover for Code PostCast' />
                    </div>
                    <div className='w-[65%] text-left'>
                        <h1 className='text-3xl font-semibold'>Code <br /> PostCast</h1>
                        <p className='mt-1 text-3xl text-gray-600'>Banda OneBiteMusic</p>
                    </div>
                </div>
                <div>
                    <div className='my-6 flex justify-around flex-nowrap gap-5'>
                        <div className='text-5xl'>&#9198;</div>
                        <div className='text-5xl'>&#10022;</div>
                        <div className='text-5xl'>&#9197;</div>
                    </div>
                    <div className='my-6'><progress className='w-full appearance-none rounded-2xl' value='90' max='100'></progress></div>
                    <div className='my-6 flex justify-between flex-nowrap gap-5'>
                        <p className='text-3xl'>03:20</p>
                        <p className='text-3xl'>00:12</p>
                    </div>
                </div>
            </div>
            <div className={`${banner} row-start-2 row-end-3 pb-4`}>
                <div className='w-full flex justify-between flex-nowrap gap-9'>
                    <div className='w-[30%] m-auto'>
                        <img className={forImage} src='/album3.jpg' alt='Album cover for Code PostCast' />
                    </div>
                    <div className='w-[65%] text-left'>
                        <h1 className='text-3xl font-semibold'>Code <br /> PostCast</h1>
                        <p className='mt-1 text-3xl text-gray-600'>Banda OneBiteMusic</p>
                    </div>
                </div>
                <div>
                    <div className='my-6 flex justify-around flex-nowrap gap-5'>
                        <div className='text-5xl'>&#9198;</div>
                        <div className='text-5xl'>&#10022;</div>
                        <div className='text-5xl'>&#9197;</div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Music;