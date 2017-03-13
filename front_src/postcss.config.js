module.exports = {
    plugins: [
        require('precss'),
        require('autoprefixer')({browsers: ['last 2 versions']}),
        require('pixrem')({rootValue:10, html:false}),
        require('lost')
    ]
}
