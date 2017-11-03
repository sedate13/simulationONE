
 module.exports= {
    getBin: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
dbInstance.read_bin()
      .then( bin => res.status(200).send( bin ) )
      .catch( () => res.status(500).send() );
    }
}