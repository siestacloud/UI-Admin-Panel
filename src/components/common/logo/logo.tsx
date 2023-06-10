interface props {
  logo: string
}

export function Logo({logo}:props) {
  return (
    <a href="/" className='logo'>{logo}</a>
  )
}

