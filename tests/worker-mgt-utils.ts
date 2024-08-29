import { newMockEvent } from "matchstick-as"
import { ethereum, Address, Bytes } from "@graphprotocol/graph-ts"
import {
  Initialized,
  OwnershipTransferred,
  SelectDataWorkers,
  WorkerRegistry
} from "../generated/WorkerMgt/WorkerMgt"

export function createInitializedEvent(version: i32): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(version))
    )
  )

  return initializedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createSelectDataWorkersEvent(
  dataId: Bytes,
  workerIds: Array<Bytes>
): SelectDataWorkers {
  let selectDataWorkersEvent = changetype<SelectDataWorkers>(newMockEvent())

  selectDataWorkersEvent.parameters = new Array()

  selectDataWorkersEvent.parameters.push(
    new ethereum.EventParam("dataId", ethereum.Value.fromFixedBytes(dataId))
  )
  selectDataWorkersEvent.parameters.push(
    new ethereum.EventParam(
      "workerIds",
      ethereum.Value.fromFixedBytesArray(workerIds)
    )
  )

  return selectDataWorkersEvent
}

export function createWorkerRegistryEvent(
  workerId: Bytes,
  workerType: i32,
  owner: Address
): WorkerRegistry {
  let workerRegistryEvent = changetype<WorkerRegistry>(newMockEvent())

  workerRegistryEvent.parameters = new Array()

  workerRegistryEvent.parameters.push(
    new ethereum.EventParam("workerId", ethereum.Value.fromFixedBytes(workerId))
  )
  workerRegistryEvent.parameters.push(
    new ethereum.EventParam(
      "workerType",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(workerType))
    )
  )
  workerRegistryEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )

  return workerRegistryEvent
}
