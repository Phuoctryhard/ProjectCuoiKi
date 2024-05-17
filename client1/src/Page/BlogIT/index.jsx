import { Card } from '../../component/Blog/Card.jsx'
import { Category } from '../../component/category/Category'

const BlogIT = () => {
  return (
    <div>
      <Category />
      <div>
      <h1 style={{fontSize:'24px', fontWeight:'600', marginLeft:'30px' , marginTop:'20px'}}>Tech blogs</h1>
      </div>
      <Card />
    </div>
  )
}

export default BlogIT
