import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import userDefault from '../../assets/userDefault.jpeg'

export function Profile() {
  return (
    <Card sx={{ display: 'flex', padding: '20px 20px' }}>
      <CardMedia
        component="img"
        sx={{ width: 200, mr: '30px' }}
        image={userDefault}
        alt="User image"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            First Name
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Last name
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            email
          </Typography>
        </CardContent>
      </Box>
    </Card>
  )
}
