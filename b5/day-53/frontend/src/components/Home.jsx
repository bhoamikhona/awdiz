import { useContext } from "react";
import { MyContext } from "./context/AuthContext";
import toast from "react-hot-toast";

function Home() {
  const { state, dispatch } = useContext(MyContext);
  console.log(`state`, state);

  return (
    <div>
      <h1>Home - {state.user?.name}</h1>
      <button onClick={() => toast.success("Success")}>Success</button>
      <br />
      <button onClick={() => toast.error("Error")}>Error</button>
    </div>
  );
}

export default Home;
