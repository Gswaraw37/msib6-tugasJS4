let frm = document.getElementById('data');
let jabatanPilihan = ["Manager", "Asisten Manager", "Staff"];
let pilihJabatan = `<option value="">---- Jabatan ----</option>`;
for(let p in jabatanPilihan){
    pilihJabatan += `<option value="${jabatanPilihan[p]}">${jabatanPilihan[p]}</option>`;
}
frm.jabatan.innerHTML = pilihJabatan;

let statusPilihan = ["Menikah", "Belum Menikah"];
let pilihStatus = `<option value="">---- Status ----</option>`;
for(let p in statusPilihan){
    pilihStatus += `<option value="${statusPilihan[p]}">${statusPilihan[p]}</option>`;
}
frm.status.innerHTML = pilihStatus;

function pegawai() {
    let nama = frm.nama.value;
    let jabatan = frm.jabatan.value;
    let status = frm.status.value;

    if(jabatan == 'Manager') gapok = 15000000;
    else if(jabatan == 'Asisten Manager') gapok = 10000000;
    else if(jabatan == 'Staff') gapok = 5000000;
    else gapok = 0;

    let tunjab = 0.15 * gapok;
    let bpjs = 0.1 * gapok;
    let tunjkel = (status == 'Menikah') ? 0.2 * gapok : 0;
    let totalGaji = gapok + tunjab + bpjs + tunjkel;

    gapok = formatUang(gapok);
    tunjab = formatUang(tunjab);
    bpjs = formatUang(bpjs);
    tunjkel = formatUang(tunjkel);
    totalGaji = formatUang(totalGaji);

    document.write(`
    <table border='1' style='margin: auto; border:1px solid; justify-content: center; padding: 0; border-spacing: 0; width: 100%;'>
        <thead>
            <tr>
                <th style='background-color: cyan; padding: 5px;'>Nama Pegawai</th>
                <th style='background-color: cyan; padding: 5px;'>Jabatan</th>
                <th style='background-color: cyan; padding: 5px;'>Status</th>
                <th style='background-color: cyan; padding: 5px;'>Gaji Pokok</th>
                <th style='background-color: cyan; padding: 5px;'>Tunjangan Jabatan</th>
                <th style='background-color: cyan; padding: 5px;'>BPJS</th>
                <th style='background-color: cyan; padding: 5px;'>Tunjangan Keluarga</th>
            </tr>
        </thead>

        <tbody>
            <tr>
                <td style='background-color: snow; padding: 3px; text-align: center;'>${nama}</td>
                <td style='background-color: snow; padding: 3px; text-align: center;'>${jabatan}</td>
                <td style='background-color: snow; padding: 3px; text-align: center;'>${status}</td>
                <td style='background-color: snow; padding: 3px; text-align: center;'>${gapok}</td>
                <td style='background-color: snow; padding: 3px; text-align: center;'>${tunjab}</td>
                <td style='background-color: snow; padding: 3px; text-align: center;'>${bpjs}</td>
                <td style='background-color: snow; padding: 3px; text-align: center;'>${tunjkel}</td>
            </tr>
        </tbody>

        <tfoot>
            <tr>
                <th colspan="3" style='background-color: salmon; padding: 5px;'>Total Gaji</th>
                <th colspan="4" style='background-color: salmon; padding: 5px;'>${totalGaji}</th>
            </tr>
        </tfoot>
    </table>
    `);
}

function formatUang(angka) {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(angka);
}