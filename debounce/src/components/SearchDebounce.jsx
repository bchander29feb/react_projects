import { useEffect, useState } from "react"
import useDebounce from "../custom-hooks/useDebounce"

const SearchDebounce = () => {
 
const [inputValue, setInputValue] = useState('')
 const mydebounceValue = useDebounce(inputValue,1000)
 const [users, setUsers] = useState([])

 useEffect(() => {

if(!mydebounceValue){
    return
}
 console.log('serching start', users)

 const getUserData = async() => {
   try{
     const res  = await fetch('https://jsonplaceholder.typicode.com/users')
     const resdata = await res.json();
     const setFilter =  resdata.filter((user) => {
       return  user.name.toLowerCase().includes(mydebounceValue.toLowerCase())
     })
     setUsers(setFilter)
    

   }
   catch(error){
     console.log(error)
   }
 }

 getUserData()

 },[mydebounceValue])


 return (
    <>
      
      <form action="">
        <input type="text" name="search" value={inputValue} 
        onChange={(e) => setInputValue(e.target.value) } />
      </form>

      <ul>
        {users?.map((myusers) => {
            return <li key={myusers.id}> {myusers.name} </li>
        })}
      </ul>

    </>
 )


}

export default SearchDebounce


// import useDebounce from '../custom-hooks/useDebounce';
// import { useState, useEffect } from 'react';

// const SearchDebounce = () => {
//   const [inputval, setInputval] = useState('');
//   const [users, setUsers] = useState([]);
//   const [filteredUsers, setFilteredUsers] = useState([]);

//   const myDebouncedValue = useDebounce(inputval, 1000);

//   // 🔹 1️⃣ Fetch API only ONCE
//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const res = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await res.json();
//         setUsers(data);
//         setFilteredUsers(data); // initial list
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     getData();
//   }, []);

//   // 🔹 2️⃣ Filter locally when debounce value changes
//   useEffect(() => {
//     if (!myDebouncedValue) {
//       setFilteredUsers(users);
//       return;
//     }

//     const result = users.filter((user) =>
//       user.name.toLowerCase().includes(myDebouncedValue.toLowerCase())
//     );

//     setFilteredUsers(result);
//   }, [myDebouncedValue, users]);

//   return (
//     <>
//       <form onSubmit={(e) => e.preventDefault()}>
//         <input
//           type="text"
//           value={inputval}
//           onChange={(e) => setInputval(e.target.value)}
//           placeholder="Search user..."
//         />
//       </form>

//       <ul>
//         {filteredUsers.map((user) => (
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default SearchDebounce;
