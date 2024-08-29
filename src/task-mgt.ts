import {
  ResultReported as ResultReportedEvent,
  TaskCompleted as TaskCompletedEvent,
  TaskDispatched as TaskDispatchedEvent,
  TaskFailed as TaskFailedEvent,
  TaskReportTimeoutUpdated as TaskReportTimeoutUpdatedEvent,
} from "../generated/TaskMgt/TaskMgt"
import {
  ResultReported,
  TaskCompleted,
  TaskDispatched,
  TaskFailed,
  TaskReportTimeoutUpdated,
} from "../generated/schema"

export function handleResultReported(event: ResultReportedEvent): void {
  let entity = new ResultReported(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.taskId = event.params.taskId
  entity.worker = event.params.worker

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTaskCompleted(event: TaskCompletedEvent): void {
  let entity = new TaskCompleted(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.taskId = event.params.taskId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTaskDispatched(event: TaskDispatchedEvent): void {
  let entity = new TaskDispatched(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.taskId = event.params.taskId
  entity.workerIds = event.params.workerIds

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTaskFailed(event: TaskFailedEvent): void {
  let entity = new TaskFailed(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.taskId = event.params.taskId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTaskReportTimeoutUpdated(
  event: TaskReportTimeoutUpdatedEvent,
): void {
  let entity = new TaskReportTimeoutUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.timeout = event.params.timeout

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
