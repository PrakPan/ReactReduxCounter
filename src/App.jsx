import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DisplayCounter from "./components/DisplayCounter";
import Header from "./components/Header";
import Buttons from "./components/Buttons";
import Container from "./components/Container";
import { useSelector } from "react-redux";
import PrivacyMessage from "./components/PrivacyMessage";

function App() {
  const privacyObj = useSelector((store) => store.privacy);
  const privacy = privacyObj.privacy;
  return (
    <>
      <div className="px-4 py-5 my-5 text-center">
        <Container>
          <div className="col-lg-6 mx-auto">
            <Header />
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              {privacy ? <PrivacyMessage /> : <DisplayCounter />}
            </div>
            <Buttons />
          </div>
        </Container>
      </div>
    </>
  );
}

export default App;
