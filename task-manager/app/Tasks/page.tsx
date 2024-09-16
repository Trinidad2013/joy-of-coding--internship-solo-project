import React from "react";
import { Button } from "@radix-ui/themes";
import Link from "next/link";

const TasksPage = () => {
  return (
    <div className="bg-white text-black">
      <Button>
        <Link href="/Tasks/new">New Task</Link>
      </Button>
    </div>
  );
};

export default TasksPage;
