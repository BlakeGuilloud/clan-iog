import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

 class Home extends Component {
   render() {
     return (
       <div className="home">
        <div className="home-disclaimer">
          <h1>Clan iOg</h1>
          <p>
            This is a very basic site for uploading and downloading Warcraft 3 replays. Brought to you by Clan iOg!
          </p>
          <p>
            This project is in it's very early stages. Please be patient with any bugs you may encounter. Feel free to report them to me at <a href="mailto:fbguillo@gmail.com" target="_top">fbguillo@gmail.com</a>
          </p>
        </div>
        <hr/>
        <div className="home-disclaimer">
          <h1>About the Clan</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eaque soluta ad quas perferendis doloremque id. Fugit eligendi quas unde, eveniet voluptate atque ex quis, provident repellat tempora laborum totam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eaque soluta ad quas perferendis doloremque id. Fugit eligendi quas unde, eveniet voluptate atque ex quis, provident repellat tempora laborum totam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eaque soluta ad quas perferendis doloremque id. Fugit eligendi quas unde, eveniet voluptate atque ex quis, provident repellat tempora laborum totam.
          </p>
        </div>
        <hr/>
        <div className="home-youtube">
          <h2>Featured Cast:</h2>
          <iframe title="iog-cast" src="https://www.youtube.com/embed/cS4c7CGYFzw?ecver=1" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
        </div>
       </div>
     )
   }
 }

 export default Home;