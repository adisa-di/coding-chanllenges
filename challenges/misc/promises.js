let central = require('./central'),
    db1 = require('./db1'),
    db2 = require('./db2'),
    db3 = require('./db3'),
    vault = require('./vault'),
    mark = require('./mark');

module.exports = function(id) {

    class Database {
        static getDBMap(db) {
            const map = { "db1": db1, "db2": db2, "db3": db3 };
            return map[db];
        }
    }

    return new Promise((res, rej) => {

        // wrap both promises in Promise.all([])
        Promise.all([
            central(id)

            .catch(() => {
                return Promise.reject('Error central');
            })
            .then((db) => {
                const dbObj = Database.getDBMap(db);
                return dbObj(id) // returns { username, country }
                        .catch(() => {
                            return Promise.reject("Error " + db); // reject inner promise 
                        });
            }),
            vault(id) // returns { firstname, lastname, email }

            .catch(() => {
                return Promise.reject('Error vault')
            })
        ])
        .then(data => { // [{ username, country }, { firstname, lastname, email }]
            mark(id).catch(() => {});
            const { username, country } = data[0];
            const { firstname, lastname, email } = data[1];

            res({
                id,
                username,
                country,
                firstname,
                lastname,
                email
            })
        })
        .catch(err => {
            rej(err);
        })

    });
};
