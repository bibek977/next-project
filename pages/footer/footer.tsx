import React from 'react'
import { createStyles, Text, Container, ActionIcon, Group } from '@mantine/core'
import { Phone, Map, Mail } from "tabler-icons-react"

const useStyles = createStyles((theme) => ({
    footer: {
      // height : '70vh',
      // width : '100%',
      backgroundColor : 'red',
      // display : 'flex',
      
    },
    container: {
      display: "grid",
      // alignItems: "center",
      // gap: theme.spacing.lg,
      // justifyContent: "space-between",
      gridTemplateRows : '2fr 7fr 1fr',
      width : '100%',
      height : '70vh',

     
    },
   
    top: {
      backgroundColor : 'whitesmoke',
      display: "grid",
      gridTemplateColumns : '1fr 1fr',

    },
    logo : {
      // backgroundColor : 'wheat',
      width : '10rem',
      height : '100%',
    },
    img : {
      width : '100%',
      height : '100%',
    },
    gmail : {
      // backgroundColor : 'grey',
    },
    middle : {
      backgroundColor : 'yellow',
      display: "grid",
      gridTemplateRows : '1fr 5fr',
    },
    social : {
      backgroundColor : 'brown',
    },

    main_foot : {
      // backgroundColor : 'white',
      display: "grid",
      gridTemplateColumns : '1fr 2fr',
    },
    left : {
      backgroundColor : 'white',
    },
    right : {
      backgroundColor : 'black',
      display: "grid",
      gridTemplateColumns : 'repeat(3,1fr)',
    },
    col_1 : {
      backgroundColor : 'wheat',
    },
    col_2 : {
      backgroundColor : 'purple',
    },
    col_3 : {
      backgroundColor : 'orange',
    },
    
    bottom : {
      backgroundColor : 'green',
      display : 'grid',
      gridTemplateColumns : '1fr 1fr',
    },

    }));  

export default function footer() {
    const { classes } = useStyles();
  return (
    <div className={classes.footer}>
      <Container size="lg" className={classes.container}>
        <div className={classes.top}>
        <div className={classes.logo} >
          {/* <img src="/assets/logo.png" alt="" /> */}
          log
        </div>
        <div className={classes.gmail}>
          gmail
        </div>
        </div>
        <div className={classes.middle}>
          <div className={classes.social}>
            icons
          </div>
          <div className={classes.main_foot}>

          <div className={classes.left}>
          <div className={classes.phone_content}>
            <Phone size={40} className={classes.icon} />
            <div>
              <Text className={classes.text} size="lg">
                Company phone
              </Text>
              <Text className={classes.number} size="md">
                02 9618 0554/ 0452 507 575
              </Text>
            </div>
          </div>
          </div>
          <div className={classes.right}>
            <div className={classes.col_1}>col-1</div>
            <div className={classes.col_2}>col-2</div>
            <div className={classes.col_3}>col-3</div>
          </div>
          </div>
        </div>
        <div className={classes.bottom}>
          <div className={classes.left_1}>@copy</div>
          <div className={classes.right_1}>developer</div>
        </div>
      </Container>
        
    </div>
  )
}
