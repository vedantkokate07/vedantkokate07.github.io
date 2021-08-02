import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
import { Link } from "react-router-dom";
import ButtonBase from "@material-ui/core/ButtonBase";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";
import Box from "@material-ui/core/Box";

import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import profile from "assets/img/faces/vedant.jpeg";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const classes2 = useStyles2();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        color="transparent"
        brand=""
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
        {...rest}
      />
      <Parallax
        small
        filter
        image={require("assets/img/profile-bg.jpg").default}
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Vedant Kokate</h3>
                    <h6>Competitive Programer | Python</h6>
                 
                
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p align="justify">
                I started Coding at age 15. Build an Chess AI at age 16. I have
                solved around 700 problems across all CP platforms. I like
                problem solving, and love maths. I am active on Project Euler. I
                have headed and managed the Codecell of my college as well as Programming cell
                of Student satellite for two years. Apart from this, I have
                raised money for charities through various chess events.{" "}
              </p>
            </div>
            
            <GridContainer
              justify="center"
              algin="center"
              style={{ margin: "10px auto 10px auto" }}
            >
              <GridItem xs={12} sm={12} md={4}>
                <Link to="/project-page">
                  <Card>
                    <CardHeader color="danger" align="center">
                      <h3>My Projects</h3>
                      <h3></h3>
                    </CardHeader>
                    <CardBody align="center">
                      Detailed list of my project. Click here
                    </CardBody>
                  </Card>
                </Link>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <Link to="/experience-page">
                  <Card>
                    <CardHeader color="warning" align="center">
                      <h3>Experience</h3>
                      <h3></h3>
                    </CardHeader>
                    <CardBody align="center">
                      Detailed list of my project. Click here
                    </CardBody>
                  </Card>
                </Link>
              </GridItem>
            </GridContainer>
            <GridContainer
              justify="center"
              algin="center"
              style={{ margin: "10px auto 10px auto" }}
            >
              <GridItem xs={12} sm={12} md={4}>
                <Link to="/project-page">
                  <Card>
                    <CardHeader color="primary" align="center">
                      {" "}
                      <h3>Competitive Programming</h3>
                    </CardHeader>
                    <CardBody align="center">
                      Detailed list of my project. Click here
                    </CardBody>
                  </Card>
                </Link>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <Link to="/awards-page">
                  <Card>
                    <CardHeader color="success" align="center">
                      {" "}
                      <h3>Awards and Achievements</h3>{" "}
                    </CardHeader>
                    <CardBody align="center">
                      Detailed list of my project. Click here
                    </CardBody>
                  </Card>
                </Link>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
     
    </div>
  );
}
const useStyles2 = makeStyles({
  card: {
    backgroundColor: "#f44336",
    //  minHeight:345,
  },
});
// const primaryColor = "#9c27b0";
// const warningColor = "#ff9800";
// const dangerColor = "#f44336";
// const successColor = "#4caf50";
// const infoColor = "#00acc1";
// const roseColor = "#e91e63";
// const grayColor = "#999999";
