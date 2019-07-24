module.exports = function(Employee) {
    Employee.remoteMethod(
        'getNameRizky',
        {
            description: 'get name like -> Rizky',
            accepts: [
                { arg: 'firstname', type: 'string'}
            ],
            returns:{
                arg: 'res', type:'object', root: true
            },
            http: { path: '/getNameRizky', verb: 'get' }
        }
    );

    Employee.getNameRizky = function(firstname, callback){
        new Promise(function(resolve, reject){
            var filter = {
                where: {
                    first_name : {
                        like : firstname
                    }
                }
            }
            Employee.find(filter, function(err, result){
                if(err) reject (err)
                if(result === null){
                    err = new Error ("Nama Tidak Dapat Ditemukan")
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

Employee.remoteMethod(
    'getLastBowo',
    {
        description: 'get name like -> Bowo',
        accepts: [
            { arg: 'lastname', type: 'string'}
        ],
        returns:{
            arg: 'res', type:'object', root: true
        },
        http: { path: '/getLastBowo', verb: 'get' }
    }
);

Employee.getLastBowo = function(lastname, callback){
    new Promise(function(resolve, reject){
        var filter = {
            where: {
                last_name : {
                    like : lastname
                }
            }
        }
        Employee.find(filter, function(err, result){
            if(err) reject (err)
            if(result === null){
                err = new Error ("Nama Tidak Dapat Ditemukan")
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

Employee.remoteMethod(
    'getEmailAddress',
    {
        description: 'get email like -> rizkyprabowowo@gmail.com',
        accepts: [
            { arg: 'emailaddress', type: 'string'}
        ],
        returns:{
            arg: 'res', type:'object', root: true
        },
        http: { path: '/getEmailAddress', verb: 'get' }
    }
);

Employee.getEmailAddress = function(emailaddress, callback){
    new Promise(function(resolve, reject){
        var filter = {
            where: {
                email_address : {
                    like : emailaddress
                }
            }
        }
        Employee.find(filter, function(err, result){
            if(err) reject (err)
            if(result === null){
                err = new Error ("Email Tidak Dapat Ditemukan")
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