import React from 'react'
import JournalT from '../Components/JournalT'
import PartenersTechnoriat from '../Components/PartenersTechnoriat'

// <<<<<<< BolBol
// const Journal = () => {
//   const dispatch = useDispatch();

//   // Affichage des posts : //
//   useEffect(() => {
//     dispatch(getPosts());
//   }, [dispatch]);
//   const { postList, loading } = useSelector((state) => state.post);
  

// =======
// >>>>>>> master

const Journal = () => {
  return (
// <<<<<<< BolBol
//     <div>
//       {postList.map((el) => (
//         <>
//           <h4>{el.title}</h4>
//           <h6>{el.shorttext}</h6>
//           <h6>{el.date}</h6>
//           {/* <h8>{el.content}</h8> */}
//           {/* <h8>{el.image}</h8>  */}
//         </>
//       ))}
// =======
    <div><JournalT/>
    <PartenersTechnoriat/>
// >>>>>>> master
    </div>
  )
}

export default Journal