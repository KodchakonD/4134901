import React,{useState,useEffect} from "react";

function Hook() {
    const [color, setColor] = useState("Blue");
    const[count, setCount] = useState(0);
    const[multi, setMulti] = useState(1);
    const[car,setCar] = useState({
        brand: "Mazda",
        year: 2012,
        color: "Green",
    });

    const updateCarcolor = ()=> {
        setCar((previousState) => {
            return {...previousState,color:"Orange"};
        });
    };

    useEffect(() => {
        document.title = `change Stage ${count} : ${color}`;
       // setTimeout(() => {
            setMulti(() => count * 2);
        // }, 1000);
    },[count]);
    
    return(
    <>
    <p>Color is {color}</p>
    <button onClick={() => setColor("Green")}>Change</button>

    <p>Count is {count}</p>
    <p>multi of count is {multi}</p>
    <button onClick={() => setCount(count + 1)}>Inc</button>

    <p>
        {car.brand} Car color is {car.color}
    </p>
    <button onClick={updateCarcolor}>Color</button>
    
    </>);
}


export default Hook;