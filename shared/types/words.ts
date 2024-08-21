export interface Word {
    word: string;
    appeared: number;
    en: string;
}


export interface WordsResponse {
    [key: number]: Word;
  }
  
  // You can combine them into an API response interface
  export interface ApiResponse {
    words: WordsResponse;
  }
