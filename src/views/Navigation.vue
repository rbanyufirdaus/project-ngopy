<template>
    <div id="navigation">
		<div class="main-header">
			<div class="logo-header">
				<router-link to="dashboard" class="logo">
					Info Kajian Islam
				</router-link>
				<button class="navbar-toggler sidenav-toggler ml-auto" type="button" data-toggle="collapse" data-target="collapse" aria-controls="sidebar" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<button class="topbar-toggler more"><i class="la la-ellipsis-v"></i></button>
			</div>
			<nav class="navbar navbar-header navbar-expand-lg">
				<div class="container-fluid">
					
					<form class="navbar-left navbar-form nav-search mr-md-3" action="">
						<div class="input-group">
							<input type="text" placeholder="Search ..." class="form-control">
							<div class="input-group-append">
								<span class="input-group-text">
									<i class="la la-search search-icon"></i>
								</span>
							</div>
						</div>
					</form>
					
					<ul class="navbar-nav topbar-nav ml-md-auto align-items-center">
						<li class="nav-item dropdown hidden-caret">
							<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								<i class="la la-envelope"></i>
							</a>
							<div class="dropdown-menu" aria-labelledby="navbarDropdown">
								<a class="dropdown-item" href="#">Action</a>
								<a class="dropdown-item" href="#">Another action</a>
								<div class="dropdown-divider"></div>
								<a class="dropdown-item" href="#">Something else here</a>
							</div>
						</li>
						<li class="nav-item dropdown hidden-caret">
							<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								<i class="la la-bell"></i>
								<span class="notification">3</span>
							</a>
							<ul class="dropdown-menu notif-box" aria-labelledby="navbarDropdown">
								<li>
									<div class="dropdown-title">You have 4 new notification</div>
								</li>
								<li>
									<div class="notif-center">
										<a href="#">
											<div class="notif-icon notif-primary"> <i class="la la-user-plus"></i> </div>
											<div class="notif-content">
												<span class="block">
													New user registered
												</span>
												<span class="time">5 minutes ago</span> 
											</div>
										</a>
										<a href="#">
											<div class="notif-icon notif-success"> <i class="la la-comment"></i> </div>
											<div class="notif-content">
												<span class="block">
													Rahmad commented on Admin
												</span>
												<span class="time">12 minutes ago</span> 
											</div>
										</a>
										<a href="#">
											<div class="notif-img"> 
												<img src="../assets/img/profile2.jpg" alt="Img Profile">
											</div>
											<div class="notif-content">
												<span class="block">
													Reza send messages to you
												</span>
												<span class="time">12 minutes ago</span> 
											</div>
										</a>
										<a href="#">
											<div class="notif-icon notif-danger"> <i class="la la-heart"></i> </div>
											<div class="notif-content">
												<span class="block">
													Farrah liked Admin
												</span>
												<span class="time">17 minutes ago</span> 
											</div>
										</a>
									</div>
								</li>
								<li>
									<a class="see-all" href="javascript:void(0);"> <strong>See all notifications</strong> <i class="la la-angle-right"></i> </a>
								</li>
							</ul>
						</li>
                        <b-nav-item-dropdown right>
                            <!-- Using button-content slot -->
                            <template slot="button-content">
                                <a class=" profile-pic" data-toggle="dropdown" href="#" aria-expanded="false"> <img src="../assets/img/profile.png" alt="user-img" width="36" class="img-circle"><span >Andi Wibowo</span> </a>
                            </template>
                            <b-dropdown-item href="#">
                                <div class="user-box">
                                <div class="u-img"><img src="../assets/img/profile.png" alt="user"></div>
                                <div class="u-text">
                                    <h4>Andi Wibowo</h4>
                                    <p class="text-muted">andi@wibowo.id</p><a href="profile.html" class="btn btn-rounded btn-danger btn-sm">View Profile</a></div>
                                </div>
                            </b-dropdown-item>
                            <b-dropdown-item href="#">Jadwal Kajian Saya</b-dropdown-item>
                            <b-dropdown-item href="#" @click="logout">Logout</b-dropdown-item>
                        </b-nav-item-dropdown>
						<!-- <li class="nav-item dropdown" >
							<a class="dropdown-toggle profile-pic" data-toggle="dropdown" href="#" aria-expanded="false"> <img src="../assets/img/profile.png" alt="user-img" width="36" class="img-circle"><span >Andi Wibowo</span> </a>
							<ul class="dropdown-menu dropdown-user" >
                            <li>
                                <div class="user-box">
                                    <div class="u-img"><img src="../assets/img/profile.png" alt="user"></div>
                                    <div class="u-text">
                                        <h4>Andi Wibowo</h4>
                                        <p class="text-muted">andi@wibowo.id</p><a href="profile.html" class="btn btn-rounded btn-danger btn-sm">View Profile</a></div>
                                    </div>
                                </li>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#"><i class="ti-user"></i> My Profile</a>
                                <a class="dropdown-item" href="#"> Jadwal Kajian Saya</a>
                                <a class="dropdown-item" href="#"><i class="ti-email"></i> Inbox</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#"><i class="ti-settings"></i> Account Setting</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#" @click="logout"><i class="fa fa-power-off"></i> Logout</a>
                            </ul>
                            
                        </li> -->
						</ul>
					</div>
				</nav>
		</div>
			<div class="sidebar">
                <b-nav vertical class="sidebar-wrapper">
                    <b-nav-item active>
                        <router-link to="dashboard">
                            <i class="la la-dashboard"></i>
                            <p>Info Kajian</p>								
                        </router-link>
                        </b-nav-item>
                    <b-nav-item>
                        <router-link to="settings">
                            <i class="la la-graduation-cap"></i>
                            <p>Info Ustadz</p>							
                        </router-link>
                    </b-nav-item>
                    <b-nav-item>
                        <router-link to="settings">
                            <i class="la la-user"></i>
                            <p>Kajian Saya</p>							
                        </router-link>	
                    </b-nav-item>
                    <b-nav-item>
                        <router-link to="settings">
                            <i class="la la-comment"></i>
                            <p>Tambah Kajian</p>								
                        </router-link>	
                    </b-nav-item>
                </b-nav>
			</div>
    </div>
</template>

<script>
	import { mapState } from 'vuex'
    const fb = require('../firebaseConfig.js')
    export default {
		data(){
			return{
				performingRequest: false
			}
		},
        methods:{
            logout(){
				this.performingRequest = true
                fb.auth.signOut().then(() => {
					this.$store.dispatch('clearData')
					this.performingRequest = false
                    this.$router.push('/login')
                }).catch(err=>{
                    console.log(err)
                })
            }
		},
		computed: {
			...mapState(['userProfile'])
		}
    }
</script>
