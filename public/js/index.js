
$("#loginButton").click(function(){ window.location.href="/login";});
$("#navLoginButton").click(function(){ window.location.href="/login";});

$("#backButton").click(function(){ window.location.href="/";});
$("#navHomePageButton").click(function(){ window.location.href="/";});

$("#createAccountButton").click(function(){ window.location.href="/createaccount";});
$("#navCreateAccountButton").click(function(){ window.location.href="/createaccount";});

$("#breweriesButtonHome").click(function(){ window.location.href="/breweries";});
$("#breweriesButtonDrinks").click(function(){ window.location.href="/breweries";});

$("#navBreweriesButton").click(function(){ window.location.href="/admin/me";});
$("#navLogoutButton").click(function(){ window.location.href="/logout";});

function openNav() {
	document.getElementById("mySidenav").style.display = "block";
	document.getElementById("mySidenav").style.visibility = "visible";
	document.getElementById("mySidenav").style.opacity = "1";
}
  
function closeNav() {
	// document.getElementById("mySidenav").style.display = "none";
	document.getElementById("mySidenav").style.visibility = "hidden";
	document.getElementById("mySidenav").style.opacity = "0";
}
