module.exports = async fn => {
    while(await fn()){}
};
