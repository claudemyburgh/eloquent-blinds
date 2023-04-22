import slugify from "slugify";

export function unSlug(value: string) {
    return value.replace(/[_-]/g, " ");
}

export function cleanUrl(url: string) {
    return url.replace(/\?.+/, "");
}

export function slugIt(value: string) {
    if (value?.charAt(value?.length - 1) == " ") return value;
    return slugify(value, { lower: true });
}

export function fullUrl(url: string): string {
    return `${import.meta.env.APP_URL}/${url}`;
}
