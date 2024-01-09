import { useContext } from "react";
import { MyContext } from "./context/AuthContext";
import toast from "react-hot-toast";
import "./Home.css";

function Home() {
  const { state, dispatch } = useContext(MyContext);
  console.log(`state`, state);

  return (
    <div>
      <div className="my-class bg-blue-500 font-extrabold" id="my-id">
        Testing classname
      </div>

      <h1>Home - {state.user?.name}</h1>
      <button onClick={() => toast.success("Success")}>Success</button>
      <br />
      <button onClick={() => toast.error("Error")}>Error</button>
    </div>
  );
}

export default Home;
