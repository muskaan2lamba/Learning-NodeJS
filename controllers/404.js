exports.getErrorMessage = (req,res,next) => {
    // res.status(404).sendFile(path.join(__dirname,'views','404-page.html'))
    res.status(404).render('404', {pageTitle: 404, path: '404'})
}