import React from 'react'
import {Button} from '@material-ui/core'
import { Twitter } from '@material-ui/icons'
import { Instagram } from '@material-ui/icons'
import { Facebook } from '@material-ui/icons'

const BiographyOne = () => {
    return (
        <div>
            <div className="bio-part1">
                    <div className="img-container">
                        <div className="img">
                            <img src="https://scontent.facc6-1.fna.fbcdn.net/v/l/t1.6435-9/136948634_411557986958260_7058390425709649855_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeFX6S-COHAUawvT0g9S1zeeEKKTbuyeNrsQopNu7J42u0idynhx_qHnsyCsl6uwgR5m-GHTa02cBdgXX0lkJdJs&_nc_ohc=hmuag1-ZnuEAX_NVIos&_nc_ht=scontent.facc6-1.fna&oh=303e2641106bcc20aaeab1ddae413359&oe=617132D7"/>
                        </div>
                    </div>
                    <div className="img-description">
                        <h3> Robert Sam</h3>
                        <h3 gutterbottom="true" style={{opacity: 0.7}}> Front-end Engineer</h3>
                        <button className="btn" color="primary">Read More...</button>
                    </div>
                    <div className="social-media-handles">
                        <Twitter color="primary"/>
                        <Instagram color="secondary"/>
                        <Facebook color="primary"/>
                    </div>
                </div>
        </div>
    )
}

export default BiographyOne
