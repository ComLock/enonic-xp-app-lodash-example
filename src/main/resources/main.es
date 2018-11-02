import _ from 'lodash';
import {toStr} from '/lib/enonic/util';


log.info(toStr({
	compact: _.compact([0, 1, false, 2, '', 3])
}));
