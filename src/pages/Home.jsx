import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
// import FilterButtons from '../components/home/FilterButtons'
import MovieList from '../components/home/MovieList'

export default function Home() {
  return (
    <>
      <Box>
        <MovieList />
      </Box>
      <Divider />
    </>
  )
}
