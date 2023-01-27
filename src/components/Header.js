const Title = () => (
    <img alt="logo-image" className ="custom-image" src="https://cdn3.vectorstock.com/i/1000x1000/98/62/logo-for-fast-food-vector-23019862.jpg" />
  )

const Header = () => {
    return (
        <div className="header">
        <Title />
        <div className="nav-items">
        <ul>
            <li>About US</li>
            <li>Contact</li>
            <li>Home</li>
            <li>Cart</li>
        </ul>
        </div>
        </div>
    )
}

export default Header