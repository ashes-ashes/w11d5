import React from 'react';
import BenchIndexItem from './bench_index_item';

export default class BenchIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
       this.props.fetchBenches();
    }

    render() {
        return (
            <div>
                <ul>
                    {Object.values(this.props.benches).map((bench) => (
                        <BenchIndexItem bench={bench} />
                    ))}
                </ul>
            </div>
        );
    }
}