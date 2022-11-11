export default function HeaderMenu() {
    return (
        <>
            <div className="main-header">
                <div className="logo">
                    <img src="assets/images/logo.png" alt="" />
                </div>
                <div className="menu-toggle">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="d-flex align-items-center">
                    <div className="dropdown mega-menu d-none d-md-block">
                        <a href="#" className="btn text-muted dropdown-toggle mr-3" id="dropdownMegaMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Mega Menu</a>
                        <div className="dropdown-menu text-left" aria-labelledby="dropdownMenuButton">
                            <div className="row m-0">
                                <div className="col-md-4 p-4 bg-img">
                                    <h2 className="title">Mega Menu <br /> Sidebar</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores natus laboriosam fugit, consequatur.
                                    </p>
                                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem odio amet eos dolore suscipit placeat.</p>
                                    <button className="btn btn-lg btn-rounded btn-outline-warning">Learn More</button>
                                </div>
                                <div className="col-md-4 p-4">
                                    <p className="text-primary text--cap border-bottom-primary d-inline-block">Features</p>
                                    <div className="menu-icon-grid w-auto p-0">
                                        <a href="#"><i className="i-Shop-4"></i> Home</a>
                                        <a href="#"><i className="i-Library"></i> UI Kits</a>
                                        <a href="#"><i className="i-Drop"></i> Apps</a>
                                        <a href="#"><i className="i-File-Clipboard-File--Text"></i> Forms</a>
                                        <a href="#"><i className="i-Checked-User"></i> Sessions</a>
                                        <a href="#"><i className="i-Ambulance"></i> Support</a>
                                    </div>
                                </div>
                                <div className="col-md-4 p-4">
                                    <p className="text-primary text--cap border-bottom-primary d-inline-block">Components</p>
                                    <ul className="links">
                                        <li><a href="accordion.html">Accordion</a></li>
                                        <li><a href="alerts.html">Alerts</a></li>
                                        <li><a href="buttons.html">Buttons</a></li>
                                        <li><a href="badges.html">Badges</a></li>
                                        <li><a href="carousel.html">Carousels</a></li>
                                        <li><a href="lists.html">Lists</a></li>
                                        <li><a href="popover.html">Popover</a></li>
                                        <li><a href="tables.html">Tables</a></li>
                                        <li><a href="datatables.html">Datatables</a></li>
                                        <li><a href="modals.html">Modals</a></li>
                                        <li><a href="nouislider.html">Sliders</a></li>
                                        <li><a href="tabs.html">Tabs</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="search-bar">
                        <input type="text" placeholder="Search" />
                            <i className="search-icon text-muted i-Magnifi-Glass1"></i>
                    </div>
                </div>
                <div></div>
                <div className="header-part-right">
                    <i className="i-Full-Screen header-icon d-none d-sm-inline-block" data-fullscreen></i>
                    <div className="dropdown">
                        <i className="i-Safe-Box text-muted header-icon" role="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <div className="menu-icon-grid">
                                <a href="#"><i className="i-Shop-4"></i> Home</a>
                                <a href="#"><i className="i-Library"></i> UI Kits</a>
                                <a href="#"><i className="i-Drop"></i> Apps</a>
                                <a href="#"><i className="i-File-Clipboard-File--Text"></i> Forms</a>
                                <a href="#"><i className="i-Checked-User"></i> Sessions</a>
                                <a href="#"><i className="i-Ambulance"></i> Support</a>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown">
                        <div className="badge-top-container" role="button" id="dropdownNotification" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span className="badge badge-primary">3</span>
                            <i className="i-Bell text-muted header-icon"></i>
                        </div>
                        <div className="dropdown-menu dropdown-menu-right notification-dropdown rtl-ps-none" aria-labelledby="dropdownNotification" data-perfect-scrollbar data-suppress-scroll-x="true">
                            <div className="dropdown-item d-flex">
                                <div className="notification-icon">
                                    <i className="i-Speach-Bubble-6 text-primary mr-1"></i>
                                </div>
                                <div className="notification-details flex-grow-1">
                                    <p className="m-0 d-flex align-items-center">
                                        <span>New message</span>
                                        <span className="badge badge-pill badge-primary ml-1 mr-1">new</span>
                                        <span className="flex-grow-1"></span>
                                        <span className="text-small text-muted ml-auto">10 sec ago</span>
                                    </p>
                                    <p className="text-small text-muted m-0">James: Hey! are you busy?</p>
                                </div>
                            </div>
                            <div className="dropdown-item d-flex">
                                <div className="notification-icon">
                                    <i className="i-Receipt-3 text-success mr-1"></i>
                                </div>
                                <div className="notification-details flex-grow-1">
                                    <p className="m-0 d-flex align-items-center">
                                        <span>New order received</span>
                                        <span className="badge badge-pill badge-success ml-1 mr-1">new</span>
                                        <span className="flex-grow-1"></span>
                                        <span className="text-small text-muted ml-auto">2 hours ago</span>
                                    </p>
                                    <p className="text-small text-muted m-0">1 Headphone, 3 iPhone x</p>
                                </div>
                            </div>
                            <div className="dropdown-item d-flex">
                                <div className="notification-icon">
                                    <i className="i-Empty-Box text-danger mr-1"></i>
                                </div>
                                <div className="notification-details flex-grow-1">
                                    <p className="m-0 d-flex align-items-center">
                                        <span>Product out of stock</span>
                                        <span className="badge badge-pill badge-danger ml-1 mr-1">3</span>
                                        <span className="flex-grow-1"></span>
                                        <span className="text-small text-muted ml-auto">10 hours ago</span>
                                    </p>
                                    <p className="text-small text-muted m-0">Headphone E67, R98, XL90, Q77</p>
                                </div>
                            </div>
                            <div className="dropdown-item d-flex">
                                <div className="notification-icon">
                                    <i className="i-Data-Power text-success mr-1"></i>
                                </div>
                                <div className="notification-details flex-grow-1">
                                    <p className="m-0 d-flex align-items-center">
                                        <span>Server Up!</span>
                                        <span className="badge badge-pill badge-success ml-1 mr-1">3</span>
                                        <span className="flex-grow-1"></span>
                                        <span className="text-small text-muted ml-auto">14 hours ago</span>
                                    </p>
                                    <p className="text-small text-muted m-0">Server rebooted successfully</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown">
                        <div className="user col align-self-end">
                            <img src="assets/images/faces/1.jpg" id="userDropdown" alt="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                                    <div className="dropdown-header">
                                        <i className="i-Lock-User mr-1"></i> Timothy Carlson
                                    </div>
                                    <a className="dropdown-item">Account settings</a>
                                    <a className="dropdown-item">Billing history</a>
                                    <a className="dropdown-item" href="signin.html">Sign out</a>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}