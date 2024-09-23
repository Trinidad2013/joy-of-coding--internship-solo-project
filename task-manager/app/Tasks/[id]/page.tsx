import prisma from "@/prisma/client";
import { Box, Grid } from "@radix-ui/themes";
import delay from "delay";
import { notFound } from "next/navigation";
import EditTaskButton from "./EditTaskButton";
import TaskDetails from "./TaskDetails";

interface Props {
  params: { id: string };
}
const TaskDetailPage = async ({ params }: Props) => {
  // if (typeof params.id !== "number") notFound();
  const task = await prisma.task.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!task) notFound();
  await delay(2500);
  return (
    <Grid columns={{ initial: "1", md: "2" }} gap="5">
      <Box>
        <TaskDetails task={task} />
      </Box>
      <Box>
        <EditTaskButton taskId={task.id} />
      </Box>
    </Grid>
  );
};

export default TaskDetailPage;
