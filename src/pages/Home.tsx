import { useEffect, useState } from "react"

const moviesUrl = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

export default function Home() {

  const [topMovies, setTopMovies] = useState([])

  const getTopRatedMovies = async (url) => {

    const res = await fetch(url)
    const data = await res.json()

    setTopMovies(data.results)
  }

  useEffect(() => {
    const topRatedUrl = `${moviesUrl}/top_rated?${apiKey}`
    getTopRatedMovies(topRatedUrl)

  }, [])
  return (
    <div>
      {topMovies && topMovies.map((item) => (item.title))}
    </div>
  )
}
