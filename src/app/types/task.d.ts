export interface Task {
  id: TaskId;
  name: string;
  description: string;
  priority: string;
  createdAt: Date;
  updatedAt: Date;
}

type TaskId = string;
