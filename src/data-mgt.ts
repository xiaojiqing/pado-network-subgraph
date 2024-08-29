import {
  DataDeleted as DataDeletedEvent,
  DataPrepareRegistry as DataPrepareRegistryEvent,
  DataRegistered as DataRegisteredEvent,
  RouterUpdated as RouterUpdatedEvent,
} from "../generated/DataMgt/DataMgt"
import {
  DataDeleted,
  DataPrepareRegistry,
  DataRegistered,
  RouterUpdated,
} from "../generated/schema"

export function handleDataDeleted(event: DataDeletedEvent): void {
  let entity = new DataDeleted(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.dataId = event.params.dataId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDataPrepareRegistry(
  event: DataPrepareRegistryEvent,
): void {
  let entity = new DataPrepareRegistry(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.dataId = event.params.dataId
  entity.publicKeys = event.params.publicKeys

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDataRegistered(event: DataRegisteredEvent): void {
  let entity = new DataRegistered(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.dataId = event.params.dataId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRouterUpdated(event: RouterUpdatedEvent): void {
  let entity = new RouterUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.oldRouter = event.params.oldRouter
  entity.newRouter = event.params.newRouter

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
