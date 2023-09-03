import React from 'react'


// export const metadata = {
//   title: `Show Article Page`,
// };


const ShowArticlePage = (props) => {

  return (
    <div>
      <h1>Show Article Page</h1>
      <h1>{props.params.title}</h1>
    </div>
  )
}

export default ShowArticlePage
