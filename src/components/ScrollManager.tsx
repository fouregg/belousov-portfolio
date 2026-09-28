import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Scrolls to the #hash target after navigation, or to the top on a plain page change.
export function ScrollManager() {
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0 })
      return
    }
    const id = hash.slice(1)
    // The target section mounts on the same tick; give it a frame to paint.
    const raf = requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    })
    return () => cancelAnimationFrame(raf)
  }, [pathname, hash, key])

  return null
}
