import React from "react"
import reviews from "@/reviews-dummy"
import ReviewCard from "@/FrontEnd/Review/ReviewCard"
import ReviewStats from "@/FrontEnd/Review/ReviewStats"
import MasonryGrid from "@/FrontEnd/Masonry/MasonryGrid"
import MasonryCard from "@/FrontEnd/Masonry/MasonryCard"

const ReviewPanel = () => {
  return (
    <div className={`relative w-full`}>
      <MasonryGrid className={`-mx-4 md:-mx-6 lg:-mx-8 xl:-mx-12`}>
        <MasonryCard className={`w-full md:w-1/2 lg:w-1/3 p-4 `}>
          <ReviewStats />
        </MasonryCard>

        {reviews.map((data) => (
          <MasonryCard key={data.id} className={`w-full md:w-1/2 lg:w-1/3 p-4 transition-transform`}>
            <ReviewCard data={data} />
          </MasonryCard>
        ))}
      </MasonryGrid>
    </div>
  )
}

export default ReviewPanel
