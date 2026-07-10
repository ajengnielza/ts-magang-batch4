type TaskStatus = "todo" | "in_progress" | "done" | "cancelled";
type Priority = "low" | "medium" | "high" | "urgent";

interface User {
  readonly id: number;
  nama: string;
  email: string;
}

interface Task {
  readonly id: number;
  judul: string;
  deskripsi?: string;
  status: TaskStatus;
  prioritas: Priority;
  assignee?: User;
  deadline?: string;
  createdAt: string;
}

type TaskEvent =
  | { type: "created"; task: Task }
  | { type: "updated"; taskId: number; changes: Partial<Task> }
  | { type: "completed"; taskId: number; completedAt: string }
  | { type: "deleted"; taskId: number; reason: string };

interface TaskManager {
  tasks: Task[];
  tambahTask(task: Omit<Task, "id" | "createdAt">): Task;
  updateStatus(id: number, status: TaskStatus): Task | undefined;
  getByPrioritas(prioritas: Priority): Task[];
  getByAssignee(userId: number): Task[];
}

const manager: TaskManager = {
  tasks: [],
  tambahTask(task) {
    const taskBaru: Task = {
      id: this.tasks.length + 1,
      createdAt: new Date().toLocaleString(),
      ...task,
    };
    this.tasks.push(taskBaru);
    return taskBaru;
  },
  updateStatus(id, status) {
    const task = this.tasks.find((t) => t.id === id);
    if (task) {
      task.status = status;
    }
    return task;
  },
  getByPrioritas(prioritas) {
    return this.tasks.filter((t) => t.prioritas === prioritas);
  },
  getByAssignee(userId) {
    return this.tasks.filter((t) => t.assignee?.id === userId);
  },
};

const user1: User = {
  id: 1,
  nama: "Ajeng",
  email: "ajeng@gmail.com",
};

const user2: User = {
  id: 2,
  nama: "saida",
  email: "saida@gmail.com",
};

manager.tambahTask({
  judul: "Belajar Interface",
  deskripsi: "Memahami penggunaan interface",
  status: "todo",
  prioritas: "high",
  assignee: user1,
  deadline: "15 Juli 2026",
});

manager.tambahTask({
  judul: "Belajar Type Alias",
  status: "done",
  prioritas: "medium",
  assignee: user2,
});

manager.tambahTask({
  judul: "Belajar Union Type",
  status: "in_progress",
  prioritas: "urgent",
  assignee: user1,
});

manager.tambahTask({
  judul: "Belajar Function",
  status: "cancelled",
  prioritas: "low",
});

manager.tambahTask({
  judul: "Belajar Discriminated Union",
  status: "todo",
  prioritas: "urgent",
  assignee: user2,
});

console.log("\n=== Semua Task ===");
console.log(manager.tasks);

manager.updateStatus(1, "cancelled");
manager.updateStatus(3, "done");

console.log("\n=== Setelah Update Status ===");
console.log(manager.tasks);

console.log("\n=== Prioritas Urgent ===");
console.log(manager.getByPrioritas("urgent"));

console.log("\n=== Task Milik User ID 1 ===");
console.log(manager.getByAssignee(1));

function logEvent(event: TaskEvent): void {
  switch (event.type) {
    case "created":
      console.log(`Task "${event.task.judul}" berhasil dibuat.`);
      break;
    case "updated":
      console.log(`Task ID ${event.taskId} berhasil diperbarui.`);
      console.log("Perubahan:", event.changes);
      break;
    case "completed":
      console.log(`Task ID ${event.taskId} selesai pada ${event.completedAt}.`);
      break;
    case "deleted":
      console.log(`Task ID ${event.taskId} dihapus karena ${event.reason}.`);
      break;
  }
}

logEvent({
  type: "created",
  task: manager.tasks[0]!,
});

logEvent({
  type: "updated",
  taskId: 1,
  changes: {
    status: "cancelled",
  },
});

logEvent({
  type: "completed",
  taskId: 3,
  completedAt: "10 Juli 2026",
});

logEvent({
  type: "deleted",
  taskId: 4,
  reason: "Task sudah tidak diperlukan",
});