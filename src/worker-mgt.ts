import {
  Initialized as InitializedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  SelectDataWorkers as SelectDataWorkersEvent,
  WorkerRegistry as WorkerRegistryEvent
} from "../generated/WorkerMgt/WorkerMgt"
import {
  Initialized,
  OwnershipTransferred,
  SelectDataWorkers,
  WorkerRegistry
} from "../generated/schema"

export function handleInitialized(event: InitializedEvent): void {
  let entity = new Initialized(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.version = event.params.version

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSelectDataWorkers(event: SelectDataWorkersEvent): void {
  let entity = new SelectDataWorkers(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.dataId = event.params.dataId
  entity.workerIds = event.params.workerIds

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWorkerRegistry(event: WorkerRegistryEvent): void {
  let entity = new WorkerRegistry(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.workerId = event.params.workerId
  entity.workerType = event.params.workerType
  entity.owner = event.params.owner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
