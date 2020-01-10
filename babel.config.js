module.exports = {
    plugins: ['babel-plugin-styled-components'],
    presets: [
        '@babel/preset-typescript',
        [
            '@babel/preset-env',
            {
                useBuiltIns: 'usage',
            },
        ],
        '@babel/preset-react',
    ],
};
