export const RECEIVE_BENCHES = "RECEIVE_BENCHES"

import * as APIUtil from '../util/bench_api_util';

const receiveBenches = (benches) => ({
    type: RECEIVE_BENCHES,
    benches
});

export const fetchBenches = () => dispatch => (
    APIUtil.fetchBenches()
        .then(
            (benches) => dispatch(receiveBenches(benches)),
            (err) => dispatch(receiveSessionErrors(err.responseJSON))
        )
);
