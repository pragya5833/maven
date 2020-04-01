import React,{Component} from 'react';
import Aux from './Aux';
import Layout from './Layout';
import BurgerBuilder from './BurgerBuilder';
class App extends Component{
    render(){
        return(
            <Aux>
                <Layout>
                    <BurgerBuilder/>
                </Layout>
            </Aux>
        );
    }
}
export default App;
