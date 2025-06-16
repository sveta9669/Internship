import './Music.css'

function Music() {

    const banner = 'p-8 rounded-3xl bg-blue-700 w-full'
    const forImage = 'w-full rounded-3xl'
    return (
        <main>
            <div className={`${banner} row-start-1 row-span-2 flex flex-row justify-between gap-8`}>
                <div className='m-auto'>
                    <img className={forImage} src='/album2.jpg' alt='Album cover for Code PostCast' />
                </div>
                <div>
                    <h1>Code <br /> PostCast</h1>
                    <p className='mt-1 text-3xl text-white'>Banda OneBiteMusic</p>
                </div>
                <div className='musicTime'>
                    <div>
                        <div>&#9198;</div>
                        <div>&#10022;</div>
                        <div>&#9197;</div>
                    </div>
                    <div><progress value='90' max='100'></progress></div>
                    <div>
                        <p>03:20</p>
                        <p>00:12</p>
                    </div>
                </div>
            </div>
            <div className={`${banner} row-start-1 row-end-2 pt-6`}>
                <div className='w-full flex  justify-between flex-nowrap gap-9'>
                    <div className='w-[30%] m-auto'>
                        <img className={forImage} src='/album1.jpg' alt='Album cover for Code PostCast' />
                    </div>
                    <div className='w-[65%] text-left'>
                        <h1>Code <br /> PostCast</h1>
                        <p className='mt-1 text-3xl text-white'>Banda OneBiteMusic</p>
                    </div>
                </div>
                <div className='musicTime'>
                    <div>
                        <div>&#9198;</div>
                        <div>&#10022;</div>
                        <div>&#9197;</div>
                    </div>
                    <div><progress className='w-full apperance-none rounded-2xl' value='90' max='100'></progress></div>
                    <div>
                        <p>03:20</p>
                        <p>00:12</p>
                    </div>
                </div>
            </div>
            <div className={`${banner} row-start-2 row-end-3 pt-6`}>
                <div className='w-full flex justify-between flex-nowrap gap-9'>
                    <div className='w-[30%] m-auto'>
                        <img className={forImage} src='/album3.jpg' alt='Album cover for Code PostCast' />
                    </div>
                    <div className='w-[65%] text-left'>
                        <h1>Code <br /> PostCast</h1>
                        <p className='mt-1 text-3xl text-white'>Banda OneBiteMusic</p>
                    </div>
                </div>
                <div className='musicTime'>
                    <div>
                        <div>&#9198;</div>
                        <div>&#10022;</div>
                        <div>&#9197;</div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Music;