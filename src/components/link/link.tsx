import NextLink from 'next/link'
import { forwardRef, useMemo } from 'react'

// @ts-ignore
const Link = forwardRef(({ href, children, className, scroll, shallow, ...props }, ref) => {
  const attributes = {
    ref,
    className,
    ...props,
  }

  const isProtocol = useMemo(() => href?.startsWith('mailto:') || href?.startsWith('tel:'), [href])
  const isAnchor = useMemo(() => href?.startsWith('#'), [href])
  const isExternal = useMemo(() => href?.startsWith('http'), [href])

  if (typeof href !== 'string') {
    // @ts-ignore
    return <button {...attributes}>{children}</button>
  }

  if (isProtocol || isExternal) {
    return (
      // @ts-ignore
      <a {...attributes} href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  return (
    <NextLink
      href={href}
      passHref={isAnchor}
      shallow={shallow}
      scroll={scroll}
      {...attributes}
      {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
    >
      {children}
    </NextLink>
  )
})

Link.displayName = 'Link'

export default Link
