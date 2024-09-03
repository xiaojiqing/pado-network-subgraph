import {
  FeeTokenAdded as FeeTokenAddedEvent,
  FeeTokenDeleted as FeeTokenDeletedEvent,
  FeeTokenUpdated as FeeTokenUpdatedEvent,
  FeeMgt
} from "../generated/FeeMgt/FeeMgt"
import {
  FeeTokenInfo
} from "../generated/schema"
import {Bytes, Address, store} from "@graphprotocol/graph-ts";

export function handleFeeTokenAdded(event: FeeTokenAddedEvent): void {
    const entity = new FeeTokenInfo(event.params.tokenId.toHexString());
    const feeMgt = FeeMgt.bind(event.address);
    const feeTokenInfo = feeMgt.getFeeTokenById(event.params.tokenId);

    entity.symbol = feeTokenInfo.symbol;
    entity.tokenAddress = feeTokenInfo.tokenAddress;
    entity.computingPrice = feeTokenInfo.computingPrice;
    entity.save();
}

export function handleFeeTokenDeleted(event: FeeTokenDeletedEvent): void {
    const feeTokenInfo = FeeTokenInfo.load(event.params.tokenId.toHexString());
    if (feeTokenInfo !== null) {
        store.remove("FeeTokenInfo", event.params.tokenId.toHexString());
    }
}

export function handleFeeTokenUpdated(event: FeeTokenUpdatedEvent): void {
    let entity = FeeTokenInfo.load(event.params.tokenId.toHexString());
    if (entity === null) {
        entity = new FeeTokenInfo(event.params.tokenId.toHexString());
    }

    const feeMgt = FeeMgt.bind(event.address);
    const feeTokenInfo = feeMgt.getFeeTokenById(event.params.tokenId);

    entity.symbol = feeTokenInfo.symbol;
    entity.tokenAddress = feeTokenInfo.tokenAddress;
    entity.computingPrice = feeTokenInfo.computingPrice;
    entity.save();
}

