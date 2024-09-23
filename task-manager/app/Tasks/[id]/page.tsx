import TaskStatusBadge from "@/app/components/TaskStatusBadge";
import prisma from "@/prisma/client";
import { Box, Button, Card, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import delay from "delay";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { Pencil2Icon } from "@radix-ui/react-icons";

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
        <Heading>{task.title}</Heading>
        <Flex gap="3" my="3">
          <TaskStatusBadge status={task.status} />
          <Text>{task.createAt.toDateString()}</Text>
        </Flex>
        <Card className="prose" mt="4">
          <ReactMarkdown>{task.description}</ReactMarkdown>
        </Card>
      </Box>
      <Box>
        <Button>
          <Pencil2Icon />
          <Link href={`./Tasks/${task.id}/Edit`}>Edit Task</Link>
        </Button>
      </Box>
    </Grid>
  );
};

export default TaskDetailPage;
