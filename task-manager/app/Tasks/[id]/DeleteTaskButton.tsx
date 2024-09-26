import { Button } from "@radix-ui/themes";
import React from "react";

const DeleteTaskButton = ({ taskId }: { taskId: number }) => {
  return <Button color="red">Delete this Task</Button>;
};

export default DeleteTaskButton;
