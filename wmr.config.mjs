import { defineConfig } from 'wmr';

export default defineConfig({
    alias: {
        react: 'preact/compat',
        'react-dom': 'preact/compat',
    },
    root: `${process.cwd()}/src`,
});
