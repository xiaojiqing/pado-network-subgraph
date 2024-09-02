import {
  FeeTokenAdded as FeeTokenAddedEvent,
  FeeTokenDeleted as FeeTokenDeletedEvent,
  FeeTokenUpdated as FeeTokenUpdatedEvent,
} from "../generated/FeeMgt/FeeMgt"
import {
  FeeTokenInfo
} from "../generated/schema"
import {Bytes, store} from "@graphprotocol/graph-ts";

export function handleFeeTokenAdded(event: FeeTokenAddedEvent): void {
    let entity = new FeeTokenInfo(event.params.tokenSymbol.toHexString());

    entity.symbol = event.params.tokenSymbol.toString();
    entity.tokenAddress = event.params.tokenAddress;
    entity.computingPrice = event.params.computingPrice;
    entity.save();
}

export function handleFeeTokenDeleted(event: FeeTokenDeletedEvent): void {
    const feeTokenInfo = FeeTokenInfo.load(event.params.tokenSymbol.toHexString());
    if (feeTokenInfo !== null) {
        store.remove("FeeTokenInfo", event.params.tokenSymbol.toHexString());
    }
}

export function handleFeeTokenUpdated(event: FeeTokenUpdatedEvent): void {
    let entity = FeeTokenInfo.load(event.params.tokenSymbol.toHexString());
    if (entity === null) {
        entity = new FeeTokenInfo(event.params.tokenSymbol.toHexString());
    }

    entity.symbol = event.params.tokenSymbol.toString();
    entity.tokenAddress = event.params.tokenAddress;
    entity.computingPrice = event.params.computingPrice;
    entity.save();
}

