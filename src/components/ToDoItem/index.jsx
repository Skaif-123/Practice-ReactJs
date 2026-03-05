import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Button } from "../ui/button";

const ToDoItem = ({value,fetchToDoListDetails}) => {
  const handleButtonClick=()=>{
    fetchToDoListDetails(value.id);
  }


  return (
    <>
      <Card className="relative m-4 h-52 flex   items-center hover:bg-yellow-200 p-0">
        <CardTitle className="w-30 text-center pt-8">
          Task No. {value.id}
        </CardTitle>

        <CardContent>{value.todo}</CardContent>
        <Button
          onClick={handleButtonClick}
          className="w-1/3 hover:bg-green-600 cursor-pointer absolute bottom-4"
        >
          See Status
        </Button>
      </Card>
    </>
  );
};

export default ToDoItem;
