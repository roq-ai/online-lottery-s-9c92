import { UserInterface } from 'interfaces/user';
import { LotteryGameInterface } from 'interfaces/lottery-game';
import { GetQueryInterface } from 'interfaces';

export interface WinnerInterface {
  id?: string;
  user_id: string;
  game_id: string;
  winning_amount: number;
  winning_date: any;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  lottery_game?: LotteryGameInterface;
  _count?: {};
}

export interface WinnerGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  game_id?: string;
}
