import './Title.css'
const Title = ({ children, big }) => (
  <h2 className={`Title ${big && 'big'}`}>{children}</h2>
)
export default Title
