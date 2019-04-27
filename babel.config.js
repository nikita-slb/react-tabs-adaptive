module.exports = function (api) {
    api.cache(true);

    const presets = [
        "@babel/preset-react"
    ];
    const plugins = [
        "@babel/plugin-proposal-class-properties"
    ];
    const ignore = [
        "**/__tests__"
    ];

    return {
        presets,
        plugins,
        ignore
    };
};