import React from "react";

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";
import IconButton from "@material-ui/core/IconButton";
import { Apps, LinkedIn, Instagram, GitHub } from "@material-ui/icons";
import profile from "assets/img/faces/vedant.jpeg";
import Box from "@material-ui/core/Box";

import S1 from "assets/img/sat.jpg";

import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);
export default function Sat(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <GridContainer
        container
        spacing={6}
        justifyContent="center"
        alignItems="center"
        justify="center"
      >
        <GridItem xs={11} sm={8} md={4}>
          <Card>
            <CardHeader color="danger"> Technical work</CardHeader>
            <CardBody align="justify">
              Building the firmware from scratch for ’BeliefSat. BelifSat is
              pocket-cube satellite which is expected to be launched.
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={11} sm={8} md={4}>
          <Card>
            <CardHeader color="danger"> Management work</CardHeader>
            <CardBody align="justify">
              I supervise and manage the team which works on the firmware.
              <IconButton>
                <GitHub
                  color="primary"
                  onClick={() =>
                    window.open("https://github.com/NewLeapKjsieit/BeliefSat")
                  }
                />
              </IconButton>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
