import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Contact = () => {
    return (
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image=" "
            alt="AdrianF"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Adrian Firmalan
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Address: 555 N Broadway Los Angeles, CA
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: 614-204-2863
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: afirmalan@yahoo.com
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    )
}

export default Contact