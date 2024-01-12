import React from 'react'

function ContestsList({key, initialData}) {
  return (
    <div className="contest-list">
        {initialData.map((contest)=>{
            return (
                <div className="contest-preview">
                    <div className="category">
                        {contest.categoryName}
                    </div>
                    <div className="contest">
                        {contest.contestName}
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default ContestsList
