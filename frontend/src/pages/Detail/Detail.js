import React from 'react'
import { Link } from 'react-router-dom'

function Detail() {
    return (
        <div class="border p-3">
            <span class="fs-3 fw-bold">Detail Personnel</span>
            <table class='ms-4 mt-2'>
                <tbody>
                    <tr>
                        <td class="fw-bold">ID</td>
                        <td class="ps-3">: 12345</td>
                    </tr>
                    <tr>
                        <td class="fw-bold">First Name</td>
                        <td class="ps-3">: Thornton</td>
                    </tr>
                    <tr>
                        <td class="fw-bold">Last Name</td>
                        <td class="ps-3">: Thornton</td>
                    </tr>
                    <tr>
                        <td class="fw-bold">Divisi</td>
                        <td class="ps-3">: Produksi</td>
                    </tr>
                </tbody>
            </table>
            <Link to={'/'}>
                <button type="button" class="btn btn-success btn-sm me-3 mt-3">Kembali</button>
            </Link>
            <button type="button" class="btn btn-danger btn-sm mt-3">Hapus</button>
        </div>
    )
}

export default Detail