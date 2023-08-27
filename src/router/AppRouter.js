import React from "react";
import { Switch, Redirect, withRouter, matchPath } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import LoginPage from "../pages/Login/LoginPage";
import ForgetPasswordPage from "../pages/ForgetPassword/ForgetPasswordPage";
import PasswordChangeForm from "../pages/PasswordChangeForm/PasswordChangeForm";
import UserPage from "../pages/User/UserPage";
import HomePage from "../pages/Home/HomePage";
import AboutPage from "../pages/About/AboutPage";
import ContactPage from "../pages/Contact/ContactPage";
import CheckoutPage from "../pages/Checkout/CheckoutPage";
import CreateAccountPage from "../pages/CreateAccount/CreateAccountPage";
import WorkPage from "../pages/Work/WorkPage";
import PaymentCancelPage from "../pages/PaymentCancel/PaymentCancelPage";
import PaymentSuccessPage from "../pages/PaymentSuccess/PaymentSuccessPage";
import ProductPage from "../pages/Product/ProductPage";
import ProductDetailPage from "../pages/ProductDetail/ProductDetailPage";
import ShoppingCartPage from "../pages/ShoppingCart/ShoppingCartPage";

const AppRouter = withRouter(({ location }) => {

  /**
   * make path for each component.
   */
  return (
    <>
      <Switch>
        <PublicRoute path="/create/account" component={CreateAccountPage} />
        <PublicRoute path="/cart" component={ShoppingCartPage} />
        <PublicRoute path="/about" component={AboutPage} />
        <PublicRoute path="/contact" component={ContactPage} />
        <PrivateRoute path="/checkout" component={CheckoutPage} />
        <PublicRoute path="/payment/cancel" component={PaymentCancelPage} />
        <PublicRoute path="/payment/success" component={PaymentSuccessPage} />
        <PublicRoute path="/work" component={WorkPage} />
        <PublicRoute path="/product/:id" component={ProductDetailPage} />
        <PublicRoute path="/shop" component={ProductPage} />
        <PublicRoute path="/login" component={LoginPage} />
        <PublicRoute path="/home" component={HomePage} />
        <PublicRoute path="/forgetpassword" component={ForgetPasswordPage} />
        {/* <PublicRoute path="/admin/user/create" component={CreatePage} />
        <PrivateRoute path="/admin/user/:id/update" component={CreatePage} />
        <PrivateRoute path="/admin/:id/profile" component={ProfilePage} /> */}

        {/* Redirect all 404's to home */}
        <Redirect to="/login" />
      </Switch>
    </>
  )
})

export default AppRouter;
