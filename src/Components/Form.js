import * as React from 'react';
import { useState } from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useStyles from './Style';
import './App.css';
import Modal from './Modal';


export default function Form() {
  const classes = useStyles();
  
  const [nama, setNama] = useState('');
  const [ttl, setTtl] = useState('');
  const [jeniskelamin, setJeniskelamin] = useState('');
  const [status, setStatus] = useState('Belum Menikah');
  const [hobi, setHobi] = useState('');
  const [foto, setFoto] = useState('');

  const[datas,setDatas] = useState([]);
  
  const [modal, setModal] = useState(false);
  
  const handleImage = (event) => {
    setFoto(URL.createObjectURL(event.target.files[0]));
  }
  

  const handleSimpan = (event) => {
    event.preventDefault()
    setDatas([...datas, {id: datas.length, nama: nama, ttl:ttl, jeniskelamin:jeniskelamin, status:status, hobi:hobi, foto:foto}])
    setNama('');
    setTtl('');
    setJeniskelamin('');
    setStatus('Belum Menikah');
    setHobi('');
    setFoto('');
  }
  
  const handleCetak = (event) => {
    event.preventDefault();
    console.log(datas);
    setModal(true);

  }

  const handleReset = (event) => {
    event.preventDefault();
    setDatas([]);
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="lg">
            <Typography
              component="h1"
              variant="h1"
              align="center"
              gutterBottom
            >
              Formulir Data Diri
            </Typography>
          </Container>
          <Container maxWidth="sm"> 
            <Typography variant="h4" align="center"  paragraph>
              Isi Data Diri Anda:
            </Typography>
          </Container>
          <Container className={classes.Formku} maxWidth="md">
            <div className="App">
              <form>
                <h2 className = 'LabelJudul'>Isi Profil Anda:</h2>
                <br/>
                <br/>

                <label className ="Label">Nama Lengkap:</label><br/>
                <input
                  type="text"
                  name="nama"
                  className='KotakInput'
                  value={nama}
                  onChange={(e)=>setNama(e.target.value)}
                />
                <br/>

                <label className ="Label">Tempat & Tanggal Lahir:</label>
                <br/>
                <input
                  type="text"
                  name="tanggallahir"
                  className='KotakInput'
                  value={ttl}
                  onChange={(e)=>setTtl(e.target.value)}
                />
                <br/>

                <label className ="Label">Jenis Kelamin:</label>
                <br/>
                <div
                  className='JenisKelamin'
                  value={jeniskelamin}
                  onChange={(e)=>setJeniskelamin(e.target.value)}
                >
                    <input
                      type="radio"
                      name="jeniskelamin"
                      value="Laki-laki"
                    />
                    <label className='LabelKelamin'>Laki-laki</label>
                    <br/>
                    <br/>
                    <input
                      type="radio"
                      name="jeniskelamin"
                      value="Perempuan"/>
                    <label className='LabelKelamin'>Perempuan</label>
                </div>

                <label className ="Label">Status:</label>
                <br/>
                <select
                  name="status"
                  className='Status'
                  value={status}
                  onChange={(e)=>setStatus(e.target.value)}
                >
                    
                    <option value="Belum Menikah">Belum Menikah</option>
                    <option value="Sudah Menikah">Sudah Menikah</option>
                </select>
                <br/>

                <label className ="Label">Hobi:</label><br/>
                <input
                  type="text"
                  name="hobi"
                  className='KotakInput'
                  value={hobi}
                  onChange={(e)=>setHobi(e.target.value)}
                />
                <br/>
                    
                <label className ="Label">Pilih Foto Profil:</label><br/>
                <input
                  type="file"
                  accept="image/*" 
                  name="gambar"
                  className='FotoProfil'
                  onChange={handleImage}
                />
                <br/>
                <br/>
                <button className='Simpan' onClick={handleSimpan}>Simpan</button>
                <button className='Cetak' onClick={handleCetak}>Cetak</button>
                <button className='Reset' onClick={handleReset}>Reset</button>
              </form>
            </div>
          </Container>
          <div>
            {/*Open Modal*/}
            <Modal
              trigger = {modal}
              tutup = {setModal}
              datas = {datas}
            />
          </div>
        </div>
        

        
      </main>
    </React.Fragment>
  );
}
