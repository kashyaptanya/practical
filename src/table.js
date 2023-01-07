import {useParams } from 'react-router-dom';

function Table() {
    let { table_number } = useParams();
    // const { number } = props
    var show = []

    // var number = prompt("enter number: print table")
    function count(i) {
        if (i % 2) {
            let result = table_number * i
            var show_result = (`${table_number}*${i}=${result}`)
            console.log("data", show_result);
        }
        let next = i + 1;
        if (i < 10) {
            count(next);
        }
        show.push(show_result)
        // show.reverse()
        return show_result
    }
    count(0)

    console.log("show", show.reverse())
    return (
        <>
            {
                show.map((table, id) => (
                    <p key={id}>{table}</p>
                ))
            }
        </>
    )
}

export default Table


// import { useState } from "react";
// function App() {
//   // const [table, setTable] = useState(5)
//   var number = prompt("enter number")
//   var show = []
//   const data = () => {
//     for (let i = 1; i <= 10; i++) {
//       if (i % 2 === 0) {
//         var result = (`${number}* ${i} = ${i * number}`)
//         // console.log(i)
//         // console.log("kj",result)
//       }
//       show.push(result)
//       console.log("show", show)
//       //  return result
//     }
//   }
//   data()
//   return (<>
//   {/* <button onClick={input}>click</button> */}
//     {
//       show.map((table, id) => (
//         <p key={id}>{table}</p>
//       ))
//     }
//   </>)
// }
// export default App
