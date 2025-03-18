import { useState, useEffect, useCallback } from "react"
import { Container } from "./BackgroundGridCSS"
import colors from "../../constants/colors"

function BackgroundGrid() {
  const [grid, setGrid] = useState([])
  const size = Math.round(window.innerWidth / 30)

  const generateGrid: any = useCallback(() => {
    return Array.from({ length: size * size }, () =>
      Math.random() > (size > 15 ? 0.01 : 0.08)
        ? "#ffffff"
        : colors.DK_DARK_BLUE
    )
  }, [size])

  useEffect(() => {
    console.log(size)
    setGrid(generateGrid())
  }, [generateGrid])

  return (
    <Container>
      {grid.map((color, index) => (
        <div
          key={index}
          className="grid-item"
          style={{ backgroundColor: color }}
        ></div>
      ))}
    </Container>
  )
}

export default BackgroundGrid
