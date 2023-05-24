<script setup>

</script>
<template>

<section class="vh-100">
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-4 text-black">

        <img src="../assets/loginlogo.png"/>

        <div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">

          <form style="width: 23rem;">

            <h3 class="fw-normal " style="letter-spacing: 1px;">Welcome Back !</h3>
            <h6 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">Sign in to continue to PentestBX.</h6>
            <div class="form-outline mb-4">
              <label class="form-label" for="form2Example18">Email address</label>
              <input placeholder="Enter Email" type="email" id="form2Example18" class="form-control form-control-m" required/>
            </div>
            <div class="form-outline mb-4">
              <label class="form-label" for="form2Example28">Password</label><a href="#">Forgot password?</a>
              <input placeholder="Enter Password" type="password" id="form2Example28" class="form-control form-control-m" required/>
            </div>
            <div class="g-recaptcha mb-4" data-sitekey="6Ldbdg0TAAAAAI7KAf72Q6uagbWzWecTeBWmrCpJ"></div>
            <div class="pt-1">
              <button class="btn btn-info btn-m btn-block mb-4" type="button">Login</button>
            </div>
            <h6>Create Account<a href="#">Sign Up</a></h6>
          </form>
        </div>
      </div>
      <div class="col-sm-8 px-0 d-none d-sm-block">
        <video autoplay loop>
          <source src="../assets/video1.mp4" />
        </video>
        <!-- <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
          alt="Login image" class="w-100 vh-100" style="object-fit: cover; object-position: left;"> -->
      </div>
      <div class="overlay">
        <p class="item-1">Server platforms running both Windows and Linux  have been heavily targeted for attack, and leveraged to attack organizations 
          from within<br/> <br/>Sophos 2021</p>
       <p class="item-2">Remote working is targeted: Hackers ramped up ‘thread hijacking’ attacks on remote workers to steal data or infiltrate networks.<br/><br/>Check Point Research
              2021</p>
       <p class="item-3">Double-extortion ransomware attacks rise: On average, a new organization becomes a victim of ransomware every 10 seconds worldwide.<br/><br/>Check Point Research
              2021</p>
    </div>
    </div>
  </div>
</section>
</template>
<style scoped>
 img{
  width: auto;
  height: auto;
  margin-left: 10vh;
 }
 h3{
  text-align: center; 
  color: rgb(82, 82, 82);
 }
 button{
  width: 100%;
  color: white;
  background-color: rgb(62, 146, 196);
  border: none;
 }
 a{
  text-decoration: none;
  margin-left: 16vh;
 }
 h6{
  text-align: center;
  color: rgb(172, 172, 172);
 }
 h4{
  text-align: center;
 }
 video{
  width:100%;
  height: 100vh;
 }
 .overlay {
    width: 59vh;
    word-spacing: 1px;
    height: auto;
    position:absolute;
    text-align: center;
    margin-left: 90vh;
    color: white;
    font-weight:bold;
}
.item-1, 
.item-2, 
.item-3 {
	position: absolute;
  display: block;
	top: 15em;
  width: 90%;
  font-size: 18px;
	animation-duration: 20s;
	animation-timing-function: ease-in-out;
	animation-iteration-count: infinite;
}

.item-1{
	animation-name: anim-1;
}

.item-2{
	animation-name: anim-2;
}

.item-3{
	animation-name: anim-3;
}

@keyframes anim-1 {
	0%, 8.3% { left: -100%; opacity: 0; }
  8.3%,25% { left: 25%; opacity: 1; }
  33.33%, 100% { left: 110%; opacity: 0; }
}

@keyframes anim-2 {
	0%, 33.33% { left: -100%; opacity: 0; }
  41.63%, 58.29% { left: 25%; opacity: 1; }
  66.66%, 100% { left: 110%; opacity: 0; }
}

@keyframes anim-3 {
	0%, 66.66% { left: -100%; opacity: 0; }
  74.96%, 91.62% { left: 25%; opacity: 1; }
  100% { left: 110%; opacity: 0; }
}
</style>
