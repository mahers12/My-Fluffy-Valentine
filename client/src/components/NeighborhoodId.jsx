import React from 'react'
import axios from 'axios'
import { useParams} from 'react-router-dom'



const NeighborhoodId = (props) => { return(
    app.get('/neighborhood/:id', async (req, res) => {
        const { id } = req.params
        const neighborhood = await Product.findById(id)
        res.json(neighborhood)
      })
)}



  export default NeighborhoodId
  
  
  
  