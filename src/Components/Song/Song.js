import React from 'react';
import './Song.css';

const Song = ({ song }) => {
	const youtubeQuery = `${song.artist.name
		.split(' ')
		.join('+')}+${song.name.split(' ').join('+')}`;
	return (
		<div className='song-container'>
			<div className='song'>
				<img src='/vinyl-placeholder.png' alt='' />
				<div className='song-text'>
					<h2>{song.name}</h2>
					by
					<h3>{song.artist.name}</h3>
					<div className='song-links'>
						<button>
							<a href={song.url} target='_blank' rel='noreferrer'>
								Last.fm
							</a>
						</button>
						<button>
							<a
								href={`https://www.youtube.com/results?search_query=${youtubeQuery}`}
								target='_blank'
								rel='noreferrer'>
								YouTube
							</a>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Song;
