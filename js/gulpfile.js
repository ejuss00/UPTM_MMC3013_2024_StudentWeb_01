
//default gulp task
exports.default = series(scssTask, jsTask, browserSyncServer, watchTask);


//Build Gulp task
exports.build = series(scssTask, jsTask);