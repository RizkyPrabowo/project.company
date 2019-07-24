module.exports = function(Client) {
    Client.remoteMethod(
        'getNameClient',
        {
            description: 'get nameclient like -> Azura',
            accepts: [
                { arg: 'nameclient', type: 'string'}
            ],
            returns:{
                arg: 'res', type:'object', root: true
            },
            http: { path: '/getNameClient', verb: 'get' }
        }
    );
    
    Client.getNameClient = function(nameclient, callback){
        new Promise(function(resolve, reject){
            var filter = {
                where: {
                    nama_client : {
                        like : nameclient
                    }
                }
            }
            Client.find(filter, function(err, result){
                if(err) reject (err)
                if(result === null){
                    err = new Error ("Client Tidak Dapat Ditemukan")
                    err.statusCode = 404
                    reject (err)
                }
                resolve(result)
            })
        }).then(function(res){
            if (!res) callback (err)
            return callback (null, res)
        }).catch(function(err){
            callback(err);
        });
    }
    
    Client.remoteMethod(
        'getProject',
        {
            description: 'get nameproject like -> System Integrasi',
            accepts: [
                { arg: 'nameproject', type: 'string'}
            ],
            returns:{
                arg: 'res', type:'object', root: true
            },
            http: { path: '/getProject', verb: 'get' }
        }
    );
    
    Client.getProject = function(nameproject, callback){
        new Promise(function(resolve, reject){
            var filter = {
                where: {
                    project : {
                        like : nameproject
                    }
                }
            }
            Client.find(filter, function(err, result){
                if(err) reject (err)
                if(result === null){
                    err = new Error ("Client Tidak Dapat Ditemukan")
                    err.statusCode = 404
                    reject (err)
                }
                resolve(result)
            })
        }).then(function(res){
            if (!res) callback (err)
            return callback (null, res)
        }).catch(function(err){
            callback(err);
        });
    }
    

};