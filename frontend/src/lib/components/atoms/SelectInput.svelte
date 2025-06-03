<script lang="ts">
    import type { Option } from "$lib/core/options";

    type Props = {
        readonly name: string;
        readonly options: readonly Option<string>[];
        readonly value: string;
        readonly onChange: (newValue: string) => void;
    };

    const {
        name,
        options,
        value,
        onChange,
    }: Props = $props();
</script>

<select
    oninput={(e) => {
        const selected = options.find((o) => String(o.value) === String(e.target.value))?.value;
        if (selected !== undefined) {
            onChange(selected);
        }
    }}
    {name}
    {value}
>
    {#each options as option}
        <option value={option.value}>
            {option.label}
        </option>
    {/each}
</select>
