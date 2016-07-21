import {boostrap} from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {Component, provide, enableProdMode, Inject} from 'angular2/core'

import {Http, Response} from 'angular2/http'
import {Observable, Subject} from '@reactivex/rxjs'

enableProdMode()
boostrap(AppComponent)

@Component({
	selector 'typeahead',
	template: '
	<div class="input group">
	<span class="thing" id="thing"></span>
	</div>
	<table>
	<tbody>
	<tr>
	</tr>
	</tbody>
	</table>
	'
	directives: [FORM_DIRECTIVES, NgFor, NfIf],
	changeDetection: ChangeDetectionStrategy.OnPush,
	pipes: [BxPipe]
})
