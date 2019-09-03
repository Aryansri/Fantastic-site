import React ,{Component} from 'react'
// import './Profile.css';
// import './NavBar.css'

class Profile  extends Component{
 render(){


   return(

<div>





<div class="container-fluid">
			<div class="row d-flex">
				<div class="col-12 col-lg-3 blue-bg text-center px-0">
					<a href="#" class="navbar-brand">
          <img src = { process.env.PUBLIC_URL + "/logo.png" }className="d-none d-sm-none d-md-block" alt="Fantastic 3"/>
          <img src = { process.env.PUBLIC_URL + "/logo-m.png"} className="d-block d-sm-none" alt="Fantastic 3"/>

					</a>
					<nav class="navbar navbar-expand-lg">
						<button class="navbar-toggler" type="button" data-toggle="offcanvas">
							<span class="navbar-toggler-icon"></span>
						</button>
						<div class="navbar-collapse offcanvas-collapse" id="collapsingNavbar1">
							<ul class="nav flex-column text-left side-menu">
								<li class="nav-item">
									<a class="nav-link active dropdown-toggle" href="#editProfile" data-toggle="collapse" aria-expanded="false"><span class="profile"></span>Edit Profile</a>
									<ul class="collapse" id="editProfile">
										<li>
											<a href="profile.html">Profile</a>
										</li>
										<li>
											<a href="#">Documents</a>
										</li>
										<li>
											<a href="#">Change Password</a>
										</li>
										<li>
											<a href="#">Notifications</a>
										</li>
									</ul>
								</li>
								<li class="nav-item">
									<a class="nav-link dropdown-toggle" href="#myWallet" data-toggle="collapse" aria-expanded="false"><span class="my-wallet"></span>My Wallet</a>
									<ul class="collapse" id="myWallet">
										<li>
											<a href="deposit.html">Deposit</a>
										</li>
										<li>
											<a href="#">Withdraw</a>
										</li>
										<li>
											<a href="#">Balance History</a>
										</li>
									</ul>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="my-bets.html"><span class="my-bets"></span>My Bets</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="#"><span class="bonuses"></span>Bonuses</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="#"><span class="messages"></span>Messages</a>
								</li>
							</ul>
						</div>
					</nav>
				</div>
				<div class="col-12 col-lg-9 px-0">
					<div class="gray-bg border-bottom">
						<div class="container-fluid">
							<div class="row">
								<div class="col-12 col-sm-5 col-lg-7 px-3 py-3">
									<span class="user">Username</span>
								</div>
								<div class="col-5 col-sm-3 col-lg-2 border-left m-border px-3 py-3">
									<div class="balance">
										MAIN BALANCE
										<span>0.00 INR</span>
									</div>
								</div>
								<div class="col-5 col-sm-3 col-lg-2 border-left px-3 py-3">
									<div class="bonus-balance">
										Bonus Balance
										<span>0.00 INR</span>
									</div>
								</div>
								<div class="col-2 col-sm-1 col-lg-1 border-left px-3 py-3 text-center">
									<a href="#" class="sign-out"></a>
								</div>
							</div>
						</div>
					</div>
					<div class="gray-bg">
						<div class="container-fluid px-3 py-3">
							<nav class="navbar navbar-expand-lg inner text-center text-md-left">
								<div id="navbarText" class="mx-auto mx-md-0">
									<ul class="navbar-nav mr-auto">
										<li class="nav-item">
											<a class="nav-link active" href="profile.html">Profile</a>
										</li>
										<li class="nav-item">
											<a class="nav-link" href="#">Documents</a>
										</li>
										<li class="nav-item">
											<a class="nav-link" href="#">Change Password</a>
										</li>
										<li class="nav-item">
											<a class="nav-link" href="#">Notifications</a>
										</li>
									</ul>
								</div>
							</nav>
						</div>
					</div>
					<div class="container-fluid px-3 py-3 px-md-5 py-md-5">
						<h1 class="inner">My Profile</h1>
						<div class="light-gray-bg px-5 py-5">
							<form class="inner-form">
								<div class="row">
									<div class="col-md-6 mb-3">
										<label for="">First Name</label>
										<input type="text" class="form-control" placeholder=""/>
									</div>
									<div class="col-md-6 mb-3">
										<label for="">Last Name</label>
										<input type="text" class="form-control" placeholder=""/>
									</div>
									<div class="col-md-6 mb-3">
										<label for="">E-mail</label>
										<input type="text" class="form-control" placeholder=""/>
									</div>
									<div class="col-md-6 mb-3">
										<label for="">Passport Number</label>
										<input type="text" class="form-control" placeholder=""/>
									</div>
									<div class="col-md-6 mb-3">
										<label for="">Birth Date *</label>
										<input type="text" class="form-control" placeholder=""/>
									</div>
									<div class="col-md-6 mb-3">
										<label for="">Mobile Number *</label>
										<input type="text" class="form-control" placeholder=""/>
									</div>
									<div class="col-md-6 mb-3">
										<label for="">Gender *</label>
										<div class="col px-0 py-3">
											<div class="custom-control custom-radio custom-control-inline mr-5">
											  <input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input"/>
											  <label class="custom-control-label" for="customRadioInline1">Male</label>
											</div>
											<div class="custom-control custom-radio custom-control-inline">
											  <input type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input"/>
											  <label class="custom-control-label" for="customRadioInline2">Female</label>
											</div>
										</div>
									</div>
									<div class="col-md-6 mb-3">
										<label for="">City *</label>
										<input type="text" class="form-control" placeholder=""/>
									</div>
									<div class="col-md-6">
										<label for="">Country *</label>
										<input type="text" class="form-control" placeholder=""/>
									</div>
									<div class="col-md-6">
										<label for="">Address *</label>
										<input type="text" class="form-control" placeholder=""/>
									</div>
								</div>
								<hr class="my-5"/>
								<button class="btn btn-light" type="submit">Save Profile</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
		<footer class="text-center">
			<div class="container">
				<div class="social-media mt-3">
					<a href="#" target="_blank" class="facebook"></a>
					<a href="#" target="_blank" class="twitter"></a>
					<a href="#" target="_blank" class="youtube"></a>
					<a href="#" target="_blank" class="instagram"></a>
				</div>
			</div>
			<div class="border-top">
				<div class="container">
					<div class="row py-4">
						<div class="col-12 col-md-6 text-left">
							<a href="#">Terms &amp; Conditions</a> &nbsp; | &nbsp; <a href="#">Privacy Policy</a>
						</div>
						<div class="col-12 col-md-6 text-right">
							&copy; 2019 Fantastic 3
						</div>
					</div>
				</div>
			</div>
		</footer>




</div>



   )
 }


}

export default Profile;
