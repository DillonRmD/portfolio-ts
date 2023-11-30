import '../css/left-container.css'
import Contact from './Contact';

export default function LeftContainer() {
    return(
        <div className="container">
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap');
            </style>
            <div className="title">
                <h1 className="shimmer-text">Dillon Williams</h1>
                <h2>Fullstack Software Engineer</h2>
            </div>
            <div>
                <p>As a lifelong learner and seasoned full-stack web developer, I've contributed my expertise to senior roles on AGILE teams, playing a pivotal role in developing complex software solutions that impact millions.</p>
            </div>
            <div className="degree-info">
                <p><strong>Bachelor's Of Computer Science 2022 ━ GPA 3.6</strong></p>
            </div>

            <Contact />
        </div>
    );
}