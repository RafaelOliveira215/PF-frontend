import React from "react"
import {Route,BrowserRouter,Switch} from "react-router-dom"
import SignUpPage from "../screens/signUpPage"
import LoginPage from "../screens/loginPage"
import FeedPage from "../screens/feedPage"
import CreatePostPage from "../screens/createPostPage"


const Router =()=>{

    return(
        <BrowserRouter>
        <Switch>

           <Route exact path="/">
            <LoginPage/>
           </Route>

           <Route exact path="/signup">
            <SignUpPage/>
           </Route>

           
           <Route exact path="/feed">
            <FeedPage/>
           </Route>

           <Route exact path="/createpost">
            <CreatePostPage/>
           </Route>

        </Switch>
        </BrowserRouter>
    )

}
export default Router