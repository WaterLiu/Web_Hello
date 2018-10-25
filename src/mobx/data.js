import {observable, extendObservable, autorun, computed} from 'mobx';
import SubData from './subData'

class Data{

    data = 1;

    @observable subdata = new SubData();

    constructor(props) {

    }

}

export default Data;