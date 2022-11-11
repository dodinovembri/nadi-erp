import Head from 'next/head'
import Script from 'next/script'
import HeaderMenu from '../components/HeaderMenu'
import SidebarMenu from '../components/SidebarMenu'
import Footer from '../components/Footer'
import Search from '../components/Search'


export default function Home() {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <title>Dashboard | Nadi ERP</title>
                <style>
                    @import url({`https://fonts.googleapis.com/css?family=Nunito:300,400,400i,600,700,800,900`});
                    @import url({`assets/css/themes/lite-purple.min.css`});
                    @import url({`assets/css/plugins/perfect-scrollbar.min.css`});
                </style>
            </Head>
            <div className='text-left'>
                <div className="app-admin-wrap layout-sidebar-large">
                    <HeaderMenu />
                    <SidebarMenu />
                    <div className="main-content-wrap sidenav-open d-flex flex-column">
                        <div className="main-content">
                            <div className="breadcrumb">
                                <h1 className="mr-2">Version 1</h1>
                                <ul>
                                    <li><a href="#">Dashboard</a></li>
                                    <li>Version 1</li>
                                </ul>
                            </div>
                            <div className="separator-breadcrumb border-top"></div>
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="card card-icon-bg card-icon-bg-primary o-hidden mb-4">
                                        <div className="card-body text-center"><i className="i-Add-User"></i>
                                            <div className="content">
                                                <p className="text-muted mt-2 mb-0">New Leads</p>
                                                <p className="text-primary text-24 line-height-1 mb-2">205</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="card card-icon-bg card-icon-bg-primary o-hidden mb-4">
                                        <div className="card-body text-center"><i className="i-Financial"></i>
                                            <div className="content">
                                                <p className="text-muted mt-2 mb-0">Sales</p>
                                                <p className="text-primary text-24 line-height-1 mb-2">$4021</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="card card-icon-bg card-icon-bg-primary o-hidden mb-4">
                                        <div className="card-body text-center"><i className="i-Checkout-Basket"></i>
                                            <div className="content">
                                                <p className="text-muted mt-2 mb-0">Orders</p>
                                                <p className="text-primary text-24 line-height-1 mb-2">80</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="card card-icon-bg card-icon-bg-primary o-hidden mb-4">
                                        <div className="card-body text-center"><i className="i-Money-2"></i>
                                            <div className="content">
                                                <p className="text-muted mt-2 mb-0">Expense</p>
                                                <p className="text-primary text-24 line-height-1 mb-2">$1200</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-8 col-md-12">
                                    <div className="card mb-4">
                                        <div className="card-body">
                                            <div className="card-title">This Year Sales</div>
                                            <div id="echartBar"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-12">
                                    <div className="card mb-4">
                                        <div className="card-body">
                                            <div className="card-title">Sales by Countries</div>
                                            <div id="echartPie"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-12">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-12">
                                            <div className="card card-chart-bottom o-hidden mb-4">
                                                <div className="card-body">
                                                    <div className="text-muted">Last Month Sales</div>
                                                    <p className="mb-4 text-primary text-24">$40250</p>
                                                </div>
                                                <div id="echart1"></div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <div className="card card-chart-bottom o-hidden mb-4">
                                                <div className="card-body">
                                                    <div className="text-muted">Last Week Sales</div>
                                                    <p className="mb-4 text-warning text-24">$10250</p>
                                                </div>
                                                <div id="echart2"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="card o-hidden mb-4">
                                                <div className="card-header d-flex align-items-center border-0">
                                                    <h3 className="w-50 float-left card-title m-0">New Users</h3>
                                                    <div className="dropdown dropleft text-right w-50 float-right">
                                                        <button className="btn bg-gray-100" id="dropdownMenuButton1" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="nav-icon i-Gear-2"></i></button>
                                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton1"><a className="dropdown-item" href="#">Add new user</a><a className="dropdown-item" href="#">View All users</a><a className="dropdown-item" href="#">Something else here</a></div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="table-responsive">
                                                        <table className="table text-center" id="user_table">
                                                            <thead>
                                                                <tr>
                                                                    <th scope="col">#</th>
                                                                    <th scope="col">Name</th>
                                                                    <th scope="col">Avatar</th>
                                                                    <th scope="col">Email</th>
                                                                    <th scope="col">Status</th>
                                                                    <th scope="col">Action</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <th scope="row">1</th>
                                                                    <td>Smith Doe</td>
                                                                    <td><img className="rounded-circle m-0 avatar-sm-table" src="assets/images/faces/1.jpg" alt="" /></td>
                                                                    <td>Smith@gmail.com</td>
                                                                    <td><span className="badge badge-success">Active</span></td>
                                                                    <td><a className="text-success mr-2" href="#"><i className="nav-icon i-Pen-2 font-weight-bold"></i></a><a className="text-danger mr-2" href="#"><i className="nav-icon i-Close-Window font-weight-bold"></i></a></td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">2</th>
                                                                    <td>Jhon Doe</td>
                                                                    <td><img className="rounded-circle m-0 avatar-sm-table" src="assets/images/faces/1.jpg" alt="" /></td>
                                                                    <td>Jhon@gmail.com</td>
                                                                    <td><span className="badge badge-info">Pending</span></td>
                                                                    <td><a className="text-success mr-2" href="#"><i className="nav-icon i-Pen-2 font-weight-bold"></i></a><a className="text-danger mr-2" href="#"><i className="nav-icon i-Close-Window font-weight-bold"></i></a></td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">3</th>
                                                                    <td>Alex</td>
                                                                    <td><img className="rounded-circle m-0 avatar-sm-table" src="assets/images/faces/1.jpg" alt="" /></td>
                                                                    <td>Otto@gmail.com</td>
                                                                    <td><span className="badge badge-warning">Not Active</span></td>
                                                                    <td><a className="text-success mr-2" href="#"><i className="nav-icon i-Pen-2 font-weight-bold"></i></a><a className="text-danger mr-2" href="#"><i className="nav-icon i-Close-Window font-weight-bold"></i></a></td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">4</th>
                                                                    <td>Mathew Doe</td>
                                                                    <td><img className="rounded-circle m-0 avatar-sm-table" src="assets/images/faces/1.jpg" alt="" /></td>
                                                                    <td>Mathew@gmail.com</td>
                                                                    <td><span className="badge badge-success">Active</span></td>
                                                                    <td><a className="text-success mr-2" href="#"><i className="nav-icon i-Pen-2 font-weight-bold"></i></a><a className="text-danger mr-2" href="#"><i className="nav-icon i-Close-Window font-weight-bold"></i></a></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="card mb-4">
                                        <div className="card-body">
                                            <div className="card-title">Top Selling Products</div>
                                            <div className="d-flex flex-column flex-sm-row align-items-sm-center mb-3"><img className="avatar-lg mb-3 mb-sm-0 rounded mr-sm-3" src="assets/images/products/headphone-4.jpg" alt="" />
                                                <div className="flex-grow-1">
                                                    <h5><a href="#">Wireless Headphone E23</a></h5>
                                                    <p className="m-0 text-small text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                                    <p className="text-small text-danger m-0">$450
                                                        <del className="text-muted">$500</del>
                                                    </p>
                                                </div>
                                                <div>
                                                    <button className="btn btn-outline-primary mt-3 mb-3 m-sm-0 btn-rounded btn-sm">
                                                        View
                                                        details
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-column flex-sm-row align-items-sm-center mb-3"><img className="avatar-lg mb-3 mb-sm-0 rounded mr-sm-3" src="assets/images/products/headphone-2.jpg" alt="" />
                                                <div className="flex-grow-1">
                                                    <h5><a href="#">Wireless Headphone Y902</a></h5>
                                                    <p className="m-0 text-small text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                                    <p className="text-small text-danger m-0">$550
                                                        <del className="text-muted">$600</del>
                                                    </p>
                                                </div>
                                                <div>
                                                    <button className="btn btn-outline-primary mt-3 mb-3 m-sm-0 btn-sm btn-rounded">
                                                        View
                                                        details
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-column flex-sm-row align-items-sm-center mb-3"><img className="avatar-lg mb-3 mb-sm-0 rounded mr-sm-3" src="assets/images/products/headphone-3.jpg" alt="" />
                                                <div className="flex-grow-1">
                                                    <h5><a href="#">Wireless Headphone E09</a></h5>
                                                    <p className="m-0 text-small text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                                    <p className="text-small text-danger m-0">$250
                                                        <del className="text-muted">$300</del>
                                                    </p>
                                                </div>
                                                <div>
                                                    <button className="btn btn-outline-primary mt-3 mb-3 m-sm-0 btn-sm btn-rounded">
                                                        View
                                                        details
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-column flex-sm-row align-items-sm-center mb-3"><img className="avatar-lg mb-3 mb-sm-0 rounded mr-sm-3" src="assets/images/products/headphone-4.jpg" alt="" />
                                                <div className="flex-grow-1">
                                                    <h5><a href="#">Wireless Headphone X89</a></h5>
                                                    <p className="m-0 text-small text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                                    <p className="text-small text-danger m-0">$450
                                                        <del className="text-muted">$500</del>
                                                    </p>
                                                </div>
                                                <div>
                                                    <button className="btn btn-outline-primary mt-3 mb-3 m-sm-0 btn-sm btn-rounded">
                                                        View
                                                        details
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card mb-4">
                                        <div className="card-body p-0">
                                            <div className="card-title border-bottom d-flex align-items-center m-0 p-3"><span>User activity</span><span className="flex-grow-1"></span><span className="badge badge-pill badge-warning">Updated daily</span></div>
                                            <div className="d-flex border-bottom justify-content-between p-3">
                                                <div className="flex-grow-1"><span className="text-small text-muted">Pages / Visit</span>
                                                    <h5 className="m-0">2065</h5>
                                                </div>
                                                <div className="flex-grow-1"><span className="text-small text-muted">New user</span>
                                                    <h5 className="m-0">465</h5>
                                                </div>
                                                <div className="flex-grow-1"><span className="text-small text-muted">Last week</span>
                                                    <h5 className="m-0">23456</h5>
                                                </div>
                                            </div>
                                            <div className="d-flex border-bottom justify-content-between p-3">
                                                <div className="flex-grow-1"><span className="text-small text-muted">Pages / Visit</span>
                                                    <h5 className="m-0">1829</h5>
                                                </div>
                                                <div className="flex-grow-1"><span className="text-small text-muted">New user</span>
                                                    <h5 className="m-0">735</h5>
                                                </div>
                                                <div className="flex-grow-1"><span className="text-small text-muted">Last week</span>
                                                    <h5 className="m-0">92565</h5>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between p-3">
                                                <div className="flex-grow-1"><span className="text-small text-muted">Pages / Visit</span>
                                                    <h5 className="m-0">3165</h5>
                                                </div>
                                                <div className="flex-grow-1"><span className="text-small text-muted">New user</span>
                                                    <h5 className="m-0">165</h5>
                                                </div>
                                                <div className="flex-grow-1"><span className="text-small text-muted">Last week</span>
                                                    <h5 className="m-0">32165</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="card mb-4">
                                        <div className="card-body p-0">
                                            <h5 className="card-title m-0 p-3">Last 20 Day Leads</h5>
                                            <div id="echart3"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-grow-1"></div>
                        <Footer />
                    </div>
                </div>
                <Search />
                <Script src='assets/js/plugins/jquery-3.3.1.min.js' />
                <Script src='assets/js/plugins/bootstrap.bundle.min.js' />
                <Script src='assets/js/plugins/perfect-scrollbar.min.js' />
                <Script src='assets/js/scripts/script.min.js' />
                <Script src='assets/js/scripts/sidebar.large.script.min.js' />
                <Script src='assets/js/plugins/echarts.min.js' />
                <Script src='assets/js/scripts/echart.options.min.js' />
                <Script src='assets/js/scripts/dashboard.v1.script.min.js' />
            </div>
        </>
    )
}
