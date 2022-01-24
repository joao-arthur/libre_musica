module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.tsx'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {    
            },
            flex: {
                '0-auto': '0 0 auto',
                0: '0 1 0%'
            },
            margin: {
                '-100': '-100%'
            },
            width: {
                '1/10': '10%',
                100: '400px',
                120: '500px'
            },
            maxWidth: {
                '4/5': '80%'
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
