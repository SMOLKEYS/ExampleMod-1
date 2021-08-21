const coredvault = extendContent(CoreBlock, "coredvault", {
    canReplace(other){
        //YOU CAN REPLACE STORAGEBLOCKS AHYES
        return this.super$canReplace(other) || ((other instanceof StorageBlock && coredvault.size >= other.size) || (other instanceof CoreBlock && coredvault.size >= other.size));
    },
    canPlaceOn(tile, team){
        if(tile == null) return false;
        var core = team.core();
        //must have all requirements
        if(core == null || (!Vars.state.rules.infiniteResources && !core.items.has(coredvault.requirements))) return false;
        return ((tile.block() instanceof StorageBlock && coredvault.size >= tile.block().size) || (tile.block() instanceof CoreBlock && coredvault.size >= tile.block().size));
    }
});
