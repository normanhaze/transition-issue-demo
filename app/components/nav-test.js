import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class NavTest extends Component {
	@service
	router;

	constructor() {
		super(...arguments);
		this.router.on('routeWillChange', transition => {
			if (!transition.isAborted) {
				transition.abort();
			}
		});
	}
}