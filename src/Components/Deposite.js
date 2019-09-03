import React ,{Component} from 'react'
import './MyBet.css'
import {Link} from 'react-router-dom'

class Deposite extends Component{


  render(){
    return(
      <div>




      <div class="container-fluid">
      			<div class="row d-flex">
      				<div class="col-md-3 blue-bg text-center px-0">
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
      									<a class="nav-link dropdown-toggle" href="#editProfile" data-toggle="collapse" aria-expanded="false"><span class="profile"></span>Edit Profile</a>
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
      									<a class="nav-link active dropdown-toggle" href="#myWallet" data-toggle="collapse" aria-expanded="false"><span class="my-wallet"></span>My Wallet</a>
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
      				<div class="col-md-9 px-0">
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
      											<a class="nav-link active" href="#">Deposit</a>
      										</li>
      										<li class="nav-item">
      											<a class="nav-link" href="#">Withdraw</a>
      										</li>
      										<li class="nav-item">
      											<a class="nav-link" href="#">Balance History</a>
      										</li>
      									</ul>
      								</div>
      							</nav>
      						</div>
      					</div>
      					<div class="container-fluid px-3 py-3 px-md-5 py-md-5">
      						<h1 class="inner">Deposit</h1>
      						<div class="row clearfix">
      							<div class="col-md-3">
      								<ul class="tabs">
      									<li><a href="#" class="active"><img ssrc = { process.env.PUBLIC_URL + "/paypal-logo.png" }  alt=""/></a></li>
      									<li><a href="#"><img   src = { process.env.PUBLIC_URL + "/visa-logo.png" }       alt=""/></a></li>
      									<li><a href="#"><img   src = { process.env.PUBLIC_URL + "/mastercard-logo.png" } alt=""/></a></li>
      									<li><a href="#"><img  src = { process.env.PUBLIC_URL + "/paypal-logo.png" }  alt=""/></a></li>
      									<li><a href="#"><img   src = { process.env.PUBLIC_URL + "/visa-logo.png" } alt=""/></a></li>
      									<li><a href="#"><img   src = { process.env.PUBLIC_URL + "/mastercard-logo.png" } alt=""/></a></li>
      								</ul>
      							</div>
      							<div class="col-md-9 light-gray-bg px-5 py-5">
      								<p>
      									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
      								</p>
      								<form>
      									<label for="">Amount: *</label>
      									<input type="text" class="form-control" placeholder="USD"/>
      									<button class="btn btn-light small" type="submit">SUBMIT</button>
      								</form>
      							</div>
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
							  <Link Link to={'/TermsCondition'}>Terms &amp; Conditions</Link> &nbsp; | &nbsp;<Link Link to={'/privacyPolicy'}>Privacy Policy</Link>
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



   export default Deposite;
