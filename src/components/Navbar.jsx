import logo from '../assets/img/react.svg'
const Navbar = () => {
  return (
    <header id="header">
      <div className="container">
        <img src={logo} alt="logo" />
        <div className="flex items-center">
          <a className="text-white min-w-[50px] font-medium">Home</a>
          <a className="text-white min-w-[50px] font-medium">About</a>
          <a className="text-white min-w-[50px] font-medium">Contact</a>
          <button className="log-btn btn">Login</button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
