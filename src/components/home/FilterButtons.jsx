import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const genreList = ['all', 'movie', 'series', 'episode']

function FilterButtons() {
  return (
    <Box
      sx={{
        textTransform: 'capitalize',
        display: 'flex',
        justifyContent: 'center',
        gap: 2
      }}
    >
      {genreList.map((genre) => (
        <Button key={genre} variant="outlined">{genre}</Button>
      ))}
    </Box>
  )
}

export default FilterButtons
