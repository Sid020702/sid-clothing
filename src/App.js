import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import { setCurrentUser } from './redux/user/user.actions'
import { connect } from 'react-redux';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component'
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in_and_sign-up/sign-in-and_sign-up.component';
// import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import { checkUserSession } from './redux/user/user.actions';


const App = ({ checkUserSession, currentUser }) => {


  // const unsubscribeFromAuth = null


  useEffect(() => {
    checkUserSession();
  }, [checkUserSession])

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
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/signin' render={() => currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />
        <Route exact path='/checkout' component={CheckoutPage} />
      </Switch>
    </div>
  );
}



const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

// const mapDispatchToProps = dispatch => ({
//   setCurrentUser: user => dispatch(setCurrentUser(user))
// })
export default connect(mapStateToProps, mapDispatchToProps)(App);
