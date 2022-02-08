export default function Header() {
  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <div class="navbar">
        <a class="active" href="#"><i class="fa fa-fw fa-home"></i><span> Home</span></a>
        <a href="#aboutus"><i class="fa fa-fw fa-address-card"></i> <span> About Us</span></a>
        <a href="#careers"><i class="fa fa-fw fa-user-md"></i><span> Carrers</span></a>
        <a href="#services"><i class="fa fa-fw fa-concierge-bell"></i> <span> Services</span></a>
        <a href="#contactus"><i class="fa fa-fw fa-phone-laptop"></i><span> Contact Us</span></a>
      </div>
    </>
  );
}
