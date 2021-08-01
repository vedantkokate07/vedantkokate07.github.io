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

import agri1 from "assets/img/Agripool/3.jpeg";
import agri2 from "assets/img/Agripool/5.jpeg";
import agri3 from "assets/img/Agripool/6.jpeg";
import agri4 from "assets/img/Agripool/7.jpeg";
import agri5 from "assets/img/Agripool/8.jpeg";
import agri6 from "assets/img/Agripool/9.jpeg";
import agri7 from "assets/img/Agripool/10.jpeg";

import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);
export default function Agripool(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <GridContainer container spacing={6} justify="center">
        <GridItem xs={5} sm={3} md={1}>
          <Box borderColor="grey.300" borderRadius="5%" border={1}>
            <img alt="..." src={agri1} className={navImageClasses} />
          </Box>
        </GridItem>

        <GridItem xs={5} sm={3} md={1}>
          <Box borderColor="grey.300" borderRadius="5%" border={1}>
            <img alt="..." src={agri2} className={navImageClasses} />
          </Box>
        </GridItem>

        <GridItem xs={5} sm={3} md={1}>
          <Box borderColor="grey.300" borderRadius="5%" border={1}>
            <img alt="..." src={agri3} className={navImageClasses} />
          </Box>
        </GridItem>

        <GridItem xs={5} sm={3} md={1}>
          <Box borderColor="grey.300" borderRadius="5%" border={1}>
            <img alt="..." src={agri4} className={navImageClasses} />
          </Box>
        </GridItem>

        <GridItem xs={5} sm={3} md={1}>
          <Box borderColor="grey.300" borderRadius="5%" border={1}>
            <img alt="..." src={agri5} className={navImageClasses} />
          </Box>
        </GridItem>

        <GridItem xs={5} sm={3} md={1}>
          <Box borderColor="grey.300" borderRadius="5%" border={1}>
            <img alt="..." src={agri6} className={navImageClasses} />
          </Box>
        </GridItem>

        <GridItem xs={5} sm={3} md={1}>
          <Box borderColor="grey.300" borderRadius="5%" border={1}>
            <img alt="..." src={agri7} className={navImageClasses} />
          </Box>
        </GridItem>
      </GridContainer>

      <GridContainer
      container spacing={6}
        justifyContent="center"
        alignItems="center"
        justify="center"
      >
        <GridItem xs={11} sm={8} md={4}>
          <Card>
            <CardHeader color="danger"> Project description</CardHeader>
            <CardBody>
              Agripool is a cross-platform native application. This is an app
              that connects the farmers to the transporters. The aim was to make
              sure that a transporter's truck never leaves half filled from the
              village when going to the wholesale market. This ensures
              significant gains to the transporters and reduced transportation
              expenses for the farmers. In simple terms, it is uberpool for
              farmers.
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={11} sm={8} md={4}>
          <Card>
            <CardHeader color="danger"> My work</CardHeader>
            <CardBody>
              My team used flutter to build this application. I worked on
              multiple pages. Most of the work done here was on front-end. I,
              along with my teammates (
              <a href="https://www.linkedin.com/in/mohil-khare/">Mohil</a>,
              <a href="https://www.linkedin.com/in/jaideep-more-a9733015a/">
                {" "}
                Jaideep
              </a>
              ,
              <a href="https://www.linkedin.com/in/keshav-mishra-912728173/">
                {" "}
                Keshav
              </a>
              , ) participated in VCET hackathon with this project. We were the
              2nd runner up. Refer the github for more info.
              <IconButton>
                <GitHub
                  color="primary"
                  onClick={() =>
                    window.open("https://github.com/Phoenix009/AgriPool")
                  }
                  href="https://material-ui.com/api/icon/"
                />
              </IconButton>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
