use('dbtuan7')
    db.khoa.aggregate([
        { $project: { _id: 0, maKhoa: 1, tenKhoa: 1 } },
        { $sort: { tenKhoa: 1 } },
        { $out: 'thongKe' }
    ])