<template>
    <div id="login">
        <transition name="fade">
            <div v-if="performingRequest" class="loading">
                <p>Loading...</p>
            </div>
        </transition>
        <section>
		<div class="container-login100">
			<div class="wrap-login100">
				<div class="login100-pic js-tilt" data-tilt>
					<img src="../assets/img/img-01.png" alt="IMG">
				</div>
				<form v-if="showLoginForm" @submit.prevent class="login100-form validate-form">
					<span class="login100-form-title">
						Website Info Kajian Islam
					</span>
					<transition name="fade">
						<div v-if="errorMsg !== ''" class="error-msg">
							<p>{{ errorMsg }}</p>
						</div>
					</transition>
					<div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input v-model.trim="loginForm.email" class="input100" type="text" name="email" placeholder="Email">
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>

					<div class="wrap-input100 validate-input" data-validate = "Password is required">
						<input v-model.trim="loginForm.password" class="input100" type="password" name="pass" placeholder="Password">
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>
					
					<div class="container-login100-form-btn">
						<button class="login100-form-btn" @click="login">
							Login
						</button>
					</div>

					<div class="text-center p-t-12">
						<span class="txt1">
							Forgot
						</span>
						<a class="txt2" href="#">
							Username / Password?
						</a>
					</div>

					<div class="text-center p-t-136">
						<a class="txt2" href="#" @click="toggleForm">
							Create your Account
							<i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
						</a>
					</div>
				</form>
                <form v-else @submit.prevent class="login100-form validate-form">
					<span class="login100-form-title">
						Website Info Kajian Islam
					</span>
					<transition name="fade">
						<div v-if="errorMsg !== ''" class="error-msg">
							<p>{{ errorMsg }}</p>
						</div>
					</transition>
					<div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input v-model.trim="signupForm.name" class="input100" type="text" name="name" placeholder="Name">
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-user" aria-hidden="true"></i>
						</span>
					</div>

                    <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input v-model.trim="signupForm.email" class="input100" type="text" name="email" placeholder="Email">
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>

					<div class="wrap-input100 validate-input" data-validate = "Password is required">
						<input v-model.trim="signupForm.password" class="input100" type="password" name="pass" placeholder="Password">
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>
					
					<div class="container-login100-form-btn">
						<button class="login100-form-btn" @click="signup">
							Register
						</button>
					</div>
					

					<div class="text-center p-t-136">
						<a class="txt2" href="#" @click="toggleForm">
							Login to an existing account
							<i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
						</a>
					</div>
				</form>
			</div>
		</div>
        </section>
    </div>
</template>

<script>
	const fb = require('../firebaseConfig.js')
    export default {
        data(){
            return{
                loginForm:{
                    email: '',
                    password: ''
                },
                signupForm:{
                    name: '',
                    title: '',
                    email: '',
                    password: ''
                },
                showLoginForm: true,
                performingRequest: false,
                errorMsg: ''
            }
        },
        methods: {
            toggleForm(){
				this.showLoginForm = !this.showLoginForm
				this.errorMsg = ''
            },
            login(){
				this.performingRequest = true
                fb.auth.signInWithEmailAndPassword(this.loginForm.email,this.loginForm.password).then(user => {
                    this.$store.commit('setCurrentUser', user.user)
                    this.$store.dispatch('fetchUserProfile')
                    this.performingRequest = false
                    this.$router.push('/dashboard')
                }).catch(err => {
                    console.log(err)
                    this.performingRequest = false
                    this.errorMsg = err.message
                })
            },
            signup(){
                this.performingRequest = true
                fb.auth.createUserWithEmailAndPassword(this.signupForm.email, this.signupForm.password).then(user => {
                    this.$store.commit('setCurrentUser', user.user)

                    fb.usersCollection.doc(user.user.uid).set({
                        nama: this.signupForm.name
                    }).then(()=>{
                        this.$store.dispatch('fetchUserProfile')
                        this.performingRequest = false
                        this.$router.push('/dashboard')
                    }).catch(err => {
                        console.log(err)
                        this.performingRequest = false
                        this.errorMsg = err.message
                    })
                })
            }
        }
    }
</script>
<style scss scoped>
@import '../assets/css/main.css';
@import '../assets/css/util.css';
</style>
