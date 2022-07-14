// import axios from "axios"
// import { useState, useEffect } from "react"

// export const useRequestList = (url) => {
//   const [data, setData] = useState(undefined);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     setIsLoading(true);
//     const body = {

//     }
//     axios
//       .post(url)
//       .then((res) => {
//         setIsLoading(false);
//         setData(res.data.trips);
//         console.log(res)
//       })
//       .catch((err) => {
//         setIsLoading(false);
//         setError(err);
//       });
//   }, [url]);

//   return [data, isLoading, error];
// };