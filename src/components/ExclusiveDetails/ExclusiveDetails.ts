import type { SyntheticEvent } from 'react'

export function closeOtherDetails(event: SyntheticEvent<HTMLDetailsElement>) {
  const current = event.currentTarget

  if (!current.open) return

  const group = current.closest<HTMLElement>('[data-exclusive-details]')

  group
    ?.querySelectorAll<HTMLDetailsElement>('details[open]')
    .forEach((item) => {
      if (item !== current) item.open = false
    })
}
