const db = require('../config/db')

const getPersonnel = (req, res) => {
    const querySql = 'SELECT * FROM personnel';

    db.query(querySql, (err, rows, field) => {
        if (err) return res.status(500).json({ message: 'Ada kesalahan', error: err });

        res.status(200).json({ success: true, data: rows });
    });
}

const getPersonnelbyId = (req, res) => {
    const querySql = 'SELECT * FROM personnel WHERE id = ?';

    db.query(querySql, req.params.id, (err, rows, field) => {
        if (err) return res.status(500).json({ message: 'Ada kesalahan', error: err });

        res.status(200).json({ success: true, data: rows });
    });
}

const addPersonnel = (req, res) => {
    const data = { ...req.body };
    const querySql = 'INSERT INTO personnel SET ?';

    db.query(querySql, data, (err, rows, field) => {
        if (err) return res.status(500).json({ message: 'Gagal insert data!', error: err });

        res.status(201).json({ success: true, message: 'Berhasil insert data!' });
    });
}

const editPersonnel = (req, res) => {
    const data = { ...req.body };
    const querySearch = 'SELECT * FROM personnel WHERE id = ?';
    const queryUpdate = 'UPDATE personnel SET ? WHERE id = ?';

    db.query(querySearch, req.params.id, (err, rows, field) => {
        if (err) return res.status(500).json({ message: 'Ada kesalahan', error: err });

        if (rows.length) {
            db.query(queryUpdate, [data, req.params.id], (err, rows, field) => {
                if (err) return res.status(500).json({ message: 'Ada kesalahan', error: err });

                res.status(200).json({ success: true, message: 'Berhasil update data!' });
            });
        } else {
            return res.status(404).json({ message: 'Data tidak ditemukan!', success: false });
        }
    });
}

const deletePersonnel = (req, res) => {
    const querySearch = 'SELECT * FROM personnel WHERE id = ?';
    const queryDelete = 'DELETE FROM personnel WHERE id = ?';

    db.query(querySearch, req.params.id, (err, rows, field) => {
        if (err) return res.status(500).json({ message: 'Ada kesalahan', error: err });

        if (rows.length) {
            db.query(queryDelete, req.params.id, (err, rows, field) => {
                if (err) return res.status(500).json({ message: 'Ada kesalahan', error: err });

                res.status(200).json({ success: true, message: 'Berhasil hapus data!' });
            });
        } else {
            return res.status(404).json({ message: 'Data tidak ditemukan!', success: false });
        }
    });
}

module.exports = { getPersonnel, addPersonnel, editPersonnel, deletePersonnel, getPersonnelbyId }