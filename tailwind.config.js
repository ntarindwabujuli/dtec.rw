/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html"], darkMode: "class", theme: {
        extend: {
            colors: {
                "slate-800": "rgb(176,123,0)",
                "backgrount-input": "rgb(176,123,0)",
                "gray-dark": "rgba(74,108,247,.1)",
                "dark": "rgb(9, 14, 52)"
            }, boxShadow: {
                "3xl": "0px 5px 10px rgba(4, 10, 34, .2)"
            }
        }, fontFamily: {
            "Inter": '"Inter", sans-serif'
        },
    }, plugins: [],
}
