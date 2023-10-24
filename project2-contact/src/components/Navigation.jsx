import "./Navigation.css"
const Navigation = () => {
  return (
    <div>
      <nav className="navigation container">
        <div className="logo">
          <img src="/images/logo.png" alt="main logo" />
        </div>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
      </nav>
    </div>
  )
}

export default Navigation
