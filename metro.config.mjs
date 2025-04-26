import { getDefaultConfig } from 'metro-config';

export default (async () => {
    const {
        resolver: { sourceExts, assetExts },
    } = await getDefaultConfig.getDefaultConfig();
    return {
        transformer: {
            babelTransformerPath: require.resolve('your-babel-transformer'),
        },
        resolver: {
            assetExts: assetExts.filter(ext => ext !== 'db'),
            sourceExts: [...sourceExts, 'db'],
        },
    };
})();
