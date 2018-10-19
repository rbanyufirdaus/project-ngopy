<template>
    <div class="main-panel">
        <div class="content">
                <div class="container-fluid">
                        <div class="row">
                            <div clas="col-sm-10" id="firstSection">
                            <form @submit.prevent class="border p-2 mb-2 " id="form">
                                <div class="form-group">
                                <label>Kajian</label>
                                <input v-model.trim="formKajian.judul" type="text" class="form-control" id="judul" placeholder="Judul Kajian">           
                                </div>
                                <div class="form-group">
                                <label>Ustadz</label>
                                <input v-model.trim="formKajian.pemateri" type="text" class="form-control" id="ustadz" placeholder="Ustadz">           
                                </div>
                                <div class="form-group">
                                <label>Lokasi</label>
                                <input v-model.trim="formKajian.lokasi" type="text" class="form-control" id="lokasi" placeholder="Lokasi">           
                                </div>  
                    
                                <div class="form-group"> <!-- Date input -->
                                <label class="control-label" for="tanggal">Tanggal</label>
                                <input class="form-control" id="tanggal" name="tanggal" placeholder="YYYY/MM/DD" type="date"/>
                                </div>          
                                <!-- <div class="form-group">
                                    <label>Kategori</label>
                                    <input type="text" class="form-control" id="kategori" placeholder="Kategori">           
                                </div>   -->
                    
                                <button @click="createPost" type="submit" id="button1" class="btn btn-primary">Tambah Kajian</button>
                                <button style="display: none" id="button2" class="btn btn-success">Update Kajian</button>
                                <button style="display: none" id="button3" class="btn btn-danger">Cancel</button>
                            </form>
                            </div>
                            
                        </div>
                        </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import moment from 'moment'
    const fb = require('../firebaseConfig.js')
    export default {
        data(){
            return{
                formKajian: {
                    judul: '',
                    pemateri: '',
                    lokasi: '',
                    tanggal: new Date()
                }
            }
        },
        computed: {
            ...mapState(['userProfile', 'currentUser', 'kajian'])
        },
        methods: {
            createPost(){
                fb.kajianCollection.add({
                    judul: this.formKajian.judul,
                    pemateri: this.formKajian.pemateri,
                    lokasi: this.formKajian.lokasi,
                    tanggal: this.formKajian.tanggal
                }).then(ref => {
                    this.formKajian.judul = ''
                    this.formKajian.pemateri = ''
                    this.formKajian.lokasi = ''
                    this.formKajian.tanggal = new Date
                }).catch(err => {
                    console.log(err)
                })
            }
        }
    }
</script>