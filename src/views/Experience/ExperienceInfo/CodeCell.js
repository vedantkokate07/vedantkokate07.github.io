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
export default function CodeCell(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      {/* <GridContainer container spacing={6} justify="center">
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
      </GridContainer> */}

      <GridContainer
        container
        spacing={6}
        justifyContent="center"
        alignItems="center"
        justify="center"
      >
        <GridItem xs={11} sm={8} md={3}>
          <Card>
            <CardHeader color="danger">Head of CodeCell</CardHeader>
            <CardBody align="justify">
              Youngest appointed head to the CodeCell in the history of my
              college. I was also CodeChef Campus lead(President) for my club.
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={11} sm={8} md={3}>
          <Card>
            <CardHeader color="danger">
              Improving Coding Cultre of my college
            </CardHeader>
            <CardBody align="justify">
              When I stared, there were only 2 members left in the club, right
              now there are over 70+ active members. I have helped in creating,
              promoting and developing CP culture in my college.
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer
        container
        spacing={6}
        justifyContent="center"
        alignItems="center"
        justify="center"
      >
        <GridItem xs={11} sm={8} md={3}>
          <Card>
            <CardHeader color="danger">Organizing Global events</CardHeader>
            <CardBody align="justify">
              Organized and hosted 2 Global long contest with 5000+ participant
              combined, one of the largest Woman’s Coding Contest and offline
              ICPC styled contest.
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={11} sm={8} md={3}>
          <Card>
            <CardHeader color="danger">Main Speaker for events</CardHeader>
            <CardBody align="justify">
              Keynote Speaker for Algo Talks. Principal speaker and organizer
              for various small size events for the club too.
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
