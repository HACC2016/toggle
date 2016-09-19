const React = require('react')
const { Link } = require('react-router')

const ShowCard = (props) => (
	<Link to={`/details/${props.imdbID}`}>
		<div className='show-card'>
			<img src={`/img/posters/${props.poster}`} className='show-card-img' />
			<div className='show-card-text'>
				<h3 className='show-card-title'>{props.title}</h3>
				<h4 className='show-card-year'>({props.year})</h4>
				<img src={`/img/posters/${props.rank}`} className='show-card-img' />
			</div>
		</div>
	</Link>
)
const { string } = React.PropTypes

ShowCard.propTypes = {
	rank: string.isRequired,
  title: string.isRequired,
  year: string.isRequired,
  poster: string.isRequired,
  imdbID: string.isRequired
}

module.exports = ShowCard