import React from "react";
import Top from "./top/top"

const SplashPages = () => {
    return (
    <div className="splash">
        <div className="splash-slogan">
            <div className="slogan">
                TOP 100 LISTS
            </div>
            <Top/>
        </div>
        <hr/>
        <div className="splash-footer">
            <div className="splash-info">
                <h3>
                    About
                </h3>
                <ul>
                    <li>
                        Man Tat Masa Cheung
                    </li>
                    <li>
                        <a href="https://masacheung.github.io/portfolio/" target="_blank" rel="noreferrer noopener">Portfolio</a>
                    </li>
                </ul>
            </div>
            <div className="splash-info">
                <h3>
                    Contact
                </h3>
                <ul>
                    <li>
                        <a href="https://github.com/masacheung" target="_blank" rel="noreferrer noopener">Github</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/man-tat-masa-cheung-725b39b8/" target="_blank" rel="noreferrer noopener">LinkedIn</a>
                    </li>
                    <li>
                        <a href="https://angel.co/u/man-tat-masa-cheung" target="_blank" rel="noreferrer noopener">AngelList</a>
                    </li>
                </ul>
            </div>
            <div className="splash-info">
                <h3>More Projects</h3>
                    <ul>
                        <li>
                            <a href="https://masanote.herokuapp.com/#/" target="_blank" rel="noreferrer noopener">MasaNote</a>
                        </li>
                        <li>
                            <a href="https://triolingo-mern.herokuapp.com/#/" target="_blank" rel="noreferrer noopener">Triolingo</a>
                        </li>
                        <li>
                            <a href="https://masacheung.github.io/dropping_down/" target="_blank" rel="noreferrer noopener">Dropping Down</a>
                        </li>
                    </ul>
            </div>
        </div>
    </div>
    )
}

export default SplashPages;