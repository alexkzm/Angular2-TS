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
	timestamp:number
}

