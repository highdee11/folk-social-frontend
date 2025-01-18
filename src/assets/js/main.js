// import { StorageConst } from "../../core/data/const"
// var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
// var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// // Change the icons inside the button based on previous settings
// if (localStorage.getItem(StorageConst.THEME) === 'dark' || (!(StorageConst.THEME in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//     themeToggleLightIcon?.classList.remove('hidden');
// } else {
//     themeToggleDarkIcon?.classList.remove('hidden');
// }

// var themeToggleBtn = document.getElementById('theme-toggle');

// themeToggleBtn?.addEventListener('click', function() {

//     // toggle icons inside button
//     themeToggleDarkIcon?.classList.toggle('hidden');
//     themeToggleLightIcon?.classList.toggle('hidden');

//     // if set via local storage previously
//     if (localStorage.getItem(StorageConst.THEME)) {
//         if (localStorage.getItem(StorageConst.THEME) === 'light') {
//             document.documentElement.classList.add('dark');
//             localStorage.setItem(StorageConst.THEME, 'dark');
//         } else {
//             document.documentElement.classList.remove('dark');
//             localStorage.setItem(StorageConst.THEME, 'light');
//         }

//     // if NOT set via local storage previously
//     } else {
//         if (document.documentElement.classList.contains('dark')) {
//             document.documentElement.classList.remove('dark');
//             localStorage.setItem(StorageConst.THEME, 'light');
//         } else {
//             document.documentElement.classList.add('dark');
//             localStorage.setItem(StorageConst.THEME, 'dark');
//         }
//     }
    
// });