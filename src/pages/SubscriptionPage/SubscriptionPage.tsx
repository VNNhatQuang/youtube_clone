import React from 'react';
import Subscription from '../../components/Subscription/Subscription';
import Manage from '../../components/Manage/Manage';
import ViewOptions from '../../components/ViewOptions/ViewOptions';


const SubscriptionPage = () => {
    return (
        <div id="subscription-page" className="wrap-content">
            <div className="mt-4 d-flex justify-content-between py-2 px-3">
                <h4 className="text-light">Mới nhất</h4>
                <div className="manage-viewOptions d-flex">
                    <Manage title="Quản lý" />
                    &nbsp;
                    <ViewOptions />
                </div>
            </div>
            <Subscription />
        </div>
    );
};



export default SubscriptionPage;
