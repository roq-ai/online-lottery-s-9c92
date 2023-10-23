import { TicketInterface } from 'interfaces/ticket';
import { WinnerInterface } from 'interfaces/winner';
import { GetQueryInterface } from 'interfaces';

export interface LotteryGameInterface {
  id?: string;
  name: string;
  prize_amount: number;
  draw_date: any;
  created_at?: any;
  updated_at?: any;
  ticket?: TicketInterface[];
  winner?: WinnerInterface[];

  _count?: {
    ticket?: number;
    winner?: number;
  };
}

export interface LotteryGameGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
}
