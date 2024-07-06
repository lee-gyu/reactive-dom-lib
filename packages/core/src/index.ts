type ComponentArgs<T_State extends object> = {
    tag: string;
    state: T_State;
};

export function component<T_State extends object>(
    args: ComponentArgs<T_State>
) {
    const { tag } = args;
    const element = document.createElement(tag);

    return {
        updateState,
    };

    function render() {}

    function updateState(newState: Partial<T_State>) {
        Object.assign(args.state, newState);
        render();
    }
}
