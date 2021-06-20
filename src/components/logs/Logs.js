import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Preloader from "../layout/Preloader";
import LogItem from "./LogItem"; 
import { getLogs } from "../../actions/logActions";

const Logs = () => {
  //new useDispatch and useSelector have replaced the old mapStateToProps and all other connect api stuffs
  const dispatch = useDispatch();
  const log = useSelector((state) => state.log); // getting from log state name. see in index.js file inside of reducers folder
  const { logs, loading } = log; // from log state getting logs and loading state property(which are comming from logReducer's state value). you can desctructer them in above too like const {logs,loading}

  useEffect(() => {
    dispatch(getLogs());
  }, []);

  if (loading || logs === null) { // if you donot include logs === null then its gonna give error saying cannot read property of null coz initially it is set to null and at first it takes some time to load logs so this will remove the error and instead show the preloader at first 
    return <Preloader />;
  }

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center">No logs to show...</p>
      ) : (
        logs.map((log) => <LogItem log={log} key={log.id} />)
      )}
    </ul>
  );
};

// const Logs = () => {

//   const [logs, setLogs] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     getLogs();
//   }, []); // this will run getLogs once(coz of empty array) on first time component loads

//   const getLogs = async () => {
//     setLoading(true);
//     // fetch works slightly different than axios
//     const res = await fetch("/logs");
//     const data = await res.json();

//     setLogs(data);
//     setLoading(false);
//   };

//   if (loading) {
//     return <Preloader />;
//   }

//   return (
//     <ul className="collection with-header">
//       <li className="collection-header">
//         <h4 className="center">System Logs</h4>
//       </li>
//       {!loading && logs.length === 0 ? (
//         <p className="center">No logs to show...</p>
//       ) : (
//         logs.map((log) => <LogItem log={log} key={log.id} />)
//       )}
//     </ul>
//   );
// };

export default Logs;
