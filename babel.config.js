module.exports = {
    plugins: ['babel-plugin-styled-components'],
    presets: [
        '@babel/preset-typescript',
        [
            '@babel/preset-env',
            {
                useBuiltIns: 'usage',
                corejs: { version: '3.6', proposals: true },
            },
        ],
        '@babel/preset-react',
    ],
};
