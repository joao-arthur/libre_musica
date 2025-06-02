<script lang="ts">
    import type { Options } from "@/lib/options";

    type Props<T extends string | number> = {
        readonly name: string;
        readonly options: Options<T>;
        readonly value: T;
        readonly onChange: (newValue: T) => void;
    };

    const {
        name,
        options,
        value,
        onChange,
    } = $props();
</script>

<select
    onChange={(e) => {
        const selected = options.find((o) => String(o.value) === String(e.target.value))?.value;
        if (selected !== undefined) {
            onChange(selected);
        }
    }}
    {name}
    {value}
>
    {
        options.map(({ value, label }) => (
            <option value={value}>
                {label}
            </option>
        ))
    }
</select>
