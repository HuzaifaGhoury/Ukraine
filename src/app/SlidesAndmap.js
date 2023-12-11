import React from 'react'
import Map from './Map'
import Post from './Post'
export default function SlidesAndmap() {
  return (
    <div>
<div className="bg-green-700 text-white w-full md:p-20 p-3 h-auto">
      <h1 className="text-white text-center font-poppins md:text-4xl text-3xl font-bold leading-normal tracking-wide">
      Если вы против, то вы не одни!</h1>
      <h3 className="text-white text-center font-poppins text-26 font-normal leading-normal mt-4">
  Посмотрите, сколько людей также выражают протест
</h3>
<Post />
<Map/>
</div>
    </div>
  )
}
// import React from 'react'
// import Map from './Map'
// import Post from './Post'
// export default function SlidesAndmap() {
//   return (
//     <div>
// <div className="bg-green-800 text-white w-full ">
//   <div className='md:p-20 p-10'>
//       <h1 className="text-white text-center font-poppins text-4xl font-bold leading-normal tracking-wide">
//       Если вы против, то вы не одни!</h1>
//       <h3 className="text-white text-center font-poppins text-26 font-normal leading-normal mt-2">
//   Посмотрите, сколько людей также выражают протест
// </h3></div>
// <Post/>
// <Map/>
// </div>
//     </div>
//   )
// }
