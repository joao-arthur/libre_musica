<script lang="ts">
    import type { JSX, ReactNode } from "react";

    type Props = {
        readonly children: ReactNode;
    };
</script>

<div className="flex h-svh">
    <div className="block w-full h-full">
        {children}
    </div>
</div>
