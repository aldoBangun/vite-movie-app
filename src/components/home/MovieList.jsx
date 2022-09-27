import { useState, useEffect, useCallback } from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'
import { motion } from 'framer-motion'
import MovieItem from './MovieItem'

const { VITE_APP_API_URL, VITE_APP_API_KEY } = import.meta.env
const genreList = ['all', 'movie', 'series']

function MovieList() {
  const [movies, setMovies] = useState([])
  const [genre, setGenre] = useState('all')

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `${VITE_APP_API_URL}/?apikey=${VITE_APP_API_KEY}&s=ave&type=${genre === 'all' ? '' : genre}`
        )
        const data = await response.json()
        setMovies(data.Search)
      } catch (err) {
        console.log(err)
      }
    }

    fetchData()
  }, [genre])

  const handleChangeGenre = useCallback((e) => {
    const { genre: movieGenre } = e.target.dataset
    setGenre(movieGenre)
  }, [setGenre])

  if (!movies.length) return <p>No movies.</p>

  return (
    <>
      <Box
        sx={{
          textTransform: 'capitalize',
          display: 'flex',
          justifyContent: 'center',
          gap: 2,
        }}
      >
        {genreList.map((item) => (
          <Button
            key={item}
            variant={item === genre ? 'contained' : 'outlined'}
            data-genre={item}
            onClick={handleChangeGenre}
          >
            {item}
          </Button>
        ))}
      </Box>

      <Divider sx={{ my: 4 }} />

      <Grid container spacing={4}>
        {movies.map((movie) => (
          <Grid
            component={motion.div}
            key={movie.imdbID}
            item
            xs={12}
            sm={6}
            md={4}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <MovieItem
              title={movie.Title}
              year={movie.Year}
              image={movie.Poster}
            />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default MovieList
