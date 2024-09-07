import PacmanLoader from "react-spinners/PacmanLoader";

const override = {
  display: "block",

  margin: "100px auto",
};

const Spinner = ({ loading }) => {
  return (
    <PacmanLoader color="#4338ca" loading={loading} cssOverride={override} />
  );
};
export default Spinner;
