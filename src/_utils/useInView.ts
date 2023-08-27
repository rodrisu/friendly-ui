import { MutableRefObject, useEffect, useState } from 'react'

const mockIntersectionObserver = {
  disconnect: (): void => {},
  observe: (): void => {},
}

export const useInView = (
  item: MutableRefObject<HTMLElement>,
  // Destructure the object, we only want to track changes to the values it
  // contains, not the object itself.
  { root, rootMargin, threshold }: Partial<IntersectionObserverInit>,
): boolean => {
  const [entry, updateEntry] = useState<IntersectionObserverEntry>(null)

  useEffect(() => {
    let intersectionObserver: IntersectionObserver | typeof mockIntersectionObserver = null

    const isSupported = window && typeof window.IntersectionObserver !== 'undefined'
    if (!isSupported) {
      // Add fake implementation when not supported: Old browsers or nodejs tests.
      intersectionObserver = mockIntersectionObserver
    } else {
      // We update the state with only the first element that we receive in the callback
      intersectionObserver = new window.IntersectionObserver(
        ([element]: Array<IntersectionObserverEntry>) => updateEntry(element),
        { root, rootMargin, threshold },
      )
    }

    if (item.current) {
      intersectionObserver.observe(item.current)
    }

    return (): void => intersectionObserver.disconnect()
  }, [item, root, rootMargin, threshold])

  return entry ? entry.isIntersecting : false
}
