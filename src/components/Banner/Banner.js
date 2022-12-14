import React from 'react'
import { createStyles, makeStyles} from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';
import Carousel from './Carousel';

const useStyles = makeStyles(() => 
    createStyles({
        banner: {
            backgroundImage: "url(./banner2.jpg)",
        },
        bannerContent: {
            height: 400,
            display: "flex",
            flexDirection: "column",
            paddingTop: 25,
            justifyContent: "space-around",
        },
        tegline: {
            display: "flex",
            height: "40%",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
        },
}));

const Banner = () => {

    const classes = useStyles();

  return (
    <div className={classes.banner}>
        <Container className={classes.bannerContent}>
            <div className={classes.tagline}>
                <Typography
                  variant="h2"
                  style={{
                    fontWeight: "bold",
                    marginBottom: 15,
                    fontFamily: "Montserrat",
                  }}
                  >
                    Crypto Hunter
                </Typography>
                <Typography
                  variant="subtitle2"
                  style={{
                    color: "darkgrey",
                    textTransform: "capitalize",
                    fontFamily: "Montserrat",
                  }}
                  >
                    Get all the info regarding your favourite Crypto Currency
                </Typography>
            </div>
            <Carousel />
        </Container>
    </div>
  )
}

export default Banner