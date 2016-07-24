import {Inject, Injectable} from 'angular2/angular2'
import {Observable, Subject, BehaviorSubject} from '@reactivex/rxjs'

export enum ConnectionState {
	CONNECTING,
	CONNECTED,
	CLOSED,
	RETRYING
}

export interface TicketMessage {
	symbol: string,
	price: number,
	timestamp: number
}

@Injectable()
export class TickService {
	connectionState = new BehaviorSubject<ConnectionState>(ConnectionState.CONNECTING)

	constructor(@Inject(SOCKET_URL) url: string, public socket:RxWebSocket) {
	const connectionState = this.connectionState

	socket.didOpen = () => {
	  connectionState.next(ConnectionState.CONNECTED)
	}

	socket.willOpen = () => {
	  connectionState.next(ConnectionState.CONNECTING)
	}

	socket.willOpen = () => {
	  connectionState.next(ConnectionState.CLOSED)
	}
	}

	getTicker(symbol: string): Observable<TickMessage> {
	  const socket = this.socket
	  return Observable.create(subscriber => {
	  	const msgSub = socket.out
	  	.filter(d => d.symbol === symbol)
	  	.subscribe(subscriber)
	  	socket.send({symbol, type: 'sub'})
	  	
	  })
	}
}

