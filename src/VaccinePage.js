import React from 'react';
import {SearchCard} from './SearchCard'
// import {SimpleExample} from './Map'
import {ReactVirtualizedTable} from './Table'
import {PageFooter} from './PageFooter'
import {PageHeader} from './PageHeader'

export class App extends React.Component {
    render() {
        return (
            <div>
                <div>
                <PageHeader />
                </div>
                <div>
                <SearchCard id="Vaccine-Card" header="Vaccine Finder" text="Find flu shots near you?"></SearchCard>
                {/* <InputBox />  */}
                </div>
                <div>
                    <p id='flu-shot-loc'>Flu shot providers nearby:</p>
                    {/* <SimpleExample /> */}
                    <ReactVirtualizedTable id='list-providers'/>
                </div>
                <div>
                <PageFooter />
                </div>
            </div>
        );
    }
}