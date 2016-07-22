import {Subscriber, Subscription, Observable, Subject} from '@reactivex/rxjs'

export interface Observer <T> {
	next: (value: T) => void
	error?: (error: any) => void
	complete?: (any) => void
	isUnscubscribed?: boolean
}

export class RxWebSocket {
	socket: WebSocket
	messageQueue: string[] = []
	didOpen: (e:Event) => void
	willOpen: () => void
	didClose: (e?:any) => void
}