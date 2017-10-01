class Stats {
    constructor(content) {
        this.region = content.Region;
        this.season = content.Season;
        this.match = content.Match;
        this.stats = this._structureStats(content.Stats);
    }

    getItem(name) {
        if (!name || !typeof name === 'string') return;
        return this.stats.find(s => s.name === name);
    }

    _structureStats(Stats) {
        const stats = [];
        for (const stat of Object.keys(Stats)) {
            const key = Stats[stat];
            const statObj = {
                fullName: key.label,
                name: key.field,
                category: key.category,
                valueInt: key.ValueInt,
                valueDec: key.ValueDec,
                value: key.value,
                rank: key.rank,
                percentile: key.percentile,
                displayValue: key.displayValue
            };
            stats.push(statObj);
        }
        return stats;
    }
}

module.exports = Stats;