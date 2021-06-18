const db = require('../config/database');

module.exports = class Restaurant {
    constructor(id, r_name, r_address, r_city, r_state, r_country){
        this.id = id;
        this.r_name = r_name;
        this.r_address = r_address;
        this.r_city = r_city;
        this.r_state = r_state;
        this.r_country = r_country;
    }

    static fetchAll(){
        return db.execute('SELECT * FROM restaurants');
    }

    static fetchRestaurantById(id){
        return db.execute('SELECT * FROM restaurants WHERE id = ?', [id]);
    }

    static fetchRestaurantByname(name){
        return db.execute('SELECT * FROM restaurants WHERE r_name LIKE ?', ['%' + name + '%']);
    }

    static post(req) {
        return db.execute('INSERT INTO restaurants (r_name, r_branch_code, r_address, r_city, r_state, r_country) VALUES (?, ?, ?, ?, ?, ?)',
                                        [req.r_name, req.r_branch_code, req.r_address, req.r_city, req.r_state, req.r_country]);
    }

    static update(id, req) {
        return db.execute('UPDATE restaurants SET r_name = ?, r_branch_code = ?, r_address = ?, r_city = ?, r_state = ?, r_country = ? WHERE id = ?',
            [req.r_name, req.r_branch_code, req.r_address, req.r_city, req.r_state, req.r_country, id]);
    }

    static delete(id) {
        return db.execute('DELETE FROM restaurants WHERE id = ?', [id]);
    }

};