export interface User {
  id: string;
  email: string;
  passwordHash: string;
  name: string;
  chronotype: 'Lion' | 'Bear' | 'Wolf' | 'Dolphin';
  identityStatement: string;
  createdAt: string;
}

export interface Habit {
  id: string;
  userId: string;
  name: string;
  consistencyScore: number;
  restTokens: number;
  lastCheckIn: string | null;
  createdAt: string;
}

export interface DB {
  users: User[];
  habits: Habit[];
}

export class FlowStateCore {
  static readonly MAX_SCORE = 100;
  static readonly MIN_SCORE = 0;
  static readonly SCORE_INCREMENT = 5;
  static readonly SCORE_DECREMENT = 10;
  static readonly INITIAL_TOKENS = 3;

  static updateConsistency(habit: Habit, success: boolean, useToken: boolean = false): Habit {
    let { consistencyScore, restTokens } = habit;

    if (success) {
      consistencyScore = Math.min(this.MAX_SCORE, consistencyScore + this.SCORE_INCREMENT);
    } else {
      if (useToken && restTokens > 0) {
        restTokens--;
      } else {
        consistencyScore = Math.max(this.MIN_SCORE, consistencyScore - this.SCORE_DECREMENT);
      }
    }

    return { ...habit, consistencyScore, restTokens, lastCheckIn: new Date().toISOString() };
  }
}
