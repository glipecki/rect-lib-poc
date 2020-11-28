const {alias} = require('react-app-rewire-alias')

module.exports = function override(config) {
    // only needed for yarn/npm link
    return alias({
        'react': 'node_modules/react',
        'react-dom': 'node_modules/react-dom',
    })(config);
}