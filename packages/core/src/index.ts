type ComponentProps = {
    className?: string;
    children: unknown[];
};

export function component<T_State extends object>(
    tagName: string,
    props: ComponentProps
) {
    const element = document.createElement(tagName);

    return {
        updateState,
    };

    function render() {}

    function updateState(newState: Partial<T_State>) {
        render();
    }
}
