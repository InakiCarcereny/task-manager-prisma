import { UUID } from 'crypto';

interface Task {
  id: UUID;
  name: string;
  description: string;
  priority: string;
  createdAt: Date;
  updatedAt: Date;
}
