
import Content from './Content'
import Header from '../../Header/index'
export default function Default({children }) {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  )
}
