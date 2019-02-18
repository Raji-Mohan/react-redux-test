import {connect} from 'react-redux'

import App from '../components/App'

const mapStateToProps = (state) => {
    return {
        view:state.view
    }
}

export default connect(mapStateToProps)(App)