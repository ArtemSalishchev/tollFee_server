import Logger from 'bunyan';

class AppLogger {
  public createLogger(name: string): Logger {
    return Logger.createLogger({ name, level: 'debug' });
  }
}

export const appLogger = new AppLogger();
