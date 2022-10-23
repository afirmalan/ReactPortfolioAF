import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';


export default function PortfolioCard() {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            Work #1
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Calendar"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image=""
        alt="Calendar App"
      />
      <CardContent>
        
      </CardContent>
    
        <CardContent>
          <Typography paragraph>Work #1 title</Typography>
          <Typography paragraph>
           Work #1 Description
          </Typography>
         
        </CardContent>
    </Card>
  );
}
