declare module 'webpackbar' {
  import { Plugin } from 'webpack';

  class WebpackBar extends Plugin {
    constructor(options?: Options);

    state: State;
  }

  WebpackBar.Reporter = Reporter;

  interface Stats {
    count: number;
    time: [number, number];
  }

  class Profile {
    requests: any[];

    name: string;

    constructor(name: string);

    getStats(): { ext: Stats; loader: Stats };
  }

  export interface State {
    start: [number, number] | null,
    progress: number,
    done: boolean,
    message: string,
    details: string[],
    request: {
      file: string;
      loaders: string[];
    } | null,
    hasErrors: boolean,
    color: string,
    name: string
  }

  type Handler = (context: WebpackBar) => void;

  export interface Reporter {
    start?: Handler;
    change?: Handler;
    update?: Handler;
    done?: Handler;
    progress?: Handler;
    allDone?: Handler;
    beforeAllDone?: Handler;
    afterAllDone?: Handler;
  }

  interface SharedState {
    [name: string]: State;
  }

  interface Options {
    /** Display name */
    name?: string;
    /** Color output of the progress bar */
    color?: string;
    /** Enable the profiler for files and loaders */
    profile?: boolean;
    /** Enable bars reporter */
    fancy?: boolean;
    /** Enable a simple log reporter (only start and end) */
    basic?: boolean;
    /** Register a custom reporter */
    reporter?: Reporter;
    /** Register a custom reporter */
    reporters?: Array<Reporter | string>;
  }

  export default WebpackBar;
}
