<template>
    <div class="main-panel">
				<div class="content">
					<div class="container-fluid">
						<div class="row">
								<div class="world-catagory-area">
									<ul class="nav nav-tabs" id="myTab" role="tablist">
										
											<li class="nav-item">
												<a class="nav-link active" id="tab1" data-toggle="tab" href="#world-tab-1" role="tab" aria-controls="world-tab-1" aria-selected="true">All</a>
											</li>
			
											<li class="nav-item">
												<a class="nav-link" id="tab2" data-toggle="tab" href="#world-tab-2" role="tab" aria-controls="world-tab-2" aria-selected="false">Tabligh Akbar</a>
											</li>
			
											<li class="nav-item">
												<a class="nav-link" id="tab3" data-toggle="tab" href="#world-tab-3" role="tab" aria-controls="world-tab-3" aria-selected="false">Tafsir Al-Quran</a>
											</li>
			
											<li class="nav-item">
												<a class="nav-link" id="tab4" data-toggle="tab" href="#world-tab-4" role="tab" aria-controls="world-tab-4" aria-selected="false">Hadits</a>
											</li>
			
											<li class="nav-item">
												<a class="nav-link" id="tab5" data-toggle="tab" href="#world-tab-5" role="tab" aria-controls="world-tab-5" aria-selected="false">Ahlak</a>
											</li>
			
											<li class="nav-item">
												<a class="nav-link" id="tab6" data-toggle="tab" href="#world-tab-6" role="tab" aria-controls="world-tab-6" aria-selected="false">Fiqih</a>
											</li>

											<li class="nav-item">
												<a class="nav-link" id="tab7" data-toggle="tab" href="#world-tab-7" role="tab" aria-controls="world-tab-7" aria-selected="false">Aqidah</a>
											</li>

											<li class="nav-item">
												<a class="nav-link" id="tab8" data-toggle="tab" href="#world-tab-8" role="tab" aria-controls="world-tab-8" aria-selected="false">Sirah Nabawi</a>
											</li>

											<li class="nav-item">
												<a class="nav-link" id="tab9" data-toggle="tab" href="#world-tab-9" role="tab" aria-controls="world-tab-9" aria-selected="false">Tahsin</a>
											</li>
			
											<!-- <li class="nav-item dropdown">
												<a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">More</a>
												<div class="dropdown-menu">
													<a class="nav-link" id="tab7" data-toggle="tab" href="#world-tab-7" role="tab" aria-controls="world-tab-7" aria-selected="false">Aqidah</a>
													<a class="nav-link" id="tab8" data-toggle="tab" href="#world-tab-8" role="tab" aria-controls="world-tab-8" aria-selected="false">Sirah Nabawi</a>
													<a class="nav-link" id="tab9" data-toggle="tab" href="#world-tab-9" role="tab" aria-controls="world-tab-9" aria-selected="false">Tahsin</a>
												</div>
											</li> -->
										</ul>
			
										<div class="tab-content" id="myTabContent">
			
											<div class="tab-pane fade show active" id="world-tab-1" role="tabpanel" aria-labelledby="tab1">
												<div v-if="kajian.length" class="row">
                                                    <div v-for="kaji in kajian" v-bind:key="kaji.id" class="col-12 col-md-6">
                                                        <!-- Single Blog Post -->
                                                        <div class="single-blog-post">
                                                            <!-- Post Thumbnail -->
                                                            <div class="post-thumbnail">
                                                                <img src="../assets/img/blog-img/b2.jpg" alt="">
                                                                <!-- Catagory -->
                                                                <div class="post-cta"><a href="#">hari ini</a></div>
                                                            </div>
                                                            <!-- Post Content -->
                                                            <div class="post-content">
                                                                <a href="#" class="headline">
                                                                    <h5>{{ kaji.judul }}</h5>
                                                                </a>
                                                                <p>How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in...</p>
                                                                <!-- Post Meta -->
                                                                <div class="post-meta">
                                                                    <p><a href="#" class="post-author">{{ kaji.pemateri }}</a> on <a href="#" class="post-date">{{ kaji.tanggal | formatDate }}</a></p>
                                                                    <span class="badge badge-success">Tabligh  Akbar</span>
                                                                    <span class="badge badge-default">Fiqih</span>
                                                                    <span class="badge badge-primary">Ahlak</span>
                                                                </div>
                                                                
                                                            </div>
                                                        </div>
													</div>
												</div>
											</div>
										</div>
								</div>
						</div>				
					</div>
				</div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import moment from 'moment'
    
    export default {
        data(){
            return{
                
            }
        },
        computed: {
            ...mapState(['userProfile', 'currentUser', 'kajian'])
        },
        methods: {
            
        },
        filters:{
            formatDate(val){
                if(!val) {return '-'}
                let date = val.toDate()
                return moment(date).fromNow()
            },
            trimLength(val){
                if(val.length<200){
                    return val
                }
                return `${val.substring(0,200)}`
            }
        }
    }
</script>