import { TaskStatusBadge } from "@/app/components";
import { Task } from "@prisma/client";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import ReactMarkdown from "react-markdown";

const TaskDetails = ({ task }: { task: Task }) => {
  return (
    <>
      {" "}
      <Heading>{task.title}</Heading>
      <Flex gap="3" my="3">
        <TaskStatusBadge status={task.status} />
        <Text>{task.createAt.toDateString()}</Text>
      </Flex>
      <Card className="prose max-w-full" mt="4">
        <ReactMarkdown>{task.description}</ReactMarkdown>
      </Card>
    </>
  );
};

export default TaskDetails;
