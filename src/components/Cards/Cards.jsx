import React from "react";

import styles from "./Cards.module.css";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CountUp from "react-countup";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading...";
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justified="center">
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <CountUp
              start={0}
              end={confirmed.value}
              duration={2}
              separator=","
            />
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Num of active cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recoverd
            </Typography>
            <CountUp
              start={0}
              end={recovered.value}
              duration={2}
              separator=","
            />
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Num of recoveries from COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              deaths
            </Typography>
            <CountUp
              start={0}
              end={deaths.value}
              duration={2}
              separator=","
            />
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">Num of deaths by COVID-19</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
