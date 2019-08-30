import React from 'react';
import PropTypes from 'prop-types';

import golfPic from '../images/golfpic.jpg';
import bigTen from '../images/bigTenTeam.jpg';
import cactusTour from '../images/cactusTour.png';
import mind8full from '../images/mind8full.png';
import winePost from '../images/winepost.png';
import hexaSays from '../images/hexasays.png';
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Intro</h2>
          <p>Hello and Welcome to my portfolio!</p> 
          <p>My name is Kaitlin and I am professional golfer turned software developer.</p>
          <span className="image main"><img className="intro-img" src={golfPic} alt="" /></span>
          {/* <p>I was born and raised in Orange County, California, and because I loved the OC so much I decided to go to college in Chicago, Illinois, winter wonderland *cough* (polar vortex). But in all honesty, I loved Northwestern and the city of Chicago. During college, I grew academically, athletically, and personally. Most importantly, I had the opportunity to play golf with the best teammates ever and even make Northwestern Athletics history.</p>
          <span className="image main"><img src={bigTen} alt="" /></span>
          <p>If only I studied computer science... I had always been interested in computer science and software development, but I always had this fear that I wasn't intelligent enough. In addition, I was determined to play golf professionally. </p>
          <p>After graduating, I earned my Symetra Tour card, a developmental tour of the LPGA, and competed across the United States for a year. Unfortunately for a number of reasons, I decided to quit playing competitively. It was the most difficult decision I have ever made. I played golf for 12 years and for 10 years I aspired to play professionally. I really loved the game and trained as hard as I could. At the time, it truly felt as if I had been running down one career path and suddenly hit a dead end. </p> */}

          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Portfolio</h2>
          <h3>mind8full</h3>
          <span className="image main"><img src={mind8full} alt="" /></span>
          <p>mind8full is an application that hopes to provide a space for personal meditation. We want our visitors to take care of their mental health in the method they see fit. As you may know meditation takes many forms, at mind8full we do it in the form of snacks: gummy bears, cough drops, and some munchies.</p>
          <strong>Technologies Used:</strong><p>HTML5 | CSS3 | JSX | React | styled-components | Node.js | Express | MongoDB | Mongoose | Git | GitHub | ChromeDevTools | Postman | Sketch</p>

          <h3>The Cactus Tour</h3>
          <span className="image main"><img src={cactusTour} alt="" /></span>
          <p>I decided to recreate a web application I used during my golf career, The Cactus Tour <a className="tour-link" href="http://thecactustour.com">website</a>. The Cactus Tour is a women's professional golf tour that is geared toward players striving to get their LPGA card, which is one of the largest and most competitive women's golf tour in the world. I worked with the tour director and challenged myself to implement features and functionalities he wanted to see in the redesign.</p>
          <strong>Technologies Used:</strong><p>HTML5 | CSS3 | JSX | React | styled-components | Node.js | Express | MongoDB | Mongoose | Git | GitHub | ChromeDevTools | Postman | Sketch</p>

          <h3>WinePost</h3>
          <span className="image main"><img src={winePost} alt="" /></span>
          <p>Wine Post is a social media app for wine enthusiasts by wine enthusiasts, Ralphie, my partner for this project and myself! Users (over 21 please) can create an account to connect with fellow wine enthusiasts around the world. Users can share their reviews of and experiences with wine.</p>
          <strong>Technologies Used:</strong><p>HTML5 | CSS3 | JSX | React | styled-components | Python | Flask | PostgreSQL | SQLite | Mongoose | Git | GitHub | ChromeDevTools | Postman | Sketch</p>

          <h3>Hexa-Says</h3>
          <span className="image main"><img src={hexaSays} alt="" /></span>
          <p>Hexa-Says is a unique version of the classic game, Simon Says. The rules to Simon Says are simple: a sequence will be played and the user will need to play the exact same sequence in order to move on. My goal with this project was to take a classic game and make it a bit more fun, challenging, but also asthetically pleasing.</p>
          <strong>Technologies Used:</strong><p>HTML5 | CSS3 | Node.js | Express | EJS | MongoDB | Mongoose | Git | GitHub | Heroku</p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <p>Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main