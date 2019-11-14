function logger(req, res, next) {
    console.log(`${req.method} to ${re.url} and [${new Date().toISOString()}]`);
    next();
}

module.exports = logger;