// Write your JS code here
const BlogItem = props => {
  const {blogsDetails} = props
  const {title, description, date} = blogsDetails

  return (
    <li>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <p>{date}</p>
    </li>
  )
}

export default BlogItem
