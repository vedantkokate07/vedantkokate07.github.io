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

import P1 from "assets/img/predictQ/dashboard.PNG";
import P2 from "assets/img/predictQ/home.PNG";
import P3 from "assets/img/predictQ/queue_dashboard.PNG";
import P4 from "assets/img/predictQ/patients_view.PNG";

import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);
export default function PredictQ(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <GridContainer container spacing={6} justify="center">
        <GridItem xs={12} sm={6} md={3}>
          <Box borderColor="grey.300" borderRadius="5%" border={1}>
            <img alt="..." src={P1} className={navImageClasses} />
          </Box>
        </GridItem>

        <GridItem xs={12} sm={6} md={3}>
          <Box borderColor="grey.300" borderRadius="5%" border={1}>
            <img alt="..." src={P3} className={navImageClasses} />
          </Box>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Box borderColor="grey.300" borderRadius="5%" border={1}>
            <img alt="..." src={P2} className={navImageClasses} />
          </Box>
        </GridItem>
        <GridItem xs={8} sm={3} md={1}>
          <Box borderColor="grey.300" borderRadius="5%" border={1}>
            <img alt="..." src={P4} className={navImageClasses} />
          </Box>
        </GridItem>
      </GridContainer>

      <GridContainer
        container
        spacing={6}
        justifyContent="center"
        alignItems="center"
        justify="center"
      >
        <GridItem xs={11} sm={8} md={4}>
          <Card>
            <CardHeader color="danger"> Project description</CardHeader>
            <CardBody align="justify">
              This Webapp will be used by hospitals and clinics, but it's domain
              is versite enought to fit anywhere which requires queue
              prediction. This app provied accurate time required for patient's
              turn to show up in an hospital. It also tells time reuqired for
              each taks in the hospital like billing, buying medicine, etc.
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={11} sm={8} md={4}>
          <Card>
            <CardHeader color="danger"> My work</CardHeader>
            <CardBody align="justify">
              This was a problem statement of{" "}
              <a href="https://deepblue.co.in/about/"></a>Project DeepBlue (3
              months long hackathon). As data is not avaiable for this kind of
              problem statement, I worked on simulating the data, ML model for queue time prediction
             and the front end of this project. We were semifinalist for this hackathon.
             Refer Github repo for information.
              <IconButton>
                <GitHub
                  color="primary"
                  onClick={() =>
                    window.open("https://github.com/Phoenix009/DeepBlue-PQWT")
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
