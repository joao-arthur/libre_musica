<script lang="ts">
    import { num } from "funis";
    import { instrumentTable } from "$lib/store";

    let numberOfFrets: number;
    let rangeOfFrets: readonly number[];

    instrumentTable.store.subscribe((value) => {
        numberOfFrets = value.numberOfFrets;
        rangeOfFrets = num.range(0, numberOfFrets);
    });
</script>
<div class="container">
    {#each rangeOfFrets.slice(1) as i}
        <div class="col" style={`width: ${100 / (rangeOfFrets.length - 1)}%`}>
            <span>{i}</span>
        </div>
    {/each}
</div>
<style>
    .container {
        display: flex;
        width: 100%;
    }

    .col {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2.75rem;
        height: 2.75rem;
        flex-shrink: 0;
    }
</style>
