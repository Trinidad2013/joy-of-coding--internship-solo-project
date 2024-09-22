import TaskStatusBadge from "@/app/components/TaskStatusBadge";
import prisma from "@/prisma/client";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import React from "react";
interface Props {
  params: { id: string };
}
const TaskDetailPage = async ({ params }: Props) => {
  // if (typeof params.id !== "number") notFound();
  const task = await prisma.task.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!task) notFound();

  return (
    <div>
      <Heading>{task.title}</Heading>
      <Flex gap="3" my="3">
        <TaskStatusBadge status={task.status} />
        <Text>{task.createAt.toDateString()}</Text>
      </Flex>
      <Card>
        <p>{task.description}</p>
      </Card>
    </div>
  );
};

export default TaskDetailPage;
