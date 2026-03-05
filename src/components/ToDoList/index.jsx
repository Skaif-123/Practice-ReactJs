import { useEffect, useState } from "react";
import LoadingComponent from "../Loading";
import StatusBox from "../StatusBox";
import ToDoItem from "../ToDoItem";

const ToDoList = () => {
  const [toDoList, setToDoList] = useState([]);
  const [toDoListDetails, setToDoListDetails] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const fetchToDoList = async () => {
    setLoading(true);
    const res = await fetch("https://dummyjson.com/todos");
    const res2 = await res.json();
    const data = res2.todos;
    if (data && data?.length > 0) {
      setLoading(false);
      setToDoList(data);
    }
  };

  
  const fetchToDoListDetails = async (Id) => {
    setLoading(true);
    const res = await fetch(`https://dummyjson.com/todos/${Id}`);
    const data = await res.json();

    if (data) {
      setLoading(false);
      setOpenDialog(true)
      setToDoListDetails(data);
    }
  };


  useEffect(() => {
    fetchToDoList();
  }, []);

  return (
    <>
      <div className="grid grid-cols-3">
        {loading ? (
          <LoadingComponent />
        ) : (
          toDoList.map((value) => (
            <ToDoItem
              key={value.id}
              value={value}
              fetchToDoListDetails={fetchToDoListDetails}
            />
          ))
        )}
      </div>
     <StatusBox details={toDoListDetails} openDialog={openDialog} setOpenDialog={setOpenDialog}/>
    </>
  );
};

export default ToDoList;
