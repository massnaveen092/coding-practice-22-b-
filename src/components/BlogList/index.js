// Write your JS code here
import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsList} = props

  return (
    <ul>
      {blogsList.map(each => (
        <BlogItem key={each.id} blogsDetails={each} />
      ))}
    </ul>
  )
}

export default BlogList
