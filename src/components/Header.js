import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        {/* <div className="logo">
            <span className="icon fa-diamond"></span>
        </div> */}
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Intro</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Portfolio</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>What's Next</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
        <div className="content">
            <div className="inner">
                <h1>Kaitlin Park</h1>
                <p>I am a professional golfer turned Software Developer.
                    <br/> Similar to my passion for golf, I found the same motivation and excitement within code.</p>
            </div>
        </div>
        <div className="skill">
            <div className="inner">
                <h2>Skills</h2>
                <p>HTML5 | CSS3 | Javascript | Python <br/>
                React | React Native |  Node.js | Express | MongoDB | Mongoose | EJS | Flask | Jinja | SQL | PostgreSQL | MySQL | SQLite<br/> RESTful API | Postman | Git | Github | Heroku | Netlify | GatsbyJS | Sass | Bootstrap | Material UI | Materialize</p>
            </div>
        </div>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
