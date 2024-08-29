import {
  FeeLocked as FeeLockedEvent,
  FeeSettled as FeeSettledEvent,
  FeeTokenAdded as FeeTokenAddedEvent,
  FeeTokenDeleted as FeeTokenDeletedEvent,
  FeeTokenUpdated as FeeTokenUpdatedEvent,
  FeeUnlocked as FeeUnlockedEvent,
  TokenTransfered as TokenTransferedEvent,
  TokenWithdrawn as TokenWithdrawnEvent,
} from "../generated/FeeMgt/FeeMgt"
import {
  FeeLocked,
  FeeSettled,
  FeeTokenAdded,
  FeeTokenDeleted,
  FeeTokenUpdated,
  FeeUnlocked,
  TokenTransfered,
  TokenWithdrawn,
} from "../generated/schema"

export function handleFeeLocked(event: FeeLockedEvent): void {
  let entity = new FeeLocked(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.taskId = event.params.taskId
  entity.tokenSymbol = event.params.tokenSymbol
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFeeSettled(event: FeeSettledEvent): void {
  let entity = new FeeSettled(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.taskId = event.params.taskId
  entity.tokenSymbol = event.params.tokenSymbol
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFeeTokenAdded(event: FeeTokenAddedEvent): void {
  let entity = new FeeTokenAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.tokenSymbol = event.params.tokenSymbol.toString()
  entity.tokenAddress = event.params.tokenAddress
  entity.computingPrice = event.params.computingPrice

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFeeTokenDeleted(event: FeeTokenDeletedEvent): void {
  let entity = new FeeTokenDeleted(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.tokenSymbol = event.params.tokenSymbol.toString()

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFeeTokenUpdated(event: FeeTokenUpdatedEvent): void {
  let entity = new FeeTokenUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.tokenSymbol = event.params.tokenSymbol.toString()
  entity.tokenAddress = event.params.tokenAddress
  entity.computingPrice = event.params.computingPrice

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFeeUnlocked(event: FeeUnlockedEvent): void {
  let entity = new FeeUnlocked(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.taskId = event.params.taskId
  entity.tokenSymbol = event.params.tokenSymbol
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTokenTransfered(event: TokenTransferedEvent): void {
  let entity = new TokenTransfered(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.from = event.params.from
  entity.tokenSymbol = event.params.tokenSymbol
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTokenWithdrawn(event: TokenWithdrawnEvent): void {
  let entity = new TokenWithdrawn(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.to = event.params.to
  entity.tokenSymbol = event.params.tokenSymbol
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
