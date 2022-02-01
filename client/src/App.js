import React, { lazy, useEffect, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import { setCurrentUser } from './redux/user/user.actions'
// import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { GlobalStyle } from '../src/global.styles';
import Header from './components/header/header.component';
// import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { selectCurrentUser } from './redux/user/user.selectors';
// import { createStructuredSelector } from 'reselect';
import { checkUserSession } from './redux/user/user.actions';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';


const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));
const SignInAndSignUpPage = lazy(() => import('./pages/sign-in_and_sign-up/sign-in-and_sign-up.component'));
const App = () => {

  const currentUser = useSelector(selectCurrentUser);
  // const isHidden = useSelector(state =>
  //   state.cart.hidden
  // )

  const dispatch = useDispatch();



  // const unsubscribeFromAuth = null


  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch])

  // componentDidMount() {
  //   const {  } = this.props
  //   checkUserSession();
  // const { setCurrentUser } = this.props;
  // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
  //   if (userAuth) {
  //     const userRef = await createUserProfileDocument(userAuth);
  //     userRef.onSnapshot(snapShot => {
  //       setCurrentUser({
  //         id: snapShot.id,
  //         ...snapShot.data()

  //       });
  //     })

  //   }
  //   setCurrentUser(userAuth);
  // })


  // }

  // componentWillUnmount() {
  //   this.unsubscribeFromAuth();
  // }




  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/signin' render={() => currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />
            <Route exact path='/checkout' component={CheckoutPage} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
}



// const mapStateToProps = createStructuredSelector({
//   currentUser: selectCurrentUser,
// })

// const mapDispatchToProps = dispatch => ({
//   // setCurrentUser: user => dispatch(setCurrentUser(user)),
//   checkUserSession: () => dispatch(checkUserSession())
// })


export default App;
