import React from 'react';
import './DetailsMovie.model.css'



export default function DetailsMovie(props) {


  return (
    <>
    <div class="wrapper">
    	<div class="main_card">
    		<div class="card_left">
    			<div class="card_datails">
    				<h1>Mission: Impossible – Fallout</h1>
    				<div class="card_cat">
    					<p class="PG">PG - 13</p>
    					<p class="year">2018</p>
    					<p class="genre">Action | Adventure </p>
    					<p class="time">2h 28m</p>
    				</div>
    				<p class="disc">Ethan Hunt and his IMF team, along with some familiar allies, race against time after a mission gone wrong.</p>
    				<a href="https://www.imdb.com/title/tt4912910/" target="_blank">Read More</a>
    			<div class="social-btn">

    				<button>
    					<i class="fas fa-play"></i> SEE TRAILER
    				</button>

    				<button>
    					<i class="fas fa-download"></i> DOWNLOAD
    				</button>

    				<button>
    					<i class="fas fa-thumbs-up"></i> 97%
    				</button>

    				<button>
    					<i class="fas fa-star"></i>RENT
    				</button>
    			</div>
    			</div>
    		</div>
    		<div class="card_right">
    			<div class="img_container">
    				<img src="https://upload.wikimedia.org/wikipedia/en/f/ff/MI_%E2%80%93_Fallout.jpg" alt=""/>
    				</div>
    				<div class="play_btn">
    					<a href="https://www.imdb.com/title/tt4912910/" target="_blank">
    						<i class="fas fa-play-circle"></i>
    					</a>
    				</div>
    			</div>
    		</div>
    	</div>
  </>
  )
}
