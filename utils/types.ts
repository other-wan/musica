export interface ISong {
  id: string;
  artist: string;
  duration: string;
  title: string;
  cover: string;
  audio: string;
}

export interface IPlaylist {
  id: string;
  title: string;
  cover: string;
  info: string;
  files: ISong[];
}

export interface ITopCharts {
  topCharts: IPlaylist[];
}
