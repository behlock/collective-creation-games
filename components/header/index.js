import Link from 'next/link'
import s from './header.module.scss'

export const Header = () => {
  // const isMobile = useMediaQuery('(max-width: 800px)')
  // const visible = usePageAppear()

  return (
    <header className={s.container}>
      <div className={s.title}>
        <Link href="/">
          <h3>Collective Creation Games</h3>
        </Link>
      </div>
      {/* <div className={s.nav}>
        <ul>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div> */}
    </header>
  )
}