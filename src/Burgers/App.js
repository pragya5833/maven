import React,{Component} from 'react';
import Layout from './Components/Layout/Layout';
import BurgerBuilder from '../Burgers/Containers/BurgerBuilder/BurgerBuilder';
import Aux from '../Burgers/hoc/Aux';
class App extends Component{
    render(){
        return(
            <Aux>
                <div>
                    <Layout>
                        <BurgerBuilder/>
                    </Layout>
                </div>
            </Aux>
        );
    }
}
export default App;