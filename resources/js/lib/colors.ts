import colors from "tailwindcss/colors";

export const primary = colors.sky;
export const secondary = colors.amber;
export const rose = colors.rose;

export interface StyleProps {
    styles?: "primary" | "secondary" | "tri" | "yellow" | "gray" | "default";
}

export const colorStyles = {
    primary: " bg-gradient-to-br from-primary-500 to-blue-700",
    secondary: " bg-gradient-to-br from-secondary-500 to-secondary-700",
    tri: " bg-gradient-to-br from-tri-500 to-tri-700",
    yellow: " bg-gradient-to-br from-yellow-500 to-yellow-700",
    gray: " bg-gradient-to-br from-gray-800 to-gray-900",
    default: " bg-white dark:bg-gray-800",
};
