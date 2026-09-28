import { useEffect } from 'react'
import type { Meta } from '../content'

export function SiteMeta({ meta }: { meta: Meta }) {
  useEffect(() => {
    document.title = meta.title
    let tag = document.querySelector('meta[name="description"]')
    if (!tag) {
      tag = document.createElement('meta')
      tag.setAttribute('name', 'description')
      document.head.appendChild(tag)
    }
    tag.setAttribute('content', meta.description)
  }, [meta])

  return null
}
