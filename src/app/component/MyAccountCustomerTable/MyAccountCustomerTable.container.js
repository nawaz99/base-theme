import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { showPopup } from 'Store/Popup';
import {
    CUSTOMER_POPUP_ID, EDIT_CUSTOMER, CHANGE_PASSWORD
} from 'Component/MyAccountCustomerPopup/MyAccountCustomerPopup.component';
import { customerType } from 'Type/Account';

import MyAccountCustomerTable from './MyAccountCustomerTable.component';

export const mapDispatchToProps = dispatch => ({
    showPopup: payload => dispatch(showPopup(CUSTOMER_POPUP_ID, payload))
});

export class MyAccountCustomerTableContainer extends PureComponent {
    static propTypes = {
        showPopup: PropTypes.func.isRequired,
        customer: customerType.isRequired
    };

    containerFunctions = {
        showEditPopup: this.showEditPopup.bind(this),
        showChangePasswordPopup: this.showChangePasswordPopup.bind(this)
    };

    showEditPopup() {
        const { showPopup, customer } = this.props;
        showPopup({ action: EDIT_CUSTOMER, customer });
    }

    showChangePasswordPopup() {
        const { showPopup, customer } = this.props;
        showPopup({ action: CHANGE_PASSWORD, customer });
    }

    render() {
        return (
            <MyAccountCustomerTable
              { ...this.props }
              { ...this.containerFunctions }
            />
        );
    }
}

export default connect(null, mapDispatchToProps)(MyAccountCustomerTableContainer);
