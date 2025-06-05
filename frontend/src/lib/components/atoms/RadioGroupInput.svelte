<script lang="ts" generics="Op extends string | number">
    import type { Option } from "$lib/core/options";

    type Props = {
        readonly name: string;
        readonly options: readonly Option<Op>[];
        readonly value: Op;
        readonly onChange: (newValue: Op) => void;
        readonly size: "sm" | "md" | "lg";
    };

    const {
        name,
        options,
        value,
        onChange,
        size,
    }: Props = $props();
</script>

<style>
    ul {
        margin: 0;
        padding: 0;
        display: flex;
        column-gap: 2px;
    }

    li {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    button {
        line-height: 30px;
        background-color: red;
        border: none;
        border-radius: 99px;
    }

    .small {
        width: 50px;
    }

    .medium {
        width: 100px;
    }

    .big {
        width: 150px;
    }

    .selected {
        background-color: #1e40af;
        color: white;
    }

    .unselected {
        background-color: #60a5fa;
    }
</style>

<ul>
    {#each options as note}
        <li>
            <button
                class={[
                    note.value === value ? "selected" : "unselected",
                    size === "sm" ? "small" : "",
                    size === "md" ? "medium" : "",
                    size === "lg" ? "big" : "",
                ].join(" ")}
                onclick={(e) => onChange(note.value)}
            >
                {note.label}
            </button>
        </li>
    {/each}
</ul>
