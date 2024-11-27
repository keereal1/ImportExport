import Game, { GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame } from './Game';

const game = Game();
game.start();