module.exports = function(Report) {
    Report.remoteMethod(
        'getNameProject',
        {
            description: 'get name Project like -> Sistem Integrasi',
            accepts: [
                { arg: 'nameproject', type: 'string'}
            ],
            returns:{
                arg: 'res', type:'object', root: true
            },
            http: { path: '/getNameProject', verb: 'get' }
        }
    );

    Report.getNameProject = function(nameproject, callback){
        new Promise(function(resolve, reject){
            var filter = {
                where: {
                    nama_project : {
                        like : nameproject
                    }
                }
            }
            Report.find(filter, function(err, result){
                if(err) reject (err)
                if(result === null){
                    err = new Error ("Nama Project Tidak Dapat Ditemukan")
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

    Report.remoteMethod(
        'getSubject',
        {
            description: 'get Subject like -> Trouble',
            accepts: [
                { arg: 'isisubject', type: 'string'}
            ],
            returns:{
                arg: 'res', type:'object', root: true
            },
            http: { path: '/getSubject', verb: 'get' }
        }
    );

    Report.getSubject = function(isisubject, callback){
        new Promise(function(resolve, reject){
            var filter = {
                where: {
                    subject : {
                        like : isisubject
                    }
                }
            }
            Report.find(filter, function(err, result){
                if(err) reject (err)
                if(result === null){
                    err = new Error ("Subject Tidak Dapat Ditemukan")
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