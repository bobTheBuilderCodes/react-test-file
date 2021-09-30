import React from 'react'
import {Home} from '@material-ui/icons';
import {PersonRounded} from '@material-ui/icons';
import {NightsStayRounded} from '@material-ui/icons';
import {ContactMail} from '@material-ui/icons';
import { Typography } from '@material-ui/core'

const AppHeader = () => {
    return (     
            <div className="appBar"       
                color="primary">
                <div className="icons">
                    <Home/>
                    <ContactMail/>
                </div>
                <div className="appHeading">
                    <Typography align="center">
                        BobTheBuilder
                    </Typography>
                </div>
                <div className="icons">
                    <PersonRounded/>
                    <NightsStayRounded/>
                </div>
            </div>
    )
}

export default AppHeader
