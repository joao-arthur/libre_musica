<script lang="ts" generics="Op extends string | number">
    import type { Option } from "$lib/core/options";

    type Props = {
        readonly name: string;
        readonly options: readonly Option<Op>[];
        readonly value: Op;
        readonly onChange: (newValue: Op) => void;
    };

    const {
        name,
        options,
        value,
        onChange,
    }: Props = $props();

    function handleOnChange(value: string) {
        const selected = options.find((o) => String(o.value) === String(value))?.value;
        if (selected !== undefined) {
            onChange(selected);
        }
    }
</script>

<select
    oninput={(e) => handleOnChange(e.currentTarget.value)}
    {name}
    {value}
>
    {#each options as option}
        <option value={option.value}>
            {option.label}
        </option>
    {/each}
</select>
