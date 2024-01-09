import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const counterObj = useSelector((store) => {
    console.log(store);
    return store.counter;
  });
  console.log(counterObj);
  const counterVal = counterObj.counterValue; //OR const {counterVal} = useSelector(store => store.counter)
  return <p className="lead mb-4"> Counter Value is: {counterVal} </p>;
};
export default DisplayCounter;
