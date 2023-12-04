interface StarRatingProps {
  rating: number
}

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {

  const createStars = () => {
    const stars: React.ReactNode[] = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating - fullStars > 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FontAwesomeIcon icon={faStar} size='xs'  />)
    }
    if (hasHalfStar) {
      stars.push(<FontAwesomeIcon icon={faStarHalf} size='xs'  />)
    }

    return stars
  }

  return <div className='flex w-16 min-h-fit !h-5 text-yellow-400'>{createStars()} </div>
}

export default StarRating
