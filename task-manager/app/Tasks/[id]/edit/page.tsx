import React from "react";
import TaskForm from "../../_components/TaskForm";
import { PrismaClient } from "@prisma/client";
import { notFound } from "next/navigation";
const prisma = new PrismaClient();

interface Props {
  params: { id: string };
}
const EditTaskPage = async ({ params }: Props) => {
  const task = await prisma.task.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!task) notFound;
  return <TaskForm task={task ?? undefined} />;
};

export default EditTaskPage;
