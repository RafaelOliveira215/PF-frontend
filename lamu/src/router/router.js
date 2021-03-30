import React from "react"
import {Route,BrowserRouter,Switch} from "react-router-dom"
import SignUpPage from "../screens/signUpPage/signUpPage"
import LoginPage from "../screens/loginPage/loginPage"
import FeedPage from "../screens/feedPage/feedPage"
import PostDetailsPage from "../screens/postDetailsPage/postDetailsPage"


const Router =()=>{

    return(
        <BrowserRouter>
        <Switch>

           <Route exact path="/">
            <LoginPage/>
           </Route>

           <Route exact path="/postdetails/:id">
            <PostDetailsPage/>
           </Route>

           <Route exact path="/signup">
            <SignUpPage/>
           </Route>

           
           <Route exact path="/feed">
            <FeedPage/>
           </Route>

        </Switch>
        </BrowserRouter>
    )

}
export default Router