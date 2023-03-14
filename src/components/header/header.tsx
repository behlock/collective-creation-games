import Link from 'next/link'

import { useEffect } from 'react'
import { useCookies } from 'react-cookie'

import AlertDialog from "@/components/alert-dialog"

const Header = () => {
  const [cookies, setCookie] = useCookies(['showDialog'])

  useEffect(() => {
    if (cookies.showDialog === undefined) {
      setCookie('showDialog', true, { path: '/' })
    } else {
      setCookie('showDialog', false, { path: '/' })
    }
  })

  return (
    <header className="z-20">
      <div className="font-extrabold text-3xl mb-2 mr-8 flex flex-row flex-wrap space-x-2 z-20">
        <Link href="/">
          <h3>Collective Creation Games</h3>
        </Link>
        {cookies.showDialog && <AlertDialog isOpen={cookies.showDialog === 'true'} />}
      </div>
    </header>
  )
}

export default Header