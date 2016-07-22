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

	selector(e: MessageEvent) {
		return JSON.parse(e.data)
	}

	constructor(private url: string, private WebSocketCtor: {new(url:string): WebSocket} = WebSocket){
	}

	static create(url:string, WebSocketCtor: new(url:string): WebSocket = WebSocket): RxWebSocket {
	return new RxWebSocket(url, WebSocketCtor)
	}

	_out: Observable<any>
	_in: Observer<any>
}

