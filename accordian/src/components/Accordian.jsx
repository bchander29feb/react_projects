import { useState } from "react"
import data from "../data";
import '../css/custom.css'

const Accordian = () => {

    const  [isActive, setIsActive] = useState(false);
    
  const showContent = (id) => {
    setIsActive((prev) => prev === id ? false : id);
    console.log(id)
  }
    return (
        <>
          <ul>
          {data.map((mydata, index) => {
            return (
                <li key={index}>
                  <div onClick={() => showContent(index)}> <h1> {mydata.title} </h1> </div>
                   {isActive === index &&  <div> <p> {mydata.content} </p> </div>}
                </li>
            )
          })}
          
            </ul>
        </>
    )


}

export default Accordian