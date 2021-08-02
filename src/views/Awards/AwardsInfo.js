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
import { AiFillGoogleCircle,AiOutlineInfoCircle } from "react-icons/ai";
import { SiCodechef } from "react-icons/si";
import profile from "assets/img/faces/vedant.jpeg";
import Box from "@material-ui/core/Box";

import S1 from "assets/img/sat.jpg";

import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);
export default function AwardInfo(props) {
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
            <CardHeader color="danger">
              AIR 273 in Google Hash Code 2021
            </CardHeader>
            <CardBody align="justify">
              Google Hash Code is Google's prestigious annual team contest.
              Worl's best coder's compete here. More Info
              <IconButton>
                <AiFillGoogleCircle
                  // color="green"
                  onClick={() =>
                    window.open("https://codingcompetitions.withgoogle.com/hashcode/about")
                  }
                />{" "}
              </IconButton>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={11} sm={8} md={4}>
          <Card>
            <CardHeader color="danger">
              1st Rank and best UI in Code Adventure 3.0
            </CardHeader>
            <CardBody align="justify">
              Code Adventure is national 1 month long Hackathon. This year's
              theme was fintech. More Info
              <IconButton>
                <AiOutlineInfoCircle
                  color="primary"
                  onClick={() =>
                    window.open("https://www.linkedin.com/in/vcet-hackathon/?originalSubdomain=in")
                  }
                />
              </IconButton>
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
        <GridItem xs={11} sm={8} md={4}>
          <Card>
            <CardHeader color="warning">
              3rd Rank in VCET Hackathon 2021
            </CardHeader>
            <CardBody align="justify">
              VCET's prestigious 24 hour Hackathon. We were free to chose any
              topic for the hackathon.
              <IconButton>
                <AiOutlineInfoCircle
                  color="primary"
                  onClick={() =>
                    window.open("https://riidl.org/programs/code_adventure")
                  }
                />
              </IconButton>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={11} sm={8} md={4}>
          <Card>
            <CardHeader color="warning">
              Top 99.4 percentile on Project Euler
            </CardHeader>
            <CardBody align="justify">
              Project euler is a website dedicated to a series of computational
              problems intended to be solved with computer programs. More than 1
              million people have solved one probel over there
              <IconButton>
                <AiOutlineInfoCircle
                  color="primary"
                  onClick={() =>
                    window.open("https://projecteuler.net/")
                  }
                />
              </IconButton>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer
        container
        spacing={6}
        justifyContent="primary"
        alignItems="center"
        justify="center"
      >
        <GridItem xs={11} sm={8} md={4}>
          <Card>
            <CardHeader color="danger">
              Global rank 273 May Cook-Off 2020 Division 2
            </CardHeader>
            <CardBody align="justify">
              CodeChef is Cp platform. It has monthly contests which see arounf
              10-12K partcipants.
              <IconButton>
                <SiCodechef
                  color="primary"
                  onClick={() =>
                    window.open("https://www.codechef.com/users/vedant_k07")
                  }
                />
              </IconButton>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={11} sm={8} md={4}>
          <Card>
            <CardHeader color="danger">
              Global rank 274 June Challenge 2020 Division 2
            </CardHeader>
            <CardBody align="justify">
              CodeChef is Cp platform. It has monthly contests which see arounf
              10-12K partcipants.
              <IconButton>
                <SiCodechef
                  color="primary"
                  onClick={() =>
                    window.open("https://www.codechef.com/users/vedant_k07")
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
