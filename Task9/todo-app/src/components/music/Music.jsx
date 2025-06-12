import './Music.css'

function Music() {
    return (
        <main>
            <div className="banner one">
                <div className="musicImage">
                    <img src="album2.jpg" alt="Album cover for Code PostCast" />
                </div>
                <div className="musicName">
                    <h1>Code <br /> PostCast</h1>
                    <p>Banda OneBiteMusic</p>
                </div>
                <div className="musicTime">
                    <div>
                        <div>&#9198;</div>
                        <div>&#10022;</div>
                        <div>&#9197;</div>
                    </div>
                    <div><progress value="90" max="100"></progress></div>
                    <div>
                        <p>03:20</p>
                        <p>00:12</p>
                    </div>
                </div>
            </div>
            <div className="banner two">
                <div className="musicImageName">
                    <div className="musicImage">
                        <img src="album1.jpg" alt="Album cover for Code PostCast" />
                    </div>
                    <div className="musicName">
                        <h1>Code <br /> PostCast</h1>
                        <p>Banda OneBiteMusic</p>
                    </div>
                </div>
                <div className="musicTime">
                    <div>
                        <div>&#9198;</div>
                        <div>&#10022;</div>
                        <div>&#9197;</div>
                    </div>
                    <div><progress value="90" max="100"></progress></div>
                    <div>
                        <p>03:20</p>
                        <p>00:12</p>
                    </div>
                </div>
            </div>
            <div className="banner three">
                <div className="musicImageName">
                    <div className="musicImage">
                        <img src="album3.jpg" alt="Album cover for Code PostCast" />
                    </div>
                    <div className="musicName">
                        <h1>Code <br /> PostCast</h1>
                        <p>Banda OneBiteMusic</p>
                    </div>
                </div>
                <div className="musicTime">
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