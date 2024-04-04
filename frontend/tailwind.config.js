/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.tsx'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                primary: {
                    light: '#63a4ff',
                    DEFAULT: '#1976d2',
                    dark: '#004ba0'
                },
                grey: {
                    light: '#f5f5f5',
                    DEFAULT: '#c2c2c2',
                    dark: ' #929292'
                }
            },
            flex: {
                '0-auto': '0 0 auto',
                0: '0 1 0%',
                '1-0-auto': '1 0 auto'
            }
        }
    },
    variants: {
        extend: {
            backgroundColor: ['active'],
            border: ['active'],
            borderColor: ['active'],
            textColor: ['active'],
            fontSize: ['active']
        }
    },
    plugins: []
};
