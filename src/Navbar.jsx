import Brand from './assets/chevron.svg'

function Navbar() {
  const NavLinks = [
    { id: 1, name: 'Home', href: '/' },
    { id: 2, name: 'Blog', href: '/blog' },
    { id: 3, name: 'Projects', href: '/projects' },
    { id: 4, name: 'About', href: '/about' },
    { id: 5, name: 'Contact', href: '/contact' }
  ]
  return (
    <nav>
      <div>
        <img src={Brand} alt="Your logo" />
      </div>
      <div>
        <ul>
          {NavLinks.map((link) => (
            <li key={link.id}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
