export const StoreTheme = (theme = "dark") => {
    localStorage.setItem("theme", JSON.stringify(theme));
}

export const GetTheme = () => {
    let selectedTheme;
    const theme = localStorage.getItem("theme");
    if (typeof theme !== "undefined" && theme !== null) {
        selectedTheme = JSON.parse(theme);
    }
    return selectedTheme;
}