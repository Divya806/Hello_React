const Title = () => (
    <img alt="logo-image" className="w-24 px-2 py-2" src="https://cdn3.vectorstock.com/i/1000x1000/98/62/logo-for-fast-food-vector-23019862.jpg" />
  )

const Header = () => {
    return (
        <div className="flex justify-between bg-cyan-500 shadow-lg shadow-indigo-500/50">
        <Title />
        <div>
        <ul className="flex py-10 px-10">
            <li className="px-2">About US</li>
            <li className="px-2">Contact</li>
            <li className="px-2">Home</li>
            <li className="px-2">Cart</li>
        </ul>
        </div>
        </div>
    )
}

export default Header