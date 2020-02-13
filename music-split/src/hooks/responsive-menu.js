import { useRef, useState, useLayoutEffect, useEffect } from "react"

const getElementMargin = el => {
  const style = window.getComputedStyle(el)
  const leftMargin = parseInt(style.marginLeft.split("px")[0])
  const rightMargin = parseInt(style.marginLeft.split("px")[0])
  return leftMargin + rightMargin
}

export const useResponsiveMenu = ({
  containerRef,
  menuItems,
  spaceForMoreLink = 50,
}) => {
  const [menu, setMenu] = useState({
    visibleItems: menuItems,
    hiddenItems: [],
    areLinksHidden: false,
  })

  useLayoutEffect(() => {
    const handleResize = () => {
      setMenu({
        visibleItems: menuItems,
        hiddenItems: [],
        areLinksHidden: false,
      })

      const { offsetWidth: containerWidth } = containerRef.current

      // Reserve space for "More" (...) button
      const maxWidth = containerWidth - spaceForMoreLink - 50

      const items = containerRef.current.children
      // We assume menu items to share the same margins
      const itemMargin = getElementMargin(items[0])

      const { offsetWidth: lastItemWidth } = items[items.length - 1]
      const canLastItemFit = lastItemWidth <= spaceForMoreLink ? true : false

      const menuResult = Array.from(items).reduce(
        (result, menuItem, index) => {
          result.cumulativeWidth += menuItem.offsetWidth + itemMargin

          const { text, path, partiallyActive } = menuItems[index]

          result.cumulativeWidth < maxWidth
            ? result.visibleItems.push({
                text,
                path,
                partiallyActive: !!partiallyActive,
              })
            : result.hiddenItems.push({
                text,
                path,
                partiallyActive: !!partiallyActive,
              })

          return result
        },
        {
          cumulativeWidth: 0,
          offset: containerRef.current.getBoundingClientRect().height,
          visibleItems: [],
          hiddenItems: [],
        }
      )

      const { visibleItems, hiddenItems, offset } = menuResult

      // Check can we swap the "more" button with the only hidden item

      setMenu({ visibleItems, hiddenItems, offset })
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [containerRef])

  if (menu.hiddenItems.length !== 0) {
    menu.areLinksHidden = true
  }

  return { menu }
}
