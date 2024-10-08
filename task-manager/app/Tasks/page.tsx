import React from "react";
import { Table } from "@radix-ui/themes";
import Link from "../components/Link";
import prisma from "@/prisma/client";
import TaskStatusBadge from "../components/TaskStatusBadge";
import delay from "delay";
import TaskActions from "./TaskActions";

const TasksPage = async () => {
  const tasks = await prisma.task.findMany();
  await delay(2000);
  return (
    <div className="bg-white text-black">
      <TaskActions />
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Task</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Status
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Created
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {tasks.map((task) => (
            <Table.Row key={task.id}>
              <Table.Cell>
                <Link href={`/Tasks/${task.id}`}>{task.title}</Link>

                <div className="block md:hidden">
                  <TaskStatusBadge status={task.status} />
                </div>
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                <TaskStatusBadge status={task.status} />
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                {task.createAt.toDateString()}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default TasksPage;
