export interface Word {
  word: string;
  appeared: number;
  en: string;
}

export interface WordsResponse {
  [key: number]: Word;
}
export interface ApiResponse {
  words: WordsResponse;
}
