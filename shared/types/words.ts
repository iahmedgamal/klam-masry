export interface Word {
  _id: number;
  word: string;
  appeared: number;
  en: string;
  franco: string;
}

export interface WordsResponse {
  [key: number]: Word;
}
export interface ApiResponse {
  words: WordsResponse;
}
