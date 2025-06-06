<script lang="ts">
    import type { Note } from "$lib/core/note";
    import { formatNote } from "$lib/core/format";

    type Props = {
        readonly active: boolean;
        readonly note: Note;
    }

    const { active, note }: Props = $props();
</script>

<div class="container">
    <div class={`content ${active ? "active" : "inactive"}`}>
        <span>{formatNote(note)}</span>
    </div>
</div>

<style>
    .container {
        display: flex;
        flex-direction: row;
        width: 2.75rem;
        height: 2.75rem;
        padding: 1px;
        align-items: center;
        justify-content: center;
    }

    .content {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        line-height: 40px;
        border-radius: 9999px;
        color: white;
    }

    .active {
        width: 40px;
        height: 40px;
        background-color: #1e40af;
    }

    .inactive {
        width: 34px;
        height: 34px;
        background-color: #60a5fa;
        color: black;
    }
</style>
