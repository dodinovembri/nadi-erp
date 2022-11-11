import Head from 'next/head'
import Link from 'next/link'
import photo3 from 'public/assets/images/photo-long-3.jpg'
import photo4 from 'public/assets/images/photo-wide-4.jpg'

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Signin | Nadi ERP</title>
        <style>
          @import url({`https://fonts.googleapis.com/css?family=Nunito:300,400,400i,600,700,800,900`});
          @import url({`assets/css/themes/lite-purple.min.css`});
        </style>
      </Head>
      <div className="auth-layout-wrap" style={{ backgroundImage: `url(${photo4.src})`, width: '100%', height: '100%', }}>
        <div className="auth-content">
          <div className="card o-hidden">
            <div className="row">
              <div className="col-md-6">
                <div className="p-4">
                  <div className="auth-logo text-center mb-4"><img src="assets/images/logo.png" alt="" /></div>
                  <h1 className="mb-3 text-18">Sign In</h1>
                  <form>
                    <div className="form-group">
                      <label htmlFor="email">Email address</label>
                      <input className="form-control form-control-rounded" id="email" type="email" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input className="form-control form-control-rounded" id="password" type="password" />
                    </div>
                    <Link href="/dashboard"><button className="btn btn-rounded btn-primary btn-block mt-2">Sign In</button></Link>
                  </form>
                  <div className="mt-3 text-center">
                    <a className="text-muted" href="forgot.html">
                      <u>Forgot Password?</u>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 text-center" style={{ backgroundImage: `url(${photo3.src})` }}>
                <div className="pr-3 auth-right">
                  <a className="btn btn-rounded btn-outline-google btn-block btn-icon-text"><i className="i-Google-Plus"></i> Sign up with Google</a>
                  <a className="btn btn-rounded btn-block btn-icon-text btn-outline-facebook"><i className="i-Facebook-2"></i> Sign up with Facebook</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
