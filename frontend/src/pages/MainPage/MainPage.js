import React from 'react'
import { Link } from 'react-router-dom'

function MainPage() {
    return (
        <div class="my-3 border p-3">
            <span class="fs-3 fw-bold">Form Identitas</span>
            <form class="w-50 mt-3">
                <input type="text" class="form-control my-2" placeholder="ID" aria-label="Id" aria-describedby="addon-wrapping" />
                <div class="input-group my-2">
                    <input type="text" class="form-control" placeholder="First Name" aria-label="fname" id='fname' />
                    <input type="text" class="form-control" placeholder="Last Name" aria-label="lname" />
                </div>
                <div class="input-group my-2">
                    <label class="input-group-text" for="inputGroupSelect01">Divisi</label>
                    <select class="form-select" id="inputGroupSelect01">
                        <option selected>Pilihan...</option>
                        <option value="Produksi">Produksi</option>
                        <option value="Pemasaran">Pemasaran</option>
                        <option value="Pengembangan Produk">Pengembangan Produk</option>
                        <option value="Human Resource">Human Resource</option>
                    </select>
                </div>
                <div class="input-group my-2">
                    <label class="input-group-text" for="inputGroupSelect02">Jenis Kelamin</label>
                    <select class="form-select" id="inputGroupSelect02">
                        <option selected>Pilihan...</option>
                        <option value="Pria">Pria</option>
                        <option value="Wanita">Wanita</option>
                    </select>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">@</span>
                    <input type="email" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" />
                </div>
                <button type="button" class="btn btn-primary mt-1 mb-5">Submit</button>
            </form>


            <span class="fs-3 fw-bold">Tabel Personnel</span>
            <table class="table table-hover">
                <thead>
                    <tr class="table-light">
                        <th scope="col">#</th>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col" style={{ width: "20%" }}>Aksi</th>
                    </tr>
                </thead>
                <tbody class="table-group-divider">
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td class="gap-3 d-flex">
                            <Link to={'/detail'}>
                                <button type="button" class="btn btn-warning btn-sm">Detail</button>
                            </Link>
                            <button type="button" class="btn btn-danger btn-sm">Hapus</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default MainPage