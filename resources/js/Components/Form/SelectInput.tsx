import React, {
    forwardRef,
    SelectHTMLAttributes,
    useEffect,
    useImperativeHandle,
    useRef,
} from "react";

interface Props {
    isFocused?: boolean;
    options?: OptionProp[];
}

type OptionProp = {
    value: string;
    label: string;
};

export default forwardRef(function SelectInput(
    {
        className = "",
        isFocused = false,
        children,
        options = [],
        ...props
    }: SelectHTMLAttributes<HTMLSelectElement> & Props,
    ref
) {
    const localRef = useRef<HTMLSelectElement>(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, []);

    return (
        <select
            {...props}
            className={
                "border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-primary-500 dark:focus:border-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 rounded-md shadow-sm " +
                className
            }
            ref={localRef}
        >
            {options.map((option: OptionProp) => (
                <option key={option.value} value={option.value}>
                    {option.label} - {option.value}
                </option>
            ))}
        </select>
    );
});
