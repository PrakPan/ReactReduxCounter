import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterAction } from "../store/counter";
import { privacyAction } from "../store/privacy";

const Buttons = () => {
  const dispatch = useDispatch();
  const inputValue = useRef();
  const handleIncrement = () => {
    console.log("Inc clicked");
    dispatch(counterAction.increment());
  };
  const handleDecrement = () => {
    console.log("Dec clicked");
    dispatch(counterAction.decrement());
  };
  const handleInputAdd = () => {
    console.log("InputAdd clicked");
    dispatch(counterAction.add(inputValue.current.value));
  };
  const handleInputSub = () => {
    console.log("InputSub clicked");
    dispatch(counterAction.subtract(inputValue.current.value));
  };
  const handlePrivacy = () => {
    console.log("Privacybtn clicked");
    dispatch(privacyAction.privacy_toggle());
  };
  return (
    <>
      <div>
        <button
          type="button"
          className="btn btn-primary btn-lg px-4 gap-3"
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-success btn-lg px-4"
          style={{ margin: "10px" }}
          onClick={handleDecrement}
        >
          -1
        </button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={handlePrivacy}
        >
          Privacy Toggle
        </button>
      </div>
      <div>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your Number"
            ref={inputValue}
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={handleInputAdd}
          >
            Add
          </button>
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={handleInputSub}
          >
            Subtract
          </button>
        </div>
      </div>
    </>
  );
};
export default Buttons;
