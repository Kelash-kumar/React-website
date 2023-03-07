import React from 'react'
import CommonPage from './CommonPage'
const About=()=> {

  return (
    <div>
        <CommonPage 
        disc="Working here as a"
        head=" Family Memeber"
        conDisc=" because we belief in you"
        title=" Happy life has good mind "
        img="data:image/png;base64,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"
        to="/contact"
       />
    </div>
  )
}

export default About;