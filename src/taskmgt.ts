import {TaskDispatched, ResultReported, TaskCompleted, TaskFailed, TaskMgt} from "../generated/TaskMgt/TaskMgt"
import {TaskInfo} from "../generated/schema.ts"

export function handleTaskDispatched(event: TaskDispatched): void {
    const taskInfo = new TaskInfo(event.params.taskId);
    const taskMgt = TaskMgt.bind(event.address);

    const task = taskMgt.getTaskById(event.params.taskId);
    taskInfo.taskType = task.taskType;
    taskInfo.consumerPk = task.consumerPk;
    taskInfo.tokenSymbol = task.tokenSymbol;
    taskInfo.dataId = task.dataId;
    taskInfo.price = task.computingInfo.price;
    taskInfo.t = task.computingInfo.t;
    taskInfo.n = task.computingInfo.n;
    taskInfo.workerIds = task.computingInfo.workerIds;
    taskInfo.results = task.computingInfo.results;
    taskInfo.hasReported = task.computingInfo.hasReported;
    taskInfo.reportCount = task.computingInfo.reportCount;
    taskInfo.time = task.time;
    taskInfo.status = task.status;
    taskInfo.submitter = task.submitter;
    taskInfo.code = task.code;

    taskInfo.save();
}

export function handleResultReported(event: ResultReported): void {
    const taskMgt = TaskMgt.bind(event.address);
    const task = taskMgt.getTaskById(event.params.taskId);

    const taskInfo = TaskInfo.load(event.params.taskId);
    if (taskInfo != null) {
        taskInfo.results = task.computingInfo.results;
        taskInfo.hasReported = task.computingInfo.hasReported;
        taskInfo.reportCount = task.computingInfo.reportCount;

        taskInfo.save();
    }
}

export function handleTaskCompleted(event: TaskCompleted): void {
    updateTaskStatus(event);
}

export function handleTaskFailed(event: TaskFailed): void {
    updateTaskStatus(evvent);
}

function updateTaskStatus(event: TaskCompleted | TaskFailed): void {
    const taskMgt = TaskMgt.bind(event.address);
    const task = taskMgt.getTaskById(event.params.taskId);

    const taskInfo = TaskInfo.load(event.params.taskId);
    if (taskInfo != null) {
        taskInfo.status = task.status;
        taskInfo.save();
    }
}
