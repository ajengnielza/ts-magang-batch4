"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const manager = {
    tasks: [],
    tambahTask(task) {
        const taskBaru = {
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
const user1 = {
    id: 1,
    nama: "Ajeng",
    email: "ajeng@gmail.com",
};
const user2 = {
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
function logEvent(event) {
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
    task: manager.tasks[0],
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
//# sourceMappingURL=integrasi-minggu2.js.map