import React from 'react'
import '../styles/Footer.css'; 
import { Facebook, GitHub, Instagram, LinkedIn } from '@mui/icons-material'

function Footer() {
  return (
    <div className='footer'> 
        <div className='socialMedia'>
            <Instagram />
            <Facebook />
            <GitHub />
            <LinkedIn />
        </div>
        <p>&copy; 2023 Ranjan Manandhar</p>
    </div>
  )
}

export default Footer