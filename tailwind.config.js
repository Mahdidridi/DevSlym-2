/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'phoneImg': "url('/img/phone.png')",
            },
            colors:{
                light_blue : '#40BEBE',
                dark_blue : '#2361E6',
                bg_gray : '#DADADA',
                bg_dark_gray : '#7E7D84',
                pink_color : '#DB4CF4',
                purple_color : '#8057EC',
                blue_color : '#2864ED',
                light_blue_icon : '#10BBE0',
                red_color : '#EF3A00',
                yyelow_color : '#EFBB00',
                grey_color : '#93ADB2',
                light_blue_color : '#1752650D',
                light_grey_color : '#175265'
            }
        },
    },
    plugins: [],
}