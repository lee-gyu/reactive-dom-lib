type ComponentProps = {
    className?: string;
};

declare namespace JSX {
    type IntrinsicElements = {
        div: ComponentProps;
    };
}
