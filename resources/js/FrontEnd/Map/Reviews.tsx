import React from "react"
import axios from "axios"

const Reviews = () => {
  const config = {
    method: "get",
    url: "https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJ-3-2EiRZzB0RBba6guFjmBI&fields=name%2Crating&key=AIzaSyDLdXj8ZeKNd3GgtBbHJLQrgCMWeuInbvc",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  }
  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data))
    })
    .catch(function (error) {
      console.log(error)
    })

  return (
    <div className={`wrapper my-24`}>
      <h1 className={`font-semibold text-4xl text-white`}>Reviews</h1>
    </div>
  )
}

export default Reviews
