import { UserInterface } from 'interfaces/user';
import { LotteryGameInterface } from 'interfaces/lottery-game';
import { GetQueryInterface } from 'interfaces';

export interface TicketInterface {
  id?: string;
  number: string;
  purchase_date: any;
  user_id: string;
  game_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  lottery_game?: LotteryGameInterface;
  _count?: {};
}

export interface TicketGetQueryInterface extends GetQueryInterface {
  id?: string;
  number?: string;
  user_id?: string;
  game_id?: string;
}
