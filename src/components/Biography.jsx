import React from 'react'
import BiographyOne from './BiographyOne'
import { Paper, Typography } from '@material-ui/core'
import BiographyTwo from './BiographyTwo'

const Biography = () => { 
    
    return (
        <Paper elevation={18} className="paper" >
            <Typography variant="h5" align="center" gutterBottom >
                Welcome 😊
                <hr />  
            </Typography>
            <div className="bio-container">
                <BiographyOne/>
                <BiographyTwo/>
            </div>
        </Paper>
    )
}

export default Biography
