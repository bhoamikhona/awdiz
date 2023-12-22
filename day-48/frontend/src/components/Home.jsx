import toast from "react-hot-toast";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => toast.success("Success")}>Success</button>
      <br />
      <button onClick={() => toast.error("Error")}>Error</button>
    </div>
  );
}

export default Home;
