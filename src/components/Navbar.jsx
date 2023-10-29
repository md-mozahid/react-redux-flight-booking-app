import logo from '../assets/img/react.svg'
const Navbar = () => {
  return (
    <header id="header">
      <div className="container flex items-center justify-between">
        <img src={logo} alt="logo" />
        <div className="flex items-center">
          <a className="text-white px-5 text-lg cursor-pointer font-medium">Home</a>
          <a className="text-white px-5 text-lg cursor-pointer font-medium">Buy Ticket</a>
          <a className="text-white px-5 text-lg cursor-pointer font-medium">Booked</a>
          <a className="text-white px-5 text-lg cursor-pointer font-medium">Contact</a>
        </div>
        <button className="log-btn btn">Login</button>
      </div>
    </header>
  )
}

export default Navbar
