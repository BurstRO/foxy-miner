class CurrentRound {
  constructor(upstream, miningInfo, miner) {
    this.upstream = upstream;
    this.miningInfo = miningInfo;
    this.miner = miner;
    this.weight = (upstream && (upstream.upstreamConfig.weight || upstream.upstreamConfig.prio || upstream.weight)) || 10;
    this.scanDone = false;
    this.progress = 0;
  }

  start() {
    this.miner.publish('new-round', this.miningInfo);
  }

  getHeight() {
    return this.miningInfo.height;
  }
}

module.exports = CurrentRound;
