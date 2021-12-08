const number = [5, 2];
const text = (
  <>
  {number.length > 3 && (
    <h1 className="orange" id="test">
    Hello Word !!!
    </h1> 
  )}
  {number[0] + number[1]}
  </>
);


function missValue(){
  return "Missed !!";
}


function List() {
  return number.length > 3 ? text : missValue;
}

export default List;